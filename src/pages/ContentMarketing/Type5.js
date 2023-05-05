import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import type5Img from "../../images/content-marketing/type5.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Type5() {
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
								src={type5Img}
								className="img img-fluid"
								alt="Newsletters"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Newsletters</h3>

							<p className="who-are-we-p">
								Newsletters are a great way to keep your
								customers up-to-date on what's going on with
								your business, and to connect with them on an
								ongoing basis. They can also be used as a
								vehicle for promotional content, or for directly
								marketing your products or services to your
								target audience. Digital Agencies in Singapore
								are aware of this hence provision of the
								service. By regularly sending out newsletters,
								you can attract new customers and retain current
								ones.
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

export default Type5;
