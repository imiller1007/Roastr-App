var userInfo;


$.get("/api/sessioninfo", function(data){
   userInfo = data;
   
$("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive' alt='Responsive image'>")
$("#sideName").html("<h1>" + userInfo.username + "</h1>")
$("#score").html("Score: " + userInfo.score)

.get("/api/inbox-roasts/" + userInfo.id, function(data){
    console.log(data)
})

});

$

$.get("/api/all-roasts", function(data){
    for(var i = 0; i < data.length; i++){
        
        $("#roastContainer").append("<div class='roast col-xs-12 col-sm-12 col-md-12 col-lg-10 col-lg-offset-1'> <div class='title col-xs-12 col-sm-12 col-md-12 col-lg-12 '> <div class='title text-center'> <span class='roastr1'>" + data[i].roaster + "</span> <strong>VS</strong> <span class='roastr2'>" + data[i].responder + "</span> </div> </div> <div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 leftRoast'> <p>" + data[i].roast + "</p> </div> <div class='col-xs-6 col-sm-6 col-md-6 col-lg-6 rightRoast'> <p>" + data[i].response + "</p> </div> <div class='col-xs-12 col-sm-12 col-md-12 col-lg-12'> <div class='switch-toggle switch-3 switch-candy switch-candy-yellow'> <input id='on' name='state-d' type='radio' checked=''> <label for='on'> <em class='glyphicon glyphicon-fire'></em> <span id='countB'>" + data[i].roastTotal + "</span> </label> <input id='na' name='state-d' type='radio' disabled checked='checked'> <label for='na' onclick=''> <span class='glyphicon glyphicon-menu-left'></span>Vote <span class='glyphicon glyphicon-menu-right'></span> </label> <input id='off' name='state-d' type='radio'> <label for='off'> <span id='countB'>" + data[i].responseTotal + "</span>  <em for='on' class='glyphicon glyphicon-fire'></em> </label> <a></a> </div> </div> </div> <br>")
    }

})



