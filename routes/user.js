const express = require('express');
const router = express.Router();
const { githubLogin, googleLogin, kakaoLogin, logout } = require('../controllers')
// POST user/github
router.post('/github', githubLogin);
// POST user/google
router.post('/google', googleLogin);
// POST user/kakao
router.post('/kakao', kakaoLogin);
// POST user/logout
router.post('/logout', logout);

module.exports = router;