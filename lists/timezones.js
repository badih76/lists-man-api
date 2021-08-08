let express = require("express");
let router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    const tzones = require("../data/timezones.json");
    res.json({ "timezones": tzones });
})

module.exports = router;
