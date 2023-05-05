import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import geoTargetingImg from "../../images/ppcm/geo-targeting.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service3() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we  padding-b">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={geoTargetingImg}
								className="img img-fluid"
								alt="Geo targeting improvements"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Geo Targeting Improvements</h3>

							<p className="who-are-we-p">
								When ads are placed on the Web and displayed to
								people who live in specific areas, it can result
								in increased click-through rates (CTRs) and
								conversions. However, many businesses don't
								realize the importance of geo targeting until
								they start experiencing negative consequences.
							</p>
							<p>
								We can help you target your ads specifically to
								reach the people who are likely to want what you
								have to offer. We'll use sophisticated
								algorithms and data sets to identify key markets
								in which you should invest resources, while
								minimizing waste (and potential competition) in
								other areas.
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

export default Service3;
