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
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;
import i_couponSystemException.FacadeException;
import ws.exceptions.CompanyNotFoundException;
import ws.exceptions.CouponAlreadyExistException;
import ws.exceptions.CouponNotFoundException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CompanyService {

	@Autowired
	private HttpServletRequest request;

	private CouponClientFacade getAdminFacade() throws CouponSystemException {
		CouponSystem couponSystem = CouponSystem.getInstance();
		HttpSession session = request.getSession(false);
		if (null == session.getAttribute("JSESSIONID")) {
			try {
				return couponSystem.login("Company_Name", "Password", "company");
			} catch (CouponSystemException ex) {
				throw new CouponSystemException(ex);
			}
		}
		return null;
	}

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
	@RequestMapping(value = "/companyservice/createcoupon", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon createCoupon(@RequestBody Coupon coupon) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();
		try {
			companyFacade.createCoupon(coupon);
		} catch (FacadeException ex) {
			throw new CouponAlreadyExistException(ex);
		}
		return coupon;
	}

	/**
	 * This web service activates the remove company method at the Admin Facade
	 * class. The method deletes a company from the DB
	 * 
	 * @param company
	 *            - the company to be deleted from to the DB (sent from the
	 *            client side via JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/companyservice/removecoupon/{coupon_id}", method = RequestMethod.DELETE)
	public String removeCompany(@PathVariable("coupon_id") long coupon_id) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();
		try {
			companyFacade.removeCoupon(getCoupon(coupon_id));
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon_id + " deleted successsfully";
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
	@RequestMapping(value = "/companyservice/updatecoupon/{coupon_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public String updateCompany(@PathVariable("coupon_id") long comp_id, @RequestBody Coupon coupon)
			throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();
		try {
			companyFacade.updateCoupon(coupon);
		} catch (FacadeException e) {
			throw new CompanyNotFoundException(e);
		}
		return "Coupon " + coupon.getId() + " updated successsfully";
	}

	/**
	 * This web service activates the get company method at the Admin Facade
	 * class. The method returns a company from the DB
	 * 
	 * @param comp_id
	 *            - the id of the requested company
	 * @return - the company that matches the id
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/companyservice/getcoupon/{coupon_id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Coupon getCoupon(@PathVariable("coupon_id") long coupon_id) throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();

		try {
			companyFacade.getCoupon(coupon_id);
		} catch (FacadeException ex) {
			throw new CompanyNotFoundException(ex);
		}
		return companyFacade.getCoupon(coupon_id);
	}

	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/companyservice/getallcoupons", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();

		try {
			companyFacade.getAllCoupons();
		} catch (FacadeException ex) {
			throw new CouponNotFoundException(ex);
		}
		return companyFacade.getAllCoupons();
	}

	/**
	 * This web service activates the get company method at the Admin Facade
	 * class. The method returns a company from the DB
	 * 
	 * @param comp_id
	 *            - the id of the requested company
	 * @return - the company that matches the id
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/companyservice/getcouponbytype/{coupon_type}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public Collection<Coupon> getCouponByType(@PathVariable("coupon_type") coupontype coupon_type)
			throws CouponSystemException {
		CompanyFacade companyFacade = (CompanyFacade) this.getAdminFacade();

		try {
			return companyFacade.getCouponByType(coupon_type);
		} catch (FacadeException ex) {
			throw new FacadeException(ex);
		}
	}

}
