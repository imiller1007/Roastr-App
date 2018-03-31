-- Created the DB "post table" 
CREATE DATABASE post_table;
USE post_table;

-- Created the table "post table" 
CREATE TABLE burgers (
  postID Int( 10 ) AUTO_INCREMENT NOT NULL,
  userID VARCHAR( 10 ) NOT NULL,
  post VARCHAR NOT NULL,
  upVote Int( 10 ),
  downVote Int(10)
);

-- Created the DB "user table" 
CREATE DATABASE user_table;
USE user_table;

-- Created the table "user" 
CREATE TABLE users (
  userID Int( 10 ) AUTO_INCREMENT NOT NULL,
  userName VARCHAR( 100 ) NOT NULL,
  numPosts VARCHAR NOT NULL,
  postsCount Int( 10 ),
);