package k_tests;

import java.sql.Connection;

import d_coupon.sys.core.connection.ConnectionPool;
import i_couponSystemException.CouponSystemException;
/**
 * Test Connection just verifying the DB is On and a user can receive and return a connection, from the Connection pool.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class a_Test_Connections {

	/**
	 *Test Connection just verifying the DB is On and a user can receive and return a connection, from the Connection pool.
	 * @param args unused
	 */
	public static void main(String[] args) {

		ConnectionPool cp = null;

		try {
			cp = ConnectionPool.getInstance();
			Connection con1 = cp.getConnection();
			Connection con2 = cp.getConnection();
			Connection con3 = cp.getConnection();
			Connection con4 = cp.getConnection();
			Connection con5 = cp.getConnection();
			Connection con6 = cp.getConnection();
			Connection con7 = cp.getConnection();
			Connection con8 = cp.getConnection();
			Connection con9 = cp.getConnection();
			Connection con10 = cp.getConnection();
	
			
			System.out.println("Took 2 Connections");
			//cp.returnConnection(con1);
			cp.returnConnection(con2);
			System.out.println("Return 2 Connections");

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
