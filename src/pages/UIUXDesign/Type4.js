import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import brandingServiceImg from "../../images/ui-ux/branding-service.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Type4() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-b">
					<div className="row website-dev-service-2-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Branding</h3>

							<p className="who-are-we-p">
								Branding is an important part of any business.
								If done well, it can help to create a unique and
								recognizable identity for the company, increase
								customer loyalty, and boost sales. Branding can
								be a daunting task, but it doesn't have to be.
								At our agency, we understand the importance of
								creating a brand that resonates with your target
								audience. We'll work together with you to create
								a strategy that is tailored specifically for
								your business or project. From there, we will
								ensure that all of our content and marketing
								efforts are consistent with this branding
								scheme.
							</p>

							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button req-pro-side">
										<span>Request A Proposal</span>
									</button>
								</Link>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={brandingServiceImg}
								className="img img-fluid"
								alt="Branding"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type4;
