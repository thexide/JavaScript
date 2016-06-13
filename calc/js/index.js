document.getElementById('submit').onclick = function(event) {
    return validation();
}

function validation() {
    	var login=document.getElementById('login');
        var loginLength = login.value.length;
    	var pass=document.getElementById('pass');
        var passLength = pass.value.length;
    	var flagLogin=false;
    	var flagPass=false;
        var authError=document.getElementById('auth-error');

    	if  (loginLength < 3) {
    		flagLogin = false;
    		login.classList.add('red-border');
    	} else {
    		flagLogin = true;
            login.classList.remove('red-border');
    	}

    	if (passLength < 4) {
            flagPass = false;
            pass.classList.add('red-border');
    	} else {
    		flagPass = true;
    		pass.classList.remove('red-border');
    	}

    	if (flagLogin==true && flagPass==true) {
         //   alert('hi');
           // if (login.value=="user" && pass.value=="123456")
           // auth-error.classList.remove('auth-errorOn');
           // auth-error.classList.add('auth-errorOff');
            return true;

    	} else {
         //   auth-error.classList.remove('auth-errorOn')
         //   auth-error.classList.add('auth-errorOff');
    		return false;

        } else {
       //     
       //     return false;
        }

}