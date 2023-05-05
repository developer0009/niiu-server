import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service2Img from "../../images/id/service2-1.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service1() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y simple-steps-section">
					<div className="row text-center mb-3">
						<div
							className="col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR PRIMARY SERVICES</h5>
							<h2>
								Services We Offer In Ideation & Design For Your
								Business !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={service2Img}
								className="img img-fluid"
								alt="Landing page"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Landing Page</h3>

							<p className="who-are-we-p">
								This is a page on your website that users go to
								after clicking an advertisement or link in
								email, social media, or other digital content.
								The goal of a good landing page is to capture
								the user's attention and compel them to take
								action.
							</p>
							<p>
								These pages help build relationships between
								businesses and their customers by providing
								valuable content along with engaging
								conversations. They allow you to target your
								audience specifically, and drive them towards
								your content or offering.
							</p>
							<p>
								By using our user-centric graphic design
								solutions, you can make sure that your visitors
								have a great experience and are more likely to
								stay engaged with your site.
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

export default Service1;
