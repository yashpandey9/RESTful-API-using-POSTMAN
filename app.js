const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectionDB = require('./database/connection');
const routes = require('./routes/router');

//connecting MongoDB
connectionDB();

//parsing 
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// set the view engine to ejs
app.set('view engine', 'ejs');

// using app.use to serve up static CSS files in public/assets/ folder when /public link is called in ejs files
app.use('/public', express.static('public'));

//routing
app.use(routes);

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection is disconnected...')
})

//printing the process id 
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(process.pid);
    console.log(`on process id: ${process.pid}`);
});