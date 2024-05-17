const express = require('express');
const router = express.Router();

const Comment = require('../models/Comment');
const Board = require('../models/Board');

//  (/board) GET : 전체 게시글 조회
router.get('/', (req, res) => {
    Board.find().then(result => {
        res.json(result);
    });

});


// (/board/:boardId) GET: <:boardId>에 해당하는 게시글 조회

router.get('/:boardId', (req, res) => {
    Board.findById(req.params.boardId).then(result => {
        res.json(result);
    })
})



module.exports = router;