import React from 'react';

const InterpretationCard = () => {
	return (
		<div>
			<div className="department-tab2">
				<div className="department-tab2-number">
					<i className="icon-testtube" />
				</div>
				<div className="department-tab2-text">Standard Interpretation</div>
				<div className="department-tab2-decor" />
				
			</div>
            <a
					href="https://easylabs.org/patient/report/"
					target="_blank"
					className="btn mt-2"
					width="50px"
				>
					<i className="icon-right-arrow" />
					<span>Fee: $0</span>
					<i className="icon-right-arrow" />
				</a>
		</div>
	);
};

export default InterpretationCard;
