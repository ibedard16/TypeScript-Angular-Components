// Karma debug configuration

var karmaSettings = require('gulp-utilities').karma.debug;
var config = require('./karma.shared.conf');

module.exports = function (karma) {
	config(karma, karmaSettings);
};
