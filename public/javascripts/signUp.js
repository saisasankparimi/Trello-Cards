  function OnFocusInput (input) {
          if(document.getElementById("1").value.length<4){
           document.getElementById('wrong1').style.display = 'block';
           document.getElementById('tick1').style.display = 'none';
        } else if(document.getElementById("1").value.length>=4){
 document.getElementById('tick1').style.display = 'block';
            document.getElementById('wrong1').style.display = 'none';

        }
}
        function OnBlurInput (input) {
            if(document.getElementById("1").value.length<4){
           document.getElementById('wrong1').style.display = 'block';
           document.getElementById('tick1').style.display = 'none';
        } else if(document.getElementById("1").value.length>=4){
 document.getElementById('tick1').style.display = 'block';
            document.getElementById('wrong1').style.display = 'none';

        }
        }



          function OnFocusInput2 (input) {
          if(document.getElementById("2").value.length<4){
           document.getElementById('wrong2').style.display = 'block';
           document.getElementById('tick2').style.display = 'none';
        } else if(document.getElementById("2").value.length>=4){
 document.getElementById('tick2').style.display = 'block';
            document.getElementById('wrong2').style.display = 'none';

        }
}
        function OnBlurInput2 (input) {
            if(document.getElementById("2").value.length<4){
           document.getElementById('wrong2').style.display = 'block';
           document.getElementById('tick2').style.display = 'none';
        } else if(document.getElementById("2").value.length>=4){
 document.getElementById('tick2').style.display = 'block';
            document.getElementById('wrong2').style.display = 'none';

        }
        }


         function OnFocusInput6 (input) {
          if(document.getElementById("6").value.length<4){
           document.getElementById('wrong6').style.display = 'block';
           document.getElementById('tick6').style.display = 'none';
        } else if(document.getElementById("6").value.length>=4){
 document.getElementById('tick6').style.display = 'block';
            document.getElementById('wrong6').style.display = 'none';

        }
}
        function OnBlurInput6 (input) {
            if(document.getElementById("6").value.length<4){
           document.getElementById('wrong6').style.display = 'block';
           document.getElementById('tick6').style.display = 'none';
        } else if(document.getElementById("6").value.length>=4){
 document.getElementById('tick6').style.display = 'block';
            document.getElementById('wrong6').style.display = 'none';

        }
        }




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

      function checkPass()
{
   
    var pass1 = document.getElementById('4');
    var pass2 = document.getElementById('5');
   
    if(pass1.value == pass2.value){
        document.getElementById('tick5').style.display = 'block';
            document.getElementById('wrong5').style.display = 'none';
    }else{
        document.getElementById('wrong5').style.display = 'block';
           document.getElementById('tick5').style.display = 'none';
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

            document.getElementById('tick1').style.display = 'none';
            document.getElementById('wrong1').style.display = 'none';

            document.getElementById('tick2').style.display = 'none';
            document.getElementById('wrong2').style.display = 'none';

            document.getElementById('tick4').style.display = 'none';
            document.getElementById('wrong4').style.display = 'none';

            document.getElementById('tick5').style.display = 'none';
            document.getElementById('wrong5').style.display = 'none';

            
}


   function validate(inputtxt){

      var str = document.forms["myForm"]["password"].value;

      var pass1 = document.getElementById('4');
    var pass2 = document.getElementById('5');

      var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");

      if(document.getElementById('1').value < 4){
		alert("First name must contain atleast 4 Characters");
        return false;
        } else if(document.getElementById('2').value < 4){
		alert("Last name must contain atleast 4 Characters");
          return false;
          }  else if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }else if(document.getElementById("4").value.length<8){
      alert("Password should contain a minimum of 8 Characters");
        return false;
    }else if(CheckPassword(str)){
      alert("Password should be alphanumeric with a special charater");
        return false;
    }else if(pass1 != pass2){
      alert("Password should match Confirm Password");
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