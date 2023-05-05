import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import perksImg from "../../images/home/perks-section.webp";
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
							<h3>Search Engine Optimization</h3>

							<p className="who-are-we-p">
								Without a doubt we can agree that search engine
								optimization (SEO) is an important part of any
								online campaign. However, not all businesses are
								prepared to launch a successful SEO strategy on
								their own. That's where professional help can
								come in handy. Our team of professional SEO
								experts can help your business achieve better
								search engine placement, increased website
								traffic, and higher sales leads. We can offer
								you Technical SEO, On Page SEO, Off Page SEO and
								Local SEO
							</p>

							<div className="btn-request-proposal">
								<Link to="/search-engine-optimization/">
									<button className="our-button contact-side">
										<span>Learn More</span>
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
								src={perksImg}
								className="img img-fluid"
								alt="SEO"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service4;
