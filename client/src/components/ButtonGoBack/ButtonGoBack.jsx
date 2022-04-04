import React from "react";
import './ButtonGoBack.scss';

import {useNavigate} from "react-router-dom";

function ButtonGoBack(props) {
	const {
		text = "Go back",
		onClick = goBack
	} = props;
	
	const navigate = useNavigate();
	
	function goBack() {
		navigate(-1);
	}
	
    return (
	    <div className="button-go-back" onClick={onClick}>{text}</div>
    );
}

export default ButtonGoBack;