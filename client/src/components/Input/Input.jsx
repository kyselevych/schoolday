import React from "react";
import './Input.scss';

function Input(props) {
	
	const {
		type = 'text',
		className = '',
		onChange = undefined,
		onBlur = undefined,
		placeholder = undefined,
		name = undefined,
		value = undefined,
	} = props;
	
    return (
        <input 
            type={type}
            className={'input ' + className}
            placeholder={placeholder}
            name={name}
            value={value}
            onBlur={onBlur}
        />
    );
}

export default Input;