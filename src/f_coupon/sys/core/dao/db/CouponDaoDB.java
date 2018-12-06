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

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.Customer;
import c_coupon.sys.core.beans.coupontype;
import d_coupon.sys.core.connection.ConnectionPool;
import e_coupon.sys.core.dao.CouponDAO;
import i_couponSystemException.DAOException;
import i_couponSystemException.CouponSystemException;
/**
 * <h1>CouponDAODB implements the Coupon C.R.U.D (Create,Read,Update,Delete)
 * actions in the DB using JDBC connection and SQL query.</h1>
 * <p>
 * <b>Purpose:</b>The Application layer would eventually Creates Java Beans
 * (Company, Coupon etc.)
 * <p>
 * and would sent those to the DAO that will implement at DAODB and convert to SQL commands using JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CouponDaoDB implements CouponDAO {

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void createCoupon(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "INSERT INTO APP.coupon (TITLE,START_DATE,END_DATE,AMOUNT,ENUMTYPE,MESSAGE,PRICE,IMAGE) VALUES(?,?,?,?,?,?,?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, coupon.getStartDate());
			pstmt.setDate(3, coupon.getEndDate());
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			long coupon_id = rs.getLong(1);
			coupon.setId(coupon_id);

			System.out.println("Coupon creation in DB was successful , coupon id : " + coupon.getId());

		} catch (SQLIntegrityConstraintViolationException e) {
			throw new DAOException("Create coupon in DB failed -a coupon with id " + coupon.getId(), e);
		} catch (SQLException e) {
			throw new DAOException(" Create coupon failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getMaxCouponID method used to return id of the last Coupon created.
	 * 
	 * @return Coupon id of the last Coupon created
	 * @throws CouponSystemException
	 */
	public long getMaxCouponID() throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select max(COUPON_ID) from COUPON";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return 0;
			} else {
				System.out.println("Get Max Coupon_id from DB was successful , Coupon_id : " + rs.getLong(1));
				return rs.getLong(1);
			}

		} catch (SQLException e) {
			throw new DAOException(" Get Max Coupon_id from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void removeCoupon(Coupon coupon) throws CouponSystemException {
		long coupon_id = coupon.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql1 = "DELETE from APP.CUSTOMER_COUPON where coupon_id = " + coupon_id;
		String sql2 = "DELETE from APP.COMPANY_COUPON where coupon_id = " + coupon_id;
		String sql3 = "DELETE from APP.COUPON where coupon_id = " + coupon_id;
		try (PreparedStatement pstmt1 = con.prepareStatement(sql1);
				PreparedStatement pstmt2 = con.prepareStatement(sql2);
				PreparedStatement pstmt3 = con.prepareStatement(sql3);) {
			pstmt1.executeUpdate();
			pstmt2.executeUpdate();
			pstmt3.executeUpdate();

			System.out.println("Coupon deletion was successful , coupon id : " + coupon_id);
		} catch (SQLException e) {
			throw new DAOException(" Delete coupon failed " + coupon_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCoupon(Coupon coupon) throws CouponSystemException {
		long coupon_id = coupon.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "UPDATE Coupon set title=?, start_date=?, end_date=?, amount=?, enumtype=?, message=?, price=?, image=? where coupon_id ="
				+ coupon_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, coupon.getTitle());
			pstmt.setDate(2, coupon.getStartDate());
			pstmt.setDate(3, coupon.getEndDate());
			pstmt.setInt(4, coupon.getAmount());
			pstmt.setString(5, coupon.getType().name());
			pstmt.setString(6, coupon.getMessage());
			pstmt.setDouble(7, coupon.getPrice());
			pstmt.setString(8, coupon.getImage());

			pstmt.executeUpdate();
			System.out.println("Coupon update in DB was successful , Coupon : ");
			System.out.println(coupon);
		} catch (SQLException e) {
			throw new DAOException(" Update Coupon in DB failed " + coupon_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Coupon getCoupon(long coupon_id) throws CouponSystemException {
		Coupon tempCupn = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from Coupon where coupon_id =" + coupon_id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				System.out.println("Error - DB SQL query returned empty, please try to refine your query");
				return null;
			} else {
				// loop through the result set

				long id = rs.getLong("coupon_id");
				String title = rs.getString("title");
				java.sql.Date start_date = rs.getDate("start_date");
				java.sql.Date end_date = rs.getDate("end_date");
				int amount = rs.getInt("amount");
				coupontype type = coupontype.valueOf(rs.getString("enumtype"));
				String message = rs.getString("message");
				Double price = rs.getDouble("price");
				String image = rs.getString("image");

				tempCupn = new Coupon(id, title, start_date, end_date, amount, type, message, price, image);
			}
			System.out.println("Get Coupon from DB was successful , Coupon id : ");
			System.out.println(tempCupn);
			return tempCupn;
		} catch (SQLException e) {
			throw new DAOException(" Get Coupon from DB failed " + coupon_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Coupon> getAllCoupons() throws CouponSystemException {
		ArrayList<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from Coupon";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println("Get All Coupons from DB was successful " + list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Coupon> getCompanyCouponByType( //Company company, 
			coupontype coupontype)
			throws CouponSystemException {
		Collection<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
	//	long company_id = company.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
	//	String sql = "select c.* from coupon c where coupon_id in (SELECT c.coupon_id FROM COUPON c join company_coupon cc on c.coupon_id = cc.coupon_id where company_id= "
	//			+ company_id + " ) and ENUMTYPE = '" + coupontype.name() + "'";
		String sql = "select * from coupon c where ENUMTYPE = '" + coupontype.name() + "'";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = c_coupon.sys.core.beans.coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println("Get All Coupons per company by type: " + coupontype
					+ " from DB was successful , found : " + list.size());
			System.out.println(list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(
					" Get All coupons per company: by type: " + coupontype + " from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	
	/********************************************************************************
	 * Additional Methods
	 *******************************************************************************/
	
	
	/**
	 * getCustomerCouponByType method used to retrieve All existing Customers Coupons By coupon type from the DB
	 * using SQL commands and JDBC.
	 *
	 * @param customer Customer entity from the Java Beans
	 * @param coupontype from the enum coupontype
	 * @return a Collection of Coupons
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCustomerCouponByType(Customer customer, coupontype coupontype)
			throws CouponSystemException {
		Collection<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
		long customer_id = customer.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select c.* from coupon c where c.ENUMTYPE = '" + coupontype.name() + "' and coupon_id in (SELECT c.coupon_id FROM COUPON c join customer_coupon cc on c.coupon_id = cc.coupon_id where customer_id= "
				+ customer_id + " )";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = c_coupon.sys.core.beans.coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println("Get All Coupons per customer: " + customer_id + " by type: " + coupontype
					+ " from DB was successful , found : " + list.size());
			System.out.println(list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(
					" Get All coupons per customer: " + customer_id + " by type: " + coupontype + " from DB failed ",
					e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getCustomerCouponByPrice method used to retrieve All existing Customers Coupons By price from the DB
	 * using SQL commands and JDBC.
	 *
	 * @param customer Customer entity from the Java Beans.
	 * @param couponPrice Price of the coupon.
	 * @return a Collection of Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCustomerCouponByPrice(Customer customer, double couponPrice)
			throws CouponSystemException {
		Collection<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		long customer_id = customer.getId();
		String sql = "select c.* from coupon c where coupon_id in (SELECT c.coupon_id FROM COUPON c join customer_coupon cc on c.coupon_id = cc.coupon_id where customer_id= "
				+ customer_id + " ) and price <= " + couponPrice;

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long coupon_id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = c_coupon.sys.core.beans.coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(coupon_id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println("Get All Coupons per customer id: " + customer_id + " , by price lower or equal to: "
					+ couponPrice + " from DB was successful , found : " + list.size() + " Coupons");
			System.out.println(list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons per customer by price from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getCompanyCouponByPrice method used to retrieve All existing Companies Coupons By price from the DB
	 * using SQL commands and JDBC.
	 *
	 * @param company Company entity from the Java Beans.
	 * @param couponPrice Price of the coupon.
	 * @return a Collection of Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCompanyCouponByPrice(Company company, double couponPrice)
			throws CouponSystemException {
		Collection<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		long company_id = company.getId();
		String sql = "select c.* from coupon c where coupon_id in (SELECT c.coupon_id FROM COUPON c join company_coupon cc on c.coupon_id = cc.coupon_id where company_id= "
				+ company_id + " ) and price <= " + couponPrice;

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long coupon_id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = c_coupon.sys.core.beans.coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(coupon_id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println("Get All Coupons per company id: " + company_id + " , by price lower or equal to: "
					+ couponPrice + " from DB was successful , found : " + list.size() + " Coupons");
			System.out.println(list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons per company by price from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getCompanyCouponByEndDate method used to retrieve All existing Companies Coupons By end Date from the DB
	 * using SQL commands and JDBC.
	 *
	 * @param company Company entity from the Java Beans.
	 * @param endDate end Date of the Coupon.
	 * @return a Collection of Coupons.
	 * @throws CouponSystemException
	 */
	public Collection<Coupon> getCompanyCouponByEndDate(Company company, Date endDate) throws CouponSystemException {
		Collection<Coupon> list = new ArrayList<>();
		Coupon tempCupn = null;
		long company_id = company.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select c.* from coupon c where coupon_id in (SELECT c.coupon_id FROM COUPON c join company_coupon cc on c.coupon_id = cc.coupon_id where company_id= "
				+ company_id + " ) and End_Date <= '" + endDate + "'";

		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long id = rs.getLong("coupon_id");
					String title = rs.getString("title");
					java.sql.Date start_date = rs.getDate("start_date");
					java.sql.Date end_date = rs.getDate("end_date");
					int amount = rs.getInt("amount");
					coupontype type = c_coupon.sys.core.beans.coupontype.valueOf(rs.getString("enumtype"));
					String message = rs.getString("message");
					Double price = rs.getDouble("price");
					String image = rs.getString("image");

					tempCupn = new Coupon(id, title, start_date, end_date, amount, type, message, price, image);
					list.add(tempCupn);
				} while (rs.next());
			}
			System.out.println(
					"Get All Coupons by End Date " + endDate + " from DB was successful " + " found : " + list.size());
			System.out.println(list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Coupons by End Date from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/********************************************************************************
	 * Additional Methods
	 *******************************************************************************/
	/**
	 * couponExistByName method check whether this Coupon exist by Name , or not, returns true/false.
	 * @param coupon Coupon object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean couponExistByName(Coupon coupon) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COUPON where title ='" + coupon.getTitle() + "'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println("Check Coupon By Name from DB was successful , title: " + coupon.getTitle());
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get Coupon by name from DB failed " + coupon.getTitle(), e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * couponExistById method check whether this Coupon exist by Id , or not, returns true/false.
	 * @param coupon Coupon object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean couponExistById(long coupon_id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COUPON where coupon_Id =" + coupon_id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println("Check Coupon By Id from DB was successful , Company_Id : " + coupon_id);
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get Coupon from DB failed " + coupon_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * removeCustomerCoupon method removes the coupon reference from the Customer_Coupon table
	 * @param coupon Coupon object from the Java Beans
	 * @throws CouponSystemException
	 */
	public void removeCustomerCoupon(Coupon coupon) throws CouponSystemException {
		long coupon_id = coupon.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "DELETE from APP.CUSTOMER_COUPON where coupon_id = "+ coupon_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {

			pstmt.executeUpdate();
			System.out.println("Customer Coupon deletion was successful , coupon id : " + coupon_id);
		} catch (SQLException e) {
			throw new DAOException(" Delete Customer Coupon failed " + coupon_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * This method check if the Coupon is expired or not. if the Coupon End's date is smaller than the current date, it's expired.
	 * @param coupon Coupon object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean expiriedCoupon(Coupon coupon) throws CouponSystemException {
		long coupon_Id = coupon.getId();
		Date today = new Date(System.currentTimeMillis());

		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COUPON where coupon_Id = " + coupon_Id + " and End_Date >= '" + today + "'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				System.out.println("Coupon: " + coupon_Id + " is Expired! ,Coupon's End_Date: " + coupon.getEndDate()
						+ " smaller than today:" + today);
				return true;
			} else {
				System.out.println("Coupon: " + coupon_Id + " is not Expired! ,Coupon's End_Date: "
						+ coupon.getEndDate() + " bigger than today:" + today);
				return false;
			}
		} catch (SQLException e) {
			throw new DAOException(" expiried Coupon failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

}
