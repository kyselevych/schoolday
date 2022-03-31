import React, {useEffect, useState} from "react";
import moment from "moment";

import './Timetable.scss';

import Day from "./Day/Day";
import Search from "./Search/Search";

import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";
import {getLessonsAPI} from "http/classroomAPI";

function Timetable() {
	const {token} = useAuth();
	const {classroomId} = useClassroom();
	
	const [startDate, setStartDate] = useState(moment().subtract(1, 'week').toDate());
	const [endDate, setEndDate] = useState(moment().add(1, 'month').toDate());
	const [days, setDays] = useState([]);
	
	const loadDays = async (startDate, endDate) => {
		try {
			const startDateFormatted = moment(startDate).format('YYYY-MM-DD');
			const endDateFormatted = moment(endDate).format('YYYY-MM-DD');
			
			const response = await getLessonsAPI(token, classroomId, {startDate: startDateFormatted, endDate: endDateFormatted});
			const data = await response.json();
			
			setDays(data);
		} catch (err) {
			console.log(err);
		}
	}
	
	useEffect(() => {
		loadDays(startDate, endDate);
	}, []);
	
	return (
		<div className="timetable">
			<Search
				loadDays={loadDays}
				startDate={startDate}
				setStartDate={setStartDate}
				endDate={endDate}
				setEndDate={setEndDate}
			/>
			<div className="timetable__days-wrapper">
				{ days &&
					days.map(day => {
						return <Day key={day.date} day={day} />
					})
				}
			</div>
		
		</div>
	);
}

export default Timetable;