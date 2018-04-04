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

    event.preventDefault();

    var chosenUser = $("#loginName").val().trim()
    var chosenPass = $("#loginPassword").val().trim()
    $.get("/api/users/" + chosenUser, function(data) {
        console.log(data);
    if (!data || chosenPass !== data.password) {
        alert("Username/password is incorrect. Please try again.")
        }
    if(chosenUser === data.username && chosenPass === data.password){
        console.log("Success!");
        window.location.href = '/main';
    }

})




});



});
