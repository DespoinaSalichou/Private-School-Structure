function validate(event){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var title = document.getElementById("title");
    var stream = document.getElementById("stream");
    var type =document.getElementById("type");
    if (!firstname.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("firstnameValidation").innerHTML = firstname.validationMessage;
    }
    else
    {
        document.getElementById("firstnameValidation").innerHTML = "";
    }
    if (!lastname.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("lastnameValidation").innerHTML = lastname.validationMessage;
    }
    else
    {
        document.getElementById("lastnameValidation").innerHTML = "";
    }
    if (!title.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("titleValidation").innerHTML = title.validationMessage;
    }
    else
    {
        document.getElementById("titleValidation").innerHTML = "";
    }
    if (!stream.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("streamValidation").innerHTML = stream.validationMessage;
    }
    else
    {
        document.getElementById("streamValidation").innerHTML = "";
    }
    if (!type.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("typeValidation").innerHTML = type.validationMessage;
    }
    else
    {
        document.getElementById("typeValidation").innerHTML = "";
    }
}