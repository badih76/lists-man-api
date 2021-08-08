const express = require("express");
const cluster = require("cluster");

const math = require("./math/math");
const lists = require("./lists/lists");

const app = express();
const port = process.env.PORT || 5000;

try {
    app.use('/math', math);
    app.use('/lists', lists);

    app.get("/", (req, res) => {
        res.sendFile(__dirname + "/index.html");
    })
}
catch(e) {
    console.log(e);
}

app.use(express.json);

if(cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running `);

    cluster.fork();
}
else {
    
}


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });