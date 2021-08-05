import React from 'react';
import styles from './ci.module.css';

// import CodeInput from './codeinput.mdx';

export default () => (
	<>
		<div className="container padding-top--md padding-bottom--lg">
			<div className="alert alert--primary" role="alert">
				<button aria-label="Close" className="clean-btn close" type="button">
					<span aria-hidden="true">×</span>
				</button>
				This is a <strong>primary</strong> alert. You should probably pay
				attention to it.
			</div>
		</div>
		<div className="container padding-top--md padding-bottom--lg">
			<div className="row">
				<div className="col col--3">
					<button aria-label="Close" className="clean-btn close" type="button">
						<span aria-hidden="true">×</span>
					</button>
					This is a <strong>primary</strong> alert. You should probably pay
					attention to it.
				</div>
				<div className="col">
					<button aria-label="Close" className="clean-btn close" type="button">
						<span aria-hidden="true">×</span>
					</button>
					This is a <strong>primary</strong> alert. You should probably pay
					attention to it.
				</div>
			</div>
			<div className={styles.playgroundContainer}>
				<div className={styles.playgroundHeader}>Live Editor</div>
				<div className={styles.playgroundEditor}>
					<textarea
						name="condition_input"
						id="condition_input"
						autocapitalize="off"
						autocomplete="off"
						autocorrect="off"
						spellcheck="false"
						data-gramm="false"
					>
						Live Editor
					</textarea>
				</div>
			</div>
		</div>
	</>
);
