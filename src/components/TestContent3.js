import React from 'react';

const TestContent3 = () => {
	return (
		<div className="tc dib bg-light-green br3 pa3 ma2 grow bw2 shadow-5">
			<div className="col-md-8 col-lg-9 mt-4 mt-md-0 ">
				<div className="title-wrap">
					<h1>Metabolic Syndrome</h1>
				</div>
				<div className="service-img">
					<img src="images/content/service-big-01.html" className="img-fluid" alt="" />
				</div>
				<div className="pt-2 pt-md-4">
					<div style={{ marginTop: '-50px', marginBottom: '30px' }}>
						<p>
							Metabolic syndrome describes a combination of conditions include: obesity, type 2 diabetes,
							fatty liver disease, high blood pressure and high cholesterol. Metabolic syndrome increases
							the risk for heart disease, stroke, kidney disease and certain cancers. The best strategy to
							prevent and manage Metabolic Syndrome is to strive for early detection and participate in
							intensive dietary and lifestyle modifications. If you have 1/5 of the below features you are
							at risk, i f you have 3/5 you have Metabolic Syndrome.
						</p>
						<div className="mt-3" />
						<ul className="numbered-list-lg">
							<li>Waist Circumference: >40” Males or >35” Females</li>
							<li>High Triglycerides >150 mg/dL or lipid medication use</li>
							<li>Low HDL (good cholesterol): >40 Males >50 Females or cholesterol medication use</li>
							<li>High Blood Pressure >130/85 or blood pressure medication use</li>
							<li>High Fasting Blood Glucose >100 or diabetes medication use</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestContent3;
