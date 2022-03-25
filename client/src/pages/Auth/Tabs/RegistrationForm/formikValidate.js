function validate(values) {
	const errors = {};
	
	if (!(/^[A-Za-z0-9](?:(?![\-\.\_+][\-\.\_+])[\w\-\.])*[A-Za-z0-9]@([A-Za-z0-9]+[A-Za-z0-9\-]*(?![\.\-][\.\-])\.)+[A-Za-z]+$/).test(values.email)) {
		errors.email = "Invalid email";
	}
	if (values.password.length < 6) {
		errors.password = "Must be minimum 6 symbols";
	}
	if (!values.email) {
		errors.email = "Required field";
	}
	if (!values.password) {
		errors.password = "Required field";
	}
	if (!values.firstname) {
		errors.firstname = "Required field";
	}
	if (!values.lastname) {
		errors.lastname = "Required field";
	}
	
	return errors;
}

export default validate;