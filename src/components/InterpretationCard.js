import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const GoToComingSoon = () => {
	return <Redirect to="/coming-soon" />;
};
class InterpretationCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}
	render() {
		const {plan} = this.props
		const {redirect} = this.state;
		if(redirect) {
			return(
				<Redirect to="/coming-soon" />
			)
		}
		return (
			<div>
				<div onClick={() => this.setState({redirect: true})} className="department-tab2">
					<div className="row ">
						<div className="col-md-4 col-xl-4">
							<img width="250px" src="images/content/index-img-01.jpg" alt="" className="img-fluid" />

							{/* <div className="department-tab2-number">
							<i className="icon-testtube" />
						</div>
						<div className="department-tab2-text">{plan.name}</div>
						<div className="department-tab2-decor" /> */}
						</div>
						<div className="col-md-8 col-xl-8">
							<div className="department-tab2-text">{plan.name}</div>
							<div className="department-tab2-decor" />
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet
								repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore
								sunt, sed exercitationem labore provident, rerum culpa?.
								<br />
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit asperiores eveniet
								repudiandae vero veritatis soluta natus nemo itaque vitae dolore quidem totam inventore
								sunt, sed exercitationem labore provident, rerum culpa?.
							</p>
						</div>
					</div>
				</div>

				<Link
					to="/coming-soon"
					target="_blank"
					className="btn mt-2"
					style={{ marginBottom: '50px', marginTop: '50px' }}
				>
					<i className="icon-right-arrow" />
					<span>Fee: ${plan.cost}</span>
					<i className="icon-right-arrow" />
				</Link>
			</div>
		);
	}
}

export default InterpretationCard;
