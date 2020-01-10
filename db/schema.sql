DROP DATABASE IF EXISTS genre_database;
CREATE DATABASE genre_database;

USE genre_database;

CREATE TABLE genreID(
  id INTEGER AUTO_INCREMENT NOT NULL,
  genreName VARCHAR(25),
  genreDecription VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE genreName(
  id INTEGER AUTO_INCREMENT NOT NULL,
  genreNameID VARCHAR(25),
  commenterName VARCHAR(255),
  commentText VARCHAR(255),
  mediaLink VARCHAR(255),
  PRIMARY KEY (id)
);