import React from "react";
import './Grade.scss';

import {ButtonDecision, LabelForm} from "components";
import {useFormik} from "formik";
import {estimateSolutionAPI, getSolutionsListAPI} from "http/classroomAPI";
import useNotification from "hook/useNotification";
import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";
import {useNavigate, useParams} from "react-router-dom";

function Grade() {
	const {notification} = useNotification();
	const {token} = useAuth();
	const {classroomId, userRole} = useClassroom();
	const {taskId, solutionId} = useParams();
	const navigate = useNavigate();
	
	async function onSubmit(values) {
		const response = await estimateSolutionAPI(token, classroomId, taskId, solutionId, values);
		const data = await response.json();
		
		if (response.status === 200) {
			notification(`Solution estimate with ${values.grade} grade`);
			navigate(`/classroom/${classroomId}/task/${taskId}`);
			return;
		}
		
		notification(data.message || 'Unknown error', 'negative');
	}
	
	function validate(values) {
		const errors = {}
		
		if (!(/^\d+$/i).test(values.grade)) {
			errors.grade = "Value must be a number";
		}
		
		if (values.grade < 0) {
			errors.grade = "Min value 0";
		} else if (values.grade > 100) {
			errors.grade = "Max value 100";
		}
		
		if (values.grade === '') {
			errors.grade = "Required field";
		}
		
		return errors;
	}
	
	const formikMark = useFormik({
		initialValues: {
			grade: ''
		},
		validate,
		onSubmit
	})
	
	return (
		<article className="container--narrow container--styled-content task-review">
			<h2>Grade</h2>
			<form className="form" onSubmit={formikMark.handleSubmit}>
				<LabelForm labelText={"Enter mark" + " (Max 100)"}>
					<input
						className="input"
						name="grade"
						onChange={formikMark.handleChange}
						onBlur={formikMark.handleBlur}
						value={formikMark.values.grade}
					/>
					{(formikMark.touched.grade && formikMark.errors.grade) &&
						<span className="form__label-error">{formikMark.errors.grade}</span>
					}
				</LabelForm>
				<ButtonDecision>Set mark</ButtonDecision>
			</form>
		</article>
	);
}

export default Grade;