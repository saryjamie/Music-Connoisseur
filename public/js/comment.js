$(function() {
    
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newComment = {
        commenterName: ("#commenterName").val().trim(),
        comment:("#newComment").val().trim(),
        mediaLink:("#mediaLink").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/comments", {
        type: "POST",
        data: newComment
      }).then(
        function() {
          console.log("Created A New Comment:" + newComment);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });