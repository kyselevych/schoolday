import React from "react";
import '../Tabs.scss';

import {useFormik} from "formik";
import validate from "./formikValidate";
import {registrationUserAPI} from "http/userAPI";

import useAuth from "hook/useAuth";
import {useNavigate} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";

function RegistrationForm() {
	const {login, logout} = useAuth();
	const navigate = useNavigate();
	
	const onSubmit = async (values) => {
		const response = await registrationUserAPI(values);
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
			firstname: '',
			lastname: ''
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
				className="tabs__input"
				type="text"
				name="firstname"
				placeholder="Firstname"
				onChange={formik.handleChange}
				value={formik.values.firstname}
				onBlur={formik.handleBlur}
			/>
			{(formik.touched.firstname && formik.errors.firstname) &&
				<span className="form__label-error">{formik.errors.firstname}</span>
			}
			<input
				className="tabs__input"
				type="text"
				name="lastname"
				placeholder="Lastname"
				onChange={formik.handleChange}
				value={formik.values.lastname}
				onBlur={formik.handleBlur}
			/>
			{(formik.touched.lastname && formik.errors.lastname) &&
				<span className="form__label-error">{formik.errors.lastname}</span>
			}
			<input
				className="tabs__input tabs__input--submit"
				type="submit"
				name="submit"
			/>
		</form>
	);
}

export default RegistrationForm;