package f_coupon.sys.core.dao.db;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import c_coupon.sys.core.beans.coupontype;
import d_coupon.sys.core.connection.ConnectionPool;
import e_coupon.sys.core.dao.CustomerDAO;
import i_couponSystemException.DAOException;
import i_couponSystemException.CouponSystemException;

/**
 * <h1>CustomerDAODB implements the Customer C.R.U.D (Create,Read,Update,Delete)
 * actions in the DB using JDBC connection and SQL query.</h1>
 * <p>
 * <b>Purpose:</b>The Application layer would eventually Creates Java Beans
 * (Company, Coupon etc.)
 * <p>
 * and would sent those to the DAO that will implement at DAODB and convert to
 * SQL commands using JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CustomerDaoDB implements CustomerDAO {
	
	/**
	 * {@inheritDoc}
	 */
	@Override
	public void createCustomer(Customer customer) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "INSERT INTO APP.Customer (CUST_NAME,PASSWORD) VALUES(?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, customer.getCustName());
			pstmt.setString(2, customer.getPassword());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			long customer_id = rs.getLong(1);
			customer.setId(customer_id);

			System.out.println("Customer creation was successful , customer id : " + customer.getId()
					+ " customer Name : " + customer.getCustName());
		} catch (SQLException e) {
			throw new DAOException(" Create customer failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getMaxCustomerID method used to return id of the last Customer created.
	 * 
	 * @return Customer id of the last Coupon created
	 * @throws CouponSystemException
	 */
	public long getMaxCustomerID() throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select max(customer_id) from CUSTOMER";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return 0;
			} else {
				System.out.println("Get Max customer_id from DB was successful , customer_id : " + rs.getLong(1));
				return rs.getLong(1);
			}

		} catch (SQLException e) {
			throw new DAOException(" Get Max customer_id from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void removeCustomer(Customer customer) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		long customer_id = customer.getId();
		String sql = "DELETE from APP.CUSTOMER where customer_id =" + customer_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.executeUpdate();
			System.out.println("Customer deletion in DB was successful , customer id : " + customer_id);
		} catch (SQLException e) {
			throw new DAOException(" Delete Customer in DB failed " + customer_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * removeCustomerCoupon method used to remove Customer's Coupon index reference
	 * from the map index table called "CUSTOMER_COUPON".
	 * 
	 * @param customer
	 *            Customer object from the Java Beans.
	 * @throws CouponSystemException
	 */
	public void removeCustomerCoupon(Customer customer) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		long customer_id = customer.getId();
		String sql = "DELETE from APP.CUSTOMER_COUPON where customer_id =" + customer_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.executeUpdate();
			System.out.println("Customer_Coupon deletion in DB was successful , customer id : " + customer_id);
		} catch (SQLException e) {
			throw new DAOException(" Delete Customer_Coupon in DB failed " + customer_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCustomer(Customer customer) throws CouponSystemException {
		long customer_id = customer.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "UPDATE Customer set cust_name=?, password=? where customer_id =" + customer_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, customer.getCustName());
			pstmt.setString(2, customer.getPassword());

			pstmt.executeUpdate();
			System.out.println("Customer Update in DB was successful , customer id : " + customer_id);
			System.out.println(customer);

		} catch (SQLException e) {
			throw new DAOException(" Update Customer in DB failed " + customer_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Customer getCustomer(long customer_id) throws CouponSystemException {
		Customer tempCust = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from Customer where customer_id =" + customer_id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				long id = rs.getLong("customer_id");
				String name = rs.getString("cust_name");
				String password = rs.getString("Password");

				tempCust = new Customer(id, name, password);
			}
			System.out.println("Get Customer from DB was successful , customer : " + tempCust);
			return tempCust;
		} catch (SQLException e) {
			throw new DAOException(" Get Customer from DB failed " + customer_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	public Customer getCustomer(String customer_name) throws CouponSystemException{
		Customer tempCust = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from customer where cust_name ='" + customer_name+"'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				long id = rs.getLong("customer_id");
				String name = rs.getString("cust_name");
				String password = rs.getString("Password");

				tempCust = new Customer(id, name, password);
			}
			System.out.println("Get Customer from DB was successful , customer : " + tempCust);
			return tempCust;
		} catch (SQLException e) {
			throw new DAOException(" Get Customer from DB failed " + customer_name, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}
	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Customer> getAllCustomers() throws CouponSystemException {
		ArrayList<Customer> list = new ArrayList<>();
		Customer tempCust = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from Customer";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {

					long id = rs.getLong("customer_id");
					String name = rs.getString("cust_name");
					String password = rs.getString("Password");

					tempCust = new Customer(id, name, password);
					list.add(tempCust);
				} while (rs.next());
			}
			System.out.println("Get All Customers from DB was successful " + list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Customers failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Coupon> getAllCustomerPurchasedCoupons(Customer customer) throws CouponSystemException {
		long customer_id = customer.getId();
		Collection<Coupon> couponList = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select c.* from coupon c where coupon_id in (SELECT c.coupon_id FROM COUPON c join customer_coupon cc on c.coupon_id = cc.coupon_id where customer_id="
				+ customer_id + ")";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {

					couponList.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4),
							rs.getInt(5), coupontype.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8),
							rs.getString(9)));
				} while (rs.next());
			}
			System.out.println("Get All Coupons from DB was successful ");
			return couponList;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	public Collection<Coupon> getAllExpiriedCoupons() throws CouponSystemException {
		Date today = new Date(System.currentTimeMillis());		
		Collection<Coupon> couponList = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COUPON where End_Date < '" + today + "'";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {

					couponList.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4),
							rs.getInt(5), coupontype.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8),
							rs.getString(9)));
				} while (rs.next());
			}
			System.out.println("Get All Expiried Coupons from DB was successful ");
			return couponList;
		} catch (SQLException e) {
			throw new DAOException(" Get All Expiried Coupons failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}
	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Coupon> getAllCustomerUnPurchasedCoupons(Customer customer) throws CouponSystemException {
		long customer_id = customer.getId();
		Collection<Coupon> couponList = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select c.* from coupon c where coupon_id not in (SELECT c.coupon_id FROM COUPON c join customer_coupon cc on c.coupon_id = cc.coupon_id where customer_id="
				+ customer_id + ")";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {

					couponList.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4),
							rs.getInt(5), coupontype.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8),
							rs.getString(9)));
				} while (rs.next());
			}
			System.out.println("Get All Coupons from DB was successful ");
			return couponList;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}
	
	/**
	 * {@inheritDoc}
	 */
	@Override
	public boolean login(String custName, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String loginSql = "SELECT * FROM CUSTOMER WHERE CUST_NAME = '" + custName + "' AND PASSWORD = '" + password
				+ "'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(loginSql);
			if (rs.next()) {
				return true;
			}
			return false;
		} catch (SQLException e) {
			throw new DAOException("Unable to login [Customer name: " + custName + "] or get a new DB connection", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/********************************************************************************
	 * Additional Methods
	 *******************************************************************************/
	
	/**
	 * customerExistByName method check whether this customer exist by Name , or
	 * not, returns true/false.
	 * 
	 * @param customer_Name
	 *            taken from the Customer object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean customerExistByName(String customer_Name) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from CUSTOMER where cust_name ='" + customer_Name + "'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println("Check customer By Name from DB was successful , customer_Name : " + customer_Name);
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get customer from DB failed " + customer_Name, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * customerExistById method check whether this customer exist by Id , or not,
	 * returns true/false.
	 * 
	 * @param customer_Id
	 *            taken from the Customer object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean customerExistById(long customer_Id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from CUSTOMER where customer_id =" + customer_Id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out
						.println("Check if customer Exist By Id from DB was successful , customer_Id : " + customer_Id);
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get customer from DB failed " + customer_Id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * createCustomerCouponMap method add a new reference to the map table customer_coupon , meaning the Customer purchased the Coupon.
	 * @param customer_Id The customer Id 
	 * @param coupon_Id The purchased Coupon Id 
	 * @throws CouponSystemException
	 */
	public void createCustomerCouponMap(long customer_id, long coupon_id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "INSERT INTO APP.customer_coupon (customer_id,coupon_id) VALUES(?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setLong(1, customer_id);
			pstmt.setLong(2, coupon_id);
			pstmt.executeUpdate();

			System.out.println("customer_coupon creation in DB was successful [customer_id: " + customer_id
					+ " , coupon id: " + coupon_id + " ]");

		} catch (SQLIntegrityConstraintViolationException e) {
			throw new DAOException("Create customer_coupon in DB failed ,[customer_id: " + customer_id
					+ " , coupon id: " + coupon_id + " ]", e);
		} catch (SQLException e) {
			throw new DAOException(" Create customer_coupon failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * customerPurchasedCoupon method check it this customer purchased a specific coupon ,return boolean true/false.
	 * @param customer_Id The customer Id 
	 * @param coupon_Id The purchased Coupon Id 
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean customerPurchasedCoupon(long customer_Id, long coupon_Id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from CUSTOMER_COUPON where customer_id =" + customer_Id + "AND coupon_Id = " + coupon_Id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println("Coupon: " + coupon_Id + " have been purchaed for customer_Id : " + customer_Id);
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" customer Purchased Coupon failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}



}
