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
							<h3>Landing Page Performance Review</h3>

							<p className="who-are-we-p">
								Landing Page Performance Review is the process
								of examining all aspects of a landing page to
								determine whether it's performing as intended. A
								good landing page performance review will help
								you identify issues, improve your design and
								copy, and optimize your SEO. We can provide you
								with the resources and expertise necessary to
								ensure that your pages are optimized for search
								engine visibility and conversions.
							</p>
							<p>
								We'll take a look at your current landing page
								data and analyze how users are interacting with
								it (click-through rates, conversions, etc.).
								Once we have a clear picture of how things are
								working currently, we'll recommend changes to
								improve performance.
							</p>
							<p>
								Ad placements are an important part of any
								online marketing campaign. However, making sure
								that your ad placement is effective requires
								constant monitoring and adjustments. If you're
								not constantly adjusting your targeting
								parameters, then your ads will be ineffective.
							</p>
							<p>
								Our team of experts is skilled in creating
								effective campaigns that will reach your desired
								target audience. We can also provide tailored
								suggestions to improve your current strategy.
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
								alt="Landing page performance review"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service2;
