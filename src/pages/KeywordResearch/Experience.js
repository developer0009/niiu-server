import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import keywordResearchImg from "../../images/kr/keyword-research-bg.webp";
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
								src={keywordResearchImg}
								className="img img-fluid"
								alt="Keyword research services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT SERVICE</h5>
							<h2>
								Keyword Research With NiiU Digital In Singapore
							</h2>
							<p className="who-are-we-p">
								Keyword research is the process of identifying
								the most important keywords (or terms) to target
								for your website or online marketing campaigns.
								By focusing on the proper keyword research, you
								can increase your site's traffic and conversion
								rates, while also increasing your organic search
								rankings.
							</p>
							<p>
								Back in the days when search engines were the
								only way to find information online, SEO (search
								engine optimization) was all about getting your
								website high up on the SERPs (Search Engine
								Results Pages). In order to do that, you needed
								to know which keywords people were searching
								for. This was done by conducting extensive
								keyword research.
							</p>
							<p>
								The old-school method of keyword hunting through
								magazine indexes and other print resources has
								been largely replaced by more sophisticated
								means such as paid search campaigns , social
								media listening , analytics software , and data
								analysis tools . But no matter how you go about
								acquiring your keywords, making sure those words
								are deployed strategically across all
								appropriate channels remains an essential
								component of effective online marketing.
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
