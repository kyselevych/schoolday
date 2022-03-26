import React, {useCallback, useEffect, useState} from "react";

import ListItem from "./common/ListItem";
import useAuth from "hook/useAuth";
import {listClassroomsAPI} from "http/classroomAPI";

function ListClassrooms() {
	const [classrooms, setClassrooms] = useState(null);
	const {token} = useAuth();
	
	const getClassrooms = useCallback(async () => {
		const response = await listClassroomsAPI(token);
		const data = await response.json();
		const listClassrooms = data.listClassrooms;
		
		setClassrooms(listClassrooms);
		
	}, [])
	
	useEffect(() => {
		getClassrooms();
	}, [getClassrooms]);
	
    return (
        <div className="classrooms__list">
	        { classrooms &&
				classrooms.map(elem => {
					const classroom = elem.classroom;
					
		            return <ListItem key={classroom.id} id={classroom.id} name={classroom.name}/>
				})
			}
        </div>
    );
}

export default ListClassrooms;