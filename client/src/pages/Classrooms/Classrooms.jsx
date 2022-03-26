import React from "react";

import './Classrooms.scss';
import ListClassrooms from "./ListClassrooms/ListClassrooms";
import {ButtonAdd} from 'components';
import {CLASSROOM_CREATE_PATH} from "utils/pathConsts";


function Classrooms() {

    return (
        <div className="classrooms">
            <div className="container">
                <ButtonAdd to={CLASSROOM_CREATE_PATH}>Create new classroom</ButtonAdd>
                <ListClassrooms />
            </div>
            
        </div>
    );
}

export default Classrooms;