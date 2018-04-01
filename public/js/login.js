$(document).ready(function() {

$("#signupButton").on("click", function(){
    
    event.preventDefault();

    var newUser = {
    username: $("#signupUsername").val().trim(),
    password: $("#signupPassword").val().trim(),
    imgURL: $("#signupPic").val().trim()
    }
    // Send an AJAX POST-request with jQuery
     $.post("/api/new-user", newUser)
});



});