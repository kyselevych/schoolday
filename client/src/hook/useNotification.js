import {useContext} from "react";
import {NotificationContext} from "hoc/NotificationProvider";

function useNotification() {
	return useContext(NotificationContext);
}

export default useNotification;