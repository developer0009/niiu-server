import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import ideationDesigningImg from "../../images/id/ideation-designing.webp";
import "../../css/ContentMarketing/WhyChooseUs.css";

function WhyChooseUs() {
	return (
		<>
			<div className="container-fluid">
				<div className="container content-marketing-section why-choose-us-section-website-development padding-y">
					<div
						className="row about-us-section website-dev-service-2-section"
						style={{ display: "flex", alignItems: "center" }}
					>
						<div
							className="who-are-we col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WHY CHOOSE US</h5>
							<h2>
								Let NiiU Digital Help Your Business With User
								Experience Design Ideation
							</h2>

							<p className="who-are-we-p">
								User experience design (UXD) is the process of
								designing an interface or experience that makes
								a user's life easier. It can be applied to any
								type of product, service, or website - digital
								or not. Are you looking for a professional team
								to help your business design user experience
								(UX) ideation?
							</p>
							<p>
								NIIU Digital is a user experience design firm
								that specializes in helping businesses improve
								their online presence. We understand the
								importance of designing Meaningful Experiences
								for your users, We can help you create
								well-designed websites that meet your specific
								needs. Our approach is tailored to fit each
								business' unique requirements, so we can deliver
								tangible results quickly without compromising on
								quality or usability.
							</p>

							<p>
								Let us help you turn your website or app into an
								interactive masterpiece that will engage and
								inspire your customers. So{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									reach out
								</Link>
								, we are waiting for you!
							</p>
						</div>
						<div
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={ideationDesigningImg}
								className="img img-fluid"
								alt="Best user experience design ideation"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
