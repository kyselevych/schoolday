class ApiError extends Error {
	constructor(status, message, resBody) {
		super();
		this.status = status;
		this.message = message;
		this.resBody = resBody;
	}
	
	static badRequest(message, resBody = {}) {
		return new ApiError(404, message, resBody);
	}
	
	static internal(message, resBody = {}) {
		return new ApiError(500, message, resBody);
	}
	
	static forbidden(message, resBody = {}) {
		return new ApiError(403, message, resBody);
	}
	
	static unauthorized(message, resBody = {}) {
		return new ApiError(401, message, resBody);
	}
}

module.exports = ApiError;