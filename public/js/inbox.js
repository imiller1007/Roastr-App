$(document).ready(function() {
 
    // FIXXXX
    // Our new todos will go inside the todoContainer
    var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteRoast);
    //$(document).on("click", "button.complete", toggleComplete);
    //$(document).on("click", ".todo-item", editTodo);
    
  
    // This function grabs todos from the database and updates the view
    function getRoasts() {
      $.get("/api/roast", function(data) {
          //HOW TO JUST GET THE USERID2
        roasts = data;
        initializeRows();
      });
    }
  
    // This function deletes a todo when the user clicks the delete button
    function deleteRoast(event) {
      event.stopPropagation();
      var id = $(this).data("id");
      $.ajax({
        method: "DELETE",
        url: "/api/roast/:id" + id
      }).then(getRoasts);
    }
  
    // This function constructs a todo-item row
    // coincides with the html index.html line 15
    function createNewRow(roast) {
      var $newInputRow = $(
        [
          "<li class='list-group-item roast-item'>",
          "<span>",
          roast.text,
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
  