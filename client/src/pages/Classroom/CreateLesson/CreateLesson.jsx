import React from "react";
import './CreateLesson.scss';

import {LabelForm, ButtonDecision, Checkbox, ButtonGoBack} from "components";
import TimeField from "react-simple-timefield";
import {useFormik} from "formik";

function CreateLesson() {
	
	function validate(values) {
		const error = {};
		
		if (!values.lessonName) {
			error.lessonName = "Required field";
		}
		if (!values.time) {
			error.time = "Required field";
		}
		
		return error;
	}
	
	const formik = useFormik({
		initialValues: {
			lessonName: '',
			description: '',
			time: '',
			isHomework: false
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
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
							name="lessonName"
							placeholder="Technologies"
							onChange={formik.handleChange}
							value={formik.values.lessonName}
							onBlur={formik.handleBlur}
						/>
						{(formik.touched.lessonName && formik.errors.lessonName) &&
							<span className="form__label-error">{formik.errors.lessonName}</span>
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
						<LabelForm labelText="It's home work" labelPosition="end">
							<Checkbox
								name="isHomework"
								onChange={formik.handleChange}
								value={formik.values.isHomework}
								onBlur={formik.handleBlur}
							/>
						</LabelForm>
					</div>
					<ButtonDecision>Create</ButtonDecision>
				</form>
			</article>
		</>
	);
}

export default CreateLesson;