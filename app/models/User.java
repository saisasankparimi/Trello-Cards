package models;

import java.util.ArrayList;
import java.util.List;
import org.mindrot.jbcrypt.BCrypt;
import play.db.ebean.*; 
import play.data.validation.Constraints.*;
import java.util.Date;
import javax.persistence.*;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.digest.DigestUtils;
import play.libs.Crypto;
import play.mvc.Security;
import play.data.validation.*;
import play.data.validation.Validation;


// import play.db.jpa.Model;
// import play.modules.search.Field;
// import play.modules.search.Indexed;


@Entity 
public class User extends Model {
	@Id
	public int id;
	
	
	@Required
	@MinLength(4)
	public String firstName;
    
	@Required
	@MinLength(4)
	public String lastName;

	@Required
	@Column(unique=true)
	@Email
	
	public String email;

	@Required
	@MinLength(8)
	@Pattern(value="^[a-zA-Z0-9!#@\\$%\\^&\\*\\(\\):;\"'<>\\.\\?~]{6,}$")
	public String password;
	
    public Date createdAt;
    
    public Date updatedAt;
public User(){}





public User(int id , String firstName, String lastName, String email, String password) {
this.id = id;
this.firstName = firstName;
this.lastName = lastName;
this.email = email;
this.password = BCrypt.hashpw(password, BCrypt.gensalt()) ;
}

public static User findByEmailId(String email){
	 Finder<Long,User> find = new Finder(Long.class , User.class);
	return find.where().eq("email",email).findUnique();
}

public static User findByPassword(String password){
	 Finder<Long,User> find = new Finder(Long.class , User.class);
	return find.where().eq("password",password).findUnique();
}

public static List<User> values ;

static{ 
	values = new ArrayList<User>();
    values.add(new User(111,"1123","1123","asd.fgh@gmail.com","12345678@"));
    }

public static List<User> findAll() {
return new ArrayList<User>(values);
}


}
