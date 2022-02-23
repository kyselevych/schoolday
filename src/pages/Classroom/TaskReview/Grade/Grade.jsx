import React from "react";
import './Grade.scss';

import {ButtonDecision, LabelForm} from "@components";
import {useFormik} from "formik";

function Grade() {
	
	function validate(values) {
		const errors = {}
		
		if (!(/^\d+$/i).test(values.mark)) {
			errors.mark = "Value must be a number";
		}
		
		if (values.mark < 0) {
			errors.mark = "Min value 0";
		} else if (values.mark > 100) {
			errors.mark = "Max value 100";
		}
		
		if (values.mark === '') {
			errors.mark = "Required field";
		}
		
		return errors;
	}
	
	const formikMark = useFormik({
		initialValues: {
			mark: ''
		},
		validate
	})
	
	return (
		<article className="container--narrow container--styled-content task-review">
			<h2>Grade</h2>
			<form className="form" onSubmit={formikMark.handleSubmit}>
				<LabelForm labelText={"Enter mark" + " (Max 100)"}>
					<input
						className="input"
						name="mark"
						onChange={formikMark.handleChange}
						onBlur={formikMark.handleBlur}
						value={formikMark.values.mark}
					/>
					{(formikMark.touched.mark && formikMark.errors.mark) &&
						<span className="form__label-error">{formikMark.errors.mark}</span>
					}
				</LabelForm>
				<ButtonDecision>Set mark</ButtonDecision>
			</form>
		</article>
	);
}

export default Grade;