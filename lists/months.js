let express = require("express");
let router = express.Router();

router.use(express.json());

router.get("/months", (req, res) => {
    const months = require("../data/months.json");
    res.json({ "months": months });
})


module.exports = router;
