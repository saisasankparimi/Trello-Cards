package controllers;

import java.util.ArrayList;
import java.util.List;

import play.*;
import play.mvc.*;
import play.api.mvc.Results.*;
import models.*;

import views.html.*;

import views.html.index;
import views.html.signup;

import play.data.Form;
import play.api.data.*;
import play.db.ebean.*; 

import javax.persistence.*;

import org.mindrot.jbcrypt.BCrypt;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import play.libs.Crypto;
import play.mvc.Security;

import java.util.Date;

public class Application extends Controller {

	public static final Form<User> signupForm = Form.form(User.class);
    public static final Form<SignIn> signinForm = Form.form(SignIn.class);
	
    public static Result up() {
        return ok(signup.render(signupForm));
    }
     public static Result signin(){
         return ok(signin.render(signinForm));
    }

    



    // public static Result list(){
    //     List<SignUp> products  = SignUp.findAll();
    //     return ok(list.render(products));
    // }
    // public static Result index() {
    //     Form<SignIn> bound1Form = signinForm.bindFromRequest();
    //     if(bound1Form.hasErrors()){
    //         return badRequest(signin.render(bound1Form));
    //     }
    //     SignIn prod = bound1Form.get();
    //     User One = User.findByEmailId(prod.emailId);
    //     User Two = User.findByPassword(prod.password);
    //     if(One==null || Two==null || One.id != Two.id){
    //         return badRequest(signin.render(bound1Form));
    //     }
    // 	List<Product> products = Product.findAll();
    //     return ok(index.render(products));
    // }
   
    public static Result authenticate() {
    Form<SignIn> loginForm = signinForm.bindFromRequest();
   
          if (loginForm.hasErrors()) {
          	flash("error", "Invalid Email ID or Password");
        return redirect(routes.Application.signin());
    } else {

        SignIn user = loginForm.get();
        User user1 = User.findByEmailId(user.email);
        
        if(user1==null){
            flash("error", "Invalid User or Password");
        return redirect(routes.Application.signin());
        }
        else if(BCrypt.checkpw(user.password, user1.password)){
            user1.updatedAt = new Date();
        user1.save();
        session().clear();
        session("email", loginForm.get().email);
        return redirect(routes.Application.index1());
        }
        else{
           flash("error", "Invalid Email Id or Password");
        return redirect(routes.Application.signin());
        }
        
}
}
@Security.Authenticated(Secured.class)
public static Result index1(){
	if(session().get("email") != null){
	return ok(trello.render());
}
	else if(session().get("email") == null){
		return redirect(routes.Application.signin());
	}

	return null;
}
 



    public static Result save(){
        Form<User> boundForm = signupForm.bindFromRequest();

        if(boundForm.hasErrors()){
            return badRequest(signup.render(boundForm));
        }

  User user = boundForm.get();

  user.password = BCrypt.hashpw(user.password, BCrypt.gensalt());
 user.createdAt = new Date();
  user.save();
  flash("success",String.format(user.firstName + "Successfully added!"));
 return redirect(routes.Application.signin());
    } 




public static Result logout() {
    session().clear();
    flash("success", "You've been logged out");
    return redirect(
        routes.Application.signin()
    );
}

   
}


