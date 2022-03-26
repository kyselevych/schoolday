import React from "react";
import './TaskForm.scss';

import {LabelForm, ButtonDecision} from "components";
import {useFormik} from "formik";

function TaskForm() {
	
	const formikSendTask = useFormik({
		initialValues: {
			textTask: ''
		},
		onSubmit: values => {
			alert(JSON.stringify(values));
		}
	});
	
	return (
		<article className="container--narrow container--styled-content task__send-block">
			<h2>Send task</h2>
			<form className="form" onSubmit={formikSendTask.handleSubmit}>
				<LabelForm labelText="Text">
						<textarea
							className="textarea"
							name={'textTask'}
							onChange={formikSendTask.handleChange}
							onBlur={formikSendTask.handleBlur}
							value={formikSendTask.values.textTask}
						>
						</textarea>
				</LabelForm>
				<ButtonDecision className="task__button-send">Send</ButtonDecision>
			</form>
		</article>
	);
}

export default TaskForm;