import React from "react";

import './ModalWindow.scss';
 
function ModalWindow({title, children, onCloseClick}) {
	
	function stopPropagation(e) {
		e.stopPropagation();
	}
	
    return (
        <div className="modal-window" onClick={onCloseClick}>
            <div className="modal-window__block" onClick={stopPropagation}>
                <div className="modal-window__header">
                    {title}
                    <span className="modal-window__close-btn" onClick={onCloseClick}></span>
                </div>
                <div className="modal-window__content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default ModalWindow;