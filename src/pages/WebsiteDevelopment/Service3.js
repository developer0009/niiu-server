import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service3Img from "../../images/website-development/service3.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service3() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we  padding-b">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={service3Img}
								className="img img-fluid"
								alt="content development"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Content Development</h3>

							<p className="who-are-we-p">
								Many small business owners feel like they don't
								have the time or resources to create
								high-quality content. However, according to a
								recent study, content development is one of the
								most important aspects of online marketing.
							</p>
							<p>
								Providing engaging and informative articles can
								actually lead to increased traffic and sales.
								The truth is good content pays off in many ways.
								It can help you build relationships with your
								target audience (and convert those leads into
								customers). It can help drive interest in your
								brand or product (leading to more purchase
								decisions).
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

export default Service3;
