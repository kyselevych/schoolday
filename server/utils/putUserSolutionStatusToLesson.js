function putUserSolutionStatusToLesson(lessonsList, solutionsList) {
	for (let iLesson = 0; iLesson < lessonsList.length; iLesson++) {
		lessonsList[iLesson].dataValues.status = 'unsent';
		
		for (let iSolution = 0; iSolution < solutionsList.length; iSolution++) {
			if (lessonsList[iLesson].id === solutionsList[iSolution].lessonId) {
				lessonsList[iLesson].dataValues.status = solutionsList[iSolution].status;
				break;
			}
		}
	}
}

module.exports = putUserSolutionStatusToLesson;