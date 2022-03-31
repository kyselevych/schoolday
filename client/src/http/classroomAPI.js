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