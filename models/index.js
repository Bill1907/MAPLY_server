const db = require("../db");

module.exports = {
  playlist: {
    get: (userId, callback) => {
      // TODO: 해당 유저가 작성한 모든 주문을 가져오는 함수를 작성하세요
      const queryString = `SELECT * FROM MAPLY.playlist`;

      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, result);
      });
    },
    post: (userId, callback) => {
      // 
      const queryString = ``;
      const params = [userId];

      db.query(queryString, params, (error, result) => {
        callback(error, null);
      });
    },
    delete: (userId, callback) => {
        // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
        const queryString = ``;
        const params = [userId];
  
        db.query(queryString, params, (error, result) => {
          callback(error, null);
        });
      },
    patch: (userId, callback) => {
    // TODO: 해당 유저의 주문 요청을 데이터베이스에 생성하는 함수를 작성하세요
    const queryString = ``;
    const params = [userId];

    db.query(queryString, params, (error, result) => {
        callback(error, null);
    });
    },
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