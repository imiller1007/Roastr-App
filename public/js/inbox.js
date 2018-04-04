$(document).ready(function() {
 
    // FIXXXX
    // Our new todos will go inside the todoContainer
    var $todoContainer = $(".todo-container");
    // Adding event listeners for deleting, editing, and adding todos
    $(document).on("click", "button.delete", deleteTodo);
    //$(document).on("click", "button.complete", toggleComplete);
    //$(document).on("click", ".todo-item", editTodo);
    
  
    // This function grabs todos from the database and updates the view
    function getRoasts() {
      $.get("//api/roast", function(data) {
          //HOW TO JUST GET THE USERID2
        roast = data;
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
      }).then(getTodos);
    }
  
    // This function constructs a todo-item row
    // coincides with the html index.html line 15
    function createNewRow(todo) {
      var $newInputRow = $(
        [
          "<li class='list-group-item todo-item'>",
          "<span>",
          todo.text,
          "</span>",
          "<input type='text' class='edit' style='display: none;'>",
          "<button class='delete btn btn-default'>x</button>",
          "</li>"
        ].join("")
      );
  
      $newInputRow.find("button.delete").data("id", todo.id);
      return $newInputRow;
    }
  
  
  });
  