import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import type1Img from "../../images/content-marketing/type1.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type1() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y simple-steps-section">
					<div className="row text-center mb-3">
						<div
							className="col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR PRIMARY SERVICES</h5>
							<h2>Content Marketing Deliverables !</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={type1Img}
								className="img img-fluid"
								alt="Blog post"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Blog Posts</h3>

							<p className="who-are-we-p">
								Blog posts are one of the most important
								elements of content marketing. They provide
								valuable information and insights on a given
								topic, help build relationships with potential
								customers, and can even result in sales.
							</p>
							<p>
								But writing good blog posts isn't easy - it
								takes time to research your topic thoroughly,
								craft compelling content, and make sure that
								your article is well-optimized for search
								engines.
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

export default Type1;
