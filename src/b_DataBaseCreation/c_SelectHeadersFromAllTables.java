package b_DataBaseCreation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

/**
 * <h1> Select Headers From All Tables to Verify tha Data Bases created <font color="green">Successfully</font> </h1> The SelectHeadersFromAllTables program run an SQL DB query to get all existing tables headers in the Coupon System DB.
 * <p><b>Purpose:</b>
 * <p>By doing so we can verify the DB was created <font color="green">Successfully</font>
 * <p>This can be used to validate the first two applications  {@link a_CreateNewDB}  and  {@link b_CreateDBTables}
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */

public class c_SelectHeadersFromAllTables {

	/**
	 * This is a main method which select all Coupon System DB Tables header and present it to the user.
	 * <p>The user can verify the DB was created <font color="green">Successfully</font>.
	 * 
	 * <p><b>Note:</b> In this case no need to return connection in case of <font color="red">failure</font> , because the connection is been 
	 * <p>sent as a parameter to the try and catch, so it will be closed by itself.
	 * 
	 * @param args Unused
	 * 
	 */
	public static void main(String[] args) throws ParseException {
		String url = "jdbc:derby://localhost:1527/cs";
		//Select SQL query for all tables 
		List<String> sqlList = new ArrayList<String>();
		String sql1 = "SELECT * from COMPANY";
		String sql2 = "SELECT * from CUSTOMER";
		String sql3 = "SELECT * from COUPON";
		String sql4 = "SELECT * from CUSTOMER_COUPON";
		String sql5 = "SELECT * from COMPANY_COUPON";
		sqlList.add(sql1);
		sqlList.add(sql2);
		sqlList.add(sql3);
		sqlList.add(sql4);
		sqlList.add(sql5);

		try (Connection con = DriverManager.getConnection(url);) {

			for (int i = 0; i < sqlList.size(); i++) {
				String sql = sqlList.get(i);
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery(sql);
				System.out.println(sql);

				// column names can be found in a result set meta data
				ResultSetMetaData rsMetaData = rs.getMetaData();
				int numberOfColumns = rsMetaData.getColumnCount();
				for (int j = 1; j <= numberOfColumns; j++) {
					if (j != 1) {
						System.out.print(",");
					}

					System.out.print(rsMetaData.getColumnLabel(j));
				}

				System.out.println();

				System.out.println("******************************************************************************");
			} // Statement is the type we use to send SQL commands to the DBMS

		} catch (SQLException e) {
			e.printStackTrace();
			// print
			System.err.println();
		}

	}
}
