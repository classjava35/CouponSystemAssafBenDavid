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
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CompanyFacade;
import i_couponSystemException.CouponSystemException;

/**
 * Create a new Company and tries all company Coupons actions getCompanyCouponByType ,getCompanyCouponByprice etc.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class d_Test_CompanyFacade {

	/**
	 * Test CompanyFacade: create a new Company and tries all company Coupons
	 * actions getCompanyCouponByType ,getCompanyCouponByprice etc.
	 * 
	 * @param args
	 *            unused
	 */
	public static void main(String[] args) {

		ConnectionPool cp = null;

		try {

			int rand = (int) (Math.random() * 50000);
			Date startDate = new Date(System.currentTimeMillis());
			Date endDate = startDate;
			Date tempDate = endDate;
			/**************************************************
			 **** Company Facade - create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Company Facade- create , update , get ,get All ****");
			System.out.println("**************************************************");

			Company company1 = new Company("admin " + rand, "1234", "com");
			Coupon coup1 = new Coupon("Title coup1" + rand, startDate, endDate, 34, coupontype.ELECTRICITY, "message",
					32.4, "Image");
			Coupon coup2 = new Coupon("Title coup1" + rand + 1, startDate, endDate, 34, coupontype.ELECTRICITY,
					"message", 11, "Image");
			Coupon coup3 = new Coupon("Title coup1" + rand + 2, startDate, endDate, 34, coupontype.SPORTS, "message",
					11, "Image");
			Coupon coup4 = new Coupon("Title coup1" + rand + 3, startDate, endDate, 34, coupontype.CAMPING, "message",
					11, "Image");

			AdminFacade admFac = new AdminFacade();
			CompanyFacade compFac = new CompanyFacade();

			admFac.createCompany(company1);
			compFac.createCoupon(company1, coup1);
			compFac.createCoupon(company1, coup2);
			compFac.createCoupon(company1, coup3);
			compFac.createCoupon(company1, coup4);

			coup1.setEndDatePlusDays(coup1.getEndDate(), 10);
			compFac.updateCoupon(coup1);
			compFac.getCompany(company1.getId());
			compFac.getAllCoupons();
			compFac.getCompanyCouponByType(company1, coup1.getType());
			compFac.getCompanyCouponByPrice(company1, 32.4);
			compFac.getCompanyCouponByEndDate(company1, coup2.getEndDate());

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
