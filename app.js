const express = require('express');
const bodyParser = require('body-parser');

const app = express();  
 
// set up our express application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//  database configuration 
require("./config/dbConnect");

// load our routes
const User = require('./routes/userRoute');
app.use('/user',User);


// server configuration
let port = 3000;

app.listen(port, () => {
    console.log('listening on ' + port);
});



