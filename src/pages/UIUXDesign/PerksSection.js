import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";

import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

function PerksSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								Advantage of Working with NiiU Digital Agency !
							</h2>

							<p className="who-are-we-p">
								<span style={{ fontWeight: "bold" }}>
									Intuitive design
								</span>{" "}
								is a type of graphic design that takes into
								account the user's needs and feelings as they
								interact with your content or website. It is the
								leading provider of online design tools and
								services. We offer a wide range of innovative
								design solutions that help you to create
								beautiful websites, logos, and other graphics
								quickly and easily. Our intuitive platform makes
								it easy for you to get started with your
								project, no matter what level of experience you
								have.
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Audience retention
								</span>{" "}
								is one of the most important aspects of any
								content marketing strategy. Without a loyal and
								engaged audience, it's difficult to achieve
								success with your content marketing efforts. We
								understand how important it is to keep your
								customers engaged and coming back for more.
								That's why we offer a wide range of services
								that will help you retain your followers and
								boost conversions.
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									User engagement
								</span>{" "}
								is important for any business, and it's
								especially crucial for agencies that work with
								clients on a freelance basis. User engagement
								means creating experiences that make your
								customers feel like they are part of your brand
								and understand what you do. It also means
								engaging with them in ways that keep them coming
								back to your website or app. And that's where
								our agency comes in - we can help you design
								engaging user interfaces and User Experiences
								(UXs) that will keep your users coming back for
								more.
							</p>

							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
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

export default PerksSection;
