import React, {useState} from "react";

import '../Tabs.scss';

import TabsContentItem from "../common/TabsContentItem";

import {useFormik} from "formik";

function SignUpTabsContent() {
	
	function validate(values) {
		const errors = {};
		
		if (!(/^[A-Za-z0-9](?:(?![\-\.\_+][\-\.\_+])[\w\-\.])*[A-Za-z0-9]@([A-Za-z0-9]+[A-Za-z0-9\-]*(?![\.\-][\.\-])\.)+[A-Za-z]+$/).test(values.email)) {
			errors.email = "Invalid email";
		}
		
		if (values.password.length < 6) {
			errors.password = "Must be minimum 6 symbols";
		}
		
		if (values.password !== values.repeatpassword) {
			errors.repeatpassword = "Passwords do not match";
		}
		
		if (!values.email) {
			errors.email = "Required field";
		}
		if (!values.password) {
			errors.password = "Required field";
		}
		if (!values.repeatpassword) {
			errors.repeatpassword = "Required field";
		}
		if (!values.firstname) {
			errors.firstname = "Required field";
		}
		if (!values.lastname) {
			errors.lastname = "Required field";
		}

		return errors;
	}
	
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
			repeatpassword: '',
			firstname: '',
			lastname: ''
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values))
		}
	});
	
	return (
		<TabsContentItem>
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
					type="password"
					name="repeatpassword"
					placeholder="Repeat password"
					onChange={formik.handleChange}
					value={formik.values.repeatpassword}
					onBlur={formik.handleBlur}
				/>
				{(formik.touched.repeatpassword && formik.errors.repeatpassword) &&
					<span className="form__label-error">{formik.errors.repeatpassword}</span>
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
		</TabsContentItem>
	);
}

export default SignUpTabsContent;