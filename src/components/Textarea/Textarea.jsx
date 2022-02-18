import React from "react";
import './Textarea.scss';

function Textarea(props) {
	
	const {
		className = '',
		onChange = undefined,
		placeholder = ''
	} = props;
	
    return (
        <textarea
            className={'textarea-default ' + className}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default Textarea;