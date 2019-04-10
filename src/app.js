//read and write files
const fs = require('fs');
// configure absolute paths
const path = require('path');
const express = require('express');
const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');
// app constant
const app = express();

const { accounts, users, writeJSON } = require('./data');

//views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// points at public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// renders the index view
app.get('/', (req, res) => {
    res.render('index', { title: 'Account Summary', accounts});
});
app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/profile', (req, res) => {
    res.render('profile', {user: users[0] });
});
// http server on port 3000
app.listen(3000, () => console.log('PS Project Running on port 3000!'));
