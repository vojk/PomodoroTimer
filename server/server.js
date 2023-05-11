const path = require('path');
const express = require('express')
const cors = require('cors')
const bodyParser = require("express");
const app = express()
const port = 3001

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse application/json
app.use(bodyParser.json());
app.set('trust-proxy', true)

app.get('/v1/test', function (req, res) {
    res.json("done");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
