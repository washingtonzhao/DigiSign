const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
var cors = require('cors');

//routes
const users = require('./routes/api/users');
const app = express();

connectDB();

app.use(cors({ origin:true, credentials: true }));

app.get('/',(req,res) => res.send('Hello world!'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/users',users);

const port = process.env.PORT || 8082;

app.listen(port,() => console.log(`Server running on port ${port}!`));