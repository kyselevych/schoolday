import React from "react";
import './TextareaLabel.scss';

function TextareaLabel(props) {
	
	const {
		textLabel = '',
		className = '',
		onChange = undefined,
		placeholder = ''
	} = props;
	
    return (
	    <label className="textarea-wrapper">
		    <span className="textarea-label">{textLabel}</span>
		    <textarea
			    className={'textarea-default ' + className}
			    onChange={onChange}
			    placeholder={placeholder}
		    />
	    </label>
     
    );
}

export default TextareaLabel;