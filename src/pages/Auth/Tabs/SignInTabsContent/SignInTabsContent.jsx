import React, {useState} from "react";

import '../Tabs.scss';

import TabsContentItem from "../common/TabsContentItem";

import {useFormik} from "formik";

function SignInTabsContent() {
	
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
	
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
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
					className="tabs__input tabs__input--submit"
					type="submit"
					name="submit"
				/>
			</form>
		</TabsContentItem>
	);
}

export default SignInTabsContent;