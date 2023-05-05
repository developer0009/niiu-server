import React, { Component } from "react";
import "../../css/WhoAreWe/ThreeSteps.css";
import understanding from "../../images/card-images/understanding-social-media.webp";
import research from "../../images/card-images/research.webp";
import engage from "../../images/card-images/sharing-social-media.webp";
import sharingExperience from "../../images/card-images/sharing-experience-social-media.webp";
import rewardingImg from "../../images/card-images/rewarding-social-media.webp";
import audienceImg from "../../images/card-images/engaging-audience-social-media.webp";

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
							<h2>We Are Successful Every Time !</h2>
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
									src={understanding}
									alt="Understanding audience"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Understanding Audience
									</h4>
									<p className="card-text">
										Taking an audience-centered approach is
										important level of understanding.
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
									src={research}
									alt="Research and interest"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Research and Interest
									</h4>
									<p className="card-text">
										Focus on the problems you need to
										answer, without thinking about the
										methodology.
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
									src={engage}
									alt="Engaging audience"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Engaging Audience
									</h4>
									<p className="card-text">
										Describe a scene or a character, Share a
										personal experience, Relate to a recent
										event.
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
									src={sharingExperience}
									alt="Sharing knowledge"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Sharing Knowledge
									</h4>
									<p className="card-text">
										Share a personal experienc, Share a
										personal experience,Point out something
										positive.
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
									src={rewardingImg}
									alt="Rewarding audience"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Rewarding Audience
									</h4>
									<p className="card-text">
										Offer discounts for high-spending
										customers, Offer discounts for
										high-spending customers.
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
									src={audienceImg}
									alt="Engaging the audience"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Engaging the Audience
									</h4>
									<p className="card-text">
										If you start slow, there are still a lot
										of things you can do and learn from.
										Engaging is the key.
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
