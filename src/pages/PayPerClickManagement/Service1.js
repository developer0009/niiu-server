import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import bidManagementImg from "../../images/ppcm/bid-management.webp";
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
							<h2>
								NiiU Digital Offered PPC Marketing Services !
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
								src={bidManagementImg}
								className="img img-fluid"
								alt="Bid management"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Bid Management</h3>

							<p className="who-are-we-p">
								Bid management by PPC is a technique that SEOs
								can use to maximize their spend on ads. The idea
								is to create an organized and systematic process
								for bidding on keywords and targeting the most
								appropriate campaigns at any given time. This
								will enable you to avoid wasting money on ads
								that won't result in high click-through rates
								(CTRs), and ensure that your ad budget is spent
								where it will have the greatest impact.
							</p>
							<p>
								We can help you with bid management by PPC,
								ensuring that your campaigns are managed
								strategically and efficiently. We'll provide you
								with a detailed report detailing how your bids
								have performed, so you can make adjustments as
								needed
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

export default Service1;
