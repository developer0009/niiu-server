import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function FivePoints() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y simple-steps-section">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>FIVE SIGNIFICANT BENEFITS</h5>
							<h2>
								Benefits Of Ideation & Design For Business !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<p>
								There are numerous benefits to ideation and
								design for businesses. These include:
							</p>
							<h4>Increased Creativity & Innovation</h4>
							<p>
								When you have a clear understanding of your
								target audience, you can generate more
								innovative solutions that meet their needs.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>Greater Opportunities For Growth</h4>
							<p>
								If you're able to marry good ideation with great
								design, there's no limit to what you can achieve
								- from building an audience of loyal consumers
								to launching new products or services into the
								marketplace.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>Greater Customer Satisfaction</h4>
							<p>
								When customers know what they want and how to
								get it, they are more likely to be satisfied
								with the end result. This leads to longer-term
								loyalty and increased brand awareness.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>Reduced Development Costs & Timeframes</h4>

							<p>
								By creating user interfaces or designs from the
								ground up, you can avoid wasting time reworking
								or adapting existing components or applications.
								You also won't needlessly tie up valuable
								resources in superfluous work - saving both
								money and time is key when it comes to running a
								successful business!
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>
								More Effective Communication With Customers,
								Employees, Partners, etc..
							</h4>

							<p>
								Good design allows us all to understand complex
								concepts quickly - making it easier than ever
								for us all to collaborate effectively on
								projects!
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

export default FivePoints;
