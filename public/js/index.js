
// SELECTING ALL TEXT ELEMENTS
var username = document.forms['signupForm']['username'];
var email = document.forms['signupForm']['email'];
var password = document.forms['signupForm']['password'];
var password_confirm = document.forms['signupForm']['confirmPassword'];
// SELECTING ALL ERROR DISPLAY ELEMENTS
var username_error = document.getElementById('username_error');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');
var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', usernameVerify, true);
email.addEventListener('blur', emailVerify, true);
password.addEventListener('blur', passwordVerify, true);
// validation function
function Validate() {

  // validate username
  if (username.value == "") {
    username.style.border = "2px solid red";
    document.getElementById('inputUsername').style.color = "red";
    username_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 5) {
    username.style.border = "2px solid red";
    document.getElementById('inputUsername').style.color = "red";
    username_error.textContent = "Username must be at least 5 characters";
    username.focus();
    return false;
  }
  // validate username for space
  if(username.value.indexOf(' ') !== -1){
    username.style.border = "2px solid red";
    document.getElementById('inputUsername').style.color = "red";
    username_error.textContent = "Space is not allowed";
    username.focus();
    return false;
  }
  // validate email
  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('inputEmail').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
  }
 // if email is not valid
 if(!(email.value.match(emailformat))) {
    email.style.border = "2px solid red";
    document.getElementById('inputEmail').style.color = "red";
    email_error.textContent = 'Please enter a valid email';
    fname.focus();
    return false;
  } 
  // validate password
  if (password.value == "") {
    password.style.border = "2px solid red";
    document.getElementById('inputPassword').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // validate password length
  if (password.value.length < 5) {
    password.style.border = "2px solid red";
    document.getElementById('inputPassword').style.color = "red";
    password_error.textContent = "Password must be at least 5 characters";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value !== password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('confirmPassword').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }
}
// event handler functions

function usernameVerify() {
  if ((username.value !== "") && (username.value.indexOf(' ') == -1)) {
   username.style.border = "2px solid #46B32A";
   document.getElementById('inputUsername').style.color = "#46B32A";
   username_error.innerHTML = "";
   return true;
  }
}
function emailVerify() {
  if ((email.value !== "") && (email.value.match(emailformat))) {
  	email.style.border = "2px solid #46B32A";
  	document.getElementById('inputEmail').style.color = "#46B32A";
  	email_error.innerHTML = "";
  	return true;
  }
}
function passwordVerify() {
  if (password.value !== "") {
  	document.getElementById('confirmPassword').style.color = "#46B32A";
  	document.getElementById('inputPassword').style.color = "#46B32A";
  	password_error.innerHTML = "";
  	return true;
  }
  if ((password.value === password_confirm.value) && (password.value > 5)) {
  	password.style.border = "2px solid #46B32A";
  	document.getElementById('confirmPassword').style.color = "#46B32A";
  	password_error.innerHTML = "";
  	return true;
  }
}