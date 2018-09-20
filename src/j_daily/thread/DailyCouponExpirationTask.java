package j_daily.thread;

import java.util.ArrayList;
import java.util.concurrent.TimeUnit;

import c_coupon.sys.core.beans.Coupon;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import i_couponSystemException.DAOException;
import i_couponSystemException.CouponSystemException;
/**
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class DailyCouponExpirationTask implements Runnable {
	private CouponDaoDB couponDaoDB;
	private boolean quit;
    private long sleepTime  = 24;

    /**
     * DailyCouponExpirationTask constructor initialing CouponDaoDB
     */
	public  DailyCouponExpirationTask() {
		couponDaoDB = new CouponDaoDB();
		quit = false;
	}
	
	/**
	 * run method start the Thread Daily job running
	 */
	public void run() {
		while(!quit) {
			try {
				ArrayList<Coupon>allCoupons = (ArrayList<Coupon>) couponDaoDB.getAllCoupons();
				for (Coupon c : allCoupons) {
					if(couponDaoDB.expiriedCoupon(c)){
						couponDaoDB.removeCoupon(c);
					}				
				}
				System.out.println("**Daily Job have been Activated**");
				System.out.println("**All exipired Coupons have been Deleted**");
				System.out.println("**going into Sleep of: "+ sleepTime +" hours**");
				TimeUnit.HOURS.sleep(sleepTime);
			//	TimeUnit.MINUTES.sleep(2); //for Testing

			} catch (InterruptedException | CouponSystemException e) {
			}
		}
	}

	/**
	 * StopTask method stops the Thread Daily job from running
	 */
	public void stopTask() {
		quit = true;
	}

}
