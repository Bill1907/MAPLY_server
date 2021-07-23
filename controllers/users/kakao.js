const axios = require("axios");
const models = require("../../models");

module.exports = async (req, res) => {
  try {
    const code = req.query.code;
    await axios
      .post(
        "https://kauth.kakao.com/oauth/token",
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            Accept: "*/*",
          },
        },
        {
          params: {
            grant_type: "authorization_code",
            client_id: "54618c4784d8b771e05ab347f3072df8",
            redirect_uri: "http://localhost:3000",
            code,
            client_secret: "AHyyrZUrytH0QNUWLtxts4FVs6T4ZF60",
          },
        }
      )
      .then(async (response) => {
        const accessToken = response.data.access_token;
        const userinfo = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { nickname } = userinfo.data.kakao_account.profile;
        const email = userinfo.data.kakao_account.email || " ";
        const userData = {
          nickname,
          email,
          social: "kakao",
        };
        // 데이터베이스에 사용자 정보 저장.
        // get을 사용해서 유저가 있으면 유저 정보가 있으면 리절트를 리턴해주고 없으면 post로 가서 만들어서 리턴해준다. 
        models.users.get(userData, (error, result) => {
          if (!error) {
            if (result.length === 0){
              models.users.post(userData, (error, result2) => {
                if (!error) {
                  res.send(result2);
                } else {
                  res.status(404).send('좋은 노래 추천해주면 로그인 시켜드림');
                }
              });
            } else { 
              res.send({ ...result, accessToken })
            }
          } else {
            console.log(error);
          }
        });
      });
    // .catch(err => console.log({err}))
  } catch (error) {
    res.status(400).send(error);
  }
};
