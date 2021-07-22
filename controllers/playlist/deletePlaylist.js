const models = require('../../models');

module.exports = async (req, res) => {
    res.json(`${req.params.playlist_id} delete playlist`)
}