import {baseUrl} from "http/index";

export async function listClassroomsAPI(token) {
	return await fetch(baseUrl + 'classroom/list',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function createClassroomAPI(token, values) {
	return await fetch(baseUrl + 'classroom/create',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function getClassroomAPI(token, classroomId) {
	return await fetch(baseUrl + `classroom/${classroomId}`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function getLessonsAPI(token, classroomId, values) {
	return await fetch(baseUrl + `classroom/${classroomId}/formattedDays`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function createLessonAPI(token, classroomId, values) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function getMembersAPI(token, classroomId) {
	return await fetch(baseUrl + `classroom/${classroomId}/members`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function removeMemberAPI(token, classroomId, email) {
	return await fetch(baseUrl + `classroom/${classroomId}/member`,{
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify({email: email})
	})
}

export async function addMemberAPI(token, classroomId, values) {
	return await fetch(baseUrl + `classroom/${classroomId}/member`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function getLessonAPI(token, classroomId, lessonId) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson/${lessonId}`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function sendSolutionAPI(token, classroomId, lessonId, values) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson/${lessonId}/solution`,{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function getSolutionsListAPI(token, classroomId, lessonId) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson/${lessonId}/solutions`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function getSolutionAPI(token, classroomId, lessonId, solutionId) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson/${lessonId}/solution/${solutionId}`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function estimateSolutionAPI(token, classroomId, lessonId, solutionId, values) {
	return await fetch(baseUrl + `classroom/${classroomId}/lesson/${lessonId}/solution/${solutionId}/estimate`,{
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}