import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import adTestingImg from "../../images/ppcm/ad-testing.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service5() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-b">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={adTestingImg}
								className="img img-fluid"
								alt="Ad copy optimization and testing"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Ad Copy Optimization & Testing</h3>

							<p className="who-are-we-p">
								Ad copy optimization is one of the most
								important steps in creating effective PPC
								campaigns. Not only does good ad copy help you
								reach your target audience, but it can also
								improve your click-through rates (CTRs) and
								conversion rates. We can help you identify which
								keywords are driving the best results for your
								business, test different ad formats to see which
								provides the best results, and create
								Retargeting ads that continue to drive traffic
								to your site even after someone has left.
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

export default Service5;
