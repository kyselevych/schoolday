import React from "react";
import './WrapperNarrow.scss';

function WrapperNarrow(props) {
	
	const {
		children
	} = props;
	
    return (
        <article className="wrapper-narrow">
	        {children}
        </article>
    );
}
 
export default WrapperNarrow;