DROP DATABASE IF EXISTS genre_database;
CREATE DATABASE genre_database;

USE genre_database;

CREATE TABLE genre(
  id INTEGER AUTO_INCREMENT NOT NULL,
  name VARCHAR(25),
  description VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE comment(
  id INTEGER AUTO_INCREMENT NOT NULL,
  commenterName VARCHAR(255),
  text VARCHAR(255),
  mediaLink VARCHAR(255),
  PRIMARY KEY (id)
);