package i_couponSystemException;
/**
 * couponSystemException extends Exception
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class CouponSystemException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public CouponSystemException() {
		super();
	}

	public CouponSystemException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public CouponSystemException(String message, Throwable cause) {
		super(message, cause);
	}

	public CouponSystemException(String message) {
		super(message);
	}

	public CouponSystemException(Throwable cause) {
		super(cause);
	}

}
