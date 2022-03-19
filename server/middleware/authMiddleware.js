const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	try {
		const token = req.headers.authorization;
		if (!token) {
			return next(ApiError.unauthorized('User unauthorized', {auth: false}));
		}
		
		req.user = jwt.verify(token, process.env.SECRET_KEY);

		next();
	} catch(e) {
		return next(ApiError.unauthorized('User unauthorized', {auth: false}));
	}
}