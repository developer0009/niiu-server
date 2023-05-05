import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service3Img from "../../images/home/service3-1.webp";
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
							<h3>Content Marketing</h3>

							<p className="who-are-we-p">
								Yes, Content marketing is all the rage these
								days. The number of businesses that use content
								marketing to further their reach and increase
								their sales is increasing rapidly all across the
								globe. We understand the importance of creating
								engaging and interesting content, which is why
								we customize every project according to your
								specific needs. We can assist you with Blog
								posts, Content Strategy, Content Writing &
								Development, Guest Posts, Newsletter, Content
								Audit and Blog Report.
							</p>

							<div className="btn-request-proposal">
								<Link to="/content-marketing/">
									<button className="our-button contact-side">
										<span>Learn More</span>
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
								src={service3Img}
								className="img img-fluid"
								alt="Content marketing"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service2;
