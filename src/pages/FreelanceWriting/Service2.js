import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import metadataImg from "../../images/fw/metadata.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Service2.css";

function Service2() {
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
							<h3>Metadata</h3>

							<p className="who-are-we-p">
								Metadata for business is the information that
								describes a document or piece of content. This
								includes things like title, author, keywords,
								and other descriptive data.
							</p>
							<p>
								Well-written metadata helps people find the
								right information faster, it tells them what to
								search for and where to find it. It also allows
								businesses to target their marketing efforts
								specifically towards those who are likely
								interested in their products or services. It
								also creates transparency - everyone can know
								what is going on behind the scenes.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button req-pro-side">
										<span>Request A Proposal</span>
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
								src={metadataImg}
								className="img img-fluid"
								alt="Metadata"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service2;
