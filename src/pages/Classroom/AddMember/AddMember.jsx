import React from "react";
import './AddMember.scss';

import {Input, Textarea, LabelForm, ButtonDecision, Checkbox, ButtonGoBack} from "@components";

function AddMember() {
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<article className="container--narrow container--styled-content members-add">
				<h2>Add member</h2>
				<form className="form">
					<LabelForm labelText="Email">
						<Input placeholder="Enter email.." />
					</LabelForm>
					<LabelForm labelText="Role">
						<select className="input">
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