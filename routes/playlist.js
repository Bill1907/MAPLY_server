const express = require('express');
const router = express.Router();

const { getPlaylist, createPlaylist, modifyPlaylist, deletePlaylist } = require('../controllers')

// GET /playlist 플레이 리스트 가져오기
router.get('/:userId', getPlaylist);

// POST /playlist 플레이 리스트에 추가
router.post('/:userId', createPlaylist);

// DELETE /playlist 플레이 리스트를 삭제
router.delete('/:userId', deletePlaylist);

//PATCH /playlist 플레이 리스트 수정
router.patch('/:userId', modifyPlaylist);

module.exports = router;