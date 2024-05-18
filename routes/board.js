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
    // url에서 <:boardId> 부분을 req.params라는 객체의 boardId키로 조회
    Board.findById(req.params.boardId)
        .populate('comments').then(result => {
            res.json(result);
        })
})

// router.post('/', (req, res) => {

//     // console.log(req.headers);
//     // console.log(req.body);
//     // Board.create({
//     //     title: req.body.title,
//     //     content: req.body.content,
//     //     author: req.body.author
//     // }).then(result => {
//     //     res.status(201).json(result);
//     // })
//     // console.log(req.body);
//     // res.send(req.body);

// })

// 실습
// put요청 : (/:boardId) => <:boardId>에 해당하는 게시글 수정
router.put('/', (req, res) => {

    // console.log(req.headers);
    console.log(req.body);


    Board.findByIdAndUpdate(
        { _id: "6646a4fef9b98bd425b9c269" }
        ,
        {

            title: req.body.title,
            content: req.body.content,
            author: req.body.author

        }).then(result => {
            res.json(result)
        }
        )

})


// 실습
// delete요청 : (/:boardId) => <:boardId>에 해당하는 게시글 수정
router.delete('/', (req, res) => {

    // console.log(req.headers);
    console.log(req.body);


    Board.findOneAndDelete(
        { _id: "6646a4fef9b98bd425b9c269" }
    ).then(result => {
        res.json(result)
    }
    )

})


module.exports = router;