const models = require('../../models')

module.exports = (req, res) => {
    console.log(req.params.user_id)
    models.playlist.get(req.params.user_id, (error, result) => {
        if (error) {
            res.status(404).send('No orders found.');
        } else {
            res.status(200).json(result);
        }
    })
};