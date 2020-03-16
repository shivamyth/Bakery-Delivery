const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.urlencoded());

app.use('/', require('./routes/api'));

app.listen(port, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port: ${port}`);
});
