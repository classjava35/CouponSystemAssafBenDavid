package k_tests;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Customer;
import d_coupon.sys.core.connection.ConnectionPool;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CustomerDaoDB;
import g_coupon.sys.core.facade.AdminFacade;
import i_couponSystemException.CouponSystemException;

/**
 * Create a new Company and tries all company Facade actions (create/update/remove/get/get All).
 * create a new Customer and tries all Customer Facade actions (create/update/remove/get/get All).
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class c_Test_AdminFacade {

	/**
	 * Test AdminFacade: create a new Company and tries all company Facade actions.
	 * create/update/remove/get/get All create a new Customer and tries all
	 * Customer. Facade actions create/update/remove/get/get All
	 * 
	 * @param args
	 *            unused
	 */

	public static void main(String[] args) {

		ConnectionPool cp = null;

		try {

			int rand = (int) (Math.random() * 50000);

			/**************************************************
			 **** Company Facade - create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Company Facade- create , update , get ,get All ****");
			System.out.println("**************************************************");

			Company company1 = new Company("admin " + rand, "1234", "com");
			AdminFacade admFac = new AdminFacade(null, null);
			admFac.createCompany(company1);
			company1.setCompName(company1.getCompName() + "1");
			admFac.updateCompany(company1);

			admFac.getAllCompanies();

			CompanyDaoDB compDb = new CompanyDaoDB();
			long MaxComp = compDb.getMaxCompanyID();

			admFac.getCompany(MaxComp);
			// admFac.removeCompany(company1);

			/**************************************************
			 **** Customer Facade- create , update , get ,get All ****
			 *************************************************/
			System.out.println("**************************************************");
			System.out.println("***** Customer Facade- create , update , get ,get All ****");
			System.out.println("**************************************************");
			Customer cust1 = new Customer("Customer_Name " + rand, "Password");
			admFac.createCustomer(cust1);

			cust1.setCustName(cust1.getCustName() + "1");
			admFac.updateCustomer(cust1);

			CustomerDaoDB custDB = new CustomerDaoDB();
			long MaxCust = custDB.getMaxCustomerID();

			admFac.getCustomer(MaxCust);
			admFac.getAllCustomers();
			/***** remove methods ****/
			// admFac.removeCompany(company1);
			// admFac.removeCustomer(cust1);

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
