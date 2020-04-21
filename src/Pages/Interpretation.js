import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InterpretationCard from '../components/InterpretationCard';

export default class Patients extends Component {
	constructor(props) {
        super(props);
        this.modernPlan = [
            {plan: "Standard Interpretation", cost: 0},
            {plan: "Endocrinologist Interpretation", cost: 3},
            {plan: "Fertility Interpretation", cost: 3},
            {plan: "Women's Health Interpretation", cost: 3},
            {plan: "Men's Health Interpretation", cost: 0},
            {plan: "Oncology Interpretation", cost: 3},
            {plan: "Dermatology Interpretation", cost: 3},
        ];
        this.modernPlan = [
            {plan: "Standard Interpretation", cost: 0},
            {plan: "Endocrinologist Interpretation", cost: 3},
            {plan: "Fertility Interpretation", cost: 3},
            {plan: "Women's Health Interpretation", cost: 3},
            {plan: "Men's Health Interpretation", cost: 0},
            {plan: "Oncology Interpretation", cost: 3},
            {plan: "Dermatology Interpretation", cost: 3},
        ]
		this.state = {
			mobile_menu: false,
			loading: false,
			redirectToPhone: false,
			home: 'active',
		};
	}

	handleMobileMenu = () => {
		this.setState(prevState => ({ mobile_menu: !prevState.mobile_menu }));
	};

	handleOpenMobileCart = () => {
		this.setState({
			mobile_menu: false,
			showcart: 'active',
			show: false,
			showText: '',
			cartItems: [],
		});
	};

	handleOpenCart = () => {
		this.setState({
			showcart: 'active',
			show: false,
			showText: '',
			cartItems: [],
		});
	};

	handleCloseCart = () => {
		this.setState({ showcart: '' });
	};

	render() {
		return (
			<div>
				<Header />
				<div className="page-content">
					<div style={{ padding: '50px', marginTop: '-50px', marginBottom: '-50px' }}>
						<div className="mt-3 mt-lg-8 row no-gutters col-sm-9" />
						<h3 className="ml-2" style={{ textAlign: 'center' }}>
							{' '}
							Select a modern medicine expert
						</h3>
						<div className="mt-0 mt-lg-4" />

						<div className="container">
							<div className="row mt-lg-4">
								<div className="col-md-6 col-xl-6 pr-xl-7">
									<div className="department-tabs2">
										<InterpretationCard />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
