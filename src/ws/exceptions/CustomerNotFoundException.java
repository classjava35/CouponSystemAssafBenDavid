package ws.exceptions;

	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.ResponseStatus;

import i_couponSystemException.FacadeException;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class CustomerNotFoundException extends RuntimeException {

		private static final long serialVersionUID = 1L;

	public CustomerNotFoundException(FacadeException ex) {
	    super(ex);
	  }
	
    public CustomerNotFoundException() {
        super();
    }
    public CustomerNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public CustomerNotFoundException(String message) {
        super(message);
    }
    public CustomerNotFoundException(Throwable cause) {
        super(cause);
    }

	}
