package b_DataBaseCreation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * <h1> Drops and Recreates All Data Base Tables </h1> The CreateDBTables program drops and recreates a all Coupon System DB
 * Tables. 
 * <p><b>Purpose:</b>
 * So in case of new computer or willing to reset the DB , run this application to get a clean fresh DB. 
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class b_CreateDBTables {
	/**
	 * This is a main method which drops and recreates a all Coupon System DB Tables.
	 * to get a clean fresh DB.
	 * <p>
	 * All Ids (COMPANY_ID , CUSTOMER_ID etc.):
	 * <p>1. Cannot be Null.
	 * <p>2. GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1) - meaning the id index generated automatically so it starts at 1 and incremented by 1.
	 * 
	 * <p><b>Note:</b> In this case no need to return connection in case of <font color="red">failure</font> , because the connection is been sent as a parameter to the try and catch, so it will be closed by itself.
	 * 
	 * @param args Unused
	 * 
	 */
	public static void main(String[] args) {

		List<String> sqlList = new ArrayList<String>();
		//Drop all Coupon System DB tables
		String sql1 = "Drop table COMPANY";
		String sql2 = "Drop table CUSTOMER";
		String sql3 = "Drop table COUPON";
		String sql4 = "Drop table CUSTOMER_COUPON";
		String sql5 = "Drop table COMPANY_COUPON";

		/*Recreates all Coupon System DB tables
		 * The id cannot be Null and the index is generated automatically so it starts at 1 and incremented by 1
		 */
		String sql6 = "CREATE TABLE COMPANY(COMPANY_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), COMP_NAME VARCHAR(255), PASSWORD VARCHAR(255), EMAIL VARCHAR(255),CONSTRAINT PK_Company PRIMARY KEY (COMPANY_ID))";
		String sql7 = "CREATE TABLE CUSTOMER(CUSTOMER_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), CUST_NAME VARCHAR(255), PASSWORD VARCHAR(255),CONSTRAINT PK_Customer PRIMARY KEY (CUSTOMER_ID))";
		String sql8 = "CREATE TABLE COUPON(COUPON_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), TITLE VARCHAR(255), START_DATE DATE,END_DATE DATE,AMOUNT INTEGER,EnumType VARCHAR(255),MESSAGE VARCHAR(255),PRICE FLOAT,IMAGE VARCHAR(255),CONSTRAINT PK_Coupon PRIMARY KEY (COUPON_ID))";
		String sql9 = "CREATE TABLE CUSTOMER_COUPON(CUSTOMER_ID BIGINT NOT NULL,COUPON_ID BIGINT NOT NULL,CONSTRAINT PK_CustomerCoupon PRIMARY KEY(CUSTOMER_ID,COUPON_ID))";
		String sql10 = "CREATE TABLE COMPANY_COUPON(COMPANY_ID BIGINT NOT NULL,COUPON_ID BIGINT NOT NULL,CONSTRAINT PK_CompanyCoupon PRIMARY KEY(COMPANY_ID,COUPON_ID))";
		sqlList.add(sql1);
		sqlList.add(sql2);
		sqlList.add(sql3);
		sqlList.add(sql4);
		sqlList.add(sql5);
		sqlList.add(sql6);
		sqlList.add(sql7);
		sqlList.add(sql8);
		sqlList.add(sql9);
		sqlList.add(sql10);

		String url = "jdbc:derby://localhost:1527/cs";

		try (Connection con = DriverManager.getConnection(url);) {
			// work with the database here
			System.out.println("connected and creating new table for you ");

			for (int i = 0; i < sqlList.size(); i++) {
				String sql = sqlList.get(i);
				Statement stmt = con.createStatement();
				stmt.executeUpdate(sql);
				System.out.println(sql);
			} // Statement is the type we use to send SQL commands to the DBMS

		} catch (SQLException e) {
			e.printStackTrace();
		}
		System.out.println("disconnected");
	}
}
