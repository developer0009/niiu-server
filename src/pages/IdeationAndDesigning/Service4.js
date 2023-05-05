import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import businessCardImg from "../../images/id/business-card.webp";
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
							<h3>Business Card Design</h3>

							<p className="who-are-we-p">
								If you're in any kind of creative industry, then
								you know that a well-designed business card can
								make all the difference when it comes to getting
								your foot in the door. Business cards are an
								important part of any digital marketing
								strategy. They can help you connect with
								potential customers and clients, and they
								provide a way for you to showcase your company's
								logo and other information. Plus, business card
								design has become increasingly sophisticated
								over the years.
							</p>
							<p>
								We can help you design custom business cards
								that reflect your brand and fit seamlessly into
								both digital and print media. We understand the
								importance of creating visual content, so our
								team can create compelling design ideation that
								reflect your unique personality and message.
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
								src={businessCardImg}
								className="img img-fluid"
								alt="Business card design"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service4;
