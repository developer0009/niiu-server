import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import asistanceImg from "../../images/bms/asistance.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Reasons() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={asistanceImg}
								className="img img-fluid"
								alt="Work with niiu digital"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								Work With NiiU Digital For Better Assistance For
								Your Business Management Software Tools
							</h2>
							<p className="who-are-we-p">
								It's no secret that businesses today need
								software to manage their operations efficiently.
								Small business owners often find it difficult to
								stay on top of the latest trends and changes in
								the industry. That's where NIIU Digital business
								management software services come into play.
							</p>
							<p>
								NIIU Digital provides top-quality Business
								Management Software Tools that help businesses
								of all sizes run more efficiently and
								effectively. We offer a variety of software
								tools and services that will improve efficiency
								and streamline operations, making your business
								run more smoothly. We understand the importance
								of giving our clients the best possible service,
								so we work closely with them to ensure that
								their needs are always met. Our team is composed
								of experts in business software development and
								marketing, who will provide you with exactly
								what you need to improve your organization's
								performance.{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Contact us
								</Link>{" "}
								today to learn more about how NIIU Digital can
								help your business grow!
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

export default Reasons;
