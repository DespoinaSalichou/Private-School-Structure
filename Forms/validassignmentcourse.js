function validate(event) {
    var titleassignment = document.getElementById("titleassignment");
    var description = document.getElementById("description");
    var title = document.getElementById("title");
    var stream = document.getElementById("stream");
    var type =document.getElementById("type");
    

    if (!titleassignment.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("titleassignmentValidation").innerHTML = titleassignment.validationMessage;
    }
    else
    {
        document.getElementById("titleassignmentValidation").innerHTML = "";
    }

    
    if (!description.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("descriptionValidation").innerHTML = description.validationMessage;
    }
    else
    {
        document.getElementById("descriptionValidation").innerHTML = "";
    }
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
}