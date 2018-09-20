package k_tests;

import f_coupon.sys.core.dao.db.CouponDaoDB;
import i_couponSystemException.CouponSystemException;
import j_daily.thread.*;

/**
 * Create a new thread and verify the Daily Task
 * works , for testing purposes you can switch between 24 Hours to 2 minutes (in
 * comment)
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class f_Test_DailyCouponExpirationTask {
	/**
	 * Test Daily Coupon Expire Task: Create a new thread and verify the Daily Task
	 * works , for testing purposes you can switch between 24 Hours to 2 minutes (in
	 * comment)
	 * 
	 * @param args
	 *            unused
	 */
	public static void main(String[] args) {
		try {
			DailyCouponExpirationTask d1 = new DailyCouponExpirationTask();
			Thread t1 = new Thread(d1);
			t1.start();

		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
