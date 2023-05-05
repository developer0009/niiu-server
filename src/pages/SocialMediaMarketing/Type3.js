import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";

import instagramImg from "../../images/smm/instagram.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type3() {
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
								src={instagramImg}
								className="img img-fluid"
								alt="Instagram"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Instagram</h3>

							<p className="who-are-we-p">
								There are many ways that businesses can use
								Instagram to market their products or services.
								Instagram is a powerful social media platform
								that can be used for a variety of purposes, such
								as marketing. We can help you use Instagram to
								create and share content that will reach your
								target audience. Our team of experts are
								experienced in creating effective campaigns
								using this platform, so we can help you take
								your business to the next level.
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

export default Type3;
