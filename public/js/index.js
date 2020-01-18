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
            else if(genre === "metal"){
                window.location.href = '../genre.html';
            }
            else if(genre === "jazz"){
                window.location.href = '../genre.html';
            }
            else if(genre === "punk"){
                window.location.href = '../genre.html';
            }
            else if(genre === "hip hop"){
                window.location.href = '../genre.html';
            }
            else if(genre === "rock"){
                window.location.href = '../genre.html';
            }
            else if(genre === "r & b" || "r&b" || "rhythm & blues"){
                window.location.href = '../genre.html';
            }
            else if(genre === "blues"){
                window.location.href = '../genre.html';
            }
            else if(genre === "house"){
                window.location.href = '../genre.html';
            }
            else if(genre === "classical"){
                window.location.href = '../genre.html';
            }
            else if(genre === "regae"){
                window.location.href = '../genre.html';
            }
            else if(genre === "folk"){
                window.location.href = '../genre.html';
            }
            else if(genre === "swing"){
                window.location.href = '../genre.html';
            }
            else if(genre === "emo"){
                window.location.href = '../genre.html';
            }
            else if(genre === "pop"){
                window.location.href = '../genre.html';
            }
            else {
            window.location.href = '../notFound.html';
            }; 
    });

    $("#metalBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#jazzBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#punkBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#hiphopBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#rockBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#rbBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })    
    $("#bluesBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#houseBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#classicalBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })    
    $("#countryBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#regaeBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#folkBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })    
    $("#swingBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#emoBtn").on("click", function(event){
        console.log("**** country btn works!!");
        window.location.href = '../genre.html';
    })
    $("#popBtn").on("click", function(event){
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