let express = require("express");
let router = express.Router();

router.use(express.json());

router.get("/", (req, res) => {
    try {
        const colors = require("../data/colors.json");
        res.json({ "colors": colors });
    }
    catch(e) {
        res.json(e);
    }
})

router.get("/lookup/:color/:stype?", (req, res) => {
    try {
        const colors = require("../data/colors.json");

        let result = [];
    
        let stype = req.params.stype ? req.params.stype : 0;
    
        if (stype == 1) {
            // Exact match
            result = colors.filter( (c) => {
                return c.name.toLowerCase() == req.params.color.toLowerCase();
            })
        }
        else {
            // contain match
            result = colors.filter( (c) => {
                return c.name.toLowerCase().includes(req.params.color.toLowerCase());
            })
        }

        res.json({ "colors": result });
    
    }
    catch (e) {
        console.log(e);
        res.json(e);
    }

    
})

router.get("/hex/:hex/:stype?", (req, res) => {
    try {
        const colors = require("../data/colors.json");

        let result = [];
        console.log(req.params);
        
        let stype = req.params.stype ? req.params.stype : 0;
    
        if (stype == 1) {
            // Exact match
            result = colors.filter( (c) => {
                return c.hex.toLowerCase() == '#'+req.params.hex.toLowerCase();
            })

            console.log(result);
        }
        else {
            // contain match
            result = colors.filter( (c) => {
                return c.hex.toLowerCase().includes(req.params.hex.toLowerCase());
            })
        }

        res.json({ "colors": result });
    
    }
    catch (e) {
        console.log(e);
        res.json(e);
    }

    
})

module.exports = router;