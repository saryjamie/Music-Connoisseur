$(document).ready(function() {
    // Getting references to our form and inputs
    var searchInput = $("form-control");

        const searchBtn = document.getElementById("button-addon2");

            searchBtn.addEventListener("click", function(event){
                event.preventDefault();
                var seach = initialsEl.value;
                if (searchInput.value == '' || searchInput.value == null){
                    resultEl.innerHTML = "<p style= 'color: red;'>Invalid input!</p>";
                }
                else{
                window.location = "index.html";
                localStorage.setItem('userInitial', JSON.stringify(userIn));
                highScore();
                }
            });

});
