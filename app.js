const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
  // express app
  const app = express();
  
  const DB_URL = 'mongodb+srv://hashirofficiala32:PHKK0Cnc921fSWOO@first.qss1a.mongodb.net/Blogs?retryWrites=true&w=majority&appName=First';

  mongoose.connect(DB_URL)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log("Err");
  })

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));  
app.use(express.urlencoded({ extended : true}));

app.get('/', (req, res) => {
  res.redirect('/blog');
});


//blog Routes
app.use('/blog',blogRoutes);

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});