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
import g_coupon.sys.core.facade.CompanyFacade;
import g_coupon.sys.core.facade.CouponClientFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;
import i_couponSystemException.FacadeException;
import ws.exceptions.CompanyNotFoundException;
import ws.exceptions.CouponAlreadyExistException;
import ws.exceptions.CouponNotFoundException;

@RestController

public class CompanyService {

	@Autowired
	private HttpServletRequest request;
	private HttpServletResponse response;

	/**
	 * This method checks if jsession cookie exist return CouponSystemFacade else referring to login method that return New CouponSystemFacade
	 * @return couponSystemFacade either the existing one , or the one returned from the Login method
	 * @throws CouponSystemException in case login failed , invalidate existing cookie (logout method) and throw exception
	 */
	private CouponClientFacade getCompanyFacade() throws CouponSystemException {
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
		         String Company_Name=ck[1].getValue();  
		         String password=ck[2].getValue();
		         
		       //login using  name and password from session cookies 				
				return couponSystem.login(Company_Name, password, "company");
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
	@RequestMapping(value = "/companyservice/logout", method = RequestMethod.POST)
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
	 * @param response reset the cookie in the session
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
	 * This web service activates the create coupon method at the Company Facade
	 * class. The method adds a new coupon to the DB
	 * 
	 * @param coupon
	 *            - the coupon to be added to the DB (sent from the client side
	 *            via JSON Object)
	 * @return coupon created entity from DB.
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@ResponseStatus(HttpStatus.CREATED)
	@RequestMapping(value = "/companyservice/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon createCoupon(@RequestBody Coupon coupon) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();
		try {
			companyFacade.createCoupon(coupon);
		} catch (FacadeException ex) {
			throw new CouponAlreadyExistException(ex);
		}
		return coupon;
	}

	/**
	 * This web service activates the remove coupon method at the Company Facade
	 * class. The method deletes a coupon from the DB
	 * 
	 * @param coupon id
	 *            - the coupon id to be deleted from to the DB (sent from the
	 *            client side via JSON Object)
	 * @return Coupon id of the deleted entity from DB.
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@RequestMapping(value = "/companyservice/removecoupon/{coupon_id}", method = RequestMethod.DELETE)
	public String removeCoupon(@PathVariable("coupon_id") long coupon_id) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();
		try {
			companyFacade.removeCoupon(getCoupon(coupon_id));
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon_id + " deleted successsfully";
	}

	/**
	 * This web service activates the update company method at the Company Facade
	 * class. The method updates a company in the DB
	 * 
	 * @param coupon_id
	 *            - the coupon_id to be updated (sent from the client side via
	 *            JSON Object)
	 * @param coupon
	 *            - the coupon to be updated (sent from the client side via
	 *            JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@RequestMapping(value = "/companyservice/updatecoupon/{coupon_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public String updateCoupon(@PathVariable("coupon_id") long comp_id, @RequestBody Coupon coupon)
			throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();
		try {
			companyFacade.updateCoupon(coupon);
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon.getId() + " updated successsfully";
	}

	/**
	 * This web service activates the get coupon method at the Company Facade
	 * class. The method returns a coupon from the DB
	 * 
	 * @param coupon_id
	 *            - the coupon id of the requested coupon
	 * @return - the coupon that matches the id
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@RequestMapping(value = "/companyservice/getcoupon/{coupon_id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon getCoupon(@PathVariable("coupon_id") long coupon_id) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();

		try {
			companyFacade.getCoupon(coupon_id);
		} catch (FacadeException ex) {
			throw new CompanyNotFoundException(ex);
		}
		return companyFacade.getCoupon(coupon_id);
	}

	/**
	 * This web service activates the get all coupons method at the Company
	 * Facade class. The method returns all the coupons in the DB
	 * 
	 * @return - return all the coupons in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@RequestMapping(value = "/companyservice/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();

		try {
			companyFacade.getAllCoupons();
		} catch (FacadeException ex) {
			throw new CouponNotFoundException(ex);
		}
		return companyFacade.getAllCoupons();
	}

	/**
	 * This web service activates the get coupon by type method at the Company Facade
	 * class. The method returns all coupons by type from the DB
	 * 
	 * @param coupon_type
	 *            - the type of the requested coupons
	 * @return - coupons that matches the requested type
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Company Facade
	 */
	@RequestMapping(value = "/companyservice/getcouponbytype/{coupon_type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getCouponByType(@PathVariable("coupon_type") coupontype coupon_type)
			throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getCompanyFacade();

		try {
			return companyFacade.getCouponByType(coupon_type);
		} catch (FacadeException ex) {
			throw new FacadeException(ex);
		}
	}

}
