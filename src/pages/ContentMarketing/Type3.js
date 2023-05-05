import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import type3Img from "../../images/content-marketing/type3.webp";
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
								src={type3Img}
								className="img img-fluid"
								alt="Content writing and development"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Content Writing & Development</h3>

							<p className="who-are-we-p">
								Yes, content writing and development are
								important for your business. In fact, if you
								want to make a lasting impression on your target
								audience, it's essential that you have skilled
								writers on staff. Not only will this help you
								write engaging and effective content, but it
								will also bolster your reputation as an
								organization that is committed to customer
								satisfaction.
							</p>
							<p>
								Content marketing services agency can create
								high-quality copy both in written form
								(articles, blogs, etc.) and video content. They
								can also design powerful graphics or
								infographics to support your stories or
								arguments. And they know how to version manage a
								website so that changes are made effectively and
								quickly propagated throughout the entire system
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
