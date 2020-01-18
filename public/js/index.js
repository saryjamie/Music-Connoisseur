$(document).ready(function() {

    $("#button-addon2").on("click", function(event) {
        console.log("**** it's working");
        var getGenre = $("#get-genre");
        var genre = getGenre.val().trim();
        console.log(genre);


        var message = document.querySelector(".invalid-message");
        if (genre === null || genre === "" ){
            message.innerHTML = "Invalid input. Please try again!";
            }
            else if(genre === "country"){
                window.location.href = '../genre.html';
            }
            else {
            window.location.href = '../notFound.html';
            }; 
    });

    $("#countryBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })

        // invalidMsg();
        // callGenre();
        // const callGenre = function(){
        //     $.ajax({
        //         method: "GET",
        //         url: "/api/genre/" + genre
        //     })
        //     .then(window.location.replace("/genre"));
        // }

                // window.location.replace("/genre");
                // If there's an error, log the error
            // })
            // .catch(function(err) {
            //     console.log(err);

        });