import React from "react";
import './Settings.scss';

import {LabelForm, ButtonDecision} from "components";
import {useFormik} from "formik";

function Settings() {
	
	function validate(values) {
		const errors = {};
		
		if (!values.className) {
			errors.className = 'Required field'
		}
		
		if (!values.maxGrade) {
			errors.maxGrade = 'Required field';
		} else if (/^-\d+$/.test(values.maxGrade)) {
			errors.maxGrade = 'Grade must be greater than zero';
		} else if (!/^\d+$/.test(values.maxGrade)) {
			errors.maxGrade = 'Field must contain numbers';
		}
		
		return errors;
	}

	const formik = useFormik({
		initialValues: {
			className: '',
			maxGrade: '',
		},
		validate,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	
	return (
		<article className="container--narrow container--styled-content create-lesson">
			<h2>Classroom settings</h2>
			<form className="form" onSubmit={formik.handleSubmit}>
				<LabelForm labelText="Name of classroom">
					<input
						name={'className'}
						className={'input'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.className}
					/>
					{(formik.touched.className && formik.errors.className) &&
						<span className="form__label-error">{formik.errors.className}</span>
					}
				</LabelForm>
				<LabelForm labelText="Max grade">
					<input
						name={'maxGrade'}
						className={'input'}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.maxGrade}
					/>
					{(formik.touched.maxGrade && formik.errors.maxGrade) &&
						<span className="form__label-error">{formik.errors.maxGrade}</span>
					}
				</LabelForm>
				<ButtonDecision>Create</ButtonDecision>
			</form>
		</article>
	);
}

export default Settings;