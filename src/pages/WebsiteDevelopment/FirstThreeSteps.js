import React, { Component } from "react";
import "../../css/Home/SimpleSteps.css";
import "../../css/WhoAreWe/ThreeSteps.css";
import researchImg from "../../images/card-images/research.webp";
import uiuxImg from "../../images/card-images/ui-ux.webp";
import contentImg from "../../images/card-images/content.webp";
import planningImg from "../../images/card-images/planning.webp";
import implementationImg from "../../images/card-images/implementation.webp";
import growthImg from "../../images/card-images/growth.webp";

function FirstThreeSteps() {
	return (
		<>
			<div className="container-fluid">
				<div className="container three-steps-section padding-t first-three-steps simple-steps-section">
					<div className="row text-center">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR WORKING PROCESS</h5>
							<h2>Every Time, We Succeed !</h2>
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
									src={researchImg}
									alt="Competitor Research"
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
									src={contentImg}
									alt="Content Analysis"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Content Analysis
									</h4>
									<p className="card-text">
										Creating a Page, Post, Video, Blog with
										a Built-In Stratergy.
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
									src={uiuxImg}
									alt="UI UX Development"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										UI/UX Development
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
									src={planningImg}
									alt="Planning with Perfection"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Planning with Perfection
									</h4>
									<p className="card-text">
										Setting Out Your Website's Objectives
										with Built-In Stratergy.
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
									src={implementationImg}
									alt="Implementation of Objectives"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Implementation of Objectives
									</h4>
									<p className="card-text">
										Implementing Objectives and Create a
										Sitemap with Constant Tests.
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
									src={growthImg}
									alt="Awesome Growth"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Awesome Growth
									</h4>
									<p className="card-text">
										Content, Usability, Aesthetics,
										Visibility, Interactions
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
