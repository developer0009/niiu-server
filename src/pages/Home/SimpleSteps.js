import React, { Component } from "react";
import getStarted1 from "../../images/home/get-started1.webp";
import getStarted2 from "../../images/home/get-started2.webp";
import getStarted3 from "../../images/home/get-started3.webp";

import "../../css/Home/SimpleSteps.css";

function SimpleSteps() {
	return (
		<>
			<div className="container-fluid">
				<div className="container three-steps-section simple-steps-section padding-y">
					<div className="row text-center">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>THREE BASIC STEPS</h5>
							<h2>Few Simple Steps For Successful Business !</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div className="col-md-12 steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={getStarted2}
									alt="Business audit"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Business Audit
									</h4>
									<p className="card-text">
										Research & audit for your web page to
										understand existing errors and
										inefficiency.
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
									src={getStarted1}
									alt="Competitor research"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Competitor Research
									</h4>
									<p className="card-text">
										Research is done to differentiate
										yourself from the competition.
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
									src={getStarted3}
									alt="Analysis and recommendations"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Analysis & Recommendations
									</h4>
									<p className="card-text">
										Analyze the data and work out solutions
										for improvement
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

export default SimpleSteps;
