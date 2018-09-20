package i_couponSystemException;
/**
 * FacadeException extends couponSystemException
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class ConnctionPoolException extends CouponSystemException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ConnctionPoolException() {
		super();
	}

	public ConnctionPoolException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public ConnctionPoolException(String message, Throwable cause) {
		super(message, cause);
	}

	public ConnctionPoolException(String message) {
		super(message);
	}

	public ConnctionPoolException(Throwable cause) {
		super(cause);
	}

}
