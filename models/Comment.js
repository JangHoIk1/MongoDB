const mongoose = require('mongoose');
const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        validate: (value) => value.length >= 5
        // validate 값들이 5글자 이상 받아야한다.
    },
    author: {
        type: String,
        required: true,
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Board"
        // 이 값이 const Board = mongoose.model('Board', boardSchema);
        // 여기서 Board 값임
    },
    tags: {
        type: [String],
    }
    // required:true 필수적으로 값이 있어야 한다는 의미
}, {
    timestamps: true
});

module.exports = mongoose.model('Comment', commentSchema);