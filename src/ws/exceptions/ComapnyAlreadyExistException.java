package ws.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import i_couponSystemException.FacadeException;

@ResponseStatus(HttpStatus.CONFLICT)
public class ComapnyAlreadyExistException extends RuntimeException {

	private static final long serialVersionUID = 1L;

public ComapnyAlreadyExistException(FacadeException exception) {
    super(exception);
  }


}