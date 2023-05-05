import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import performanceReportImg from "../../images/ppcm/performance-report.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Service4() {
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
							<h3>
								Keyword Management Monthly Campaign Performance
								Report
							</h3>

							<p className="who-are-we-p">
								As a business or individual, it is important to
								know your marketing performance. That's where
								our Keyword Management Monthly Campaign
								Performance Report comes in handy! Our team will
								review your previous month’s search engine
								traffic data and provide you with an analysis of
								how effective your various campaigns were in
								bringing in leads and converting them into
								customers. We will also suggest strategies that
								can be used to improve your results next month.
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
								src={performanceReportImg}
								className="img img-fluid"
								alt="Keyword management monthly campaign performance report"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service4;
