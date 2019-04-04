function Login() {
	var Name = document.getElementById("fistname").value;
	var lastName = document.getElementById("lastname").value;
	var Username = document.getElementById("username").value;
	var Phone = document.getElementById("phone").value;
	var Email = document.getElementById("email").value;
	var pass = document.getElementById("password").value;
	
	let U_name = true;
	for (let use of Username){
		if ("#.$".indexOf(use)>=0){
			U_name = false;
			break;
		}
	}

	let strong = true;
	for (let str of pass){
		if ("#$%&*#@".indexOf(str)>=0){
			break;
		}else{
			strong = false;
			break;
		}
	}
	if (Name == "" || lastName == ""){
		document.getElementById("alertmsg").innerHTML = "fill the empty part !";
		document.getElementById("alertmsg").style.display = "block";
	}
	else if (U_name == false){
		document.getElementById("alertmsg").innerHTML = "can not use #.$ in your username"
		document.getElementById("alertmsg").style.display = "block";
	}
	else if(strong == false){
		document.getElementById("alertmsg").innerHTML = "use a special character like @#$%&*"
		document.getElementById("alertmsg").style.display = "block";
	}
	else{
		document.getElementById("alertmsg").innerHTML = "WELCOME "+Name;
		document.getElementById("alertmsg").style.color = "green";
		document.getElementById("alertmsg").style.display = "block";
	}

}
Login()