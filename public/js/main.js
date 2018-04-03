var userInfo;
$.get("/api/sessioninfo", function(data){
   userInfo = data;

console.log("------------------------------------------")
console.log(userInfo)
console.log("------------------------------------------")

})

$("#userImageDiv").html("<img src= " + userInfo.imgURL + "class='img-responsive img-circle' alt='Responsive image'>")
