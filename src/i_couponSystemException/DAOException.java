package i_couponSystemException;
/**
 * DAOException extends couponSystemException
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class DAOException extends CouponSystemException {

	private static final long serialVersionUID = 1L;

	public DAOException() {
		super();
	}

	public DAOException(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public DAOException(String message, Throwable cause) {
		super(message, cause);
	}

	public DAOException(String message) {
		super(message);
	}

	public DAOException(Throwable cause) {
		super(cause);
	}

}
