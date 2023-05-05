import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import launchWebsiteImg from "../../images/website-development/launch-website.webp";
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
								src={launchWebsiteImg}
								className="img img-fluid"
								alt="Website development assistance"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR EXPERIENCE BOOST YOUR BUSINESS</h5>
							<h2>Best Website Development Services</h2>

							<p className="who-are-we-p">
								Web development is the process of designing,
								building, and maintaining a website or web
								application. A website or web application can be
								anything from a simple online store to an entire
								e-commerce business.
							</p>
							<p>
								Website building and development services are a
								great way to get your business online, and
								increase traffic to your site. These services
								can help you design, build, and manage a website
								from start to finish. They can also help you
								improve your SEO (search engine optimization)
								efforts so that your site appears higher in
								search results pages.
							</p>
							<p>
								There is no one-size-fits-all approach when it
								comes to website building or development
								services for Solopreneurs- what works best for
								one business may not be the right solution for
								another. Instead, consult with an experienced
								provider who can advise you on the best options
								for your particular situation.
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
