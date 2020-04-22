import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InterpretationCard from '../components/InterpretationCard';

export default class Interpretation1 extends Component {
	constructor(props) {
        super(props);
        this.modernPlan = [
            {name: "Standard Interpretation", cost: 0},
            {name: "Endocrinologist Interpretation", cost: 3},
            {name: "Fertility Interpretation", cost: 3},
            {name: "Women's Health Interpretation", cost: 3},
            {name: "Men's Health Interpretation", cost: 0},
            {name: "Oncology Interpretation", cost: 3},
            {name: "Dermatology Interpretation", cost: 3},
        ];
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
					<div style={{ padding: '70px', marginTop: '-50px', marginBottom: '-50px' }}>
						<div className="mt-3 mt-lg-12 row no-gutters col-sm-9" />
						<h2 className="ml-2" style={{ textAlign: 'center' }}>
							{' '}
							Select a modern medicine expert
						</h2>
						<div className="mt-0 mt-lg-12" />

						<div className="container">
							<div className="row ">
                            {
                                this.modernPlan.map((data) => (
                                    <div className="col-md-12 col-xl-12">
									<div className="department">
										<InterpretationCard plan={data}/>
									</div>
								</div>
                                ))
                            }
								
                               
							</div>
                            
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
