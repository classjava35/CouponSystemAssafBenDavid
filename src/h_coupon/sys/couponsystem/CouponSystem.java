package h_coupon.sys.couponsystem;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import d_coupon.sys.core.connection.ConnectionPool;
import f_coupon.sys.core.dao.db.CompanyDaoDB;
import f_coupon.sys.core.dao.db.CouponDaoDB;
import f_coupon.sys.core.dao.db.CustomerDaoDB;
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CompanyFacade;
import g_coupon.sys.core.facade.CouponClientFacade;
import g_coupon.sys.core.facade.CustomerFacade;
import i_couponSystemException.CouponSystemException;
import j_daily.thread.DailyCouponExpirationTask;

/**
 * Singleton makes of the core Java Application into one Java file
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CouponSystem extends HttpServlet{

	private CouponClientFacade clientFacade;
	public CompanyDaoDB companyDao;
	public CustomerDaoDB customerDao;
	public CouponDaoDB couponDao;
	private ConnectionPool connectionPool;
	private DailyCouponExpirationTask dailyCouponExpirationTask;
	private static CouponSystem instance;

	CouponClientFacade clientType = null;

	/**
	 * Private Constructor for the Singleton entity CouponSystem, initializing
	 * the AdminFacade, CompanyFacade,CustomerFacade,DailyCouponExpirationTask.
	 */
	public CouponSystem() {
		super();
		// this.dailyTask = new DailyCouponExpirationTask();
		companyDao = new CompanyDaoDB();
		customerDao = new CustomerDaoDB();
		couponDao = new CouponDaoDB();
	}

	/**
	 * Private Constructor for the Singleton entity CouponSystem, initializing
	 * the clientType.
	 * 
	 * @param clientType
	 *            from the interface CouponClientFacade.
	 */


	/**
	 * getInstance method return instance of the Singleton entity CouponSystem
	 * 
	 * @return instance of the Singleton entity CouponSystem
	 * @throws CouponSystemException
	 */
	public static synchronized CouponSystem getInstance() throws CouponSystemException {
		if (instance == null) {
			instance = new CouponSystem();
		}
		return instance;
	}

	/**
	 * login method check if the entered parameters match, then return
	 * accordingly the right CouponClientFacade type.
	 * 
	 * @param name
	 *            entered name
	 * @param password
	 *            entered password
	 * @param type
	 *            entered clientType from interface CouponClientFacade
	 * @return
	 */
	public CouponClientFacade login(String name, String password, String clientType) throws CouponSystemException {
		try {
			// in case the administrator id performing the login
			if (clientType.equals("admin") && name.equals("admin") && password.equals("1234")) {
				clientFacade = new AdminFacade(this.companyDao, this.customerDao);
			} else if (clientType.equals("customer") && customerDao.login(name, password)) {
				clientFacade = new CustomerFacade(couponDao, customerDao, customerDao.getCustomer(name));
			} else if (clientType.equals("company") && companyDao.login(name, password)) {
				clientFacade = new CompanyFacade(couponDao, companyDao, companyDao.getCompany(name));
			} else {
				return null;
//				throw new CouponSystemException("Wrong user name: "+name+" or password: ****** please try again");
			}
		} catch (CouponSystemException e) {
//			throw new CouponSystemException("Cannot login to Coupon System :" + e.getMessage());
			return null;
		}
		return clientFacade;
	}


	/**
	 * Shutdown method close all connection to the Connection pool 
	 * @throws CouponSystemException
	 */
	public void shutdown() throws CouponSystemException {
		try {
			ConnectionPool.getInstance().closeAllConnections();
		} catch (Exception e) {
			throw new CouponSystemException("Connection pool shutdown error", e);
		}
	}
}