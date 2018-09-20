package b_DataBaseCreation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 * <h1> Creates New Coupon System DB </h1> 
 * <p><b>Purpose:</b>
 * The CreateNewDB program creates a new Coupon System Data Base
 * using Apache Derby driver.
 *
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */

public class a_CreateNewDB {
	/**
	 * This is a main method which creates a new Apache Derby DB called -
	 * <h1>cs</h1> stands for Coupon System.
	 * <p>
	 * <p><b>Note:</b> Every action in the Coupon System Application must get connection and return one,
	 *  in case of <font color="red">failure</font> must write to the print stack.
	 * 
	 * @param args Unused
	 * 
	 */
	public static void main(String[] args) {
		Connection con = null;
		try {
			// 1. load the driver
			Class.forName("org.apache.derby.jdbc.ClientDriver");
			System.out.println("driver loaded");
			// 2. establish a connection to the db - using DriverManager
			String url = "jdbc:derby://localhost:1527/cs;create=true";
			con = DriverManager.getConnection(url);
			System.out.println("connection established" + con);
		} catch (ClassNotFoundException | SQLException e) {
			e.printStackTrace();
		} finally {
			// 3. close the connection
			if (con != null) {
				try {
					con.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			System.out.println("connection closed " + con);
		}
	}

}
