function validate(event){
    var firstname = document.getElementById("firstname");
    var lastname = document.getElementById("lastname");
    var subject =document.getElementById("subject");

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
    if (!subject.checkValidity()) 
    {
        event.preventDefault();
        document.getElementById("subjectValidation").innerHTML = subject.validationMessage;
    }
    else
    {
        document.getElementById("subjectValidation").innerHTML = "";
    }


}