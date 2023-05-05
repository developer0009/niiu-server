import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import services1Img from "../../images/home/service1.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service1() {
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
							<h2>NiiU Digital Services Offered !</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={services1Img}
								className="img img-fluid"
								alt="Website design and development services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							// data-aos="zoom-in-left"
							// data-aos-duration="1500"
						>
							<h3>Website Design & Development Services</h3>

							<p className="who-are-we-p">
								<Link
									to="/website-development/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Web design services singapore&nbsp;
								</Link>
								are an essential part of any business. They
								allow you to create a brand-new website that is
								tailored specifically to your needs, or improve
								the look and functionality of an existing
								site. Our efforts will be focused on increasing
								exposure for your content, Website Development,
								Website design and Redesign, Mobile Driven
								Development and Maintenance & Support.
							</p>
							<div className="btn-request-proposal">
								<Link to="/website-development/">
									<button className="our-button contact-side">
										<span>Learn More</span>
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

export default Service1;
