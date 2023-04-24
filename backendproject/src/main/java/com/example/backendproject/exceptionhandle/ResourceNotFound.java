package com.example.backendproject.exceptionhandle;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/* @ResponseStatus marks a exception class with the status code and reason message that should be returned. 
 * The status code is applied to the HTTP response when the handler method is invoked, 
 * or whenever the specified exception is thrown.
 * In this class, public getter methods used and 
 * constructor injection is used to set the values for private attributes*/
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFound extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	public ResourceNotFound(String message) {
		super(message);
	}

}
