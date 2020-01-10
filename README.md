# Music Connoisseur



A music clarifier, with an option for user feedback. Have a huge list of genres of music and let the user decide which genre to look up for information about. If the genre the user is trying to look up is not to be found, the user can add the genre to the database with his\her own explanation of it. When the user gets to the landing page of the chosen music genre, he\she will then be able to provide comments\personal clarification and links to their favorite songs (like to YouTube) (pertaining to that genre). We can use the music\song API we used in class to show the top 5000 songs if we want, or any other API we find that is related. Also have a login page to verify user credentials so that the user's username will be posted along with their comment.

Comment table: genreID (foreign key (hasMany, or belongsTo in MySql)), commentorName (string), commentText(string), mediaLink (string), votes
Genre table: genreName, genreDescription

Main page: list genres (buttons? drop down?), search genres bar
After clicking into a genre... need a button for: add comment
IF GENRE IS NOT FOUND: Add new genre button: add genre name, add description

Also on the same page as the "GENRE NOT FOUND" have the option to Search Genres again


