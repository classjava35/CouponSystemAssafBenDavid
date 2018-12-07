package ws;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import g_coupon.sys.core.facade.CompanyFacade;
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
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CustomerService {

	@Autowired
	private HttpServletRequest request;

	private CouponClientFacade getAdminFacade() throws CouponSystemException {
		CouponSystem couponSystem = CouponSystem.getInstance();
//		HttpSession session = request.getSession(false);
//		if (null == session.getAttribute("JSESSIONID")) {
			try {
				return couponSystem.login("Customer_Name", "Password", "customer");
			} catch (CouponSystemException ex) {
				throw new CouponSystemException(ex);
			}
//		}
//		return null;
	}

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
	 * This web service activates the create company method at the Admin Facade
	 * class. The method adds a new company to the DB
	 * 
	 * @param company
	 *            - the company to be added to the DB (sent from the client side
	 *            via JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/customerservice/purchasecoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon purchaseCoupon(@RequestBody Coupon coupon) throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		try {
			customerFacade.purchaseCoupon(coupon);
		} catch (FacadeException ex) {
			throw new CustomerAlreadyExistException(ex);
		}
		return coupon;
	}

	/**
	 * This web service activates the update company method at the Admin Facade
	 * class. The method updates a company in the DB
	 * 
	 * @param company
	 *            - the company to be updated (sent from the client side via
	 *            JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/updatecoupon/{coupon_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public String updateCoupon(@PathVariable("coupon_id") long comp_id, @RequestBody Coupon coupon)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		try {
			customerFacade.updateCoupon(coupon);
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon.getId() + " updated successsfully";
	}
	
	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		try {
			customerFacade.getAllPurchasedCoupons();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return customerFacade.getAllPurchasedCoupons();
	}

	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/getallunpurchasedcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllUnPurchasedCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		try {
			customerFacade.getAllUnPurchasedCoupons();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return customerFacade.getAllUnPurchasedCoupons();
	}
	
	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();

		try {
			customerFacade.getAllCoupons();
		} catch (FacadeException ex) {
			throw new CouponNotFoundException(ex);
		}
		return customerFacade.getAllCoupons();
	}

	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcouponsbytype/{couponType}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCouponsByType(@PathVariable("couponType") coupontype couponType)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		try {
			return customerFacade.getAllPurchasedCouponsByType(couponType);
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		// return customerFacade.getAllPurchasedCoupons();
	}

	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/customerservice/getallpurchasedcouponsbyprice/{price}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllPurchasedCouponsByPrice(@PathVariable("price") double price)
			throws CouponSystemException {
		CustomerFacade customerFacade = (CustomerFacade) this.getAdminFacade();
		Collection<Coupon> coupons;
		try {
			coupons = customerFacade.getAllPurchasedCouponsByPrice(price);
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return coupons;
	}

}
