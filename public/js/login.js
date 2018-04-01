$(document).ready(function() {

$("#signupButton").on("click", function(){
    
    event.preventDefault();

    var newUser = {
    username: $("#signupUsername").val().trim(),
    password: $("#signupPassword").val().trim(),
    imgURL: $("#signupPic").val().trim()
    }

    $.get("api/all-users", function(data){
        for(var i = 0; i < data.length; i++){
            console.log(data[i].username)
            if(newUser.username === data[i].username){
                alert("already exists")
            }
            else{
                $.post("/api/new-user", newUser)
            }
        }
            

            // if (newUser.username === data[i].username){
            //     alert("This username has been taken. Please enter a different one.")
            // }
            // else if (newUser.username !== data[i].username){
            //     // Send an AJAX POST-request with jQuery
            //     $.post("/api/new-user", newUser)
            // }
        })
        
    })

    
});



