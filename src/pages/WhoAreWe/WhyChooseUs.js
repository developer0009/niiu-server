import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import perksImg from "../../images/home/perks-section.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

function WhyChooseUs() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y">
					<div className="row website-dev-service-2-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>Why Choose Us?</h2>

							<p className="who-are-we-p">
								There are many digital agencies out there, and
								it can be difficult to decide which one is right
								for your business. But why choose NIIU Digital?
							</p>
							<p>
								At NIIU Digital, we understand that businesses
								need a reliable solution that will help them
								reach their goals quickly and easily. That's why
								our team of experienced professionals
								specializes in digital marketing solutions
								tailored specifically for small businesses. We
								know how to create effective campaigns that
								drive traffic and conversions. Plus, we always
								take the time to listen to our clients and
								reflect their needs into our strategy.
							</p>
							<p>
								We believe in collaborative work environments
								where each member of the team feels supported
								and valued. We want you to feel like part of the
								NIIU family - not just another client.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
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
								src={perksImg}
								className="img img-fluid"
								alt="Why choose niiu digital the best digital agency in singapore"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
