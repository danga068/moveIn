var bookshelf = require('../bookshelf.js');
//var Address = require('./Address.js');

var Post = bookshelf.Model.extend({
	tableName: 'POST',
	// addresses: function() {
	// 	return this.hasMany('Address', 'address_id');
	// }
});

module.exports = bookshelf.model('Post', Post);
