import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import facebookImg from "../../images/smm/facebook.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Type2() {
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
							<h3>Facebook</h3>

							<p className="who-are-we-p">
								Facebook has become one of the most popular
								social media platforms in the world. It is used
								by millions of people to connect with friends,
								family, and other people they know. Facebook
								also offers businesses a powerful platform for
								marketing their products and services.
							</p>
							<p>
								Our team of experts is dedicated to providing
								the best possible service, and we are here to
								guide you every step of the way. We will take
								care of creating custom content, setting up
								account optimization, and conducting effective
								advertising campaigns. Contact us today to learn
								more about our services!
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
								src={facebookImg}
								className="img img-fluid"
								alt="Facebook "
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Type2;
