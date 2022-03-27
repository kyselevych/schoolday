import React from "react";
import './CreateClassroom.scss';

import {LabelForm, ButtonDecision, ButtonGoBack} from "components";
import {useFormik} from "formik";
import {createClassroomAPI} from "http/classroomAPI";
import {useNavigate} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";
import useAuth from "hook/useAuth";
import useNotification from "hook/useNotification";

function CreateLesson() {
	const navigate = useNavigate();
	const {token} = useAuth();
	const {notification} = useNotification();
	
	function validate(values) {
		const error = {};
		
		if (!values.name) {
			error.name = "Required field";
		}
		
		return error;
	}
	
	async function submitHandler(values) {
		try {
			const response = await createClassroomAPI(token, values);
			const data = await response.json();

			if (response.status === 200 && response.ok) {
				notification('Classroom successful created');
				navigate(CLASSROOMS_PATH);
				return;
			}
			
			notification(data.message || 'Unknown error', 'negative');
			
		} catch (err) {
			notification(err, 'negative');
		}
	}
	
	const formik = useFormik({
		initialValues: {
			name: ''
		},
		validate,
		onSubmit: submitHandler
	});
	
	return (
		<>
			<div className="container--narrow classroom-create__btn-go-back">
				<ButtonGoBack />
			</div>
			<article className="container--narrow container--styled-content create-classroom">
				<h2>Create classroom</h2>
				<form className="form" onSubmit={formik.handleSubmit}>
					<LabelForm labelText="Name of classroom">
						<input
							className="input"
							name="name"
							placeholder="Classroom name"
							onChange={formik.handleChange}
							value={formik.values.name}
							onBlur={formik.handleBlur}
						/>
						{(formik.touched.name && formik.errors.name) &&
							<span className="form__label-error">{formik.errors.name}</span>
						}
					</LabelForm>
					<ButtonDecision>Create</ButtonDecision>
				</form>
			</article>
		</>
	);
}

export default CreateLesson;