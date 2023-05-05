import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";

import service4Img from "../../images/website-development/service4.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type3() {
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
								src={service4Img}
								className="img img-fluid"
								alt="Mobile UI UX design"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Mobile UI/UX Design</h3>

							<p className="who-are-we-p">
								A mobile user interface or "UI" design is the
								process of designing the look and feel of a
								mobile app, website, or other digital product
								that uses a graphical user interface. A good UI
								design makes it easy for users to navigate your
								product and find what they're looking for. It
								should be intuitive and simple to use, without
								any complicated menus or buttons.
							</p>
							<p>
								We can help you create a mobile experience that
								is both effective and engaging. We understand
								the needs of modern users, and we will work hard
								to create a user interface that meets your
								specific needs.
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

export default Type3;
