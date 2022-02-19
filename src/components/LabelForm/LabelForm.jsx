import React from "react";
import './LabelForm.scss';

function LabelForm(props) {
	
	const {
		labelText = '',
		className = '',
		labelPosition = 'start',
		children
	} = props;
	
	const labelTextElem = labelText && <span className="label-form__text">{labelText}</span>;
	
    return (
		<label className={'label-form ' + className}>
			{labelPosition === 'start' && labelTextElem}
			{children}
			{labelPosition === 'end' && labelTextElem}
		</label>
    );
}

export default LabelForm;