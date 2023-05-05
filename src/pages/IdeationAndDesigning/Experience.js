import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import designingImg from "../../images/id/designing.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Experience() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={designingImg}
								className="img img-fluid"
								alt="Ideation and designing services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT SERVICE</h5>
							<h2>Offer Ideation & Designing Services</h2>
							<p className="who-are-we-p">
								Ideation is the process of generating new ideas.
								It's what comes before design - you start with
								an idea, and then you figure out how to make it
								a reality. It's what helps you come up with new
								ways to market your business or product, and it
								can be helpful in all areas of marketing -
								digital, traditional, direct mail, etc.
							</p>
							<p>
								Designing for digital marketing refers to the
								process of creating compelling and effective
								content, designing user experiences that are
								intuitive and easy to use, developing innovative
								advertising campaigns, and more. It also
								includes creating effective calls-to-action
								(CTAs) that will encourage people to take action
								on your offers.
							</p>
							<p>
								Both ideation and design have their own specific
								skillsets that must be in place if your goal is
								to create successful digital marketing
								campaigns. Without good ideation, your designs
								will likely lack cohesion or style; without good
								design, your content may not be appealing or
								easy to read. Together they form a strong
								foundation for successful digital marketing.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button req-pro-side">
										<span>Request A Proposal</span>
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

export default Experience;
