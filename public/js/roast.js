var userInfo;


$.get("/api/sessioninfo", function(data){
   userInfo = data;
   console.log(userInfo)

$("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>")
$("#sideName").html("<h1>" + userInfo.username + "</h1>")
$("#score").html("score: " + userInfo.score)


});


var selectedUser;

$.get("api/all-users", function(data){
    console.log(data)
    for(var i = 0; i < data.length; i++){
        $("#roasters").append("<li> <a href=# data-value=" + data[i].username + ">" + data[i].username + "</a> </li>")
    }
})

$(document).on("click", "#roasters li a", function(event){
    event.preventDefault();
    $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    selectedUser = $(this).data('value');
  });



$("#roastButton").on("click", function(){
    
})








$("#roastButton").on("click", function(){

})