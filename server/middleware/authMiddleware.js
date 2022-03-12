const ApiError = require('../error/ApiError');
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
	try {
		const token = req.headers.authorization.split(' ')[1];
		if (!token) {
			return next(ApiError.unauthorized('User unauthorized'));
		}
		
		const decoded = jwt.verify(token, process.env.SECRET_KEY);
		console.log(decoded);
		req.user = decoded;
		next();
	} catch(e) {
		return next(ApiError.unauthorized('User unauthorized'));
	}
}