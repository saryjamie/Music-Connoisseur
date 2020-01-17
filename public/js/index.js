$(document).ready(function() {

    $("#button-addon2").on("click", function(event) {
        console.log("**** it's working");
        var getGenre = $("#get-genre");
        var genre = getGenre.val().trim();
        console.log(genre);
        
        var message = document.querySelector(".invalid-message");
    

        // if (genre === null || genre === "" ){
        // message.innerHTML = "Invalid input. Please try again!";
        // }
        // else {
        // window.location.href = '../notFound.html';
        // };
    });

});