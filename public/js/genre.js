$(document).ready(function() {
    // Getting references to our form and inputs
    var textAreaComment = $("#new-comment");
    var textAreaAuthor = $("#auth-name");
    var addComment = $("#add-comment");
  
    // When the form is submitted, we validate there's an email and password entered
    addComment.on("submit", function(event) {
      event.preventDefault();
      var userComment = {
        comment: textAreaComment.val().trim(),
        authorName: textAreaAuthor.val().trim()
      };
  
      if (!userData.email) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userComment.comment, userComment.authorName);
      textAreaComment.val("");
      textAreaAuthor.val("");
    });
    
    function viewGenre(){
      $.get("/api/genre", {
        genreName: genreName,
        genreDescription: genreDescription
      })
    }


    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function addCommentByAuthor(comment, authorName) {
      $.post("/api/login", {
        comment: comment,
        authorName: authorName
      })
        .then(function() {
          window.location.replace("/index");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  