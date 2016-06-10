document.getElementById('nav').innerHTML="This text was made by JS";
document.getElementById('my-button').ondblclick = function(event) {
	alert("Ты нажал на кнопку");
}
 function showError(container, errorMessage) {
      container.className = 'error';
      var msgElem = document.createElement('span');
      msgElem.className = "error-message";
      msgElem.innerHTML = errorMessage;
      container.appendChild(msgElem);
    }

    function resetError(container) {
      container.className = '';
      if (container.lastChild.className == "error-message") {
        container.removeChild(container.lastChild);
      }
    }

    function validate(form) {
      var elems = form.elements;

      resetError(elems.from.parentNode);
      if (!elems.from.value) {
        showError(elems.from.parentNode, ' Укажите логин.');
      }

      resetError(elems.password.parentNode);
      if (!elems.password.value) {
        showError(elems.password.parentNode, ' Укажите пароль.');
      }

    }

    function validation() {
    	var login=document.getElementById('_email');
    	var pass=document.getElementById('_pwd');
    	var flagLogin=false;
    	var flagPass=false;

    	if (login.value=='') {
    		flagLogin = false;
    		login.classList.remove('red-border');
    	} else {
    		flagLogin = true;
    	}

    	if (pass.value=='') {
        flagPass = false;
        pass.classList.add('red-border');
    	} else {
    		flagPass = true;
    		pass.classList.remove('red-border');
    	}

    	if(flagLogin==true && flagPass==true)
    	{
    		return true;
    	} else
    	{
    		return false;
    	}
}