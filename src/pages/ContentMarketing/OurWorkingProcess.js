import React, { Component } from "react";
import contentGoalsImg from "../../images/card-images/content-goals.webp";
import createAudienceImg from "../../images/card-images/create-audience.webp";
import keywordResearchImg from "../../images/card-images/keyword-research-seo.webp";

import "../../css/Home/SimpleSteps.css";

function OurWorkingProcess() {
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
							<h5>OUR WORKING PROCESS</h5>
							<h2>We Nail It Every Time !</h2>
						</div>
						<div className="col-lg-1"></div>
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
									src={contentGoalsImg}
									alt="Set your content goals"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Set Your Content Goals
									</h4>
									<p className="card-text">
										This comes in the form of a clear goal
										that you can measure to reach.
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
									src={createAudienceImg}
									alt="Create your audience"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Create Your Audience
									</h4>
									<p className="card-text">
										Identifying your needs and creating a
										targeted audience checklist for you.
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
									src={keywordResearchImg}
									alt="Conduct keyword research"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Conduct Keyword Research
									</h4>
									<p className="card-text">
										Into the habit of looking at the results
										every day and making a decision based on
										this feedback.
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

export default OurWorkingProcess;
