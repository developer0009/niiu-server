import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import brochureDesignImg from "../../images/id/brochure-design.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Service2() {
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
							<h3>Brochure Design</h3>

							<p className="who-are-we-p">
								Brochure design is an essential part of ideation
								and designing for digital marketing. A good
								brochure design can help to ideate and create a
								more effective digital marketing strategy. A
								well-designed brochure will:
							</p>
							<p className="mb-1">
								- Capture the viewer's attention from the first
								page
							</p>
							<p className="mb-1">
								- Resonate with their values and beliefs,
								driving them closer to your brand or product
							</p>
							<p>
								- Inform and engage them on what you have to
								offer, leading to conversion rates that are
								higher than average
							</p>
							<p>
								We are a team of professionals who put ourselves
								in our clients' shoes to better understand their
								expectations and motivations. As experts when it
								comes to service design ideation, we will work
								tirelessly to give you a perfect brochure that
								meets your needs.
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
								src={brochureDesignImg}
								className="img img-fluid"
								alt="Brochure design"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service2;
