const models = require('../../models');

module.exports = async (req, res) => {
    // 플레이 리스트에 정보를 추가 / 삭제하는 기능..
    models.content.post()
    res.json(`${req.params.playlist_id} modify playlist`)
}