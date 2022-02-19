import React from "react";
import './WrapperNarrow.scss';

function WrapperNarrow(props) {
	
	const {
		className,
		children
	} = props;
	
    return (
        <article className={'wrapper-narrow' + ' ' + className}>
	        {children}
        </article>
    );
}
 
export default WrapperNarrow;