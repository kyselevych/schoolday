import React from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import {LabelForm, ButtonDecision} from "components";

function Search(props) {
	const {
		loadDays,
		startDate,
		endDate,
		setEndDate,
		setStartDate
	} = props;
	
	function handleSubmit(e) {
		e.preventDefault();
		
		loadDays(startDate, endDate)
	}
	
	return (
		<form className="timetable__search" onSubmit={handleSubmit}>
			<LabelForm labelText="Start date">
				<DatePicker
					className ="timetable__date-input input"
					onChange={(data) => setStartDate(data)}
					selected={startDate}
				/>
			</LabelForm>
			<LabelForm labelText="End date">
				<DatePicker
					className ="timetable__date-input input"
					onChange={(data) => setEndDate(data)}
					selected={endDate}
				/>
			</LabelForm>
			<ButtonDecision>Update</ButtonDecision>
		</form>
	);
}

export default Search;