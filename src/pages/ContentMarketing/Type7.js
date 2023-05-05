import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import type7Img from "../../images/content-marketing/type7.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type7() {
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
								src={type7Img}
								className="img img-fluid"
								alt="Blog report"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Blog Report</h3>

							<p className="who-are-we-p">
								A blog report is a document that captures the
								highlights of your blog's content, including
								stats on pageviews, social shares, and other
								relevant data. This information can be used to
								monitor and improve your blog's performance over
								time.
							</p>
							<p>
								By having a regular blog report, you'll become
								better acquainted with how readers are reacting
								to your content and what changes may need to be
								made in order for it to reach its full
								potential. This knowledge will help you create
								more engaging and informative articles that draw
								in more readers.
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

export default Type7;
