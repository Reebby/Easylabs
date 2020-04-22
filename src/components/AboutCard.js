import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const GoToComingSoon = () => {
	return <Redirect to="/coming-soon" />;
};
class AboutCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}
	render() {
		const {team} = this.props
		const {redirect} = this.state;
		if(redirect) {
			return(
				<Redirect to="/coming-soon" />
			)
		}
		return (
			<div>
				<div className="department-tab2">
					<div className="row ">
						<div className="col-md-4 col-xl-4">
							<img width="250px" src={team.image} alt="" className="img-fluid" />

							
						</div>
						<div className="col-md-8 col-xl-8">
							<div className="department-tab2-text">{team.name}</div>
							<div className="department-tab2-decor" />
                            <br />
							<p>
							{team.about}
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutCard;
