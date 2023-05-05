import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import type6Img from "../../images/content-marketing/type6.webp";
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
							<h3>Content Audit</h3>

							<p className="who-are-we-p">
								A content audit is a great way to measure the
								effectiveness of your content marketing efforts.
								By reviewing your past and current content, you
								can identify which topics are most popular and
								engaging with your target audience. This
								information will help you create more effective,
								relevant, and interesting pieces for future
								publications.
							</p>
							<p>
								It can highlight any areas in which you need to
								make changes or improvements. Armed with this
								valuable data, you'll be well on your way to
								successful content marketing!
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
								src={type6Img}
								className="img img-fluid"
								alt="Content audit"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type4;
