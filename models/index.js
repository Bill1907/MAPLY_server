const db = require("../db");

module.exports = {
  
  playlist: {
    get: (userId, callback) => {
      // UserId에 맞는 플레이 리스트 정보 가져오기
      const queryString = `SELECT * FROM content 
      INNER JOIN playlist ON (content.playlist_id = playlist.id) 
      WHERE (playlist.user_id = ?)`;

      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    post: (playlist, callback) => {
      // UserId에 맞는 플레이 리스트 만들기
      // playlist는 객체로 받음.
      const { user_id, name } = playlist;
      const queryString = `INSERT INTO playlist (user_id, name) VALUES ('${user_id}', '${name}')`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    delete: (playlistId, callback) => {
      // 플레이 리스트를 삭제시
      const queryString = `DELETE FROM playlist WHERE (id = ?)`;
      const params = [playlistId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    patch: (playlistId, callback) => {
      // 플레이 리스트 안에서 정보를 추가하거나 삭제시(플레이 리스트 수정)
      const queryString = ``;
      const params = [playlistId];

      db.query(queryString, params, (error, result) => {
          callback(error, null);
      });
    },
  },
  
  content:{
    get : () => {
    },
    post : (content, callback) => {
      const { playlist_id, video_id, title, thumbnail } = content;
      const queryString = `INSERT INTO content (playlist_id, video_id, title, thumbnail) 
      VALUES ('${playlist_id}', '${video_id}', '${title}', '${thumbnail}')`;

      db.query(queryString, params, (error, result) => {
          callback(error, result);
      });
    },
    delete: (content_id, callback) => {
      const queryString = `DELETE FROM content WHERE id=${content_id}`;
      
      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    patch: () => {
    }
  },
  
  users: {
    get: (userData, callback) => {
      // get user infomation 
      const { nickname, email, social } = userData;
      const queryString = `SELECT * FROM users WHERE (username = '${nickname}' AND email = '${email}' AND social = '${social}')`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
    post: (user, callback) => {
      // create user infomation
      const { nickname, email, social } = user;
      const queryString = `INSERT INTO maply.users (username, email, social) VALUES ('${nickname}', '${email}', '${social}')`;

      db.query(queryString, (error, result) => {
        callback(error, result);
      });
    },
  },
};