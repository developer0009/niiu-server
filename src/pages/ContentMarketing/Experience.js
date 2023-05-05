import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import Service3Img from "../../images/website-development/service3.webp";
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
								src={Service3Img}
								className="img img-fluid"
								alt="Content marketing services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>A STEP TOWARDS STRATERGY</h5>
							<h2>
								Content Marketing Services For Digital Agency
								Singapore
							</h2>

							<p className="who-are-we-p">
								Content marketing is a process of creating and
								publishing high-quality content that engages and
								inspires your audience. It's used by
								solopreneurs, SME, coaches, Financial advisors
								etc to create a strong relationship with their
								customers, promote their products, and build
								trust.
							</p>
							<p>
								Digital Agencies in Singapore focus on content
								marketing leading to its booming thanks to the
								country's fast-paced digital landscape and
								growing population of tech savvy consumers.{" "}
							</p>
							<p>
								The most effective way to approach content
								marketing is to focus on creating valuable
								information that your target audience will find
								useful. When you put effort into producing
								quality content that speaks to your customer
								base in an authentic manner, it will be more
								likely to result in conversions or leads.
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
