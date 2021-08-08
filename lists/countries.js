let express = require("express");
let router = express.Router();

router.use(express.json());

router.route("/")
    .get((req, res) => {
        try {
            const countries = require("../data/countries.json");
            res.json({ "countries": countries });
        }
        catch (e) {
            res.json(e);
        }
    })
    .post((req, res) => {
        try {
            let countries = require("../data/countries.json");
            // countries.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() 
            //                         ? 1 : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase() ? -1 : 0);

            let { sort, lookup, luBy, match } = req.body;
            luBy = luBy ? luBy : 'name';
            
            let result = [];

            if (lookup) {               
                console.log(lookup, match); 
                // lookup by value
                if (match == 1) {
                    // Exact match
                    console.log('Exact');
                    result = countries.filter((c) => {
                        return c[luBy].toLowerCase() == lookup.toLowerCase();
                    })
                }
                else {
                    // contain match
                    result = countries.filter((c) => {
                        return c[luBy].toLowerCase().includes(lookup.toLowerCase());
                    })
                }
                
            }
            else {
                result = [...countries];
            }

            if (sort) {
                if (sort == "DESC") {
                    result.reverse();
                }
                else {
                    result.sort((a, b) => a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() 
                                            ? 1 : b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase() ? -1 : 0);
                }

            }

            res.json({ "countries": result });

        }
        catch (e) {
            console.log(e);
            res.json({"result":"error", "Error":e.message});
        }
    })


// router.get("/", (req, res) => {
//     try {
//         const countries = require("../data/countries.json");
//         res.json({ "countries": countries });
//     }
//     catch (e) {
//         res.json(e);
//     }
// })

router.get("/lookup/:name/:stype?", (req, res) => {
    try {

        const countries = require("../data/countries.json");
        let result = [];

        let stype = req.params.stype ? req.params.stype : 0;

        if (stype == 1) {
            // Exact match
            result = countries.filter((c) => {
                return c.name.toLowerCase() == req.params.name.toLowerCase();
            })
        }
        else {
            // contain match
            result = countries.filter((c) => {
                return c.name.toLowerCase().includes(req.params.name.toLowerCase());
            })
        }
        res.json({ "countries": result });
    }
    catch (e) {
        res.json(e);
    }
})

router.get("/code/:code/:stype?", (req, res) => {
    try {
        const countries = require("../data/countries.json");
        let result = [];

        let stype = req.params.stype ? req.params.stype : 0;

        if (stype == 1) {
            // Exact match
            result = countries.filter((c) => {
                return c.code.toLowerCase() == req.params.code.toLowerCase();
            })
        }
        else {
            // contain match
            console.log(req.params.name, "Include match");
            result = countries.filter((c) => {
                return c.code.toLowerCase().includes(req.params.code.toLowerCase());
            })
        }
        res.json({ "countries": result });
    }
    catch (e) {
        res.json(e);
    }
})

module.exports = router;