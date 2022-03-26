import React from "react";
import './AddMember.scss';

import {LabelForm, ButtonDecision,ButtonGoBack} from "components";

import {useFormik} from "formik";

function AddMember() {
	function validate(values) {
		const errors = {};
		
		if (!(/^[A-Za-z0-9](?:(?![\-\.\_+][\-\.\_+])[\w\-\.])*[A-Za-z0-9]@([A-Za-z0-9]+[A-Za-z0-9\-]*(?![\.\-][\.\-])\.)+[A-Za-z]+$/).test(values.email)) {
			errors.email = "Invalid email";
		}
		
		if (!values.email) {
			errors.email = "Required field";
		}

		return errors;
	}
	
	const formik = useFormik({
		initialValues: {
			email: '',
			role: 'student'
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values))
		}
	})
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<article className="container--narrow container--styled-content members-add">
				<h2>Add member</h2>
				<form className="form" onSubmit={formik.handleSubmit}>
					<LabelForm labelText="Enter email">
						<input
							className="input"
							name="email"
							placeholder="example@gmail.com"
							onChange={formik.handleChange}
							value={formik.values.email}
							onBlur={formik.handleBlur}
						/>
						{(formik.touched.email && formik.errors.email) &&
							<span className="form__label-error">{formik.errors.email}</span>
						}
					</LabelForm>
					<LabelForm labelText="Role">
						<select
							className="input"
							name="role"
							onChange={formik.handleChange}
							value={formik.values.role}
							onBlur={formik.handleBlur}
						>
							<option value="student">Student</option>
							<option value="teacher">Teacher</option>
						</select>
					</LabelForm>
					<ButtonDecision>Create</ButtonDecision>
				</form>
			</article>
		</>
	);
}

export default AddMember;