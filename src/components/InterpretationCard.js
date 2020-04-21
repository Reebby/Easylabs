import React from 'react';
import {Link} from 'react-router-dom';
const InterpretationCard = ({plan}) => {
	return (
		<div>
			<div className="department-tab2">
				<div className="department-tab2-number">
					<i className="icon-testtube" />
				</div>
				<div className="department-tab2-text">{plan.name}</div>
				<div className="department-tab2-decor" />
				
			</div>
            <Link
					to="/coming-soon"
					target="_blank"
					className="btn mt-2"
					style={{marginBottom: '50px', marginTop: '50px'}}
				>
					<i className="icon-right-arrow" />
					<span>Fee: ${plan.cost}</span>
					<i className="icon-right-arrow" />
				</Link>
		</div>
	);
};

export default InterpretationCard;
