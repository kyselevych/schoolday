import React from "react";
import './CreateLesson.scss';

import {Input, Textarea, LabelForm, ButtonDecision, Checkbox, ButtonGoBack} from "@components";
import TimeField from "react-simple-timefield";

function CreateLesson() {
	return (
		<>
			<div className="container--narrow">
				<ButtonGoBack />
			</div>
			<article className="container--narrow container--styled-content create-lesson">
				<h2>Create new lesson</h2>
				<form className="form">
					<LabelForm labelText="Name of lesson">
						<Input placeholder="Enter name.." />
					</LabelForm>
					<LabelForm labelText="Description">
						<Textarea placeholder="Enter description.."/>
					</LabelForm>
					<div className="layout-flex__space-between__align-center">
						<LabelForm labelText="Time">
							<TimeField className="input input-time"/>
						</LabelForm>
						<LabelForm labelText="It's home work" labelPosition="end">
							<Checkbox name="home-work"/>
						</LabelForm>
					</div>
					<ButtonDecision>Create</ButtonDecision>
				</form>
			</article>
		</>
	);
}

export default CreateLesson;