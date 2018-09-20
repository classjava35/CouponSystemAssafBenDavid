package h_coupon.sys.couponsystem;

import d_coupon.sys.core.connection.ConnectionPool;
import g_coupon.sys.core.facade.AdminFacade;
import g_coupon.sys.core.facade.CompanyFacade;
import g_coupon.sys.core.facade.CouponClientFacade;
import g_coupon.sys.core.facade.CustomerFacade;
import i_couponSystemException.CouponSystemException;
import j_daily.thread.DailyCouponExpirationTask;

/**
 * Singleton makes of the core Java Application into one Java file
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CouponSystem {

	private static CouponSystem instance;

	private AdminFacade adminFacade;
	private CompanyFacade companyFacade;
	private CustomerFacade customerFacade;
	private DailyCouponExpirationTask dailyTask;
	CouponClientFacade clientType = null;

	/**
	 * Private Constructor for the Singleton entity CouponSystem, initializing the
	 * AdminFacade, CompanyFacade,CustomerFacade,DailyCouponExpirationTask.
	 */
	private CouponSystem() {
		super();
		this.adminFacade = new AdminFacade();
		this.companyFacade = new CompanyFacade();
		this.customerFacade = new CustomerFacade();
		this.dailyTask = new DailyCouponExpirationTask();
	}

	/**
	 * Private Constructor for the Singleton entity CouponSystem, initializing the
	 * clientType.
	 * 
	 * @param clientType
	 *            from the interface CouponClientFacade.
	 */
	private CouponSystem(CouponClientFacade clientType) {
		super();
		this.clientType = clientType;
	}

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
	 * login method check if the entered parameters match, then return accordingly
	 * the right CouponClientFacade type.
	 * 
	 * @param name
	 *            entered name
	 * @param password
	 *            entered password
	 * @param type
	 *            entered clientType from interface CouponClientFacade
	 * @return
	 */
	public CouponClientFacade login(String name, String password, String clientType) {
		CouponClientFacade Type = null;
		if ((name.equals("admin")) && (password.equals("1234"))) {
			switch (clientType) {
			case "admin":
				Type = new AdminFacade();
				break;
			case "company":
				Type = new CompanyFacade();
				break;
			case "customer":
				Type = new CustomerFacade();
				break;
			default:
				Type = null;
				break;
			}
			System.out.println("You have managed to successfuly login as : " + Type.getClass().getSimpleName());
			return Type;
		}
		return null;

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