const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const Blog = require('./models/blogs');
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


app.get('/', (req, res) => {
  res.redirect('/blog');
});

app.get('/blog', (req, res) => {
  Blog.find().sort({createdAt: -1})
    .then((result)=>{
      res.render('index', {title: 'Blogs', blogs: result})
    })
      .catch((err)=>{
        console.log(err)
      });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/blogs/create', (req, res) => {
  res.render('create', { title: 'Create a new blog' });
});

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});