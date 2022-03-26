import React, {useEffect} from 'react';

import './Notification.scss';

function Notification(props) {
	const delay = 3000;
	const {type, closeNotification, children} = props;

	useEffect(() => {
		const timeoutReset = setTimeout(() => {
			closeNotification();
		}, delay);

		return function cleanup() {
			clearTimeout(timeoutReset);
		}
	}, []);
	
	let activeClassName;
	
	switch (type) {
		case 'positive': {
			activeClassName = 'notification--positive';
			break;
		}
		case 'negative': {
			activeClassName = 'notification--negative';
			break;
		}
		default: {
			activeClassName = 'notification--positive';
			break;
		}
	}

	return (
		<div className={`notification ${activeClassName}`}>
			<div className="notification__text" onClick={closeNotification}>
				{children}
			</div>
			<div className="notification__line">
				<div className="notification__line-active" />
			</div>
		</div>
	);
}

export default Notification;