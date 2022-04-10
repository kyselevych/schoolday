import React from "react";
import './CreateLesson.scss';

import {LabelForm, ButtonDecision, Checkbox, ButtonGoBack} from "components";
import TimeField from "react-simple-timefield";
import {useFormik} from "formik";
import DatePicker from "react-datepicker";
import {useNavigate, useParams} from "react-router-dom";
import {createLessonAPI} from "http/classroomAPI";
import useAuth from "hook/useAuth";
import {CLASSROOMS_PATH} from "utils/pathConsts";
import useNotification from "hook/useNotification";


function CreateLesson() {
	const params = useParams();
	const {token} = useAuth();
	const {notification} = useNotification();
	const navigate = useNavigate();
	
	const onSubmit = async (values) => {
		const response = await createLessonAPI(token, params.id, values);
		const data = await response.json();
		
		if (response.status === 200) {
			navigate(-1);
			notification('Lesson successfully created');
			return;
		}
		
		notification(data.message || 'Unknown error', 'negative');
	}
	
	function validate(values) {
		const error = {};
		
		if (!values.name) {
			error.name = "Required field";
		}
		if (!values.time) {
			error.time = "Required field";
		}
		
		if(!values.date) {
			error.date = "Required field";
		}
		
		return error;
	}
	
	const formik = useFormik({
		initialValues: {
			name: '',
			description: '',
			time: '',
			date: new Date(params.date) || '',
			isHomework: false
		},
		validate,
		onSubmit
	});
	
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<article className="container--narrow container--styled-content create-lesson">
				<h2>Create new lesson</h2>
				<form className="form" onSubmit={formik.handleSubmit}>
					<LabelForm labelText="Name of lesson">
						<input
							className="input"
							name="name"
							placeholder="Technologies"
							onChange={formik.handleChange}
							value={formik.values.name}
							onBlur={formik.handleBlur}
						/>
						{(formik.touched.name && formik.errors.name) &&
							<span className="form__label-error">{formik.errors.name}</span>
						}
					</LabelForm>
					<LabelForm labelText="Description">
						<textarea
							className="textarea"
							name="description"
							onChange={formik.handleChange}
							value={formik.values.description}
							onBlur={formik.handleBlur}
						/>
					</LabelForm>
					<div className="layout-flex__space-between__align-center">
						<LabelForm labelText="Time">
							<TimeField
								className="input input-time"
								name="time"
								onChange={formik.handleChange}
								value={formik.values.time}
								onBlur={formik.handleBlur}
							/>
							{(formik.touched.time && formik.errors.time) &&
								<span className="form__label-error">{formik.errors.time}</span>
							}
						</LabelForm>
						<LabelForm labelText="Date">
							<DatePicker
								className="input"
								onChange={(data) => formik.setFieldValue('date', data)}
								selected={formik.values.date}
							/>
							{(formik.touched.date && formik.errors.date) &&
								<span className="form__label-error">{formik.errors.date}</span>
							}
						</LabelForm>
					</div>
					<LabelForm labelText="It's home work" labelPosition="end">
						<Checkbox
							name="isHomework"
							onChange={formik.handleChange}
							value={formik.values.isHomework}
							onBlur={formik.handleBlur}
						/>
					</LabelForm>
					<ButtonDecision>Create</ButtonDecision>
				</form>
			</article>
		</>
	);
}

export default CreateLesson;