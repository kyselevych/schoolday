import React, {useEffect, useState} from "react";
import moment from "moment";
import { motion } from "framer-motion/dist/framer-motion";

import './Timetable.scss';

import Day from "./Day/Day";
import Search from "./Search/Search";

import useAuth from "hook/useAuth";
import useClassroom from "hook/useClassroom";
import {getLessonsAPI} from "http/classroomAPI";
import AnimatedPage from "components/AnimatePage/AnimatePage";

function Timetable() {
	const {token} = useAuth();
	const {classroomId} = useClassroom();
	
	const [startDate, setStartDate] = useState(moment().subtract(1, 'week').toDate());
	const [endDate, setEndDate] = useState(moment().add(1, 'month').toDate());
	const [days, setDays] = useState([]);
	
	const animations = {
		visible: i => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.05 * i
			}
		}),
		hidden: {
			opacity: 0,
			x: -10
		}
	}
	
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
		<AnimatedPage>
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
						days.map((day, i) => {
							return <Day key={day.date} day={day} animations={animations} custom={i}/>
						})
					}
				</div>
			
			</div>
		</AnimatedPage>
	);
}

export default Timetable;