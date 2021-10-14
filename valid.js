var username = document.getElementById("username");
var password = document.getElementById("password");
var email = document.getElementById("email");
var birthdate = document.getElementById("birthdate");
var city = document.getElementById("city");
var form= document.getElementById("form");

var c=document.getElementById("c");
var cpp=document.getElementById("cpp");
var java=document.getElementById("java");
var javascript=document.getElementById("javascript");
var python=document.getElementById("python");

form.addEventListener("submit", function (event) {
    if (!(validateUsername(username.value) && validatePassword(password.value))) {        
        event.preventDefault();
        if(!validateUsername(username.value)){
            alert("Username rules: Less than 20 characters")
        }
        if(!validatePassword(password.value)){
            alert("Password rules: Min length 8 characters. Contains one lowercase letter, one uppercase letter and one special character ")
        }
    }
    else{
        document.write("Username: "+username.value);
        document.write("<br>Password: "+password.value);
        document.write("<br>Email: "+email.value);
        document.write("<br>Birthdate: "+birthdate.value);
        document.write("<br>City: "+city.value);
        document.write("<br>Programming Languages Known:");
        if(c.checked==true){
            document.write("<br>"+c.value);
        }
        if(cpp.checked==true){
            document.write("<br>"+cpp.value);
        }
        if(java.checked==true){
            document.write("<br>"+java.value);
        }
        if(javascript.checked==true){
            document.write("<br>"+javascript.value);
        }
        if(python.checked==true){
            document.write("<br>"+python.value);
        }
    
    }
})

function validateUsername(username) {
    return username.length <= 20;
}

function validatePassword(password) {
    if(password.length >= 8 && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s)/.test(password)){
        return true;
    }
    else{
        return false;
    }
}





// var fn = document.form1.fname.value;
// var pass1 = document.form1.Password.value;
// var pass2 = document.form1.ConPassword.value;
// var dt = document.form1.date.value;
// var city = document.form1.city.value;
// var patt = /[^a-z]/i;
// var fname = patt.test(fn);






// function fncValidate() {

// 	// var lname = patt.test(ln); 

// 	if (fn == "") {
// 		alert('Please input Firstname');

// 		return false;
// 	}
// 	if (fn == null || fname == true) {
// 		alert("Enter only Alphabet for Firstname");
// 		return false;
// 	}
// 	// 	if(ln == "")
// 	// {
// 	// 	alert('Please input Lastname');

// 	// 	return false;
// 	// }
// 	// 		if ( ln == null || lname == true )
// 	// 		{
// 	// 			alert("Enter only Alphabet for Lastname");
// 	// 			return false;
// 	// 		}

// 	if (pass1 == "") {
// 		alert('Please input Password');

// 		return false;
// 	}

// 	if (pass1.length < 6) {
// 		alert('Password strength should not less than 6 characters');

// 		return false;
// 	}


// 	if (pass2 == "") {
// 		alert('Please input Confirm Password');
// 		return false;
// 	}

// 	if (pass1 != pass2) {
// 		alert('Confirm Password Not Match');
// 		return false;
// 	}

// 	var em = document.form1.email.value;
// 	var atpos = em.indexOf("@");
// 	var dotpos = em.lastIndexOf(".");
// 	if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= em.length) {
// 		alert("Ivalid email id");
// 		return false;
// 	}

// 	var add = document.form1.date.value;
// 	if (add == "") {
// 		alert('Please enter your DOB');

// 		return false;
// 	}
// 	// if ( add == null || address == true )
// 	// 		{
// 	// 			alert("Enter only Alphabet for Address with ,");
// 	// 			return false;
// 	// 		}

// 	var c = document.getElementById("city")
// 	if (c.value == null || c.value == "") {
// 		alert("Please select a city");
// 		return false;
// 	}


// 	// var cp = document.getElementById('C');
// 	// var cpp = document.getElementById('C++');
// 	// if ((cp.checked == false) && (cpp.checked == false)) {
// 	// 	alert("Please choose Programming Languages known");
// 	// 	document.getElementById("plk");
// 	// 	return false;
// 	// }

// 	function check() {
// 		var markedCheckbox = document.getElementsByName('checked');
// 		for (var checkbox of markedCheckbox) {
// 		  if (checkbox.checked)
// 			document.body.append(checkbox.value + ' ');
// 			console.log(checkbox)
// 		}
// 	  }
	



// 	alert(`Details: name: ${fn}, ${check()} ${dt}, ${city}`);
// 	// document.form1.submit();
// }
