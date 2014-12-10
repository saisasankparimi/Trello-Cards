var  =  function OnFocusInput (input) {
        	if(document.getElementById("1").value.length<4){
           document.getElementById('wrong').style.display = 'block';
           document.getElementById('tick1').style.display = 'none';
        }	else if(document.getElementById("1").value.length>=4){
 document.getElementById('tick1').style.display = 'block';
            document.getElementById('wrong1').style.display = 'none';

        }

        if(document.getElementById("2").value.length<4){
           document.getElementById('wrong2').style.display = 'block';
           document.getElementById('tick2').style.display = 'none';
        }	else if(document.getElementById("2").value.length>=4){
 document.getElementById('tick2').style.display = 'block';
            document.getElementById('wrong2').style.display = 'none';

        }

}
        function OnBlurInput (input) {
            if(document.getElementById("1").value.length<4){
           document.getElementById('wrong1').style.display = 'block';
           document.getElementById('tick1').style.display = 'none';
        }	else if(document.getElementById("1").value.length>=4){
 document.getElementById('tick1').style.display = 'block';
            document.getElementById('wrong1').style.display = 'none';

        }
        }



        function OnFocusPassword (inputtxt) {
          var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,30}$/; 
          var pass = document.getElementById("password").value.length;
          if(document.getElementById("password").value.length<8){
           document.getElementById('wrong4').style.display = 'block';
           document.getElementById('tick4').style.display = 'none';
        } else if(document.getElementById("password").value.length>=8 && inputtxt.value.match(paswd)){
 document.getElementById('tick4').style.display = 'block';
            document.getElementById('wrong4').style.display = 'none';

        }
}
        function OnBlurPassword (inputtxt) {
            if(document.getElementById("password").value.length<8){
           document.getElementById('wrong4').style.display = 'block';
           document.getElementById('tick4').style.display = 'none';
        } else if(document.getElementById("password").value.length>=8 && inputtxt.value.match(paswd){
 document.getElementById('tick4').style.display = 'block';
            document.getElementById('wrong4').style.display = 'none';

        }
        }

    </script>
<script type="text/javascript">


function checkPass()
{
   
    var pass1 = document.getElementById('password');
    var pass2 = document.getElementById('confirmPassword');
   
    if(pass1.value == pass2.value){
        document.getElementById('tick5').style.display = 'block';
            document.getElementById('wrong5').style.display = 'none';
    }else{
        document.getElementById('wrong5').style.display = 'block';
           document.getElementById('tick5').style.display = 'none';
    }
} 



function checkemail (inputtxt){        
   var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;  
   

      if(inputtxt.value.match(emailPattern))
      { document.getElementById('tick3').style.display = 'block';
            document.getElementById('wrong3').style.display = 'none';
      }
        else {
           document.getElementById('wrong3').style.display = 'block';
           document.getElementById('tick3').style.display = 'none'
        }
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