import React, { useState } from "react";

import './Classrooms.scss';
import ListClassrooms from "./ListClassrooms/ListClassrooms";
import {ModalWindow, ButtonAdd, ButtonDecision, Input, LabelForm} from '@components';

function Classrooms() {
    const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

    function openModalWindow() {
        setIsOpenModalWindow(true);
    }

    function closeModalWindow() {
        setIsOpenModalWindow(false);
    }

    return (
        <div className="classrooms">
            <div className="container">
                <ButtonAdd onClick={openModalWindow}>Create new classroom</ButtonAdd>
                <ListClassrooms />
            </div>
            {isOpenModalWindow && 
                <ModalWindow 
                    title='Create new classroom'
                    onCloseClick={closeModalWindow}
                >
	                <LabelForm labelText="Name of classroom">
		                <Input placeholder="Enter name.." name="name-classroom"/>
	                </LabelForm>
                    <div className="classrooms__buttons-wrapper">
                        <ButtonDecision>Create</ButtonDecision>
                        <ButtonDecision type='negative' onClick={closeModalWindow}>Cancel</ButtonDecision>
                    </div>
                </ModalWindow>
            }
        </div>
    );
}

export default Classrooms;