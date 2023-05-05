import React, { Component } from "react";
import "../../css/Home/SimpleSteps.css";

import catchyImg from "../../images/card-images/catchy.webp";
import focusImg from "../../images/card-images/focus.webp";
import empathyImg from "../../images/card-images/empathy.webp";
import developersImg from "../../images/card-images/developers.webp";

function OurPromise() {
	return (
		<>
			<div className="container-fluid">
				<div className="container simple-steps-section three-steps-section padding-y">
					<div className="row text-center  ">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							{/* <h5>OUR PROMISES</h5> */}
							<h2>Our Promises</h2>
							{/* <h2>PERKS OF HAVING A PROFESSIONAL WEBSITE</h2> */}
						</div>
						<div className="col-lg-1"></div>
					</div>
					<div className="row cards-section">
						<div className="col-md-12 steps first-three-steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={catchyImg}
									alt="Simple and Eye-Catchy"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Simple and Eye-Catchy
									</h4>
									<p className="card-text">
										We strive to make your websites as easy
										and pleasant to read as possible.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={focusImg}
									alt="Objective Focus"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Objective Focus
									</h4>
									<p className="card-text">
										We understand what it takes to create a
										professional web design that × 3
										business growth.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={empathyImg}
									alt="Empathy and Fairness"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Empathy and Fairness
									</h4>
									<p className="card-text">
										We believe that businesses need at least
										× 3 as much traffic as they are getting.
										We promise high end and superior work
										quality.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={developersImg}
									alt="High End Developers"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										High End Developers
									</h4>
									<p className="card-text">
										We select highly professional developers
										based on their proficiency and skilled
										in their particular domain.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OurPromise;
