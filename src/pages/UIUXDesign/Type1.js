import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import prototypingServiceImg from "../../images/ui-ux/prototyping-service.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type1() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y simple-steps-section">
					<div className="row text-center mb-3">
						<div
							className="col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR PRIMARY SERVICES</h5>
							<h2>
								UI/UX Design Services Offered For SMEs,
								Solopreneurs & Real Estate !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={prototypingServiceImg}
								className="img img-fluid"
								alt="Prototyping & Wireframing"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Prototyping & Wireframing</h3>

							<p className="who-are-we-p">
								Prototyping and wireframing services can be a
								very helpful tool for businesses. They can help
								you create a clear vision for your website or
								app, and develop detailed designs that are easy
								to understand and navigate.
							</p>
							<p>
								Our team can provide you with comprehensive
								wireframing and prototyping services, so that
								you can make sure that your idea is crystal
								clear before moving forward. We will work with
								you to develop a plan based on exactly what you
								need and want, then go out and execute it
								flawlessly.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button req-pro-side">
										<span>Request A Proposal</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type1;
