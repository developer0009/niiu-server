import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import { Link } from "react-router-dom";

function ThreePoints() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y simple-steps-section">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>THREE SIGNIFICANT BENEFITS</h5>
							<h2>Why Social Media Marketing?</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<p>
								Social media is one of the most powerful tools a
								small business can use to connect with its
								customers and build relationships. Thanks to
								social media, small businesses are now able to
								reach a wider audience than ever before.
							</p>
							<p>
								Here are some of the many social media benefits
								for small business:
							</p>
							<h4>1. Increased Exposure </h4>
							<p>
								Social media allows your business to reach a
								larger audience than ever before. By posting
								content on popular platforms like Facebook,
								Twitter, and Instagram, you will increase your
								visibility across the web and attract new
								customers who may not have known about you
								otherwise.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>2. Greater Customer Engagement</h4>

							<p>
								People love nothing more than being involved in
								something they're passionate about. When they're
								interacting with your brand or product online,
								they feel like they're part of something bigger
								and more special. This increased Customer
								Loyalty translates into long term customer
								retention.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h4>3. Improved Communication</h4>

							<p>
								Social Media allows you to directly communicate
								with your customers without having to go through
								an intermediary (like a salesperson). This
								allows you to maintain control over how
								information is shared and strengthens
								relationships with clients and users alike!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ThreePoints;
