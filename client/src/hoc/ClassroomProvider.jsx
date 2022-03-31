import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import {getClassroomAPI} from "http/classroomAPI";
import useAuth from "hook/useAuth";
import {useParams} from "react-router-dom";

export const ClassroomContext = createContext(null);

function ClassroomProvider({children}) {
	const {token} = useAuth();
	const {id: classroomId} = useParams();
	
	const [classroom, setClassroom] = useState(null);
	const [userRole, setUserRole] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState(null);
	
	const loadClassroom = async () => {
		try {
			// if (!classroomId) {
			// 	setClassroom(null);
			// 	setUserRole(null);
			// 	setNotificationMessage('Classroom id');
			// 	return;
			// }
			
			const response = await getClassroomAPI(token, classroomId);
			const data = await response.json();
			
			if (response.status === 200) {
				setClassroom(data.classroom);
				setUserRole(data.userRole);
				setNotificationMessage(data.message);
				return;
			}
			
			setClassroom(null);
			setUserRole(null);
			setNotificationMessage(data.message || 'Unknown error');
		}
		catch (err) {
			console.log(err);
		}
		finally {
			setIsLoaded(true);
		}
	}
	
	const contextValue = useMemo(() => ({
		isLoaded,
		classroom,
		userRole,
		loadClassroom,
		notificationMessage,
		classroomId
	}), [isLoaded, classroom, userRole, loadClassroom, notificationMessage, classroomId])

	return (
		<ClassroomContext.Provider value={contextValue}>
			{children}
		</ClassroomContext.Provider>
	);
}

export default ClassroomProvider;