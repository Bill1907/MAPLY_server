CREATE TABLE users (
  id INT AUTO_INCREMENT,
  username varchar(255),
  email varchar(255),
  social varchar(255),
  token varchar(255),
  PRIMARY KEY (id)
);

CREATE TABLE playlist (
  id INT AUTO_INCREMENT,
  user_id INT,
  name varchar(225),
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE content (
  id INT AUTO_INCREMENT,
  playlist_id INT,
  video_id varchar(225),
  title varchar(225),
  thumbnail varchar(225),
  PRIMARY KEY (id)
);

ALTER TABLE playlist ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE content ADD FOREIGN KEY (playlist_id) REFERENCES playlist (id);