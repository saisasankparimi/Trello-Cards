package models;

import java.util.ArrayList;
import java.util.List;

import play.data.validation.Constraints.*;
import play.data.validation.Validation;
public class SignIn  {
	
	@Required
	@Email
	public String email;

	@MinLength(8)
	@Required
	@Pattern(value="^[a-zA-Z0-9!#@\\$%\\^&\\*\\(\\):;\"'<>\\.\\?~]{6,}$")
	public String password;
	
public SignIn(){}


public SignIn( String email, String password) {

this.email = email;
this.password = password;

}




}

