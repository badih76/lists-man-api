let express = require("express");
let router = express.Router();

let countries = require("./countries");
let colors = require("./colors");
let tzones = require("./timezones");
let months = require("./months");

router.use(express.json());

router.use('/countries', countries);
router.use('/colors', colors);
router.use('/timezones', tzones);


router.get("/capitals", (req, res) => {
    const capitals = require("../data/capitals.json");
    res.json({ "capitals": capitals });
})

router.get("/currencies", (req, res) => {
    const currencies = require("../data/currencies.json");
    res.json({ "currencies": currencies });
})

router.get("/mgenres", (req, res) => {
    const mgenres = require("../data/moviegenres.json");
    res.json({ "mgenres": mgenres });
})

router.get("/calendar/:smonth?/:syear?/:emonth?/:eyear?", (req, res) => {
    let params = req.params
    const dow = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
                'Thursday', 'Friday', 'Saturday'];

    let calendar = [];

    for(let d=1; d<=10; ++d)
    {   
        let date = new Date(params.syear+'-'+String(params.smonth).padStart(2, '0')+'-'+String(d).padStart(2, '0'));
        let day = { "dow": dow[date.getDay()], "date": date };
        calendar.push(day);
    }

    res.json(calendar);
})



module.exports = router;