-- Created the DB "roaster" 

CREATE DATABASE roaster;
USE roaster;

-- Created the table "post table" 

CREATE TABLE posts (
  postid INT NOT NULL,
  userid VARCHAR(45) NULL,
  post VARCHAR( 100 ) NOT NULL,
  upVote Int( 10 ),
  downVote Int(10)
);

-- Created the table "user" 

CREATE TABLE users (
  userID INT NOT NULL,
  userName VARCHAR(45) NOT NULL,
  numPosts int NOT NULL,
  postsCount Int( 10 )
);