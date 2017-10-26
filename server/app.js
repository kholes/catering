const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req,res) => {
    res.status(404).send("Oop's..sorry menu not found?")
})
app.listen(3000, () => {
    console.log('Ready port 3000')
})