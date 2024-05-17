const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Birds home page");
});

router.get('/about', (req, res) => {
    res.send("About birds");
});


// router.get
// router.post
// router.put
// router.delete

// 모든 걸 다 받겠다? -> router.all
// router.all


module.exports = router;