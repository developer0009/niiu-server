import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import businessManageImg from "../../images/bms/business-management-bg.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Experience() {
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
								src={businessManageImg}
								className="img img-fluid"
								alt="Business Management Software Services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT SERVICE</h5>
							<h2>
								Let Your Business Process Flow Smoothly With
								NiiU Business Management Software Services
							</h2>
							<p className="who-are-we-p">
								Business management software is a computer
								program that helps businesses manage their
								day-to-day operations. Business management
								software can help small businesses with a lot of
								the same problems that larger businesses face.
							</p>
							<p>
								Business management software services allow
								businesses of all sizes to track and manage
								their operations more effectively. From keeping
								tabs on sales and profits, to tracking employee
								productivity and inventory levels, these
								programs have it all. There are a number of
								different types of business management software
								available today, each with its own set of
								features and advantages. Some popular options
								including:{" "}
								<span style={{ fontWeight: "bold" }}>
									Employee time recording
								</span>{" "}
								(tracking time spent on specific tasks),{" "}
								<span style={{ fontWeight: "bold" }}>
									Sales forecasting or analysis{" "}
								</span>
								(leveraging data from past transactions to make
								predictions for future ones),{" "}
								<span style={{ fontWeight: "bold" }}>
									Statistical data analysis
								</span>{" "}
								(determining what trends exist within your
								organization and how best to address them),{" "}
								<span style={{ fontWeight: "bold" }}>
									Customer relationship management
								</span>{" "}
								(maintaining files that contain information
								about customers, orders, contact info etc.)
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

export default Experience;
