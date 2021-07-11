const { models } = require('../../models');

module.exports = async (req, res) => {
    const result = models.users.get((err) => console.log(err))
    res.send({result})
}