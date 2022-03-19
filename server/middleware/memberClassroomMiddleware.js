const ApiError = require('../error/ApiError');

const getClassroomMember = require('../utils/getClassroomMember');

module.exports = async function (req, res, next) {
	const candidate = await getClassroomMember(req.user.id, req.params.id);

	if (!candidate) {
		return next(ApiError.forbidden('You are not a member of this classroom'));
	}
	
	req.user.role = candidate.role.toUpperCase();
	
	next();
}