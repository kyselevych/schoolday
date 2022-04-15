import React, {useEffect} from 'react';
import {Navigate, useParams} from "react-router-dom";
import {CLASSROOMS_PATH} from "utils/pathConsts";
import useClassroom from "hook/useClassroom";
import useNotification from "hook/useNotification";
import {Loading} from "components";

function RequireAccessToCR({children}){
	const {classroom, loadClassroom, isLoaded, notificationMessage} = useClassroom();
	const {notification} = useNotification();
	const params = useParams();
	
	useEffect(async () => {
		await loadClassroom(params.id);
	}, [])
	
	if (!isLoaded) {
		return <Loading/>;
	}
	
	if (!classroom) {
		notification(notificationMessage, 'negative');
		return <Navigate to={CLASSROOMS_PATH} />;
	}

	return children;
}

export default RequireAccessToCR;