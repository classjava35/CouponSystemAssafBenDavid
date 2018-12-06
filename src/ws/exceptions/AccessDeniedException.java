package ws.exceptions;

	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.ResponseStatus;

import i_couponSystemException.FacadeException;

	@ResponseStatus(HttpStatus.FORBIDDEN)
	public class AccessDeniedException extends RuntimeException {

		private static final long serialVersionUID = 1L;

	public AccessDeniedException(FacadeException exception) {
	    super(exception);
	  }
    public AccessDeniedException() {
        super();
    }
    public AccessDeniedException(String message, Throwable cause) {
        super(message, cause);
    }
    public AccessDeniedException(String message) {
        super(message);
    }
    public AccessDeniedException(Throwable cause) {
        super(cause);
    }

	}
