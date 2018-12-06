package ws.exceptions;


import java.util.Date;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import i_couponSystemException.FacadeException;

@ControllerAdvice
@RestController
@Controller
public class CustomizedResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({ AccessDeniedException.class })
    public ResponseEntity<Object> handleAccessDeniedException(
      Exception ex, WebRequest request) {
        return new ResponseEntity<Object>(
          "Access denied message here", new HttpHeaders(), HttpStatus.FORBIDDEN);
    }
    
    @ExceptionHandler(value 
    	      = { IllegalArgumentException.class, IllegalStateException.class })
    	    protected ResponseEntity<Object> handleConflict(
    	      RuntimeException ex, WebRequest request) {
    	        String bodyOfResponse = "This should be application specific";
    	        return handleExceptionInternal(ex, bodyOfResponse, 
    	          new HttpHeaders(), HttpStatus.CONFLICT, request);
    	    }
    
	  @ExceptionHandler(Exception.class)
	  public final ResponseEntity<ErrorDetails> handleAllExceptions(Exception ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	  }
	  
	  @ExceptionHandler(ComapnyAlreadyExistException.class)
	  public final ResponseEntity<ErrorDetails> ComapnyAlreadyExistException(FacadeException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	  }
	  
	  @ExceptionHandler(CompanyNotFoundException.class)
	  public final ResponseEntity<ErrorDetails> CompanyNotFoundException(CompanyNotFoundException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	  }
	  
	  @ExceptionHandler(CustomerAlreadyExistException.class)
	  public final ResponseEntity<ErrorDetails> CustomerAlreadyExistException(CustomerAlreadyExistException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	  }
	  
	  @ExceptionHandler(CustomerNotFoundException.class)
	  public final ResponseEntity<ErrorDetails> CustomerNotFoundException(CustomerNotFoundException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	  }
	  
	  @ExceptionHandler(AdminNotFoundException.class)
	  public final ResponseEntity<ErrorDetails> AdminNotFoundException(AdminNotFoundException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	  }
	  
	  @ExceptionHandler(CouponAlreadyExistException.class)
	  public final ResponseEntity<ErrorDetails> CouponAlreadyExistException(CouponAlreadyExistException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	  }
	  
	  @ExceptionHandler(CouponNotFoundException.class)
	  public final ResponseEntity<ErrorDetails> CouponNotFoundException(CouponNotFoundException ex, WebRequest request) {
	    ErrorDetails errorDetails = new ErrorDetails((java.sql.Date) new Date(), ex.getMessage(),
	        request.getDescription(false));
	    return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
	  }
}