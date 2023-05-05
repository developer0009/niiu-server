import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service2Img from "../../images/website-development/service2.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Service2() {
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
							<h3>Website Design & Re-design</h3>

							<p className="who-are-we-p">
								Website design and re-design is a field that has
								seen a significant increase in demand over the
								past few years. This is due to the fact that
								websites have become an essential part of
								businesses, both large and small. A poorly
								designed website can damage a brand's
								reputation, while a well-designed website can
								help boost sales and traffic. Whether you're
								looking for a fresh new look or need help
								revamping your existing website, we have the
								skills and experience to make it happen. We use
								state-of-the-art design templates that are
								updated regularly to ensure that your website
								looks as current and professional as possible.
							</p>
							<p>
								We also offer comprehensive design services that
								can take your site from average to amazing in no
								time at all. Our team of experts is skilled in
								various web development languages, so they can
								create a custom design tailored specifically for
								your business.
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
								src={service2Img}
								className="img img-fluid"
								alt="website design and re design"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service2;
