const express = require('express');
const router = express.Router();
const { githubLogin, googleLogin, kakaoLogin, logout } = require('../controllers')
// POST user/github
router.get('/github', githubLogin);
// POST user/google
router.get('/google', googleLogin);
// POST user/kakao
router.get('/kakao', kakaoLogin);
// POST user/logout
router.post('/logout', logout);

module.exports = router;