package g_coupon.sys.core.facade;

import java.util.Collection;

import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import c_coupon.sys.core.beans.coupontype;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import f_coupon.sys.core.dao.db.CustomerDaoDB;
import i_couponSystemException.FacadeException;
import i_couponSystemException.CouponSystemException;
/**
 * FACADE - class implements business logic
 * CustomerFACADE class will contain not just the action needed to perform(DAO and DAODB) but also the testing needed to validate the action matches the business logic.
 * </b>Example: purchaseCoupon method would contain first a check if such Coupon exist and also check if exist by Name per Customer in the DB only then would purchase Coupon (add reference to the customer_coupon table in the DB).</b>
 * Admin role - in charge of create / update / remove /get one/ get all new  Companies or new Customers.
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CustomerFacade implements CouponClientFacade {
	private CustomerDaoDB custDaoDB;
	private CouponDaoDB couponDaoDB;
	private Customer customer;
	/**
	 * CustomerFacade Constructor initialing the CompanyDaoDB, CustomerDaoDB ,CouponDaoDB classes, to use it later on in the Facade logic.
	 * @param object 
	 * @param customerDao 
	 * @param couponDao 
	 */
	public CustomerFacade(CouponDaoDB couponDao, CustomerDaoDB customerDao, Customer customer) {
		super();
		new CompanyDaoDB();
		custDaoDB = new CustomerDaoDB();
		couponDaoDB = new CouponDaoDB();
		this.customer = customer;
	}

	/**
	 * purchaseCoupon method check if Coupon exist in DB by Name, and the Customer didn't Purchased it, and the Coupon is not expired,then the Coupon is purchased. 
	 * @param customer The Customer from the Java Beans
	 * @param coupon The Coupon from the Java Beans
	 * @throws CouponSystemException
	 */
	public void purchaseCoupon(Coupon coupon) throws CouponSystemException {
		try {
			if (couponDaoDB.couponExistByName(coupon)
					&& (!custDaoDB.customerPurchasedCoupon(customer.getId(), coupon.getId()))
					&& (!couponDaoDB.expiriedCoupon(coupon))) {
				custDaoDB.createCustomerCouponMap(customer.getId(), coupon.getId());
			} else {
				throw new FacadeException("The Coupon: " + coupon.getId()
						+ " Doesn't exist in Stock , Or already been purchased, Or Expiried ,per customer_name: "
						+ customer.getCustName());
			}
		} catch (FacadeException e) {
			throw new FacadeException("purchase Coupon failed "+ e.getMessage());
		}

	}

	/**
	 * getAllPurchasedCoupons method return all Purchased Coupons by this Customer. 
	 * @param customer The Customer from the Java Bean.
	 * @return Coupon Collection of Purchased Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchasedCoupons() throws CouponSystemException {
		Collection<Coupon> purchasedCoupons = custDaoDB.getAllCustomerPurchasedCoupons(customer);
		try {
			if (custDaoDB.customerExistByName(customer.getCustName())) {
				System.out.println(purchasedCoupons);
				return purchasedCoupons;
			} else {
				throw new FacadeException(
						"customer_name doesn't exist in DB,  customer_name: " + customer.getCustName());
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("purchase Coupon failed", e);
		}
	}

	/**
	 * getAllPurchasedCoupons method return all Purchased Coupons by this Customer. 
	 * @param customer The Customer from the Java Bean.
	 * @return Coupon Collection of Purchased Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllUnPurchasedCoupons() throws CouponSystemException {
		Collection<Coupon> unPurchasedCoupons = custDaoDB.getAllCustomerUnPurchasedCoupons(customer);
		try {
			if (custDaoDB.customerExistByName(customer.getCustName())) {
				System.out.println(unPurchasedCoupons);
				return unPurchasedCoupons;
			} else {
				throw new FacadeException(
						"customer_name doesn't exist in DB,  customer_name: " + customer.getCustName());
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get All UnPurchased Coupons failed", e);
		}
	}
	
	/**
	 * getAllPurchasedCouponsByType method return all Purchased Coupons by Type (ENUM couponType) per Customer.
	 * @param customer The Customer from the Java Bean.
	 * @param couponType from ENUM couponType
	 * @return Coupon Collection of Purchased Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchasedCouponsByType(coupontype couponType)
			throws CouponSystemException {
		Collection<Coupon> CouponsByType = couponDaoDB.getCustomerCouponByType(customer, couponType);
		try {
			if (CouponsByType != null) {
				return CouponsByType;
			} else {
				throw new FacadeException("There aren't any Coupons by couponType: " + couponType);
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get All Coupons by type failed", e);
		}
	}

	/**
	 * getAllPurchasedCouponsByPrice method return all Purchased Coupons by price per Customer.
	 * @param customer The Customer from the Java Bean.
	 * @param price The price of the Coupon
	 * @return Coupon Collection of Purchased Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getAllPurchasedCouponsByPrice(double price)
			throws CouponSystemException {
		Collection<Coupon> CouponsByPrice = couponDaoDB.getCustomerCouponByPrice(customer, price);
		try {
			if (CouponsByPrice != null) {
				return CouponsByPrice;
			} else {
				throw new FacadeException("There aren't any Coupons ,less or equal to price: " + price
						+ ", for this Customer: " + customer.getId());
			}
		} catch (CouponSystemException e) {
			throw new FacadeException("get All Coupons by price perCustomer failed ", e);
		}
	}

	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		Collection<Coupon> Coupons = couponDaoDB.getAllCoupons();
		try {
			if (Coupons != null) {
				return Coupons;
			} else {
				throw new FacadeException("There aren't any Coupons");
			}
		} catch (FacadeException e) {
			throw new FacadeException("get All Coupons failed "+ e.getMessage());
		}
	}



}