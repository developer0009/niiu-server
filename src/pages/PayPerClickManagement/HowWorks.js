import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import howItWorksImg from "../../images/ppcm/how-it-works.webp";
import "../../css/ContentMarketing/WhyChooseUs.css";

function HowWorks() {
	return (
		<>
			<div className="container-fluid">
				<div className="container content-marketing-section why-choose-us-section-website-development padding-y">
					<div
						className="row about-us-section website-dev-service-2-section"
						style={{ display: "flex", alignItems: "center" }}
					>
						<div
							className="who-are-we col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>FUNDAMENTAL PROCEDURE</h5>
							<h2>How Does It Work ?</h2>

							<p className="who-are-we-p">
								When an advertiser wants to place an ad on
								another website, they first have to identify
								specific keywords or phrases that match their
								audience's interests. They then choose an
								advertisement campaign and budget estimator (if
								applicable), determine how many times each
								keyword should be displayed across different
								pages and platforms, and submit their desired
								placement dates/times. Once all of this
								information has been collected, the third party
								will create and place the advertisements as
								needed.
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
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={howItWorksImg}
								className="img img-fluid"
								alt="How PPC works"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default HowWorks;
