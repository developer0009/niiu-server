import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

function FivePoints() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y simple-steps-section">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>FIVE SIGNIFICANT BENEFITS</h5>
							<h2>
								Benefits Of Business Management Software For
								Small Businesses !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Improved Decision Making Ability</h3>
							<p>
								With access to all relevant data across the
								organization, managers can make more informed
								choices about what actions to take next. This
								increased efficiency leads to better long-term
								outcomes for both the company and its employees.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Reduced Wastefulness</h3>
							<p>
								Automated systems eliminate wasteful activities
								by logging every step of a process so that
								corrective action or rework can be quickly
								identified and carried out as needed. This
								reduces overall time wasted on tasks that could
								be completed more effectively with less effort
								by humans.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>More Accurate Forecasting</h3>
							<p>
								Businesses with effective business management
								tools often have improved predictions for future
								trends, thanks in part to comprehensive data
								recording capabilities that allow insights into
								historical behavior patterns. This enables
								companies to proactively prepare for changes
								before they happen, reducing unexpected damage
								or loss later on down the line.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Improved Communication And Coordination</h3>
							<p>
								The ability for employees to access the same
								data in real time across different platforms
								makes it easier to communicate, coordinate
								efforts, and make better decisions as a team.
								Employees are able to work more effectively
								together as they have everything they need all
								in one place, making coordination seamless.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Enhanced Security</h3>
							<p>
								With comprehensive data protection measures in
								place, businesses can rest assured that their
								confidential information will remain safe and
								secure. Business management software also makes
								it easier to track down and manage unauthorized
								access or use of data, minimizing the risk of
								theft or loss.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
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

export default FivePoints;
