import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import perksImg from "../../images/home/perks-section.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import arrowIcon from "../../images/arrow.png";

function PerksSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={perksImg}
								className="img img-fluid"
								alt="Building website for business"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								The Benefits Of Building Website For Your
								Business
							</h2>

							<p className="who-are-we-p">
								There is no doubt that having a website for your
								business is important. A website acts as your
								brand's online presence, and helps you to
								communicate with your customers and potential
								customers.
							</p>
							<p>
								In today's digital age, it's especially
								important for businesses to have a website
								because so many people use the internet to
								research products and services before making a
								purchase. Having an up-to-date web presence also
								makes it easier for you to find new clients and
								suppliers, as well as market your product or
								service to wider audiences.
							</p>
							<p>
								A well-designed and functional website will help
								you attract new customers, keep current clients,
								and build brand awareness. It can also be used
								to promote your services online, track customer
								interactions and conversions, and manage
								marketing campaigns.
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
