const Op = require('sequelize').Op;
const moment = require('moment');

const ClassroomSolution = require('../../models/classroomSolutionModel');
const ClassroomLesson = require('../../models/classroomLessonModel');
const User = require('../../models/userModel');
const ApiError = require("../../error/ApiError");

class SolutionsController {
	async getSolution(req, res, next) {
		const solution = await ClassroomSolution.findOne({
			where: {
				id: req.params.solutionID,
				lessonId: req.params.lessonID,
				classroomId: req.params.id
			},
			include: {
				model: User,
				attributes: ['id','email','firstname', 'lastname']
			}
		})
		
		if(!solution) {
			return next(ApiError.forbidden('Solution is not found'));
		}
		
		return res.json({solution});
	}
	async getListSolutions(req, res, next) {
		const lessonId = req.lesson.id;
		const classroomId = req.params.id;
		
		try {
			const listSolutions = await ClassroomSolution.findAll({
				attributes: ['id','date','time','text','status','grade'],
				where: {
					classroomId: classroomId,
					lessonId: lessonId
				},
				include: {
					model: User,
					attributes: ['id','email','firstname', 'lastname']
				}
			})
			
			return res.json({listSolutions});
		} catch(e) {
			console.log(e);
			return next(ApiError.badRequest('Bad request'));
		}
	}
	
	async addSolution(req, res, next) {
		const {text} = req.body;
		const {id} = req.params; // classroom id
		const lesson = req.lesson;
		
		try {
			const solutionByUserInLesson = await ClassroomSolution.findOne({
				where: {
					lessonId: lesson.id,
					userId: req.user.id
				}
			})
			
			if (solutionByUserInLesson) {
				return next(ApiError.forbidden("You already sent solution"));
			}
			
		} catch (e) {
			console.log(e);
			return next(ApiError.badRequest("Bad request"));
		}
		
		if (lesson.isHomework === false) {
			return next(ApiError.forbidden("Unable to send solutions, lesson does not contain homework"));
		}
		
		const date = moment();
		const solution = await ClassroomSolution.create({
			date: date.format('YYYY-MM-DD'),
			time: date.format('HH:mm'),
			status: 'sent',
			text,
			userId: req.user.id,
			classroomId: id,
			lessonId: lesson.id
		})
		
		return res.json({message: "Solution successful sent"});
	}
	async setGrade(req, res, next) {
		const grade = +req.body.grade;
		const classroomId = req.params.id;
		const lessonId = req.lesson.id;
		const solutionId = req.params.solutionID;
		
		if (grade < 0 || grade > 100) {
			return next(ApiError.forbidden("Grade must be great than 0 and less than 100"));
		}
		
		try {
			const solution = await ClassroomSolution.findOne({
				where: {
					id: solutionId,
					classroomId: classroomId,
					lessonId: lessonId
				}
			})
			
			if (!solution) {
				return next(ApiError.forbidden('Solution is not found'));
			}
			
			solution.update({
				grade,
				status: 'rated'
			});
			
			return res.json({message: 'Grade successful set'})
		} catch (e) {
			console.log(e);
			return next(ApiError.badRequest("Bad request"));
		}
	}
}

module.exports = new SolutionsController();