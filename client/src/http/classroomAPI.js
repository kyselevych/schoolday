export async function listClassroomsAPI(token) {
	return await fetch('http://localhost:5000/api/classroom/list',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}

export async function createClassroomAPI(token, values) {
	return await fetch('http://localhost:5000/api/classroom/create',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		body: JSON.stringify(values)
	})
}

export async function getClassroomAPI(token, classroomId) {
	return await fetch(`http://localhost:5000/api/classroom/${classroomId}`,{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}