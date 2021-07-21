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
        const { email } = userinfo.data.kakao_account;
        const userData = {
          nickname,
          email,
          accessToken,
          social: "kakao",
        };

        // console.log(userData);
        //데이터 베이스에 사용자 있는지 확인 후

        // 데이터베이스에 사용자 정보 저장.
        models.users.post(userData, (error, result) => {
          if (!error) {
            console.log(result);
          } else {
            console.log(error);
          }
        });
        res.send({ userData });
      });
    // .catch(err => console.log({err}))
  } catch (error) {
    res.status(400).send(error);
  }
};
