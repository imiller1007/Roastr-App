$(document).ready(function() {

$("#signupButton").on("click", function(){
    
    event.preventDefault();

    var newUser = {
    username: $("#signupUsername").val().trim(),
    password: $("#signupPassword").val().trim(),
    imgURL: $("#signupPic").val().trim()
    }

    $.post("/api/new-user", newUser)

});

    
   


$("#loginButton").on("click", function(){
    var chosenUser = $("#loginName").val().trim()
    var chosenPass = $("#loginPass").val().trim()



})




});




