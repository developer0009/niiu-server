import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import analysisIcon from "../../images/website-development/analysis.webp";
import prototypingIcon from "../../images/website-development/prototyping.webp";
import structureIcon from "../../images/website-development/structure.webp";
import testingIcon from "../../images/website-development/testing.webp";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

function WhyChooseUs() {
	return (
		<>
			<div className="container-fluid">
				<div className="container why-choose-us-section-website-development padding-y">
					<div className="row about-us-section">
						<div
							className="who-are-we col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WHY CHOOSE US</h5>
							<h2>
								Why Choose NiiU Digital Leaders For Your Web
								Development Services In Singapore ?
							</h2>

							<p className="who-are-we-p">
								At NIIU Digital Leaders, being among the best
								web developers in Singapore. we believe that the
								success of any business is reliant on having a
								website that attracts and engages customers.
								That's why we offer our clients best website
								development services- from designing your
								perfect site to building it from scratch. We
								specialize in developing high quality and
								responsive websites that meet your business
								goals. Our team of experienced online
								professionals have a great knowledge and
								understanding of what works best for businesses
								today. We work closely with you as a website
								developer assistance to create a design that
								meets all your needs, so you can focus on
								running your business instead of managing
								everything from scratch, while taking into
								account the latest trends and technologies.
							</p>
							<p>
								Don't wait any longer;{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									get in touch
								</Link>{" "}
								with us today to find out more about how we can
								help you achieve your marketing goals!
							</p>
							{/* <div className="btn-request-proposal">
								<Link to="/">
									<button className="our-button">
										<span>Google Rating</span>
									</button>
								</Link>
							</div> */}
						</div>
						<div className="col-lg-6 col-md-12 cards-section all-cards-website-development">
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
										<h5 className="card-title">
											Competitive Analysis
										</h5>
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
										<h5 className="card-title">
											Prototyping
										</h5>
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
										<h5 className="card-title">
											Wireframing
										</h5>
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
										<h5 className="card-title">
											AB Test plan
										</h5>
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
