const mongoose = require('mongoose');

const boardSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: String,
    // num에 숫자 {1,3,5} 개 정도만 만들어보세요.
    num: {
        type: Number
    }
    // createdAt: { type: Date, default: Date.now },

}, {
    timestamps: true
    // 타임스탬프 
    // 데이터베이스에서는 생성된 시간 같은걸 많이 추적한다.
    // 그래서 createAt updateAt deletedAt 이런거 많이씀
    //  
});

// virtual -> 

boardSchema.set('toJSON', { virtuals: true });
boardSchema.set('toObject', { virtuals: true });
boardSchema.virtual('comments', {
    ref: "Comment", // 레퍼런스를 Comment로 한다.
    localField: "_id",  //  // Board 모델의 필드 내 보드에서 object id가 있는데 요놈이
    foreignField: "board" //  Comment 모델에서 Board를 참조하는 필드
});



const Board = mongoose.model('Board', boardSchema);

module.exports = Board;