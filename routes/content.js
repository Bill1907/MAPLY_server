const express = require('express');
const router = express.Router();

const { createContent, deleteContent } = require('../controllers');

//POST  /content
router.post('/', createContent);

//DELETE /content/:content_id
router.delete('/:content_id', deleteContent);

module.exports = router;