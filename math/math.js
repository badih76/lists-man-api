let express = require("express");
let router = express.Router();

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })

router.use(express.json());

router.post("/sum", (req, res) => {
    console.log(req.body.numbers);
    let numbers = req.body.numbers;

    res.json({ "result": numbers.reduce((a, b) => a + b, 0) });
})

router.post("/avg", (req, res) => {
    console.log(req.body.numbers);
    let numbers = req.body.numbers;

    res.json({ "result": numbers.reduce((a, b) => a + b, 0) / numbers.length });
})

router.post("/count", (req, res) => {
    console.log(req.body.numbers);
    let numbers = req.body.numbers;

    res.json({ "result": numbers.length });
})



module.exports = router;