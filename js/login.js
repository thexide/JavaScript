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

    	if  (loginLength < 3) {
    		flagLogin = false;
    		login.classList.add('red-border');
    	} else {
    		flagLogin = true;
            login.classList.remove('red-border');
    	}

    	if (passLength < 6) {
            flagPass = false;
            pass.classList.add('red-border');
    	} else {
    		flagPass = true;
    		pass.classList.remove('red-border');
    	}

    	if (flagLogin==true && flagPass==true)
    	{
    		return true;
    	} else {
    		return false;
    	}
}