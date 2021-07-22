const express = require('express');
const router = express.Router();

const { createContent, deleteContent } = require('../controllers');

//POST  /content
router.post('/', createContent);

//DELETE /content/:playlist_id
router.delete('/:playlist_id', deleteContent);

module.exports = router;