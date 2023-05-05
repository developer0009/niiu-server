import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import linkedinImg from "../../images/home/linkedin.webp";
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
								src={linkedinImg}
								className="img img-fluid"
								alt="Social media marketing"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Social Media Marketing</h3>

							<p className="who-are-we-p">
								Social media is one of the most popular and
								effective ways to reach out to potential
								customers, followers, and clients. It allows
								businesses to connect with their target audience
								in a way that was never possible before.
								However, social media marketing for businesses
								can be complex and challenging. But this should
								be the list of your worries: We are here for
								you! On the menu we have Platform specific
								Social media Management, Content Strategy,
								Profile Creation & Branding, Social Media
								Content Management, Community Management, Social
								Media Advertising and Research & Analysis.
							</p>

							<div className="btn-request-proposal">
								<Link to="/social-media-marketing/">
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

export default Service5;
