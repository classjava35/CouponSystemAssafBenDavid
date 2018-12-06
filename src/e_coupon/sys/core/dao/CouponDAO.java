package e_coupon.sys.core.dao;

import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import i_couponSystemException.CouponSystemException;

/**
 * <h1>CouponDAO interface describe the Coupon C.R.U.D (Create,Read,Update,Delete)
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
public interface CouponDAO {
	
	/**
	 * createCoupon method used to create a new Coupon entity in the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param Coupon Coupon entity from the beans package
	 * @throws CouponSystemException
	 */
	void createCoupon(Coupon Coupon) throws CouponSystemException;

	
	/**
	 * removeCoupon method used to remove a existing Coupon from the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param Coupon
	 *            Coupon entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void removeCoupon(Coupon Coupon) throws CouponSystemException;

	
	/**
	 * updateCoupon method used to remove a existing Coupon from the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param Coupon Coupon entity that exist in the DB
	 * @throws CouponSystemException
	 */
	void updateCoupon(Coupon Coupon) throws CouponSystemException;

	
	/**
	 * getCoupon method used to retrieve specific existing Coupon by Id parameter from the DB using
	 * SQL commands and JDBC.
	 * 
	 * @param id Coupon Id
	 * @return existing Coupon entity from the DB
	 * @throws CouponSystemException
	 */
	Coupon getCoupon(long id) throws CouponSystemException;

	
	/**
	 * 
	 * getAllCoupons method used to retrieve All existing Coupons from the DB
	 * using SQL commands and JDBC.
	 * 
	 * @return a Collection of Coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getAllCoupons() throws CouponSystemException;

	
	/**
	 * getCompanyCouponByType method used to retrieve All existing Company's Coupons By Coupon Type from the DB
	 * using SQL commands and JDBC.
	 *
	 * @param company Company entity that exist in DB
	 * @param coupontype from the enum coupontype
	 * @return a Collection of Coupons
	 * @throws CouponSystemException
	 */
	Collection<Coupon> getCompanyCouponByType(//Company company,
			coupontype coupontype) throws CouponSystemException;
	
}
