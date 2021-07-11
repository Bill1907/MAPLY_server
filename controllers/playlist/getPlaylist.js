const { models } = require('../../models')

module.exports = async (req, res) => {
    await models.playlist.get(req.params.userId, (error, result) => {
        if (error) {
            res.status(404).send('No orders found.');
        } else {
            res.status(200).json("success");
        }
    })
    // res.json(`${req.params.userId} get playlist`)
};