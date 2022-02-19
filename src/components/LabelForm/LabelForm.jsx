import React from "react";
import './LabelForm.scss';

function LabelForm(props) {
	
	const {
		labelText = '',
		className = '',
		children
	} = props;
	
    return (
		<label className={'label-form ' + className}>
			<span className="label-form__text">{labelText}</span>
			{children}
		</label>
    );
}

export default LabelForm;