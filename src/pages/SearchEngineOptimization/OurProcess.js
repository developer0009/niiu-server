import React, { Component } from "react";

import { Link } from "react-router-dom";

import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

import keywordResearch from "../../images/card-images/keyword-research-seo.webp";
import backlinks from "../../images/card-images/backlinks-seo.webp";
import metatags from "../../images/card-images/metatags-seo.webp";
import socialMediaIntegration from "../../images/card-images/social-media-integration-seo.webp";
import content from "../../images/card-images/content.webp";
import onlineDirectories from "../../images/card-images/online-directories-seo.webp";

import "../../css/Home/SimpleSteps.css";

function OurProcess() {
	return (
		<>
			<div className="container-fluid">
				<div className="container why-choose-us-section-website-development simple-steps-section three-steps-section padding-y">
					<div className="row about-us-section text-center">
						<div
							className="who-are-we col-lg-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR PROCESS</h5>
							<h2>We Understand Your Business !</h2>
							<h6 className="mt-3">
								Our strategy includes consistently evolving, to
								ensure we’re producing exceptional SEO for
								business.
							</h6>
						</div>
					</div>
					<div className="row cards-section">
						<div className="col-md-12 steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={keywordResearch}
									alt="Keyword research"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Keyword Research
									</h5>
									<p className="card-text">
										Keyword research is the first step to a
										successful SEO strategy.The longer the
										keyword, the less competition you will
										have for that phrase in the engines.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={backlinks}
									alt="Backlinks"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Backlinks
									</h5>
									<p className="card-text">
										If content is king, then backlinks are
										queen. It's not about which site has the
										most links, but the most quality links
										pointing back to their website.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={metatags}
									alt="Metatags"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										MetaTags
									</h5>
									<p className="card-text">
										Meta tags still play a vital role in
										SEO. If you type any keyword into a
										search engine, you’ll see how that
										keyword is reflected in the title for
										that page.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={socialMediaIntegration}
									alt="Social media integration"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Social Media Integration
									</h5>
									<p className="card-text">
										The algorithms have truly changed since
										social media first emerged. All social
										media sites send search engines signals
										of influence and authority.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={content}
									alt="Awesome content"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Awesome Content
									</h5>
									<p className="card-text">
										It's true, content is king, search
										engines have stated that creating
										quality content is the best way to not
										only rank for keywords.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={onlineDirectories}
									alt="Online directories"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Online Directories
									</h5>
									<p className="card-text">
										Online directories allow you to be
										visible on a variety of websites as well
										as gather reviews from your customers.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="row cards-section text-center">
						<div
							className="col-lg-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<div className="btn-hire-us-now">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
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

export default OurProcess;
