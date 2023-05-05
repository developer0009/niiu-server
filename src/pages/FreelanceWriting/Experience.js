import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import freelanceWritingImg from "../../images/fw/freelance-bg.webp";
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
								src={freelanceWritingImg}
								className="img img-fluid"
								alt="Freelance writing services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT SERVICE</h5>
							<h2>Offer Freelance Writing Services</h2>
							<p className="who-are-we-p">
								Freelance writing services are a great way for
								businesses to get quality, professional content
								written quickly and at a reasonable price.
								Freelance writers can work on any type of
								project - from articles to blog posts to white
								papers.
							</p>
							<p>
								Freelance writing services have been around for
								quite some time now, but they really took off in
								the late 2000s and early 2010s. This was likely
								due to a number of factors, including the fact
								that there were so many business opportunities
								available at this time. More and more businesses
								are realizing that engaging skilled freelancers
								is one of the best ways they can save costs and
								improve efficiency by working with specialists
								who know what they're doing -IT departments
								especially benefit greatly from having well
								written content on various topics.
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
