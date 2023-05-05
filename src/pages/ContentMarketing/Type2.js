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
							<h3>Content Strategy</h3>

							<p className="who-are-we-p">
								A content marketing strategy is the foundation
								that supports all of your marketing efforts.
								It's a plan that outlines what type of content
								you will produce, when it will be produced, and
								why it is important. A good content strategy
								helps to align your overall brand messaging,
								builds trust with your target audience, and
								drives traffic to your website or blog. However,
								many businesses don't know how to create
								effective content or even where to start.
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
								alt="Content strategy"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type2;
