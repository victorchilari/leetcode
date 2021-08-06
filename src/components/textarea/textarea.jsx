import React, { useRef } from 'react';
import styles from './textarea.module.css';

const Textarea = () => {
	const parentNode = useRef(null);

	const handleTextarea = (value) => (parentNode.current.dataset.value = value);
	return (
		<label
			ref={parentNode}
			className={`${styles.inputSizer} ${styles.stacked}`}
		>
			<textarea
				onChange={(e) => handleTextarea(e.target.value)}
				rows="1"
				placeholder="hi"
				defaultValue=""
			/>
		</label>
	);
};

export default Textarea;
