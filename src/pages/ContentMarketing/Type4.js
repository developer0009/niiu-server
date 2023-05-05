import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service4Img from "../../images/website-development/service4.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Type4() {
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
							<h3>Guest Posts</h3>

							<p className="who-are-we-p">
								Guest posts are a great way to add some fresh
								perspective to your content, and connect with a
								wider audience. They allow you to share your
								thoughts on a particular topic or issue without
								having the burden of writing an entire article
								yourself. It allows you to build relationships
								with other authors in your field. This can help
								you find new sources of inspiration and leads
								for future projects, as well as open up
								opportunities for collaboration or advertising
								placements.
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
								src={service4Img}
								className="img img-fluid"
								alt="Guest post"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type4;
