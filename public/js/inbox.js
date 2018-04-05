var userInfo;

$.get("/api/sessioninfo", function(data){
    userInfo = data;
    $("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>");
    $("#sideName").html("<h1>" + userInfo.username + "</h1>");
    $("#score").html("Score: " + userInfo.score);
    console.log("userInfo.id = " + userInfo.id);

    $.get("/api/inbox-roasts/" + userInfo.id, function(results){
        console.log(results);
        $("#roastCount").html(results.length);

        for (var i = 0; i < results.length; i++) {
            
            $("#inboxTable").append("<tr value='" + i + "'><th scope='row'><span class='glyphicon glyphicon-fire' aria-hidden='true'></span></th><td>From</td><td><div class='img-table'><img id='small' alt='nothing'></div></td><td>"
            +results[i].roaster
            +"</td><td><div class='btn-group'><button class='btn-default btn dropdown-toggle ' type='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Respond <span class='caret'></span></button><ul class='dropdown-menu'><form><div class='form-group'><textarea id='roastHere' class='form-control roastTextarea' rows='4' placeholder='Roast here.'></textarea></div></form></ul></div></td><td><a id='inboxSubmit'>Submit</a></td><td><a id='inboxIgnore'>Ignore</a></td></tr>");
            
            $.get("/api/all-users", function(res){
                for (var j = 0; j < res.length; j++){
                    $("#small").attr('src', "'" +res[j].imgURL + "'");
                }
            });

             $("#inboxIgnore").on("click", function(){
                 $.ajax({
                 method: "DELETE",
                 url: "/api/del-roast/" + results[i].id
                 })
             });

             $("#inboxSubmit").on("click", function(){
                 var roast = {
                     userid1: userInfo.id,
                     userid2: results[i].userid1,
                     roaster: results[i].roaster,
                     responder: userInfo.username,
                     roast: $("#roastHere").val()
                 }

                 $.put("/api/inbox-roasts/" + results[i].id, roast).then(function(response){
                     alert("Roast'd!").then(location.href = "/main");
                 })       
             });

        }
    });
});