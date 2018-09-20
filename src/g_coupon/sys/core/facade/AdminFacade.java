package g_coupon.sys.core.facade;

import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import f_coupon.sys.core.dao.db.CustomerDaoDB;
import i_couponSystemException.FacadeException;
import i_couponSystemException.CouponSystemException;
/**
 * FACADE - class implements business logic
 * AdminFACADE class will contain not just the action needed to perform(DAO and DAODB) but also the testing needed to validate the action matches the business logic.
 * </b>Example: createCompany method would contain first a check that there is no Company with this name in the DB only then would create new Company.</b>
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class AdminFacade implements CouponClientFacade {
	private CompanyDaoDB compDaoDB;
	private CustomerDaoDB custDaoDB;
	private CouponDaoDB couponDaoDB;

	/**
	 * AdminFacade Constructor initialing the CompanyDaoDB, CustomerDaoDB ,CouponDaoDB classes , to use it later on in the Facade logic.
	 */
	public AdminFacade() {
		super();
		compDaoDB = new CompanyDaoDB();
		custDaoDB = new CustomerDaoDB();
		couponDaoDB = new CouponDaoDB();
	}

	/**
	 * checkClientType method will check what is the Client type , and return the CouponClientFacade string, example the return value of AdminFacade object is AdminFacade.
	 * @param obj This is a CouponClientFacade object.
	 * @return String example the return value of AdminFacade object is AdminFacade
	 */
	public String checkClientType(CouponClientFacade obj) {
		String couponType = obj.toString();
		if (obj instanceof AdminFacade) {
			System.out.println("It is a AdminFacade Object ");
			return obj.toString();
		}
		 if ( obj instanceof CompanyFacade )
		 {
		 System.out.println("It is a CompanyFacade Object");
		 couponType = obj.toString();
		
		 }
		 if ( obj instanceof CustomerFacade )
		 {
		 System.out.println("It is a CustomerFacade Object");
		 couponType = obj.toString();
		
		 }
		return couponType;
	}

	/******************************************
	 * Company Methods
	 *****************************************/

	/**
	 * createCompany method first check if a Company doesn't exist by name, and then create a new Company according to the Java Bean created object. 
	 * @param company The Java Bean Company object
	 * @throws CouponSystemException
	 */
	public void createCompany(Company company) throws CouponSystemException {

		try {
			if (!compDaoDB.companyExistByName(company)) {
				compDaoDB.createCompany(company);
			} else {
				throw new FacadeException("Can not create Company with the same name: " + company.getCompName());
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("create Company failed", e);
		}

	}

	/**
	 * removeCompany first check if a Company exist by Id in the DB, and if exist remove the map Company reference from the company_coupon table , and then remove the Company. 
	 * @param company The Company object in the DB
	 * @throws CouponSystemException
	 */
	public void removeCompany(Company company) throws CouponSystemException {
		try {
			if (compDaoDB.companyExistById(company.getId())) {
				compDaoDB.removeCompanyCoupon(company);
				compDaoDB.removeCompany(company);
			} else {
				throw new FacadeException("Company Id: " + company.getId() + " , doesn't exists in the DB");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("remove Company failed", e);
		}

	}

	/**
	 * updateCompany method first check if a Company doesn't exist by name, and then update Company in the DB according to the sent Company parameter. 
	 * @param company The Java Bean Company object
	 * @throws CouponSystemException
	 */
	public void updateCompany(Company company) throws CouponSystemException {

		try {
			if (!compDaoDB.companyExistByName(company)) {
				compDaoDB.updateCompany(company);
			} else {
				throw new FacadeException("Can not be updated Company name: " + company.getCompName());
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("Update Company failed", e);
		}
	}

	/**
	 * getCompany method first check if a Company exist by Id in the DB, and then pull it from the DB.
	 * @param company_id The company Id of the Java Bean Company object
	 * @return Company The Company object in the DB
	 * @throws CouponSystemException
	 */
	public Company getCompany(long company_id) throws CouponSystemException {
		try {
			if (compDaoDB.companyExistById(company_id)) {
				return compDaoDB.getCompany(company_id);
			} else {
				throw new FacadeException("Company Id: " + company_id + ", Can not be pulled from the DB");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get Company failed", e);
		}

	}

	/**
	 * getAllCompanies method pull all the Companies from the DB , if no company exist in DB return null.
	 * @return Company  Collection - get All Companies from the DB.
	 * @throws CouponSystemException
	 */
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		try {
			Collection<Company> Companies = compDaoDB.getAllCompanies();
			if (Companies != null) {
				return Companies;
			} else {
				throw new FacadeException("There aren't any Companies");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get All Companies failed", e);
		}
	}

	/**
	 * createCustomer method first check if a Customer doesn't exist by name, and then create a new Customer according to the Java Bean created object. 
	 * @param customer The Java Bean Customer object
	 * @throws CouponSystemException
	 */
	public void createCustomer(Customer customer) throws CouponSystemException {
		String customer_name = customer.getCustName();
		try {
			if (!custDaoDB.customerExistByName(customer_name)) {
				custDaoDB.createCustomer(customer);
			} else {
				throw new FacadeException("Can not create Customer with the same name: " + customer_name);
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("create Company failed", e);
		}
	}

	/******************************************
	 * Customer Methods
	 *****************************************/

	/**
	 * removeCustomer first check if a Customer exist by Id in the DB, and if exist remove the map Customer reference from the customer_coupon table , and then remove the Customer. 
	 * @param customer The Java Bean Customer object
	 * @throws CouponSystemException
	 */
	public void removeCustomer(Customer customer) throws CouponSystemException {
		long customer_Id = customer.getId();
		try {
			if (custDaoDB.customerExistById(customer_Id)) {
				custDaoDB.removeCustomerCoupon(customer);
				custDaoDB.removeCustomer(customer);
			} else {
				throw new FacadeException("customer Id: " + customer_Id + " , doesn't exists in the DB");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("remove customer failed", e);
		}
	}

	/**
	 * updateCustomer method first check if a Customer doesn't exist by name, and then update Customer in the DB according to the sent Customer parameter. 
	 * @param customer The Java Bean Customer object
	 * @throws CouponSystemException
	 */
	public void updateCustomer(Customer customer) throws CouponSystemException {
		String customer_name = customer.getCustName();
		try {
			if (!custDaoDB.customerExistByName(customer_name)) {
				custDaoDB.updateCustomer(customer);
			} else {
				throw new FacadeException("Can not updated customer name: " + customer_name);
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("Update customer failed", e);
		}
	}

	/**
	 * getCustomer method first check if a Company exist by Id in the DB, and then pull it from the DB.
	 * @param customer_id The Customer Id of the Java Bean Customer object
	 * @return Customer object from the DB.
	 * @throws CouponSystemException
	 */
	public Customer getCustomer(long customer_id) throws CouponSystemException {
		try {
			if (custDaoDB.customerExistById(customer_id)) {
				return custDaoDB.getCustomer(customer_id);
			} else {
				throw new FacadeException("customer Id: " + customer_id + ", Can not be pulled from the DB");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get customer failed", e);
		}

	}

	/**
	 * getAllCustomers method pull all the Customers from the DB , if no Customer exist in DB return null.
	 * @return Customer Collection - get All Customers from the DB.
	 * @throws CouponSystemException
	 */
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		Collection<Customer> Customers = custDaoDB.getAllCustomers();
		try {
			if (Customers != null) {
				return Customers;
			} else {
				throw new FacadeException("There aren't any Customers");
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get All Customers failed", e);
		}

	}

}