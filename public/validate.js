function() {
  var img = document.getElementById('header').firstChild;
  img.onload = function() {
    if (img.height > img.width) {
      img.height = '100%';

      img.width = 'auto';
    }
  };

}

function inputdetails() {
  var success = false;
  var username = document.register.name.value;
  var email = document.register.email.value;
  var pwd = document.register.password.value;
  var confirm = document.register.confirm.value;

  if (username == null || username == "") {
    window.alert("Name cant be blank");
    name.focus();
    success = false;
    return false;
  } else {
    success = true;
  }
  if (email == null || email == "") {
    window.alert("Please Enter your Email");
    email.focus();
    success = false;
    return false;
  } else {
    success = true;
  }
  if (pwd.length < 6) {
    window.alert("Password must be at least 6 characters long.");
    return false;
    success = false;
  } else {
    success = true;
  }
  if (confirm == null || confirm == "") {
    window.alert("Please Confirm your Password");
    confirm.focus();
    success = false;
    return false;
  } else {
    success = true;
  }
  if (pwd == confirm) {
    return true;
    success = true;
  } else {
    window.alert("Passwords Do Not Match!")
    return false;
    success = false;
  }
  if (success == true) {
    <
    a href = "www.google.com" > < /a>
  }

}

function validatelogin() {
  var mail = document.login.email.value;
  if (mail == null) {
    alert("Name cant be blank");
    return false;
  }
}
