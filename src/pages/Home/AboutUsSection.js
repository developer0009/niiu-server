import React, { Component } from "react";
import "../../css/Home/AboutUsSection.css";

import technologyIcon from "../../images/home/technology-icon.webp";
import startegyIcon from "../../images/home/strategy-icon.webp";
import creativityIcon from "../../images/home/creativity-icon.webp";
import growthIcon from "../../images/home/growth-icon.webp";
import { Link } from "react-router-dom";

function AboutUsSection() {
	return (
		<>
			<div className="container-fluid about-us-bg">
				<div className="container about-us-section padding-y">
					<div className="row website-dev-service-2-section">
						<div className="col-lg-6 col-md-12 cards-res cards-about">
							<div className="first-set">
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={technologyIcon}
										alt="Website development"
									/>

									<div className="card-body">
										<h4 className="card-title">
											Website Development
										</h4>
										<p className="card-text">
											Latest technology stack to power up
											your projects
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={startegyIcon}
										alt="SMM"
									/>
									<div className="card-body">
										<h4 className="card-title">
											Social Media Marketing
										</h4>
										<p className="card-text">
											Strategically position and plan your
											moves to conquer your niche
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={creativityIcon}
										alt="UI UX design"
									/>
									<div className="card-body">
										<h4 className="card-title">
											UI/UX Design
										</h4>
										<p className="card-text">
											Designing & research attention
											grabbing interface for better
											experiences
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={growthIcon}
										alt="SEO optimization"
									/>
									<div className="card-body">
										<h4 className="card-title">
											SEO Optimisation
										</h4>
										<p className="card-text">
											Rank your product & service on 1st
											page of google.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="col-lg-6 heading col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
							id="numbers-id"
						>
							<h5>ABOUT US</h5>
							<h2>Grow Your Business With NiiU Digital</h2>
							<div className="content">
								<p className="who-are-we-p">
									We're incredibly proud to be among the best
									Digital Agency in Singapore!
								</p>
								<p>
									We are a team of leaders who ensure to take
									care of your online identity and presence.
									And that's the reason we are 101% committed
									towards clients' success and help them to
									achieve their long term goal.
								</p>
								<p>
									We provide affordable, high-quality digital
									marketing services that help businesses
									succeed online.
								</p>
								<p>
									If you're interested in working with us:
									Don't be a stranger!{" "}
									<Link
										to="/contact-us/"
										style={{
											color: "#2b0a78",
											fontWeight: "bold",
										}}
									>
										Get in touch
									</Link>
									. We would be happy to discuss the specifics
									of our services and answer any questions
									that you may have!
								</p>
							</div>
							<div className="content-2">
								<div>
									<h2 id="clients-id">19+</h2>
									<p style={{ fontWeight: "bolder" }}>
										Active Clients
									</p>
								</div>
								<div>
									<h2 id="projects-id">33+</h2>
									<p style={{ fontWeight: "bolder" }}>
										Projects Done
									</p>
								</div>
								<div>
									<h2 id="advisors-id">6+</h2>
									<p style={{ fontWeight: "bolder" }}>
										Team Advisors
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

export default AboutUsSection;
