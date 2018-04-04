var userInfo;


$.get("/api/sessioninfo", function(data){
   userInfo = data;
   console.log(userInfo)
if (userInfo){
$("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>")
$("#sideName").html("<h1>" + userInfo.username + "</h1>")
$("#score").html("score: " + userInfo.score)


}
else{
    window.location.href = '/';
}

});

$.get("/api/all-roasts", function(data){
    console.log(data)
})


