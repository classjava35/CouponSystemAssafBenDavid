package d_coupon.sys.core.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import i_couponSystemException.ConnctionPoolException;
import i_couponSystemException.CouponSystemException;
/**
 * <h1>ConnectionPool is Singleton Class with limited MAX of 10 Connection. </h1> 
 * <p>
 * <b>Purpose:</b> Every method in the Coupon system application should get a connection form the pool  ,using 
 * <p> the ConnectionPool Class, when the action is done , the connection should return to the Connection pool.
 * <p>in cases of <font color="red">failure</font> the Connection <b>must</b> return to the Connection pool. 
 *  
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class ConnectionPool {
	private Set<Connection> ConnectionPool = null;
	private Set<Connection> usedConnections = new HashSet<Connection>();
	static boolean Locked;
	public Connection con;
	static final int MAX_CONNECTIONS = 10;
	// �� ����� �� ����� ����� �������
	// 2. create a single instance of this class
	private static ConnectionPool instance;

	private String url = "jdbc:derby://localhost:1527/cs";
//	private String url = "jdbc:postgresql://localhost:5432/cs?user=admin & password=admin";

	// 1. private CTOR
	/**
	 * Private Constructor set the limit of connection to 10 and add a connection
	 * @throws CouponSystemException
	 */
	private ConnectionPool() throws CouponSystemException {
		this.ConnectionPool = new HashSet<Connection>();
		for (int i = 0; i < MAX_CONNECTIONS; i++) {
			try {
				Connection con = DriverManager.getConnection(url);
				 if (usedConnections.size() < MAX_CONNECTIONS) {
					 ConnectionPool.add(con);
				 }else {
				  throw new RuntimeException("Maximum pool size reached, no available connections!");
				 }
			
			} catch (SQLException e) {
				throw new ConnctionPoolException("Connection pool initialization error", e);
			}

		}
	}

	// 3. a getter method for the single instance
	/**
	 * Get a ConnectionPool Singleton 
	 * @return ConnectionPool - Singleton ConnectionPool
	 * @throws CouponSystemException
	 */
	public static ConnectionPool getInstance() throws CouponSystemException {
		if (instance == null) {
			instance = new ConnectionPool();
		} 

		return instance;
	}

	// static ConnectionPool pool;
/**
 * getConnection is a synchronized method allows only one thread to access the Connection pool at a given point of time.
 * lock the application in case there are no free Connections at the Connection pool.
 * @return Connection from the Connection pool
 * @throws CouponSystemException
 */
	public synchronized Connection getConnection() throws CouponSystemException {

		while (ConnectionPool.isEmpty()) {
			try {
				wait();

			} catch (Exception e) {
				e.printStackTrace();
			}
		}
	    	    
		// create an iterator
		Iterator<Connection> iterator = ConnectionPool.iterator();
		
		// check values
		con = iterator.next();
		iterator.remove();
		usedConnections.add(con);
		return con;
	}

	/**
	 * Return Connection to the Connection pool, and release locking for the waiting connection(wait-notify)
	 * @param con Connection from the connection pool
	 */
	public synchronized void returnConnection(Connection con) {
		ConnectionPool.add(con);
		usedConnections.remove(con);
		notifyAll();
	}

    public boolean releaseConnection(Connection connection) {
        ConnectionPool.add(con);
        return usedConnections.remove(con);
    }
    
	/**
	 * Closes all connection , and shutdown the application
	 * @throws CouponSystemException
	 */
	public synchronized void closeAllConnections() throws CouponSystemException {
		try {
			System.out.println("number of free connection in the Connection Pool: " + this.ConnectionPool.size()+ " out of Max " + MAX_CONNECTIONS);
			System.out.println("number of free used connection: "+ usedConnections.size());

			//in order no the do many runs - put the loop to run every 3 seconds
			while(this.ConnectionPool.size() < MAX_CONNECTIONS ) {
			int i=0;
			
			Iterator<Connection> iterator = usedConnections.iterator();
			
			// check values
			con = iterator.next();
			iterator.remove();
			ConnectionPool.add(con);
			
				i++;
				Thread.sleep(3000);
				System.out.println("used Connection "+ i +" Closed");
				System.out.println("number of free connection in the Connection Pool: " + this.ConnectionPool.size()+ " out of Max " + MAX_CONNECTIONS);
				System.out.println("number of free used connection: "+ usedConnections.size());
			}
			//Remove all the closed connections from the connections collection
					this.ConnectionPool.clear();
			
			} catch (Exception e) {
				throw new ConnctionPoolException("Connection pool shutdown error", e);
			}
		}
	

}
