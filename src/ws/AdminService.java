package ws;

import java.util.Collection;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Customer;
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CouponClientFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;
import i_couponSystemException.FacadeException;
import ws.exceptions.AccessDeniedException;
import ws.exceptions.ComapnyAlreadyExistException;
//import ws.exceptions.ComapnyAlreadyExistException;
import ws.exceptions.CompanyNotFoundException;
import ws.exceptions.CustomerAlreadyExistException;
import ws.exceptions.CustomerNotFoundException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AdminService {

	@Autowired
	private HttpServletRequest request;

	private CouponClientFacade getAdminFacade() throws CouponSystemException {
		CouponSystem couponSystem = CouponSystem.getInstance();
		HttpSession session = request.getSession(false);
		if (null == session.getAttribute("JSESSIONID")) {
			try {
				return couponSystem.login("admin", "1234", "admin");
			} catch (CouponSystemException ex) {
				throw new CouponSystemException(ex);
			}
		}
		return null;
	}

	@RequestMapping(value = "/adminservice/logout", method = RequestMethod.POST)
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
	@RequestMapping(value = "/adminservice/createcompany", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public @ResponseBody ResponseEntity<Company> createCompany(@RequestBody Company company)
			throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.createCompany(company);
		} catch (FacadeException ex) {
			throw new ComapnyAlreadyExistException(ex);
		}
		return new ResponseEntity<>(new Company(), HttpStatus.CREATED);
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
	@RequestMapping(value = "/adminservice/removecompany/{comp_id}", method = RequestMethod.DELETE)
	public String removeCompany(@PathVariable("comp_id") long comp_id) throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();
		try {
			adminFacade.removeCompany(getCompany(comp_id));
		} catch (FacadeException e) {
			throw new CompanyNotFoundException("Cannot delete Company ", e);
		}
		return "Company " + comp_id + " deleted successsfully";
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
	@RequestMapping(value = "/adminservice/updatecompany/{comp_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Company updateCompany(@PathVariable("comp_id") long comp_id, @RequestBody Company company)
			throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();
		try {
			adminFacade.updateCompany(company);
		} catch (FacadeException e) {
			throw new CompanyNotFoundException("Cannot update Company ", e);
		}
		return company;

		// return "Company "+company.getId()+" updated successsfully";
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
	@RequestMapping(value = "/adminservice/getcompany/{comp_id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Company getCompany(@PathVariable("comp_id") long comp_id) throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.getCompany(comp_id);
		} catch (FacadeException ex) {
			throw new CompanyNotFoundException(ex);
		}

		return adminFacade.getCompany(comp_id);
	}

	/**
	 * This web service activates the get all companies method at the Admin
	 * Facade class. The method returns all the companies in the DB
	 * 
	 * @return - return all the companies in the DB
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/getallcompanies", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.getAllCompanies();
		} catch (FacadeException ex) {
			throw new CompanyNotFoundException(ex);
		}
		return adminFacade.getAllCompanies();
	}

	/**
	 * This web service activates the create company method at the Admin Facade
	 * class. The method adds a new customer to the DB
	 * 
	 * @param customer
	 *            - the customer to be added to the DB (sent from the client
	 *            side via JSON Object)
	 * @return
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/createcustomer", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public @ResponseBody ResponseEntity<Customer> createCustomer(@RequestBody Customer customer)
			throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();
		try {
			adminFacade.createCustomer(customer);
		} catch (FacadeException ex) {
			throw new CustomerAlreadyExistException(ex);
		}
		return new ResponseEntity<>(new Customer(), HttpStatus.CREATED);
	}

	/**
	 * This web service activates the remove customer method at the Admin Facade
	 * class. The method deletes a customer from the DB
	 * 
	 * @param customer
	 *            - the customer to be deleted from the DB (sent from the client
	 *            side via JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/removecustomer/{cust_id}", method = RequestMethod.DELETE)
	public String removeCustomer(@PathVariable("cust_id") long cust_id) throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.removeCustomer(getCustomer(cust_id));
		} catch (FacadeException e) {
			throw new CustomerNotFoundException(e);
		}
		return "Customer " + cust_id + " deleted successsfully";
	}

	/**
	 * This web service activates the update customer method at the Admin Facade
	 * class. The method updates a customer in the DB
	 * 
	 * @param customer
	 *            - the customer to be updated (sent from the client side via
	 *            JSON Object)
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/updatecustomer/{cust_id}", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Customer updateCustomer(@PathVariable("cust_id") long id, @RequestBody Customer customer)
			throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();
		try {
			adminFacade.updateCustomer(customer);
		} catch (FacadeException e) {
			throw new CustomerNotFoundException(e);
		}
		return customer;
	}

	/**
	 * This web service activates the get customer method at the Admin Facade
	 * class. The method returns a customer from the DB
	 * 
	 * @param cust_id
	 *            - the id of the requested customer
	 * @return - the customer that matches the id
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/getcustomer/{cust_id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Customer getCustomer(@PathVariable("cust_id") long cust_id) throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.getCustomer(cust_id);
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}

		return adminFacade.getCustomer(cust_id);
	}

	/**
	 * This web service activates the get all customers method at the Admin
	 * Facade class. The method returns all the customers in the DB
	 * 
	 * @return a collection of customers
	 * @throws CouponSystemException
	 *             - the exception that was thrown from the Admin Facade
	 */
	@RequestMapping(value = "/adminservice/getallcustomers", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE
			+ ";charset=utf-8")
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		AdminFacade adminFacade = (AdminFacade) this.getAdminFacade();

		try {
			adminFacade.getAllCustomers();
		} catch (FacadeException ex) {
			throw new CustomerNotFoundException(ex);
		}
		return adminFacade.getAllCustomers();
	}

}
