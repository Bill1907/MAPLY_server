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
  content_id INT,
  created_at datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE content (
  id INT AUTO_INCREMENT,
  content_repo varchar(225),
  PRIMARY KEY (id)
);

ALTER TABLE playlist ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE playlist ADD FOREIGN KEY (content_id) REFERENCES content (id);