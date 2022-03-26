import React from "react";

import '../Tabs.scss';

import {useFormik} from "formik";
import {loginUserAPI} from "http/userAPI";
import useAuth from "hook/useAuth";
import {useNavigate} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";

function LoginForm() {
	const {login, logout} = useAuth();
	const navigate = useNavigate();
	
	function validate(values) {
		const errors = {};
		
		if (!values.email) {
			errors.email = "Required field";
		}
		if (!values.password) {
			errors.password = "Required field";
		}

		return errors;
	}
	
	const onSubmit = async (values) => {
		const response = await loginUserAPI(values);
		const data = await response.json();
		
		if (response.status === 200) {
			login(data.token);
			navigate(CLASSROOMS_PATH);
			return;
		}
		
		console.log(data.message || 'Unknown error');
		logout();
	}
	
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validate,
		onSubmit
	});
	
	return (
		<form onSubmit={formik.handleSubmit}>
			<input
				className="tabs__input"
				type="text"
				name="email"
				placeholder="Enter email"
				onChange={formik.handleChange}
				value={formik.values.email}
				onBlur={formik.handleBlur}
			/>
			{(formik.touched.email && formik.errors.email) &&
				<span className="form__label-error">{formik.errors.email}</span>
			}
			<input
				className="tabs__input"
				type="password"
				name="password"
				placeholder="Enter password"
				onChange={formik.handleChange}
				value={formik.values.password}
				onBlur={formik.handleBlur}
			/>
			{(formik.touched.password && formik.errors.password) &&
				<span className="form__label-error">{formik.errors.password}</span>
			}
			<input
				className="tabs__input tabs__input--submit"
				type="submit"
				name="submit"
			/>
		</form>
	);
}

export default LoginForm;