import React from 'react';
import {Routes, Route} from 'react-router-dom';

import {Auth, Classroom, Classrooms, MainLayout} from "pages";
import {AddMember, Timetable, CreateLesson, Members, Settings, Task, TaskReview, CreateClassroom} from 'pages/Classroom';

// Auth routes
import LoginForm from "pages/Auth/Tabs/LoginForm/LoginForm";
import RegistrationForm from "pages/Auth/Tabs/RegistrationForm/RegistrationForm";

// Classroom routes
import RequireAuth from "hoc/RequireAuth";
import RequireAccessToCR from "hoc/RequireAccessToCR";
import {LOGIN_PATH, REGISTER_PATH} from "utils/pathConsts";
import ClassroomProvider from "hoc/ClassroomProvider";


const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Auth/>}>
				<Route path={LOGIN_PATH} element={<LoginForm/>}/>
				<Route path={REGISTER_PATH} element={<RegistrationForm/>}/>
			</Route>
			
			<Route path="/" element={<RequireAuth><MainLayout /></RequireAuth>}>
				<Route index element={<Classrooms />}/>
				<Route path="classroom/create" element={<CreateClassroom />}/>
				<Route path="classroom/:id" element={
					<ClassroomProvider>
						<RequireAccessToCR>
							<Classroom />
						</RequireAccessToCR>
					</ClassroomProvider>
				}>
					<Route index element={<Timetable/>}/>
					<Route path="add-member" element={<AddMember/>}/>
					<Route path="create-lesson">
						<Route index element={<CreateLesson/>} />
						<Route path=":date" element={<CreateLesson/>}/>
					</Route>
					<Route path="members" element={<Members/>}/>
					<Route path="settings" element={<Settings/>}/>
					<Route path="task/:taskId" element={<Task/>}/>
					<Route path="task/:taskId/solution/:solutionId" element={<TaskReview/>}/>
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRouter;