import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import arrowIcon from "../../images/arrow.png";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import chooseSocialMediaImg from "../../images/home/choose-social-media.webp";
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
								Why Do You Need NiiU Digital For Your Social
								Media Marketing ?
							</h2>
							<h6 className="mt-3">
								On Top Of Serving Corporate Social Media
								Marketing we help you to connect prospective
								audiences round the globe and increase your
								sales.
							</h6>
							<p className="who-are-we-p">
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 1"
								></img>
								&nbsp;We identify your goals. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 2"
								></img>
								&nbsp;We choose the best platform(s) for your
								audience.
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 3"
								></img>
								&nbsp;We create a schedule and and higher
								conversion rates. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 4"
								></img>
								&nbsp;We increased brand awareness and more
								inbound traffic
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 5"
								></img>
								&nbsp;We track the right metrics and more brand
								authority. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 6"
								></img>
								&nbsp;We adapt, learn and help you grow.{" "}
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 6"
								></img>
								&nbsp;We are social media and content specialist{" "}
								<br></br>
							</p>
							<p>
								By now, you must have understood that content is
								the lifeline of your brand. It drives attention
								and gets people to follow your brand across
								their social media profiles. Moreover, it is
								proven that content shared at a regular basis
								can increase engagement by 300%.
							</p>
							<p>
								That is why we are here with NIIU digital agency
								in Singapore to offer the best quality content
								management services for all leading brands.{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Launch your social media with us !
								</Link>
							</p>
						</div>
						<div
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={chooseSocialMediaImg}
								className="img img-fluid"
								alt="Social media marketing"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
