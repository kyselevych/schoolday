import React from "react";
import './TaskForm.scss';

import {LabelForm, ButtonDecision} from "components";
import {useFormik} from "formik";
import {sendSolutionAPI} from "http/classroomAPI";
import useNotification from "hook/useNotification";
import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";
import {useParams} from "react-router-dom";

function TaskForm() {
	const {notification} = useNotification();
	const {token} = useAuth();
	const {classroomId} = useClassroom();
	const {taskId} = useParams();
	
	const onSubmit = async (values) => {
		const response = await sendSolutionAPI(token, classroomId, taskId, values);
		const data = await response.json();
		
		if (response.status === 200) {
			notification(data.message || 'You successful added new member');
			return;
		}

		notification(data.message || 'Unknown error', 'negative');
	}
	
	const formikSendTask = useFormik({
		initialValues: {
			text: ''
		},
		onSubmit
	});
	
	return (
		<article className="container--narrow container--styled-content task__send-block">
			<h2>Send task</h2>
			<form className="form" onSubmit={formikSendTask.handleSubmit}>
				<LabelForm labelText="Text">
						<textarea
							className="textarea"
							name="text"
							onChange={formikSendTask.handleChange}
							onBlur={formikSendTask.handleBlur}
							value={formikSendTask.values.text}
						>
						</textarea>
				</LabelForm>
				<ButtonDecision className="task__button-send">Send</ButtonDecision>
			</form>
		</article>
	);
}

export default TaskForm;