import React from 'react';
import {motion} from "framer-motion/dist/framer-motion";
import './Loading.sass';

const animations = {
	initial: { opacity: 0 },
	animate: { opacity: 1 },
	exit: { opacity: 0 }
};

function Loading() {
	return (
		<motion.div
			className="loading"
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
		>
		
		</motion.div>
	);
}

export default Loading;