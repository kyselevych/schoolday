function putUserSolutionStatusToLesson(lessonsList, solutionsList) {
	for (let iLesson = 0; iLesson < lessonsList.length; iLesson++) {
		for (let iSolution = 0; iSolution < solutionsList.length; iSolution++) {
			if (lessonsList[iLesson].id === solutionsList[iSolution].lessonId) {
				lessonsList[iLesson].dataValues.status = solutionsList[iSolution].status;
				break;
			}
			
			lessonsList[iLesson].dataValues.status = 'unsent';
		}
	}
}

module.exports = putUserSolutionStatusToLesson;