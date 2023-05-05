import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import analysisServiceImg from "../../images/ui-ux/analysis-service.webp";
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
								src={analysisServiceImg}
								className="img img-fluid"
								alt="Competitive analysis"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Competitive Analysis</h3>

							<p className="who-are-we-p">
								UI and UX design can be very helpful when it
								comes to competitive analysis especially for
								real estate, solopreneurs and smes. By
								understanding how your competitors are building
								their user interfaces and UXs, you can better
								understand what works for them and what might be
								a better way to approach your own projects. We
								can provide you with a detailed analysis of your
								competition and strategies that can help you
								stand out from the crowd. Please let us know if
								there is anything else we can do to help you
								reach your goals.
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
