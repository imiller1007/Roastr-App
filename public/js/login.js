$(document).ready(function() {

$("#signupButton").on("click", function(){
    
    event.preventDefault();

    var newUser = {
    username: $("#signupUsername").val().trim(),
    password: $("#signupPassword").val().trim(),
    imgURL: $("#signupPic").val().trim()
    }

    // if(len(username) < 5 || len(username) > 30){
    //     alert("Your username may be too long or too short. It must be 5-30 characters.")
    // }
    // else if(len(password) < 8 || len(password) > 16){
    //     alert("Your password may be too long or too short. It must be 8-16 characters.")
    // }
    // else if(imgURL === ""){
    //     alert("Please input an image address.")
    // }
    
    
    $.post("/api/new-user", newUser).then(function(response){
        console.log(response);
        if (response.errors){
            
            alert(response.errors[0].message);
        }
        else {
            console.log("nad");
           window.location.href = '/main'; 
        }
    })

    
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
