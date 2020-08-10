const path = require('path');
const express = require('express');
const app = express();
const router = require('./routes/router');

// MIDDLEWARE

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'views');
app.set('view engine', 'hbs');

// ROUTER

app.use('/', router);

// SERVER PORT

app.listen(3000, () => {
	console.log('Server up and running');
});
