import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Auth, Classroom, Classrooms, MainLayout} from "../../pages";

// Auth routes
import LoginForm from "../../pages/Auth/Tabs/LoginForm/LoginForm";
import RegistrationForm from "../../pages/Auth/Tabs/RegistrationForm/RegistrationForm";

// Classroom routes
import AddMember from "../../pages/Classroom/AddMember/AddMember";
import Timetable from "../../pages/Classroom/Timetable/Timetable";
import CreateLesson from "../../pages/Classroom/CreateLesson/CreateLesson";
import Members from "../../pages/Classroom/Members/Members";
import Settings from "../../pages/Classroom/Settings/Settings";
import Task from "../../pages/Classroom/Task/Task";
import TaskReview from "../../pages/Classroom/TaskReview/TaskReview";

import RequireAuth from "../../hoc/RequireAuth";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Auth/>}>
				<Route path="login" element={<LoginForm/>}/>
				<Route path="registration" element={<RegistrationForm/>}/>
			</Route>
			
			<Route path="/" element={<RequireAuth><MainLayout /></RequireAuth>}>
				<Route index element={<Classrooms />}/>
				<Route path="classroom/:id" element={<Classroom />}>
					<Route index element={<Timetable/>}/>
					<Route path="add-member" element={<AddMember/>}/>
					<Route path="create-lesson" element={<CreateLesson/>}/>
					<Route path="members" element={<Members/>}/>
					<Route path="settings" element={<Settings/>}/>
					<Route path="task" element={<Task/>}/>
					<Route path="task-review" element={<TaskReview/>}/>
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRouter;