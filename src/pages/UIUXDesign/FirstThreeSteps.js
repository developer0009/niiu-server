import React, { Component } from "react";
import "../../css/WhoAreWe/ThreeSteps.css";
import researchImg from "../../images/card-images/analysis.webp";
import dataAnalysisImg from "../../images/card-images/data-analysis.webp";
import userFlowsImg from "../../images/card-images/user-flows.webp";
import wireframingImg from "../../images/card-images/wire-framing-ui-ux.webp";
import prototypeImg from "../../images/card-images/prototype-ui-ux.webp";
import completeTaskImg from "../../images/card-images/complete-task-ui-ux.webp";

function FirstThreeSteps() {
	return (
		<>
			<div className="container-fluid">
				<div className="container three-steps-section padding-t first-three-steps  simple-steps-section">
					<div className="row text-center">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR WORKING PROCESS</h5>
							<h2>We Are Effective Each Time !</h2>
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
									src={researchImg}
									alt=" Analysis"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Competitive Analysis
									</h4>
									<p className="card-text">
										Create and manage top-performing social
										campaigns and start.
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
									src={dataAnalysisImg}
									alt="Data analysis"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Data analysis
									</h4>
									<p className="card-text">
										Create, publish, and promote engaging
										content to generate more traffic.
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
									src={userFlowsImg}
									alt="User flows"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										User flows
									</h4>
									<p className="card-text">
										Get more website traffic, more
										customers, and more online visibility.
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
									src={wireframingImg}
									alt="Wireframe"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Wireframe
									</h4>
									<p className="card-text">
										You can provide the answers that your
										potential customers are trying to find.
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
									src={prototypeImg}
									alt="Prototype"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Prototype
									</h4>
									<p className="card-text">
										Your website has to impress your
										visitors within just a few seconds.
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
									src={completeTaskImg}
									alt="Completed actions"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Completed actions
									</h4>
									<p className="card-text">
										Target your ideal search phrases and get
										found at the top of Googleâ€™s search.
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

export default FirstThreeSteps;
