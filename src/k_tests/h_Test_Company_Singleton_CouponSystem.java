package k_tests;

import java.sql.Date;
import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import c_coupon.sys.core.beans.coupontype;
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CompanyFacade;
import g_coupon.sys.core.facade.CustomerFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;

/**
 * Verify the Singleton is working successfully and can
 * supply service as a singleton, by addressing some companyFacade actions.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class h_Test_Company_Singleton_CouponSystem {
	/**
	 * Test Company Singleton: verify the Singleton is working successfully and can
	 * supply service as a singleton, by addressing some companyFacade actions.
	 * 
	 * @param args
	 *            unused
	 */
	public static void main(String[] args) throws CouponSystemException {
		AdminFacade adminFacade = null;
		CompanyFacade companyFacade = null;
		Date startDate = new Date(System.currentTimeMillis());
		Date endDate = startDate;
		Date tempDate = endDate;
		try {
			adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", "admin");

			long rand = (int) (Math.random() * 10000);
			Company comp1 = new Company("CompNameFacede" + rand, "email@Facade.net", "FacadePassword");
			Customer cust1 = new Customer("custName" + rand, "password");
			adminFacade.createCompany(comp1);
			adminFacade.createCustomer(cust1);

			companyFacade = (CompanyFacade) CouponSystem.getInstance().login("admin", "1234", "company");
			Coupon coup1 = new Coupon("Title coup1" + rand, startDate, endDate, 34, coupontype.ELECTRICITY, "message",
					32.4, "Image");
			Coupon coup2 = new Coupon("Title coup1" + rand + 1, startDate, endDate, 34, coupontype.ELECTRICITY,
					"message", 11, "Image");
			Coupon coup3 = new Coupon("Title coup1" + rand + 2, startDate, endDate, 34, coupontype.SPORTS, "message",
					11, "Image");
			companyFacade.createCoupon(comp1, coup1);
			companyFacade.createCoupon(comp1, coup2);
			companyFacade.getAllCoupons();
			companyFacade.getCompany(comp1.getId());
			companyFacade.getCompanyCouponByEndDate(comp1, coup2.getEndDate());
			companyFacade.getCompanyCouponByPrice(comp1, 34);
			companyFacade.getCoupon(coup2);
			coup2.setTitle("New Title" + rand);
			coup2.setAmount(6666);
			coup2.setMessage("New message");
			coup2.setPrice(44.44);
			coup2.setImage("New Image");
			companyFacade.updateCoupon(coup2);
			companyFacade.removeCoupon(coup1);
		} catch (CouponSystemException e) {
			throw new CouponSystemException("Cannot create new CouponSystem", e);
		}

	}
}
