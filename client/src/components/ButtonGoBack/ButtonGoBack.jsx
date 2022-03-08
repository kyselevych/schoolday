import React from "react";
import './ButtonGoBack.scss';

function ButtonGoBack(props) {
	
	const {
		text = "Go back",
		onClick = undefined,
		href = '#'
	} = props;
	
    return (
	    <a href={href} className="button-go-back">{text}</a>
    );
}

export default ButtonGoBack;