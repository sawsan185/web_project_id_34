const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes);

app.listen(3000, ()=> console.log("Listening to port 3000"));