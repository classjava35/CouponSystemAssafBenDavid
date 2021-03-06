package ws.exceptions;

	import org.springframework.http.HttpStatus;
	import org.springframework.web.bind.annotation.ResponseStatus;

import i_couponSystemException.FacadeException;

	@ResponseStatus(HttpStatus.NOT_FOUND)
	public class AdminNotFoundException extends RuntimeException {

		private static final long serialVersionUID = 1L;

	public AdminNotFoundException(FacadeException exception) {
	    super(exception);
	  }

	}
