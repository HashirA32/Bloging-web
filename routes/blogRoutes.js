const express = require('express');
const router = express.Router();
const blogControler = require('../controlers/routsControler');

router.get('/', blogControler.blog_index); 
router.post('/', blogControler.blog_create_post);
router.get('/create', blogControler.blog_create_get);
router.get('/:id', blogControler.blog_details);
router.delete('/:id', blogControler.blog_delete);

module.exports = router;