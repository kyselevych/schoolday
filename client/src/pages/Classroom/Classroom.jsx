import React, {createContext} from "react";
import {Outlet, useParams} from "react-router-dom";

import {Header} from "pages/Classroom";

export const ClassroomContext = createContext(null);

function Classroom() {
	const {id} = useParams();
	const paramsClassroom = {
		id,
		name: 'ISM Project'
	};
	
	return (
		<main className="classroom">
			<div className="container">
				<ClassroomContext.Provider value={paramsClassroom}>
					<Header />
					<Outlet />
				</ClassroomContext.Provider>
			</div>
		</main>
	);
}

export default Classroom;