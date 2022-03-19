const ClassroomMember = require("../models/classroomMemberModel");

module.exports = async function getClassroomMember(userId, classroomId) {
	return await ClassroomMember.findOne({
		where: {
			"classroomId": classroomId,
			"userId": userId
		}
	});
}