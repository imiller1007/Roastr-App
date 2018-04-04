$(document).ready(function() {
    var userInfo;
    $.get("/api/sessioninfo", function(data){
        userInfo = data;
        console.log("userInfo.id = " + userInfo.id);
        
        var bodyInput = $("#body"); // Getting jQuery references to the post body, title, form, and friend select
        var cmsForm = $("#cms");
        var friendSelect = $("#friend"); 
        
        $(cmsForm).on("submit", handleFormSubmit); // Adding an event listener for when the form is submitted

        var url = window.location.search; // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
        var roastId;
        var friendId;
        var updating = false; // Sets a flag for whether or not we're updating a post to be false initially

        getFriends(); // Getting the friends, and their posts
        
// A function for handling what happens when the form to create a new post is submitted
        function handleFormSubmit(event) {  
            event.preventDefault();

// Wont submit the post if we are missing a body, title, or friend
            if (!bodyInput.val().trim() || !friendSelect.val()) {       
                return; 
            }

// Constructing a newRoast object to hand to the database
            var newRoast = {
                userid1: data.id,
                roast: bodyInput.val().trim(),
                userid2: friendSelect.val()
            };
            
// If we're updating a post run updatePost to update a post // Otherwise run submitRoast to create a whole new post
            if (updating) {
                newRoast.id = roastId;
                updatePost(newRoast);
            }
            else {
                submitRoast(newRoast);
            }
        }

// Submits a new post and brings user to blog page upon completion
        function submitRoast(roast) {
            $.post("/api/roasts", roast, function() {
                window.location.href = "/main";
            });
        }

// Gets post data for the current post if we're editing, or if we're adding to an friend's existing posts
        function getRoastData(id) {
            var queryUrl;
            queryUrl = "/api/roasts/" + id;
        }
        $.get(queryUrl, function(data) {
            if (data) {
                console.log(data.UserId || data.id);
                // If this post exists, prefill our cms forms with its data
                bodyInput.val(data.body);
                friendId = data.FriendId || data.id;
                // If we have a post with this id, set a flag for us to know to update the post when we hit submit
                updating = true;
            }
        });
        
// A function to get friends and then render our list of friends
        function getFriends() {
            $.get("/api/users", renderFriendList);
        }
        function renderFriendList(data) {
            if (!data.length) {
                window.location.href = "/users";
            }
            $(".hidden").removeClass("hidden");
            var rowsToAdd = [];
            for (var i = 0; i < data.length; i++) {
                rowsToAdd.push(createFriendRow(data[i]));
            }
            friendSelect.empty();
            console.log(rowsToAdd);
            console.log(friendSelect);
            friendSelect.append(rowsToAdd);
            friendSelect.val(friendId);
        }
        
// Creates the friend options in the dropdown
        function createFriendRow(friend) {
            var listOption = $("<option>");
            listOption.attr("value", friend.id);
            listOption.text(friend.username);
            return listOption;
        }
        
// Update a given post, bring user to the blog page when done
        function updatePost(roast) {
            $.ajax({
                method: "PUT",
                url: "/api/roasts",
                data: roast
            })
            .then(function() {
                window.location.href = "/main";
            });
        }
    });
});