import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function ThreePoints() {
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
							<h5>THREE SIGNIFICANT BENEFITS</h5>
							<h2>Why Hire Our Digital Leaders ?</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Strategically Vetted</h3>
							<p className="mb-1">
								We carefully select and screen our candidates
								for their strategic thinking, problem-solving
								skills, and go-getter attitude. They what is
								happening in the overall industry, as well as
								staying up-to-date on the latest technological
								advances and changes in consumer behavior. These
								leaders also take advantage of new opportunities
								by engaging with beta testers and early adopters
								directly.
							</p>
							<p>
								By doing this, they can quickly identify any
								potential issues or problems before they become
								bigger issues (and fix them). This allows them
								to maintain a competitive edge while continuing
								to grow your businesses.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Highly Trained</h3>
							<p className="mb-1">
								These skilled professionals know how to take
								advantage of the latest technologies, remain
								organized and efficient under pressure, and
								deliver results no matter what the situation.
							</p>
							<p>
								We are priviledged to have highly trained
								Digital leaders who will help your business
								reach its goals faster than ever before. With
								their skillset at your disposal, you'll be able
								to manage all aspects of your digital strategy
								with ease. We are confident that our Digital
								Leaders will be able to help your business reach
								its goals faster than ever before.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Elevated Professionalism</h3>
							<p>
								They understand that their work is important,
								and they take it seriously. They know there is
								no such thing as a low-value task or job.
								Through their dedication and expertise in
								digital marketing, they are able to connect with
								people at all levels and they know how to
								navigate through any digital maze. Their ability
								to communicate in a clear, concise way allows
								them to connect with their audiences and create
								content that is both engaging and helpful. They
								treat every situation as an opportunity for
								growth and learning, and they never stop
								striving for improvement.
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

export default ThreePoints;
