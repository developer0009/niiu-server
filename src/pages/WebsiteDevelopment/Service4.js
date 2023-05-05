import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service4Img from "../../images/website-development/service4.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Service4() {
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
							<h3>Mobile-driven Development</h3>

							<p className="who-are-we-p">
								A mobile-driven development service is a great
								way to increase the speed and quality of your
								iOS or Android app development projects. By
								using this kind of service, you can delegate
								specific tasks to dedicated developers who will
								complete them quickly and accurately. This type
								of service also allows you to keep track of all
								your project updates in one place, making it
								easier for you to stay on top of things.
								Development services for small businesses
							</p>
							<p>
								There are a variety of development services that
								can help you achieve your business objectives.
								Some of the most popular options include website
								design, ecommerce development, and app
								development. If you're not sure which service is
								right for your needs, our team of experts can
								provide a comprehensive evaluation and
								recommendations.
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
								alt="mobile driven development"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service4;
