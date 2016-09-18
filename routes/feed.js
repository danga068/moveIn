var express = require('express');
var router = express.Router();

var Post = require('../models/Post.js');
var bookshelf = require('../bookshelf.js');


router.get('/', function(req, res, next) {
	Post
		.fetchAll()
		.then(function(posts) {
			var posts = posts.map(function(post) {
				return {
					id: post.attributes.id,
					phone: post.attributes.phone,
					title: post.attributes.title,
					content: post.attributes.content,
					rent: post.attributes.rent,
					image_urls: JSON.parse(post.attributes.image_urls),
					is_active: post.attributes.is_active,
					create_ts: post.attributes.create_ts
				}
			});
			return res.status(201).json({success: true, posts: posts});
		})
		.catch(function(err) {
			return res.status(501).json({success: false, message: err});
		})

});

module.exports = router;
