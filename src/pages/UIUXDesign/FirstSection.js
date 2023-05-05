import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import uiuxImg from "../../images/home/ui-ux-bg-sec.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function FirstSection() {
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
								src={uiuxImg}
								className="img img-fluid"
								alt="UI UX design services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>LET'S DESIGN SOMETHING AWESOME</h5>
							<h2>
								Build Better User Experience With NiiU Digital
							</h2>

							<p className="who-are-we-p">
								UI/UX web design is the process of designing a
								user interface or user experience for a product,
								system, site, or service. It involves
								understanding how users interact with and use
								the product, and creating User Interface (UI)
								designs that are easy to understand and use.
								UI/UX designers also work to create attractive
								and intuitive designs that support the overall
								goals of the company or organization.
							</p>
							<p>
								UI/UX designers work alongside developers to
								create designs that are easy to use and look
								good on all devices. They must be skilled in
								both sketching and programming, as well as
								knowledge of human behavior and interaction
								patterns.
							</p>
							<p>
								UI (User Interface/Web Design) and web design
								services in Singapore are becoming increasingly
								popular among business owners. This is because
								modern user interfaces and websites have become
								essential for both the customer experience and
								website visibility. A good user interface can
								make a difficult task (such as finding
								information on your website) much easier, while
								a well- Designed web page can help boost traffic
								and conversions.
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

export default FirstSection;
