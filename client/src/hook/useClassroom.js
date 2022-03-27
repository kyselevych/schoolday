import {useContext} from "react";
import {ClassroomContext} from "hoc/ClassroomProvider";

function useClassroom() {
	return useContext(ClassroomContext);
}

export default useClassroom;