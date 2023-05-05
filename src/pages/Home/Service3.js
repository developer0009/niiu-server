import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import uiuxImg from "../../images/home/ui-ux-bg-sec.webp";
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
								src={uiuxImg}
								className="img img-fluid"
								alt="UI UX design"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>UI/UX Design</h3>

							<p className="who-are-we-p">
								There is nothing better than the importance of
								creating an efficient and user-friendly
								interface, which is why we integrate usability
								testing into every project we work on. This
								allows us to ensure that your users will be able
								to find what they're looking for easily, without
								struggling or becoming frustrated.
							</p>
							<p>
								Our team of experienced experts is capable in
								working on Prototyping & Wire Framing, Web UI/UX
								Design, Mobile UI/UX Design, Branding and
								Competitive Analysis.
							</p>
							<div className="btn-request-proposal">
								<Link to="/ui-ux-design/">
									<button className="our-button contact-side">
										<span>Learn More</span>
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
