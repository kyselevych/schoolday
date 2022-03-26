import React, {createContext, useCallback, useEffect, useMemo, useState} from 'react';
import Notification from "components/Notification/Notification";


export const NotificationContext = createContext(null);

function NotificationProvider({children}) {
	const [isActive, setIsActive] = useState(false);
	const [message, setMessage] = useState('');
	const [type, setType] = useState(null);

	const notification = (message, type = 'positive') => {
		setIsActive(true);
		setMessage(message);
		setType(type);
	}
	
	const closeNotification = () => {
		setIsActive(false);
		setMessage('');
		setType(null);
	}
	
	const contextValue = useMemo(() => ({
		notification,
		closeNotification
	}), [notification, closeNotification])

	return (
		<NotificationContext.Provider value={contextValue}>
			{children}
			{isActive &&
				<Notification type={type} closeNotification={closeNotification}>{message}</Notification>
			}
		</NotificationContext.Provider>
	);
}

export default NotificationProvider;