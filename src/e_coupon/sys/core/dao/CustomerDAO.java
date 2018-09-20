package e_coupon.sys.core.dao;

import java.util.ArrayList;
import java.util.Collection;

import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import i_couponSystemException.CouponSystemException;

/**
 * <h1>CustomerDAO interface describe the Customer C.R.U.D (Create,Read,Update,Delete)
 * actions.</h1>
 * <p>
 * <b>Purpose:</b>The Application layer would eventually Creates Java Beans
 * (Company, Coupon etc.)
 * <p>
 * and would sent those to the DAO that will implement at DAODB and convert to SQL commands using JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public interface CustomerDAO {
	
	/**
	 * createCustomer method used to create a new Customer entity in the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param customer
	 *            Customer entity from the beans package
	 * @throws CouponSystemException
	 */
	void createCustomer(Customer customer) throws CouponSystemException;

	
	/**
	 * removeCustomer method used to remove a existing Customer from the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param customer
	 *            Customer entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void removeCustomer(Customer customer) throws CouponSystemException;

	
	/**
	 * updateCustomer method used to remove a existing Customer from the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param customer Customer entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void updateCustomer(Customer customer) throws CouponSystemException;

	
	/**
	 * getCustomer method used to retrieve specific existing Customer by Id parameter from the DB using
	 * SQL commands and JDBC.
	 * @param id customer Id
	 * @return existing Customer entity from the DB
	 * @throws CouponSystemException
	 */
	Customer getCustomer(long id) throws CouponSystemException;

	
	/**
	 * getAllCustomers method used to retrieve All existing Customers from the DB using
	 * SQL commands and JDBC.
	 * @return Collection of Customers
	 * @throws CouponSystemException
	 */
	Collection<Customer> getAllCustomers() throws CouponSystemException;

	
	/**
	 * getAllCustomerPurchasedCoupons method used to retrieve All Purchased Coupons, related to the Customer from the DB using
	 * SQL commands and JDBC.
	 * @param customer Customer entity
	 * @return Collection of Coupons related to the Customer
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getAllCustomerPurchasedCoupons(Customer customer) throws CouponSystemException;

	
	/**
	 * login method used to verify if the Customer Name combined with password exist in the DB using SQL and JDBS
	 * 
	 * @param custName Customer name
	 * @param password Customer password
	 * @return boolean True/False meaning Customer Name combined with password exist/ not exist in DB.
	 * @throws CouponSystemException
	 */
	boolean login(String custName, String password) throws CouponSystemException;
	
}
