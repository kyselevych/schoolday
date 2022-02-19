import React from "react";
import './Textarea.scss';

function Textarea(props) {
	
	const {
		className = '',
		onChange = undefined,
		placeholder = undefined,
		name = undefined,
		required = false
	} = props;
	
    return (
        <textarea
            className={'textarea ' + className}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            required={required}
        />
    );
}

export default Textarea;