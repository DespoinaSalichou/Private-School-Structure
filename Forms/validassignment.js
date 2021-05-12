function validate(event) {
    var titleassignment = document.getElementById("titleassignment");
    var description = document.getElementById("description");
    var subdatetime =document.getElementById("subdatetime");
    var oralmark =document.getElementById("oralmark");
    var totalmark =document.getElementById("totalmark");

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


    if (!subdatetime.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("subdatetimeValidation").innerHTML = subdatetime.validationMessage;
    }
    else
    {
        document.getElementById("subdatetimeValidation").innerHTML = "";
    }


    if (!oralmark.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("oralMarkValidation").innerHTML = oralmark.validationMessage;
    }
    else
    {
        document.getElementById("oralMarkValidation").innerHTML = "";
    }


    if (!totalmark.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("totalMarkValidation").innerHTML = totalmark.validationMessage;
    }
    else
    {
        document.getElementById("totalMarkValidation").innerHTML = "";
    }
}