import React from "react";
import './InputLabel.scss';
import Input from "../Input/Input";

function InputLabel(props) {
	
	const {
		labelText = '',
		type = 'text',
		className = '',
		onChange = undefined,
		placeholder = ''
	} = props;
	
    return (
		<label className="input-wrapper">
			<span className="input-label">{labelText}</span>
	        <Input
	            type={type}
	            className={className}
	            onChange={onChange}
	            placeholder={placeholder}
	        />
		</label>
    );
}

export default InputLabel;