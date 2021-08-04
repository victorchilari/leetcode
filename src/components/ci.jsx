import React from 'react';

export default () => (
	<>
		<div className="container padding-top--md padding-bottom--lg">
			<div class="alert alert--primary" role="alert">
				<button aria-label="Close" class="clean-btn close" type="button">
					<span aria-hidden="true">×</span>
				</button>
				This is a <strong>primary</strong> alert. You should probably pay
				attention to it.
			</div>
		</div>
		<div className="container padding-top--md padding-bottom--lg">
			<div class="row">
				<div class="col col--3">
					<button aria-label="Close" class="clean-btn close" type="button">
						<span aria-hidden="true">×</span>
					</button>
					This is a <strong>primary</strong> alert. You should probably pay
					attention to it.
				</div>
				<div class="col">
					<button aria-label="Close" class="clean-btn close" type="button">
						<span aria-hidden="true">×</span>
					</button>
					This is a <strong>primary</strong> alert. You should probably pay
					attention to it.
				</div>
			</div>
		</div>
	</>
);
