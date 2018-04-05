var userInfo;
$.get("/api/sessioninfo", function(data){
    userInfo = data;
    $("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>");
    $("#sideName").html("<h1>" + userInfo.username + "</h1>");
    $("#score").html("Score: " + userInfo.score);
    console.log("userInfo.id = " + userInfo.id);
    $.get("/api/inbox-roasts/" + userInfo.id, function(results){
        console.log(results);
        for (var i = 0; i < results.length; i++) {
            $("#inboxTable").append("<tr value='" + i + "'><th scope='row'><span class='glyphicon glyphicon-fire' aria-hidden='true'></span></th><td>From</td><td><div class='img-table'><img id='small' alt='nothing'></div></td><td>"+results[i].roaster+"</td><td><div class='btn-group'><button class='btn-default btn dropdown-toggle ' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Respond <span class='caret'></span></button><ul class='dropdown-menu'><form><div class='form-group'><textarea id='roastHere' class='form-control roastTextarea' rows='4' placeholder='Roast here.'></textarea></div></form></ul></div></td><td><a id='inboxSubmit'>Submit</a></td><td><a id='inboxIgnore'>Ignore</a></td></tr>");
            $("#inboxSubmit").on("click", function(){
                var complete = {
                    roastid: results[i].id,
                    userid1: results[i].userid1,
                    userid2: results[i].userid2,
                    roaster: results[i].roaster,
                    responder: results[i].responder,
                    roast: $("#roastHere").val()
                }
            });
        }
    });
    console.log("COMPLETE: " + complete);
    $.post("/api/new-complete", complete).then(
    
        console.log(complete);
    );
});