const express = require('express');
const path = require('path');
const exhbs = require('express-handlebars');

const routes = require('../routes/index');

const app = express();

app.engine('hbs', exhbs({
    defaultLayout: false,
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '../views'));

//static content middleware
app.use(express.static(path.join(__dirname, '../public')));


app.use(routes());

app.listen(3000, () => {
    console.log('Development Server is running on port 3000');
});