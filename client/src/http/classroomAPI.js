export async function listClassroomsAPI(token) {
	return await fetch('http://localhost:5000/api/classroom/list',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}