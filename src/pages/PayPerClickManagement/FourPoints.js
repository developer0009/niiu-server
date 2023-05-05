import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function FourPoints() {
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
							<h5>FOUR SIGNIFICANT BENEFITS</h5>
							<h2>
								Why PPC Management Services Are Important For
								Your Business ?
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>It's Highly Targeted</h4>
							<p>
								Ads placed through PPC are specifically tailored
								to address the interests of your target market,
								which makes it much more likely that they will
								be interested in what you have to say. You can
								select specific keywords or phrases that best
								match the interests of your target audience,
								allowing you to focus resources where they are
								most needed.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>It's Affordable </h4>
							<p>
								With PPC , you can easily afford high-quality ad
								campaigns that will reach an extensive audience
								across multiple internet channels. Compared to
								other types of online advertising such as social
								media Advertising or Email Marketing , PPC is
								relatively cost effective . Additionally, since
								it doesn't require any upfront investments ,
								it's ideal for small businesses who aren't able
								afford high monthly costs .
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>It Generates Results Quickly </h4>
							<p>
								Unlike traditional advertising methods, where no
								leads or conversions are generated until months
								or even years later, with PPC ads you can start
								seeing positive results within days or weeks!
								This immediacy means that businesses can adapt
								their strategies as needed without having any
								negative impact on their bottom line
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>Broadened Audience</h4>

							<p>
								With PPC, you can reach an expansive audience
								that would not be possible with other forms of
								online advertising such as banner Ads or text
								Ads . You can also target specific demographics
								such as age group , region, or interests .
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<p>
								At last, we are all clear with the different
								benefits of using our powerful PPC management
								system. For a successful online business, it is
								utmost important to invest in quality PPC
								management system.
							</p>
							<p>
								Being a small business, managing the advertising
								cost is one of the main concerns. By outsourcing
								this task to NIIU Digital which guarantees the
								best PPC marketing Services, you can concentrate
								on giving quality services to your customers and
								not worry about finances.
							</p>
							<p>
								What are you waiting for?{" "}
								<Link
									to="/contact-us/"
									style={{
										fontWeight: "bold",
										color: "#2b0a78",
									}}
								>
									Get in touch
								</Link>{" "}
								with us today!
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

export default FourPoints;
