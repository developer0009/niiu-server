import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service2Img from "../../images/website-development/service2.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Type2() {
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
							<h3>Web UI/UX Design</h3>

							<p className="who-are-we-p">
								Web UI UX design services is one of the most
								important aspects of any website or app. It's
								the interface that users see and interact with
								every time they visit your site or use your app.
								We understand the importance of creating an
								intuitive and easy-to-use interface, so we'll
								work with you to determine which features are
								essential for your target audience, what needs
								to be visualized properly, and how best to
								present it all together onscreen. They will also
								help you understand what works well on different
								types of devices, and make sure that all
								elements of the interface work together
								seamlessly.
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
								src={service2Img}
								className="img img-fluid"
								alt="Web UI UX design"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type2;
