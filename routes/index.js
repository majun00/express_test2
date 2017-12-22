var express = require('express');
var router = express.Router();

var blogEngine = require('./blog');

router.get('/', function(req, res, next) {
  res.render('index', { title: '最近文章', entries:blogEngine.getBlogEntries() });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: '作者介绍' });
});
router.get('/article/:id', function(req, res, next) {
	var entry=blogEngine.getBlogEntry(req.params.id);
  res.render('article', { title: entry.title, blog:entry });
});

module.exports = router;
