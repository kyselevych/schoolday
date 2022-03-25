export function setToken(token) {
	localStorage.setItem('token', token);
}

export function getToken() {
	return localStorage.getItem('token');
}

export async function loginUserAPI(data) {
	return await fetch('http://localhost:5000/api/user/login',{
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})
}

export async function authUserAPI(token) {
	return await fetch('http://localhost:5000/api/user/auth',{
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		}
	})
}