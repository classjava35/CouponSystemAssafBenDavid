package ws;

import java.util.Collection;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import g_coupon.sys.core.facade.CouponClientFacade;
import g_coupon.sys.core.facade.CustomerFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;
import i_couponSystemException.FacadeException;
import ws.exceptions.CompanyNotFoundException;
import ws.exceptions.CouponNotFoundException;
import ws.exceptions.CustomerAlreadyExistException;
import ws.exceptions.CustomerNotFoundException;

@RestController

public class CustomerService {

	@Autowired
	private HttpServletRequest request;
	private HttpServletResponse response;
	
	/**
	 * This method checks if jsession cookie exist return CouponSystemFacade else referring to login method that return New CouponSystemFacade
	 * @return couponSystemFacade either the existing one , or the one returned from the Login method
	 * @throws CouponSystemException in case login failed , invalidate existing cookie (logout method) and throw exception
	 */
	private CouponClientFacade getCustomerFacade() throws CouponSystemException {
		//Get instance of Coupon System Singleton
		CouponSystem couponSystem = CouponSystem.getInstance();
		//get current session ID
		HttpSession session = request.getSession(false);
		//If session get Attribute(jsession cookie) is empty do Login
		if (session.getAttribute("JSESSIONID") == null) {
			try {
				//get name and password from session cookies
				Cookie ck[]=request.getCookies();  
		        if(ck!=null){  
		         String Customer_Name=ck[1].getValue();  
		         String password=ck[2].getValue();
				
			    //login using  name and password from session cookies 				
				return couponSystem.login(Customer_Name, password, "customer");
		        }
			} catch (CouponSystemException ex) {
				logout(request, response);
				throw new CouponSystemException(ex);
			}
		}
		// if there is jsession cookie return coupon system singleton ,no need to login
		return (CouponClientFacade) couponSystem ;
	}


	/**
	 * This method invalidate the session and referring to handleLogOutResponse method that reset the cookie
	 * @param request  get the session from the request and invalidate it
	 * @param response pass response to method handleLogOutResponse that reset the cookie in session
	 */
	@RequestMapping(value = "/customerservice/logout", method = RequestMethod.POST)
	public void logout(HttpServletRequest request, HttpServletResponse response) {
		/* Getting session and then invalidating it */
		HttpSession session = request.getSession(false);
		if (request.isRequestedSessionIdValid() && session != null) {
			session.invalidate();
		}
		handleLogOutResponse(response, request);
	}

	/**
	 * This method would edit the cookie information and make JSESSIONID empty
	 * while responding to logout. This would further help in order to. This
	 * would help to avoid same cookie ID each time a person logs in
	 * 
	 * @param response
	 */
	private void handleLogOutResponse(HttpServletResponse response, HttpServletRequest request) {
		Cookie[] cookies = request.getCookies();
		for (Cookie cookie : cookies) {
			cookie.setMaxAge(0);
			cookie.setValue(null);
			cookie.setPath("/");
			response.addCookie(cookie);
		}
	}

	/**
	 * This web service activates the purchase coupon method at the Customer Facade
	 * class. The method write purchase coupon to the DB
	 * 
	 * @param Coupon
	 *            - the Coupon to be added to the purchase DB table
	 * @return Coupon purchased Coupon entity.
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/customerservice/purchasecoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon purchaseCoupon(@RequestBody Coupon coupon) throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			customerFacade.purchaseCoupon(coupon);
		} catch (FacadeException ex) {
			throw new CustomerAlreadyExistException(ex);
		}
		return coupon;
	}

	/**
	 * This web service activates the update Coupon method at the Customer Facade
	 * class. The method updates a Coupon in the DB
	 * 
	 * @param Coupon _id
	 *            - the Coupon id of the Coupon to be updated. 
	 * @return Coupon id - The created coupon id 
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/updatecoupon/{coupon_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public String updateCoupon(@PathVariable("coupon_id") long comp_id, @RequestBody Coupon coupon)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			customerFacade.updateCoupon(coupon);
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon.getId() + " updated successsfully";
	}
	
	/**
	 * This web service activates the get all purchased Coupons method at the Customer
	 * Facade class. The method returns all the purchased Coupons in the DB
	 * 
	 * @return - return all the purchased Coupons in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			customerFacade.getAllPurchasedCoupons();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return customerFacade.getAllPurchasedCoupons();
	}

	/**
	 * This web service activates the get all expired coupons method at the Admin
	 * Facade class. The method returns all the expired coupons in the DB
	 * 
	 * @return - return all the expired coupons in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallexpiriedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllExpiredCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			customerFacade.getAllExipiredCoupons();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return customerFacade.getAllExipiredCoupons();
	}
	
	/**
	 * This web service activates the get all un-purchased coupons method at the Customer
	 * Facade class. The method returns all the un-purchased coupons in the DB
	 * 
	 * @return - return all the unpurchased coupons in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallunpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllUnPurchasedCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			customerFacade.getAllUnPurchasedCoupons();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return customerFacade.getAllUnPurchasedCoupons();
	}
	
	/**
	 * This web service activates the get all coupons method at the Customer
	 * Facade class. The method returns all the coupons in the DB
	 * 
	 * @return - return all the coupons in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();

		try {
			customerFacade.getAllCoupons();
		} catch (FacadeException ex) {
			throw new CouponNotFoundException(ex);
		}
		return customerFacade.getAllCoupons();
	}

	/**
	 * This web service activates the get all purchased coupons by type method at the Customer
	 * Facade class. The method returns all purchased coupons by type in the DB
	 * 
	 * @return - return all purchased coupons by type from the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcouponsbytype/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCouponsByType(@PathVariable("couponType") coupontype couponType)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		try {
			return customerFacade.getAllPurchasedCouponsByType(couponType);
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		// return customerFacade.getAllPurchasedCoupons();
	}

	/**
	 * This web service activates the get all purchased coupons by price method at the 
	 * Facade class. The method returns all purchased coupons by price from the DB
	 * 
	 * @return - return all purchased coupons by price from the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Customer Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCouponsByPrice(@PathVariable("price") double price)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getCustomerFacade();
		Collection<Coupon> coupons;
		try {
			coupons = customerFacade.getAllPurchasedCouponsByPrice(price);
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return coupons;
	}

}
