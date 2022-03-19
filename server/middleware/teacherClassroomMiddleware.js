const ApiError = require('../error/ApiError');

module.exports = async function (req, res, next) {
	if (req.user.role !== 'TEACHER') {
		return next(ApiError.forbidden('The user does not have teacher rights'));
	}
	
	next();
}