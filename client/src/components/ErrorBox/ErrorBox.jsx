import React, {useEffect, useRef, useState} from 'react';

import './ErrorBox.scss';

function ErrorBox({resetError, textError, delay = 3000}) {
	const [widthActiveLine, setWidthActiveLine] = useState(100);
	const widthActiveLineRef = useRef(100);
	widthActiveLineRef.current = widthActiveLine;

	function closeErrorBox() {
		resetError('');
	}

	useEffect(() => {
		const timeoutReset = setTimeout(() => {
			resetError('');
		}, delay);

		return function cleanup() {
			clearTimeout(timeoutReset);
		}
	}, [resetError, delay]);

	useEffect(() => {
		const animationActiveLine = setInterval(() => {
			setWidthActiveLine(widthActiveLineRef.current - 0.25);

			if (widthActiveLineRef.current <= 0) {
				clearInterval(animationActiveLine);
			}

		}, delay / 400);

		return function cleanup() {
			clearInterval(animationActiveLine);
		}

	}, [delay])

	return (
		<div className='error-box'>
			<div className="error-box__text" onClick={closeErrorBox}>
				{textError}
			</div>
			<div className="error-box__line">
				<div className="error-box__line-active" style={{width: widthActiveLine + '%'}}></div>
			</div>
		</div>
	);
}

export default ErrorBox;