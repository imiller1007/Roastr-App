var userInfo;
$.get("/api/sessioninfo", function(data){
   userInfo = data;

$("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>")
})


