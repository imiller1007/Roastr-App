$(document).ready(function() {
    
  
    // Our initial roasts array
    var roasts = [];
  
    // Getting todos from database when page loads
    getRoasts();
  
    // This function resets the roasts displayed with new roasts from the database
    function initializeRows() {
      $message-container.empty();
      var rowsToAdd = [];
      for (var i = 0; i < roasts.length; i++) {
        rowsToAdd.push(createNewRow(roasts[i]));
      }
      $message-container.prepend(rowsToAdd);
    }
  
    // This function grabs roasts from the database and updates the view
    function getRoasts() {
      $.get("/api/all-roasts", function(data) {
        roasts = data;
        initializeRows();
      });
    }
  
    // This function deletes a roasts when the user clicks the delete button
    function deleteRoast(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/del-roast/:id"
        // this was url: "/api/del-roast/" + id
      }).then(getRoasts);
    }

  });
  