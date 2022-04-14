import React from "react";
import './AddMember.scss';

import {LabelForm, ButtonDecision, ButtonGoBack, notification} from "components";

import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import {addMemberAPI} from "http/classroomAPI";
import useClassroom from "hook/useClassroom";
import useAuth from "hook/useAuth";
import useNotification from "hook/useNotification";

function AddMember() {
	const {notification} = useNotification();
	const navigate = useNavigate();
	const {classroomId} = useClassroom()
	const {token} = useAuth();
	
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
	
	const onSubmit = async (values) => {
		values.role = values.role.toUpperCase();
		
		const response = await addMemberAPI(token, classroomId, values);
		const data = await response.json();
		
		if (response.status === 200) {
			notification(data.message || 'You successful added new member');
			navigate(-1);
			return;
		}

		notification(data.message || 'Unknown error', 'negative');
	}
	
	const formik = useFormik({
		initialValues: {
			email: '',
			role: 'student'
		},
		validate,
		onSubmit
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