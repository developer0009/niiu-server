import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import marketingImg from "../../images/fw/marketing.webp";
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
								NiiU Digital Offered Online Freelance Writing
								Services
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
								src={marketingImg}
								className="img img-fluid"
								alt="Marketing and advertising"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Marketing & Advertising</h3>

							<p className="who-are-we-p">
								Marketing and advertising are two vital aspects
								of business that need to be carefully planned
								and executed in order to successfully reach your
								target audience. Without effective marketing,
								your business will struggle to generate the
								necessary sales or support from customers. And
								without effective advertising, you'll never be
								able to reach a large enough audience to make a
								real impact.
							</p>
							<p>
								As the world becomes more and more digital, so
								does the way businesses market their products
								and services. Many small businesses find that
								marketing and advertising is one of the most
								difficult aspects of running a business, since
								it requires both time and resources to be
								effective.
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
