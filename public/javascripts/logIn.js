  




        function OnFocusPassword (inputtxt) {
        
          var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/; 

           if(document.getElementById("4").value.length<8){
           document.getElementById('wrong4').style.display = 'block';
           document.getElementById('tick4').style.display = 'none';
        } else if(document.getElementById("4").value.length>=8 && inputtxt.value.match(paswd)){
 document.getElementById('tick4').style.display = 'block';
            document.getElementById('wrong4').style.display = 'none';

        }
}
        function OnBlurPassword (inputtxt) {
            if(document.getElementById("4").value.length<8){
           document.getElementById('wrong4').style.display = 'block';
           document.getElementById('tick4').style.display = 'none';
        } else if(document.getElementById("4").value.length>=8 && inputtxt.value.match(paswd)){
 document.getElementById('tick4').style.display = 'block';
            document.getElementById('wrong4').style.display = 'none';
        }
      }

    

function email(inputtxt){
var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

if(inputtxt.value.match(emailPattern)){
           document.getElementById('tick3').style.display = 'block';
            document.getElementById('wrong3').style.display = 'none';

}
else{
document.getElementById('wrong3').style.display = 'block';
           document.getElementById('tick3').style.display = 'none'

}

}

function nodiv(){
      document.getElementById('tick3').style.display = 'none';
            document.getElementById('wrong3').style.display = 'none';

            document.getElementById('tick4').style.display = 'none';
            document.getElementById('wrong4').style.display = 'none';

           
            
}


   function validate(inputtxt){

      var str = document.forms["logForm"]["password"].value;

     
      var x = document.forms["logForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

       if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }else if(document.getElementById("4").value.length<8){
      alert("Password should contain a minimum of 8 Characters");
        return false;
    }else if(CheckPassword(str)){
      alert("Password should be alphanumeric with a special charater");
        return false;
    }
return true;
   }


function CheckPassword(inputtxt)   
{   
var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/;  
if(inputtxt.value.match(paswd))   
{   return true;
}
else{
  return false;
}}