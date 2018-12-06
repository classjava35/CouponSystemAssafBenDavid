package k_tests;

import java.sql.Date;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import c_coupon.sys.core.beans.coupontype;
import d_coupon.sys.core.connection.ConnectionPool;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import f_coupon.sys.core.dao.db.CustomerDaoDB;
import i_couponSystemException.CouponSystemException;

/**
 * create a new Company and tries all company DAODB actions create a new Coupon
 * and tries all Coupon DAODB actions , create a new Customer and tries all
 * Customer DAODB actions
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class b_Test_DaoDB {

	/**
	 * Test DaoDB: create a new Company and tries all company DAODB actions create a
	 * new Coupon and tries all Coupon DAODB actions create a new Customer and tries
	 * all Customer DAODB actions
	 * 
	 * @param args
	 *            unused
	 */
	public static void main(String[] args) {

		ConnectionPool cp = null;

		try {

			/**************************************************
			 **** Company DB - create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Company DB - create , update , get ,get All ****");
			System.out.println("**************************************************");

			Company company1 = new Company("CompName", "Pass", "com");
			CompanyDaoDB compDb = new CompanyDaoDB();
			compDb.createCompany(company1);
			company1.setPassword("8888");
			company1.setEmail("email@comp.net");
			compDb.updateCompany(company1);

			long MaxCompanyID = compDb.getMaxCompanyID();
			compDb.getCompany(MaxCompanyID);
			compDb.getAllCompanies();
			compDb.companyExistByName(company1);

			Date startDate = new Date(System.currentTimeMillis());
			Date endDate = startDate;

			/**************************************************
			 **** Coupon DB- create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Coupon DB - create , update , get ,get All ****");
			System.out.println("**************************************************");

			Coupon coup1 = new Coupon("Title coup1", startDate, endDate, 34, coupontype.ELECTRICITY, "message", 32.4,
					"Image");
			Coupon coup2 = new Coupon("Title coup2", startDate, endDate, 34, coupontype.RESTAURANTS, "message", 32.4,
					"Image");
			Coupon coup3 = new Coupon("Title coup3", startDate, endDate, 34, coupontype.SPORTS, "message", 32.4,
					"Image");
			CouponDaoDB coupDb = new CouponDaoDB();
			coupDb.createCoupon(coup1);
			compDb.createCompanyCouponMap(company1.getId(), coup1.getId());
			coupDb.createCoupon(coup2);
			compDb.createCompanyCouponMap(company1.getId(), coup2.getId());
			coupDb.createCoupon(coup3);
			compDb.createCompanyCouponMap(company1.getId(), coup3.getId());

			System.out.println(coup1);
			System.out.println("***** Extend the Coupon's End Date by 10 days ******");
			coup1.setEndDatePlusDays(coup1.getEndDate(), 10);
			System.out.println(coup1);
			coup1.setAmount(678);
			coup1.setPrice(888);
			System.out.println("***** Update Coupon ******");
			coupDb.updateCoupon(coup1);

			long MaxCouponID = coupDb.getMaxCouponID();
			coupDb.getCoupon(MaxCouponID);
			coupDb.getAllCoupons();

			coupDb.getCompanyCouponByType(coupontype.ELECTRICITY);
			coupDb.getCompanyCouponByType(coupontype.RESTAURANTS);
			coupDb.getCompanyCouponByType(coupontype.SPORTS);

			/**************************************************
			 **** Customer DB - create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Customer DB - create , update , get ,get All ****");
			System.out.println("**************************************************");

			Customer cust1 = new Customer("CustName", "Pass");
			CustomerDaoDB custDb = new CustomerDaoDB();
			custDb.createCustomer(cust1);
			cust1.setCustName("NewcustName");
			cust1.setPassword("NewPass");
			custDb.updateCustomer(cust1);

			long MaxCustomerID = custDb.getMaxCustomerID();
			custDb.getCustomer(MaxCustomerID);
			custDb.getAllCustomers();
			System.out.println(coupDb.expiriedCoupon(coup1));
			;
			coup1.setEndDatePlusDays(endDate, -100);
			coupDb.updateCoupon(coup1);
			System.out.println(coupDb.expiriedCoupon(coup1));
			;

			/***** remove methods ****/
			System.out.println("***** Remove Company , coupon , Customer  ******");
			// custDb.removeCustomer(cust1);
			// coupDb.removeCoupon(coup1);
			// compDb.removeCompany(company1);

		} catch (CouponSystemException e) {
			e.printStackTrace();
		} finally {
			try {
				if (cp != null) {
					ConnectionPool.getInstance().closeAllConnections();
				}
			} catch (CouponSystemException e) {
				e.printStackTrace();
			}
		}
		System.out.println("End OF Test");
	}
}
