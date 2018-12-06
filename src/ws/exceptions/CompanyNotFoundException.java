package ws.exceptions;

	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.ResponseStatus;

import i_couponSystemException.FacadeException;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class CompanyNotFoundException extends RuntimeException {

		private static final long serialVersionUID = 1L;

	public CompanyNotFoundException(FacadeException exception) {
	    super(exception);
	  }
    public CompanyNotFoundException() {
        super();
    }
    public CompanyNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
    public CompanyNotFoundException(String message) {
        super(message);
    }
    public CompanyNotFoundException(Throwable cause) {
        super(cause);
    }

	}
