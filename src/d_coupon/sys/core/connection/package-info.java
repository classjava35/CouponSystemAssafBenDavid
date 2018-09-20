/**
 * <p>The ConnectionPool Package consist of Singleton Class ,every method in the Coupon system application should get a connection from the pool, and return it when done.
 * in case of <font color="red">application failure</font> the connection must be returned.
 * </p><img src="{@docRoot}/images/ConnectionPool.jpg" alt="ConnectionPool" style="width:300px">
 * <img src="{@docRoot}/images/BeansAndConnectionPool.jpg" alt="BeansAndConnectionPool" style="width:300px">
 */
package d_coupon.sys.core.connection;