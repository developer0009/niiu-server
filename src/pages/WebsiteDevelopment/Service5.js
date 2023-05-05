import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import service5Img from "../../images/website-development/service5.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service5() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-b">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={service5Img}
								className="img img-fluid"
								alt="maintenance and support"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Maintenance & Support</h3>

							<p className="who-are-we-p">
								This Web maintenance and support service can
								help keep your website running smoothly. By
								regularly reviewing your website's code,
								resources, and SEO optimizations, we can help to
								ensure that your site remains operational and
								error-free. They may also offer additional
								features such as web hosting or domain name
								registration. It is especially important if you
								are using a web hosting service, as these
								companies usually have limited resources to
								handle technical issues. We can help you
								identify and fix any issues on your website
								quickly and effortlessly.
							</p>
							<p className="mb-1">This is what we will do: </p>
							<p className="mb-1">
								- Check for and fix broken links on the website
							</p>
							<p className="mb-1">
								- Remove outdated or obsolete content from the
								website
							</p>
							<p>
								- Address any malware or spyware infections that
								may be affecting the website
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

export default Service5;
