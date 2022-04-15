import React from "react";

import './Classrooms.scss';
import ListClassrooms from "./ListClassrooms/ListClassrooms";
import {ButtonAdd} from 'components';
import {CLASSROOM_CREATE_PATH} from "utils/pathConsts";
import AnimatedPage from "components/AnimatePage/AnimatePage";


function Classrooms() {

    return (
		<AnimatedPage>
			<div className="classrooms">
				<div className="container">
					<ButtonAdd to={CLASSROOM_CREATE_PATH}>Create new classroom</ButtonAdd>
					<ListClassrooms />
				</div>
			</div>
		</AnimatedPage>
    );
}

export default Classrooms;