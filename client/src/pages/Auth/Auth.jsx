import React from "react";
import {motion} from "framer-motion/dist/framer-motion";

import './Auth.scss';
import Tabs from "./Tabs/Tabs";

import SchoolDayLogo from 'assets/icons/schoolDayLogo.svg';
import AnimatedPage from "components/AnimatePage/AnimatePage";

function Auth() {
	const logoVariants = {
		default: {
			y: 0,
			scale: 1,
			opacity: 1
		},
		initial: {
			y: 300,
			scale: 5,
			opacity: 0
		}
	};
	
	return (
		<AnimatedPage>
			<div className="auth">
				<div className="auth__content-wrapper">
					<motion.img
						src={SchoolDayLogo}
						alt="SchoolDay"
						className="auth__logo"
						variants={logoVariants}
						initial="initial"
						animate="default"
						transition={{
							duration: 1
						}}
					/>
					<Tabs />
				</div>
			</div>
		</AnimatedPage>
	);
}

export default Auth;