var userInfo;


$.get("/api/sessioninfo", function(data){
   userInfo = data;
   

$("#userImageDiv").html("<img src= '" + userInfo.imgURL + "' class='img-responsive img-circle' alt='Responsive image'>")
$("#sideName").html("<h1>" + userInfo.username + "</h1>")
$("#score").html("Score: " + userInfo.score)

$.get("/api/inbox-roasts/" + userInfo.id, function(data){
  

})

});



























// $(document).ready(function() {
 
//     // FIXXXX
//     // Our new todos will go inside the todoContainer
//     var $roastContainer = $(".roast-container");
//     // Adding event listeners for deleting, editing, and adding roasts
//     $(document).on("click", "button.delete", deleteRoast);
   
//      // This function resets the roasts displayed with new roasts from the database
//   function initializeRows() {
//     $roastContainer.empty();
//     var rowsToAdd = [];
//     for (var i = 0; i < roast.length; i++) {
//       rowsToAdd.push(createNewRow(roast[i]));
//     }
//     $roastContainer.prepend(rowsToAdd);
//   }
  
//     // This function grabs roasts from the database and updates the view
//     function getRoasts(id) {
//       $.get("/api/select-roast/" + id, function(data) {
//           //HOW TO JUST GET THE USERID2
//         roast = data.userid2;
//         initializeRows();
//       });
//     }
  
//     // This function deletes a todo when the user clicks the delete button
//     function deleteRoast(event) {
//       event.stopPropagation();
//       var id = $(this).data("id");
//       $.ajax({
//         method: "DELETE",
//         url: "/api/roast/:id" + id
//       }).then(getRoast);
//     }
  
//     // This function constructs a roast-item row
//     // coincides with the html index.html line 15
//     function createNewRow(roast) {
//       var $newInputRow = $(
//         [
//           "<li class='list-group-item roast-item'>",
//           "<span>",
//           roast.userid2,
//           "</span>",
//           "<input type='text' class='edit' style='display: none;'>",
//           "<button class='delete btn btn-default'>x</button>",
//           "</li>"
//         ].join("")
//       );
  
//       $newInputRow.find("button.delete").data("id", roast.id);
//       return $newInputRow;
//     }
  
  
//   });
  