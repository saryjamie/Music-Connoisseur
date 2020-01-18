INSERT INTO genre (name, description)
VALUES ("rock", "A style which drew heavily from the genres of blues, rhythm and blues, and from country music.");
INSERT INTO genre (name, description)
VALUES ("country", "Country music, also known as country and western, and hillbilly music, is a genre of popular music that originated in the Southern United States in the early 1920s. It takes its roots from genres such as American folk music and blues.
                The first generation emerged in the early 1920s, with Atlanta's music scene playing a major role in launching country's earliest recording artists. James Gideon Tanner was an American old-time fiddler and one of the earliest stars of what would come to be known as country music. His band, the Skillet Lickers, was one of the most innovative and influential string bands of the 1920s and 1930s. Its most notable members were Clayton McMichen, Dan Hornsby, Riley Puckett and Robert Lee Sweat. New York City record label Okeh Records began issuing hillbilly music records by Fiddlin' John Carson as early as 1923, followed by Columbia Records in 1924, and RCA Victor Records in 1927 with the first famous pioneers of the genre Jimmie Rodgers and the first family of country music The Carter Family. Many 'hillbilly' musicians, such as Cliff Carlisle, recorded blues songs throughout the 1920s.");
INSERT INTO genre (name, description)
VALUES ("blues", "A style which drew heavily from the genres of blues, rhythm and blues, and from country music.");
INSERT INTO genre (name, description)
VALUES ("reggae", "A style which drew heavily from the genres of blues, rhythm and blues, and from country music.");
INSERT INTO genre (name, description)
VALUES ("metal", "A style which drew heavily from the genres of blues, rhythm and blues, and from country music.");

INSERT INTO comment (commenterName, text, mediaLink)
VALUES ("Captain Falcon", "My favorite kind of music!", "https://www.youtube.com/results?search_query=rock");

SELECT * FROM genre;
SELECT * FROM comment;