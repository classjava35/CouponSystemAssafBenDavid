package k_tests;

import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Customer;
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CustomerFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;

/**
 * Verify the Singleton is working successfully and can
 * supply service as a singleton, by addressing some adminFacade actions.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class g_Test_Admin_Singleton_CouponSystem {
	/**
	 * Test Admin Singleton: verify the Singleton is working successfully and can
	 * supply service as a singleton, by addressing some adminFacade actions.
	 * 
	 * @param args
	 *            unused
	 */
	public static void main(String[] args) throws CouponSystemException {
		AdminFacade adminFacade = null;
		try {
			adminFacade = (AdminFacade) CouponSystem.getInstance().login("admin", "1234", "admin");

			long rand = (int) (Math.random() * 10000);
			Company comp1 = new Company("CompNameFacede" + rand, "email@Facade.net", "FacadePassword");
			Customer cust1 = new Customer("custName" + rand, "password");
			adminFacade.createCompany(comp1);
			adminFacade.createCustomer(cust1);
			Collection companies = adminFacade.getAllCompanies();
			Collection customers = adminFacade.getAllCustomers();
			adminFacade.getCustomer(cust1.getId());
			adminFacade.getCompany(comp1.getId());
			adminFacade.removeCompany(comp1);
			adminFacade.removeCustomer(cust1);

		} catch (CouponSystemException e) {
			throw new CouponSystemException("Cannot create new CouponSystem", e);
		}

	}
}
