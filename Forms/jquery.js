
$(document).ready(function(){
    $(".deleteLink").click(function(){
        var message = confirm("Do you want to delete?");
        if (message == true){
         $(this).parent().parent().parent().fadeOut();        
        } 
       return(message == false);
    })
});