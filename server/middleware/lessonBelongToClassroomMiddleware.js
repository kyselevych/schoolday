const ApiError = require('../error/ApiError');
const ClassroomLesson = require("../models/classroomLessonModel");

module.exports = async function (req, res, next) {
	const lessonId = req.params.lessonID;
	const classroomId = req.params.id;
	
	try {
		const lesson = await ClassroomLesson.findOne({
			where: {
				id: lessonId,
				classroomId: classroomId
			}
		});
		
		if (!lesson) {
			return next(ApiError.forbidden('Lesson is not found'));
		}
		
		req.lesson = lesson;
		
		next();
		
	} catch (e) {
		return next(ApiError.forbidden('Lesson is not found'));
	}
}