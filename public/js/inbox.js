$(document).ready(function() {

  var userInfo;
  $.get("/api/sessioninfo", function(data){
     userInfo = data;
     console.log(userInfo)
    getRoasts(userInfo.id)
  });

 
    // FIXXXX
    // Our new todos will go inside the todoContainer
    var $roastContainer = $(".roast-container");
    // Adding event listeners for deleting, editing, and adding roasts
    $(document).on("click", "button.delete", deleteRoast);
   
     // This function resets the roasts displayed with new roasts from the database
  function initializeRows(roast) {
    $roastContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < roast.length; i++) {
      rowsToAdd.push(createNewRow(roast[i]));
    }
    $roastContainer.prepend(rowsToAdd);
  }
  
    // This function grabs roasts from the database and updates the view
    function getRoasts(id) {
      console.log(id)
      $.get("/api/inbox-roasts/" + id, function(data) {
          //HOW TO JUST GET THE USERID2
        roast = data;
        initializeRows(roast);
      });
    }
  
    // This function deletes a todo when the user clicks the delete button
    function deleteRoast(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
<<<<<<< HEAD
        url: "/api/roast/:id" + id
      }).then(getRoasts);
=======
        url: "/api/del-roast/" + id
      }).then( location.reload());
>>>>>>> master
    }
  
////////// CREATE A LINK TO GET TO THE RESPONSE PAGE




    // This function constructs a roast-item row
    // coincides with the html index.html line 15
    function createNewRow(roast) {
      console.log(roast)
      var $newInputRow = $(
        [
          "<li class='list-group-item roast-item'>",
          "<span>",
<<<<<<< HEAD

          roast.userid2,
=======
          "you got a roast from " + roast.userid2,
>>>>>>> master
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-default'>x</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", roast.id);
      return $newInputRow;
    }
  
  
  });
  