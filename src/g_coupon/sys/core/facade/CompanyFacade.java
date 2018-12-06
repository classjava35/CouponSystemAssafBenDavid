package g_coupon.sys.core.facade;

import java.sql.Date;
import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import i_couponSystemException.FacadeException;
import i_couponSystemException.CouponSystemException;
/**
 * FACADE - class implements business logic
 * CompanyFACADE class will contain not just the action needed to perform(DAO and DAODB) but also the testing needed to validate the action matches the business logic.
 * </b>Example: getCompany method would first a check if Company exist by Id in the DB only then would return the Company required by id.</b>
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CompanyFacade implements CouponClientFacade {
	private CompanyDaoDB compDaoDB;
	private CouponDaoDB couponDaoDB;
	private Company company;
	/**
	 * CompanyFacade Constructor initialing the CompanyDaoDB ,CouponDaoDB classes , to use it later on in the Facade logic.
	 * @param companyDao 
	 * @param couponDao 
	 */
	public CompanyFacade(CouponDaoDB couponDao, CompanyDaoDB companyDao, Company company) {
		super();
		couponDaoDB = new CouponDaoDB();
		compDaoDB = new CompanyDaoDB();
		this.company = company;
	}

	/**
	 * createCoupon method first check if this Coupon doesn't exist in the DB, and this Company exist, then Create a new Coupon and refer it to the Company in the map table COMAPNY_COUPON.
	 * @param company The Company in the DB
	 * @param coupon The Coupon in the DB
	 * @throws CouponSystemException
	 */
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		try {
			
			if ((!couponDaoDB.couponExistByName(coupon)) && (compDaoDB.companyExistByName(company))) {
				couponDaoDB.createCoupon(coupon);
				compDaoDB.createCompanyCouponMap(company.getId(), coupon.getId());
				;

			} else {
				throw new FacadeException("Coupon title: " + coupon.getTitle() + " , already exists in the DB");
			}
		} catch (FacadeException e) {
			throw new FacadeException("create Coupon failed "+ e.getMessage());
		}

	}

	
	/**
	 * removeCoupon method check if a Coupon exist in the DB, then if remove it from the reference table CUSTOMER_COUPON , COMPANY_COUPON and then remove it from the COUPON table. 
	 * @param coupon The Coupon in the DB
	 * @throws CouponSystemException
	 */
	// couponExistById
	public void removeCoupon(Coupon coupon) throws CouponSystemException {
		try {
			if (couponDaoDB.couponExistById(coupon.getId())) {
				couponDaoDB.removeCustomerCoupon(coupon);
				couponDaoDB.removeCoupon(coupon);
			} else {
				throw new FacadeException("Company Id: " + coupon.getId() + " , doesn't exists in the DB");
			}
		} catch (FacadeException e) {
			throw new FacadeException("remove Company failed "+e.getMessage());
		}
	}

	/**********
	***********
	*********/
	/**
	 * updateCoupon method check if a Coupon exist ID in the DB, then if update all it's fields in the DB except for Id.
	 * @param coupon The Coupon in the DB
	 * @throws CouponSystemException
	 */
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		Coupon updatedCoupon;
		try {
			if (couponDaoDB.couponExistById(coupon.getId())) {
				updatedCoupon = couponDaoDB.getCoupon(coupon.getId());
			//	updatedCoupon.setTitle(coupon.getTitle());
				updatedCoupon.setStartDate(coupon.getStartDate());
				updatedCoupon.setEndDate(coupon.getEndDate());
				updatedCoupon.setAmount(coupon.getAmount());
				updatedCoupon.setType(coupon.getType());
				updatedCoupon.setMessage(coupon.getMessage());
				updatedCoupon.setPrice(coupon.getPrice());
				updatedCoupon.setImage(coupon.getImage());
				couponDaoDB.updateCoupon(updatedCoupon);

			} else {
				throw new FacadeException("can update only End_Date and Price");
			}
		} catch (FacadeException e) {
			throw new FacadeException("update Coupon failed "+ e.getMessage());
		}
	}

	/**
	 * getCoupon method check if a Coupon exist by Id it's returning the Coupon from the DB
	 * @param coupon received Coupon from the Java Beans
	 * @return The Coupon in the DB
	 * @throws CouponSystemException
	 */
	public Coupon getCoupon(long coupon_id) throws CouponSystemException {
		try {
			if (couponDaoDB.couponExistById(coupon_id)) {
				return couponDaoDB.getCoupon(coupon_id);
			} else {
				throw new FacadeException("coupon_id: " + coupon_id + ", Can not be pulled from the DB");
			}
		} catch (FacadeException e) {
			throw new FacadeException("get Coupon failed "+ e.getMessage());
		}
	}

	/**
	 * getCompany method check if a Company exist by Id it's returning the Company from the DB
	 * @param company_id The Company Id
	 * @return Company from the DB
	 * @throws CouponSystemException
	 */
	public Company getCompany(long company_id) throws CouponSystemException {
		try {
			if (compDaoDB.companyExistById(company_id)) {
				return compDaoDB.getCompany(company_id);
			} else {
				throw new FacadeException("Company Id: " + company_id + ", Can not be pulled from the DB");
			}
		} catch (FacadeException e) {
			throw new FacadeException("get Company failed "+ e.getMessage());
		}

	}

	/**
	 * getAllCoupons method returns all Coupons from the DB ,if No Coupons found retuen null.
	 * @return Coupon Collection of all found Coupons in the DB.
	 * @throws CouponSystemException
	 */
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

	/**
	 * getCompanyCouponByType method returns all Coupons by Type per Company , if no Coupons found return null.
	 * @param company The Company Object from the Java Beans
	 * @param couponType ENUM coupontype
	 * @return Coupon Collection of all found Coupons in the DB
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponByType(coupontype couponType)
			throws CouponSystemException {
		Collection<Coupon> CouponsByType = couponDaoDB.getCompanyCouponByType( //company, 
				couponType);
		try {
			if (CouponsByType != null) {
				return CouponsByType;
			} else {
				throw new FacadeException("There aren't any Coupons by couponType: " + couponType);
			}
		} catch (FacadeException e) {
			throw new FacadeException("get All Coupons by type failed "+ e.getMessage());
		}
	}

	/**
	 * getCompanyCouponByPrice method returns all Coupons by price per Company , if no Coupons found return null.
	 * @param company The Company Object from the Java Beans
	 * @param price The price of the Coupon
	 * @return Coupon Collection of all found Coupons in the DB
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponByPrice(double price) throws CouponSystemException {
		Collection<Coupon> CouponsByPrice = couponDaoDB.getCompanyCouponByPrice(company, price);
		try {
			if (CouponsByPrice != null) {
				return CouponsByPrice;
			} else {
				throw new FacadeException("There aren't any Coupons ,less or equal to price: " + price
						+ ", for this Company: " + company.getId());
			}
		} catch (FacadeException e) {
			throw new FacadeException("get All Coupons by price per Company failed "+ e.getMessage());
		}
	}

	/**
	 * getCompanyCouponByEndDate method returns all Coupons by End Date per Company , if no Coupons found return null.
	 * @param company company The Company Object from the Java Beans
	 * @param EndDate The End Date of the Coupon
	 * @return Coupon Collection of all found Coupons in the DB
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCouponByEndDate(Date EndDate) throws CouponSystemException {
		Collection<Coupon> CouponsByEndDate = couponDaoDB.getCompanyCouponByEndDate(company, EndDate);
		try {
			if (CouponsByEndDate != null) {
				return CouponsByEndDate;
			} else {
				throw new FacadeException("There aren't any Coupons by End Date: " + EndDate);
			}
		} catch (FacadeException e) {
			throw new FacadeException("get All Coupons by End Date failed "+ e.getMessage());
		}
	}





}