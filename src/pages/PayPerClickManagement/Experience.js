import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import clickManagementImg from "../../images/ppcm/click-management.webp";
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
								src={clickManagementImg}
								className="img img-fluid"
								alt="Pay per click management services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT SERVICE</h5>
							<h2>Best Pay Per Click Management Services </h2>
							<p className="who-are-we-p">
								Pay per click (PPC) services is a paid
								advertising methodology in which websites or
								online brands pay third-party firms to display
								ads on their behalf. PPC works by the advertiser
								paying a fixed cost for every ad that is
								clicked, regardless of whether the visitor
								actually completes a purchase. This allows
								businesses to reach more people with their ads
								while reducing the risk of wasting money on
								unwanted clicks.
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
