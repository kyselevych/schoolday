import React from "react";
import {Outlet} from "react-router-dom";

import {Header} from "pages/Classroom";

function Classroom() {
	return (
		<main className="classroom">
			<div className="container">
				<Header />
				<Outlet />
			</div>
		</main>
	);
}

export default Classroom;