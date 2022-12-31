const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const routes = require('./server/routes/recipeRoutes.js')
require('dotenv').config();

app.use(express.urlencoded( { extended: true } ));
app.use(express.static('public'));
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
app.use('/', routes);












app.listen(3000, ()=> console.log('server started at port:3000'));