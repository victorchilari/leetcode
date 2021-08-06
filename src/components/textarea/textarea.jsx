import React, { useRef } from 'react';
import styles from './textarea.module.css';

const defSettings = {
	minHeight: 20,
	lineHeight: 20,
	padding: 12,
	border: 2
};

const Textarea = () => {
	const textarea = useRef(null);

	// Dealing with Textarea Height
	function calcHeight(value) {
		let numberOfLineBreaks = (value.match(/\n/g) || []).length;
		// min-height + lines x line-height + padding + border
		let newHeight =
			defSettings.minHeight +
			numberOfLineBreaks * defSettings.lineHeight +
			defSettings.padding +
			defSettings.border;
		return newHeight;
	}

	function recalcTextareaHeight() {
		textarea.current.style.height = calcHeight(textarea.current.value) + 'px';
	}

	return (
		<textarea
			ref={textarea}
			onKeyUp={recalcTextareaHeight}
			defaultValue=""
			className={styles.textarea}
		/>
	);
};

export default Textarea;
