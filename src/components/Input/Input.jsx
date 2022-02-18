import React from "react";
import './Input.scss';

function Input(props) {
	
	const {
		type = 'text',
		className = '',
		onChange = undefined,
		placeholder = ''
	} = props;
	
    return (
        <input 
            type={type}
            className={'input-default ' + className}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Input;