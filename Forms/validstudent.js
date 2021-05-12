function validate(event) {
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var dateofbirth = document.getElementById("dateofbirth");
  var tuitionfees = document.getElementById("tuitionfees");

  if (!firstname.checkValidity()) {
    event.preventDefault();
    document.getElementById("firstnameValidation").innerHTML =firstname.validationMessage;
  } else {
    document.getElementById("firstnameValidation").innerHTML = "";
  }
  if (!lastname.checkValidity()) {
    event.preventDefault();
    document.getElementById("lastnameValidation").innerHTML = lastname.validationMessage;
  } else {
    document.getElementById("lastnameValidation").innerHTML = "";
  }
  if (dateofbirth.value === "") 
  {
    document.getElementById("dateofbirthValidation").innerHTML = dateofbirth.validationMessage;
    event.preventDefault();
  } 
  else 
  { document.getElementById("dateofbirthValidation").innerHTML = "";
    var now = new Date();
    var dateofbirthobject = new Date(dateofbirth.value);
    if (now.getFullYear() - dateofbirthobject.getFullYear() <= 15 || now.getFullYear() - dateofbirthobject.getFullYear() >= 60) {
      var dataerror =
        "The date of birth is not valid. The age must be over 15 years old and under 60.";
      document.getElementById("dateofbirthValidation").innerHTML = dataerror;
      event.preventDefault();
    }
  }

  if (!tuitionfees.checkValidity()) 
  {
    event.preventDefault();
    document.getElementById("tuitionfeesValidation").innerHTML = tuitionfees.validationMessage;
  } 
  else {
    document.getElementById("tuitionfeesValidation").innerHTML = "";
  }


}
