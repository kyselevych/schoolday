import React from "react";
import './Checkbox.scss';

function Checkbox(props) {
	
	const {
		className = '',
		onChange = undefined,
		name = undefined
	} = props;
	
    return (
        <input 
            type="checkbox"
            className={'checkbox ' + className}
            onChange={onChange}
            name={name}
        />
    );
}

export default Checkbox;