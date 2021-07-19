const db = require("../db");

module.exports = {
  playlist: {
    get: (userId, callback) => {
      // UserId에 맞는 플레이 리스트 정보 가져오기
      const queryString = `SELECT * FROM content 
      INNER JOIN playlist ON (content.id = playlist.content_id) 
      WHERE (playlist.user_id = ?)`;

      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, callback) => {
      // UserId에 맞는 플레이 리스트 만들기
      const queryString = `INSERT INTO playlist (name, , social) VALUES ('${nickname}', '${email}', '${social}')`;
      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, null);
      });
    },
    delete: (playlistId, callback) => {
        // 플레이 리스트를 삭제시
        const queryString = ``;
        const params = [playlistId];
  
        db.query(queryString, params, (error, result) => {
          callback(error, null);
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
    post : () => {

    },
    delete: () => {

    },
    patch: () => {

    }
  },
  users: {
    get: (callback) => {
      // get user infomation 
      const queryString = `SELECT * FROM users`;

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