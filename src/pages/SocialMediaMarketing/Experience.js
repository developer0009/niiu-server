import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/Home/AboutUsSection.css";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/our-icons.css";

import "../../css/Home/WelcomeSection.css";

import "../../css/SocialMediaMarketing/Experience.css";

import technologyIcon from "../../images/smm/relationship-icon.webp";
import startegyIcon from "../../images/smm/sharing-icon.webp";
import creativityIcon from "../../images/smm/visibility-icon.webp";
import growthIcon from "../../images/smm/connect-icon.webp";

function Experience() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we about-us-section social-media-marketing padding-y">
					<div className="row website-dev-service-2-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-content special-case-padding-t"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<div className="first-set">
								<div
									className="card"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<img
										className="card-img-top img img-fluid mx-auto"
										src={technologyIcon}
										alt="Build relationships"
									/>

									<div className="card-body">
										<h5
											className="card-title"
											style={{ opacity: "1" }}
										>
											Build Relationships
										</h5>
										<p className="card-text">
											Social media is not just about
											brands connecting with their
											customers.
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
										src={startegyIcon}
										alt="Share your expertise"
									/>
									<div className="card-body">
										<h5
											className="card-title"
											style={{ opacity: "1" }}
										>
											Share Your Expertise
										</h5>
										<p className="card-text">
											Social media gives you an
											opportunity to talk about what you
											know.
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
										src={creativityIcon}
										alt="Increase your visibility"
									/>
									<div className="card-body">
										<h5
											className="card-title"
											style={{ opacity: "1" }}
										>
											Increase Your Visibility
										</h5>
										<p className="card-text">
											Good content gets shared, the more
											people who share it, the more people
											see it.
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
										src={growthIcon}
										alt="Connect anytime"
									/>
									<div className="card-body">
										<h5
											className="card-title"
											style={{ opacity: "1" }}
										>
											Connect Anytime
										</h5>
										<p className="card-text">
											Social media can help you connect
											people and is a land of new
											opportunity.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content "
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR EXPERIENCE BOOST YOUR BUSINESS</h5>
							<h2>
								Social Media Marketing Services In Singapore
								With NiiU Digital Agency
							</h2>
							<p className="who-are-we-p">
								Social media was originally created for personal
								use by individuals to share updates with friends
								and family. But as time went by it has
								revolutionized the way we communicate with one
								another. It's no wonder then, that businesses of
								all sizes are using it to connect with their
								customers and followers.
							</p>
							<p>
								Social media marketing has exploded in
								popularity over the past few years, and for good
								reason. It's a powerful tool that can be used to
								connect with potential customers, build
								relationships, and drive sales.
							</p>
							<p>
								However, social media marketing is not easy - it
								requires time and effort to create high-quality
								content that will appeal to your target
								audience. And of course, you need to make sure
								that your posts are strategic enough so they'll
								drive results. That's where the need of social
								media content specialist comes to play!
							</p>
							<div className="icons">
								<a
									href="https://www.youtube.com/channel/UCIkk1LrvkByxMd4yANM1Hsg"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "black",
										opacity: "0.7",
									}}
								>
									<i
										className="fab fa-youtube"
										style={{ marginRight: "40px" }}
									></i>
								</a>
								<a
									href="https://www.linkedin.com/company/niiudigital/"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "black",
										opacity: "0.7",
									}}
								>
									<i
										className="fab fa-linkedin-in"
										style={{ marginRight: "40px" }}
									></i>
								</a>
								<a
									href="https://www.instagram.com/niiu_digital/"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "black",
										opacity: "0.7",
									}}
								>
									<i
										className="fab fa-instagram"
										style={{ marginRight: "40px" }}
									></i>
								</a>

								<a
									href="https://www.facebook.com/niiudigital"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "black",
										opacity: "0.7",
									}}
								>
									<i className="fab fa-facebook me-0"></i>
								</a>
							</div>
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

export default Experience;
