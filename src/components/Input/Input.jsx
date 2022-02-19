import React from "react";
import './Input.scss';

function Input(props) {
	
	const {
		type = 'text',
		className = '',
		onChange = undefined,
		placeholder = undefined,
		name = undefined,
		required = false
	} = props;
	
    return (
        <input 
            type={type}
            className={'input ' + className}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required={required}
        />
    );
}

export default Input;