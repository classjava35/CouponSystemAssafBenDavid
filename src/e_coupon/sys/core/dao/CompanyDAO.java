package e_coupon.sys.core.dao;

import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import i_couponSystemException.CouponSystemException;

/**
 * <h1>CompanyDAO interface describe the Company C.R.U.D (Create,Read,Update,Delete)
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
public interface CompanyDAO {

	/**
	 * createCompany method used to create a new Company entity in the DB using SQL
	 * commands and JDBC.
	 * 
	 * @param company
	 *            Company entity from the the beans package
	 * @throws CouponSystemException
	 */
	void createCompany(Company company) throws CouponSystemException;

	/**
	 * removeCompany method used to remove a existing Company from the DB using SQL
	 * commands and JDBC.
	 * 
	 * @param company
	 *            Company entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void removeCompany(Company company) throws CouponSystemException;

	/**
	 * updateCompany method used to remove a existing Company from the DB using SQL
	 * commands and JDBC.
	 * 
	 * @param company
	 *            Company entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void updateCompany(Company company) throws CouponSystemException;

	/**
	 * getCompany method used to retrieve specific existing Company by Id parameter
	 * from the DB using SQL commands and JDBC.
	 * 
	 * @param id
	 *            Company Id
	 * @return existing Company entity from the DB
	 * @throws CouponSystemException
	 */
	Company getCompany(long id) throws CouponSystemException;

	/**
	 * getAllCompanies method used to retrieve All existing Companies from the DB
	 * using SQL commands and JDBC.
	 * 
	 * @return a Collection of Companies
	 * @throws CouponSystemException
	 */
	Collection<Company> getAllCompanies() throws CouponSystemException;

	/**
	 * getCoupons method used to retrieve All Coupons published by the Company, from
	 * the DB using SQL commands and JDBC.
	 * 
	 * @param company
	 *            Company entity
	 * @return Collection of Coupons related to the Company
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getCoupons(Company company) throws CouponSystemException;

	/**
	 * login method used to verify if the Company Name combined with password exist
	 * in the DB using SQL and JDBS
	 * 
	 * @param compName
	 *            Company name
	 * @param password
	 *            Customer password
	 * @return boolean True/False meaning Company Name combined with password exist/
	 *         not exist in DB.
	 * @throws CouponSystemException
	 */
	boolean login(String compName, String password) throws CouponSystemException;

}
