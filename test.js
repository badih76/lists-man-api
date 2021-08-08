let list = [
    {
        "1": {
            "2": {
                "3": "Elizabeth"
            },
            "age" : 6
        },
    },
    {
        "1": {
            "2": {
                "3": "Maguy"
            },
            "age" : 41
        },
    },
    {
        "1": {
            "2": {
                "3": "Catherine"
            },
            "age" : 6
        }
    },
    {
        "1": {
            "2": {
                "3": "Badih"
            },
            "age" : 45
        }
    },
    {
        "1": {
            "2": {
                "3": "Catherine"
            },
            "age" : 6
        }
    }
]

let s = ["1", "2", "3"];


let result = list.sort((a, b) => {
    let r1 = a;
    s.forEach(element => {
        r1 = r1[element];    
    });

    let r2 = b;
    s.forEach(element => {
        r2 = r2[element];    
    });

    return (r1 > r2 ? 1 : r2 > r1 ? -1 : 0);
});

result.forEach(e => {
    console.log(e["1"]["2"]["3"]);
})

let filter = list.filter(e => {
    let r1 = e;
    s.forEach(element => {
        r1 = r1[element];    
    });

    return (r1 == "Catherine");
});

filter.forEach(e => {
    console.log(e["1"]);
})
console.log("Min: ", result[0]["1"]);
result = result.reverse();
console.log("Max: ", result[0]["1"]);

let n = "ABCD";
console.log(typeof n == 'string' ? n.toLocaleLowerCase() : n);