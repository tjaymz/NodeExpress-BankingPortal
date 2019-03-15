//read and write files
const fs = require('fs');
// configure absolute paths
const path = require('path');

const express = require('express');
// app constant
const app = express();

//views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// points at public directory
app.use(express.static(path.join(__dirname, 'public')));
// renders the index view
app.get('/', (req, res) => res.render('index', { title: 'Index '}));
// http server on port 3000
app.listen(3000, () => console.log('PS Project Running on port 3000!'));
