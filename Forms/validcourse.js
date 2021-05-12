function validate(event) {
  var title = document.getElementById("title");
  var stream = document.getElementById("stream");
  var type = document.getElementById("type");
  var startdate = document.getElementById("startdate");
  var enddate = document.getElementById("enddate");

  if (!title.checkValidity()) {
    event.preventDefault();
    document.getElementById("titleValidation").innerHTML =
      title.validationMessage;
  } else {
    document.getElementById("titleValidation").innerHTML = "";
  }
  if (!stream.checkValidity()) {
    event.preventDefault();
    document.getElementById("streamValidation").innerHTML =
      stream.validationMessage;
  } else {
    document.getElementById("streamValidation").innerHTML = "";
  }
  if (!type.checkValidity()) {
    event.preventDefault();
    document.getElementById("typeValidation").innerHTML =
      type.validationMessage;
  } else {
    document.getElementById("typeValidation").innerHTML = "";
  }
  if (!startdate.checkValidity()) {
    event.preventDefault();
    document.getElementById("startdateValidation").innerHTML =
      startdate.validationMessage;
  } else {
    document.getElementById("startdateValidation").innerHTML = "";
  }
  if (!enddate.checkValidity()) {
    event.preventDefault();
    document.getElementById("enddateValidation").innerHTML =
    enddate.validationMessage;   
  } else {
    document.getElementById("enddateValidation").innerHTML = "";
  }

  

  
}   
