const express = require('express');
const router = express.Router();

const { createContent, deleteContent } = require('../controllers');

router.post('', createContent);

router.delete('', deleteContent);

module.exports = router;