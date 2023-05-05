import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import linkedinImg from "../../images/home/linkedin.webp";
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
							<h5>THREE IMPORTANT PLATFORMS</h5>
							<h2>Social Media Marketing Platforms !</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={linkedinImg}
								className="img img-fluid"
								alt="Linked in"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>LinkedIn</h3>

							<p className="who-are-we-p">
								LinkedIn is built specifically for business use;
								its features are tailored towards helping
								professionals network and find jobs, make
								connections with other professionals in their
								field, and more. Shared content on LinkedIn can
								easily be found by people who are interested in
								that topic or industry (unlike Facebook or
								Twitter), making it an ideal platform for
								promoting your brand or product.
							</p>
							<p>
								So why not give LinkedIn a try? We'll help you
								get started by creating a unique profile for
								your business, and we'll guide you step-by-step
								through the process of using Linked Infor social
								media marketing
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
