import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import analysisIcon from "../../images/website-development/analysis.webp";
import prototypingIcon from "../../images/website-development/prototyping.webp";
import structureIcon from "../../images/website-development/structure.webp";
import testingIcon from "../../images/website-development/testing.webp";
import arrowIcon from "../../images/arrow.png";
// import googleIcon from "../../images/google.png";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
// import "../../css/Home/WhyChooseUsSection.css";

function WhyChooseUs() {
	return (
		<>
			<div className="container-fluid">
				<div className="container why-choose-us-section-website-development  padding-y">
					<div className="row about-us-section">
						<div
							className="who-are-we col-lg-6 col-md-12 who-are-we-content extra-responsive-padding"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WHY CHOOSE US</h5>
							<h2>
								Why Choose NiiU Digital For Your Business Best
								UI/UX Website Design ?
							</h2>

							<p className="who-are-we-p">
								Creating a better user experience is the key to
								establishing trust. The secret lies in designing
								your site with eye-catching UI and UX which will
								keep your customers engaged for long. At NIIU
								Digital, we offer the best UI.UX Design
								services, products, and tools that help you
								overcome obstacles like substandard navigation
								and frustrating experiences.
							</p>
							<p>
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
								&nbsp;Different font styles are used to separate
								content from controls.
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 3"
								></img>
								&nbsp;Proximity alignment with Progress
								indicator for multiple step workflows. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 4"
								></img>
								&nbsp;We Increased Brand Awareness with Visual
								Design and Primary Colours.
								<br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 5"
								></img>
								&nbsp;Add some details and structure to your
								ideas, reuse patterns and create pages on top of
								your user flows so you'll not leave anything
								behind. <br></br>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 6"
								></img>
								&nbsp;We Adapt, learn and help you grow.{" "}
							</p>
							<p>
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Get in touch
								</Link>{" "}
								with us now to get an idea of what we can do for
								your company!
							</p>

							{/* <div className="btn-request-proposal">
								<Link to="/">
									<button className="our-button">
										<span>Google Rating</span>
									</button>
								</Link>
							</div> */}
						</div>
						<div className="col-lg-6 col-md-12 cards-section">
							<div className="first-set">
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={analysisIcon}
										alt="Competitive analysis"
									/>

									<div className="card-body">
										<h6 className="card-title">
											Competitive Analysis
										</h6>
										<p className="card-text">
											Identifying Comeptitors and creating
											strategies.
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={prototypingIcon}
										alt="Prototyping"
									/>
									<div className="card-body">
										<h6 className="card-title">
											Prototyping
										</h6>
										<p className="card-text">
											Process where design teams implement
											ideas.
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={structureIcon}
										alt="Wireframing"
									/>
									<div className="card-body">
										<h6 className="card-title">
											Wireframing
										</h6>
										<p className="card-text">
											Add some details and structure to
											your ideas.
										</p>
									</div>
								</div>
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={testingIcon}
										alt="AB test plan"
									/>
									<div className="card-body">
										<h6 className="card-title">
											AB Test plan
										</h6>
										<p className="card-text">
											Your goal is not just improving
											KPIs, but learning something.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
