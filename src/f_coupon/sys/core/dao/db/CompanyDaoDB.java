package f_coupon.sys.core.dao.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.SQLIntegrityConstraintViolationException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collection;

import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import d_coupon.sys.core.connection.ConnectionPool;
import e_coupon.sys.core.dao.CompanyDAO;
import i_couponSystemException.DAOException;
import i_couponSystemException.CouponSystemException;

/**
 * <h1>CompanyDAODB implements the Company C.R.U.D (Create,Read,Update,Delete)
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
public class CompanyDaoDB implements CompanyDAO {

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void createCompany(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "INSERT INTO APP.COMPANY (COMP_NAME,PASSWORD,EMAIL) VALUES(?,?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql, PreparedStatement.RETURN_GENERATED_KEYS);) {
			pstmt.setString(1, company.getCompName());
			pstmt.setString(2, company.getPassword());
			pstmt.setString(3, company.getEmail());
			pstmt.executeUpdate();

			ResultSet rs = pstmt.getGeneratedKeys();
			rs.next();
			long company_id = rs.getLong(1);
			company.setId(company_id);

			System.out.println("Company creation in DB was successful , Company id : " + company_id + " Company Name : "
					+ company.getCompName());
		} catch (SQLException e) {
			throw new DAOException(" Create Company in DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}

	}

	/**
	 * createCompanyCouponMap method used to add index reference to the map index
	 * table called "company_coupon". There can be a few coupons for the same
	 * company but not the same coupon to the same Company.
	 * 
	 * @param company_id
	 *            The Company id (index)
	 * @param coupon_id
	 *            The Coupon id (index)
	 * @throws CouponSystemException
	 */
	public void createCompanyCouponMap(long company_id, long coupon_id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "INSERT INTO APP.company_coupon (company_id,coupon_id) VALUES(?,?)";
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setLong(1, company_id);
			pstmt.setLong(2, coupon_id);
			pstmt.executeUpdate();

			System.out.println("company_coupon creation in DB was successful [company_id: " + company_id
					+ " , coupon id: " + coupon_id + " ]");

		} catch (SQLIntegrityConstraintViolationException e) {
			throw new DAOException("Create company_coupon in DB failed ,[company_id: " + company_id + " , coupon id: "
					+ coupon_id + " ]", e);
		} catch (SQLException e) {
			throw new DAOException(" Create company_coupon failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * getMaxCompanyID method used to return id of the last Company created.
	 * 
	 * @return company id of the last Company created
	 * @throws CouponSystemException
	 */
	public long getMaxCompanyID() throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select max(COMPANY_ID) from COMPANY";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return 0;
			} else {
				System.out.println("Get Max Company_id from DB was successful , Company id : " + rs.getLong(1));
				return rs.getLong(1);
			}

		} catch (SQLException e) {
			throw new DAOException(" Get Max Company_id from DB failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void removeCompany(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		long company_id = company.getId();
		String sqlDeleteCompany = "DELETE from APP.COMPANY  where company_id =" + company_id;
		try (PreparedStatement pstmt4 = con.prepareStatement(sqlDeleteCompany);) {
			pstmt4.executeUpdate();

			System.out.println("Company deletion in DB was successful , Company id : " + company_id);

		} catch (SQLException e) {
			throw new DAOException(" Delete Company or releated tables in DB failed " + company_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * removeCompanyCoupon method used to remove Coupon and also remove index reference from the map index
	 * table called "company_coupon". 
	 * 
	 * @param Company Company object from the Java Beans.
	 * @throws CouponSystemException
	 */
	public void removeCompanyCoupon(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sqlDeleteCoup = "DELETE from coupon c  where c.coupon_id in (SELECT c.coupon_id FROM COUPON c join company_coupon cc on c.coupon_id = cc.coupon_id where company_id="
				+ company.getId() + ")";
		String sqlDeleteCompCoup = "DELETE from company_coupon  where company_id =" + company.getId();
		try (PreparedStatement pstmt1 = con.prepareStatement(sqlDeleteCoup);
				PreparedStatement pstmt2 = con.prepareStatement(sqlDeleteCompCoup);) {

			pstmt1.executeUpdate();
			pstmt2.executeUpdate();

			System.out.println(
					"Coupons & Company_Coupon deletion in DB was successful , Company id : " + company.getId());

		} catch (SQLException e) {
			throw new DAOException(" Delete Coupons or Company_Coupon in DB failed " + company.getId(), e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public void updateCompany(Company company) throws CouponSystemException {
		long company_id = company.getId();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "UPDATE COMPANY set comp_name=?, password=?, email=? where company_id =" + company_id;
		try (PreparedStatement pstmt = con.prepareStatement(sql);) {
			pstmt.setString(1, company.getCompName());
			pstmt.setString(2, company.getPassword());
			pstmt.setString(3, company.getEmail());

			pstmt.executeUpdate();
			System.out.println("Company Update in DB was successful , Company id : " + company_id);
			System.out.println(company);

		} catch (SQLException e) {
			throw new DAOException(" Update Company in DB failed " + company_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Company getCompany(long company_id) throws CouponSystemException {
		Company tempComp = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COMPANY where company_id =" + company_id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				long id = rs.getLong("company_id");
				String name = rs.getString("comp_name");
				String password = rs.getString("Password");
				String email = rs.getString("email");

				tempComp = new Company(id, name, password, email);
			}

			System.out.println("Get Company from DB was successful , company : " + tempComp);
			return tempComp;
		} catch (SQLException e) {
			throw new DAOException(" Get Company from DB failed " + company_id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Company> getAllCompanies() throws CouponSystemException {
		ArrayList<Company> list = new ArrayList<>();
		Company tempComp = null;
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COMPANY";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				do {
					long id = rs.getLong("company_id");
					String name = rs.getString("comp_name");
					String password = rs.getString("Password");
					String email = rs.getString("email");

					tempComp = new Company(id, name, password, email);
					list.add(tempComp);
				} while (rs.next());
			}
			System.out.println("Get All Companies from DB was successful " + list);
			return list;
		} catch (SQLException e) {
			throw new DAOException(" Get All Companies failed ", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * {@inheritDoc}
	 */
	@Override
	public Collection<Coupon> getCoupons(Company company) throws CouponSystemException {
		long company_id = company.getId();
		Collection<Coupon> couponList = new ArrayList<>();
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select co.* " + "from COMPANY c join company_coupon cc on c.company_id=cc.company_id"
				+ " join coupon co on cc.coupon_id=co.coupon_id " + "where company_id =" + company_id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return null;
			} else {

				// loop through the result set
				while (rs.next()) {

					couponList.add(new Coupon(rs.getLong(1), rs.getString(2), rs.getDate(3), rs.getDate(4),
							rs.getInt(5), coupontype.valueOf(rs.getString(6)), rs.getString(7), rs.getDouble(8),
							rs.getString(9)));
				}
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
	public boolean login(String compName, String password) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String loginSql = "SELECT * FROM COMPANY WHERE COMP_NAME = '" + compName + "' AND PASSWORD = '" + password
				+ "'";
		try {
			Statement stmt = con.createStatement();
			ResultSet rs = stmt.executeQuery(loginSql);
			if (rs.next()) {
				return true;
			}
			return false;
		} catch (SQLException e) {
			throw new DAOException("Unable to login [Company name: " + compName + "] or get a new DB connection", e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/********************************************************************************
	 * Additional Methods
	 *******************************************************************************/
	/**
	 * companyExistByName method check whether this Company exist by Name , or not, returns true/false.
	 * @param company Company object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean companyExistByName(Company company) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COMPANY where comp_name ='" + company.getCompName() + "'";
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println(
						"Check Company By Name from DB was successful , Company_Name : " + company.getCompName());
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get Company from DB failed " + company.getCompName(), e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

	/**
	 * companyExistById method check whether this Company exist by Id , or not, returns true/false.
	 * @param company Company object from the Java Beans
	 * @return boolean true/false
	 * @throws CouponSystemException
	 */
	public boolean companyExistById(long Company_Id) throws CouponSystemException {
		Connection con = ConnectionPool.getInstance().getConnection();
		String sql = "select * from COMPANY where company_id =" + Company_Id;
		try (Statement stmt = con.createStatement();) {

			ResultSet rs = stmt.executeQuery(sql);

			if (rs.next() == false) {
				return false;
			} else {
				System.out.println("Check if company Exist By Id from DB was successful , Company_Id : " + Company_Id);
				return true;
			}
		} catch (SQLException e) {
			throw new DAOException(" Get Company from DB failed " + Company_Id, e);
		} finally {
			ConnectionPool.getInstance().returnConnection(con);
		}
	}

}
