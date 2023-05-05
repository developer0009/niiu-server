import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";

import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import arrowIcon from "../../images/arrow.png";

function PerksSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								Why Is Content Marketing Strategy Important For
								Your Business ?
							</h2>

							<p className="who-are-we-p">
								Content marketing is one of the most important
								strategies for businesses today. It allows
								brands to reach a wider audience and promote
								their products or services in a more effective
								way. By creating relevant, engaging, and
								interesting content, businesses can attract new
								customers and increase loyalty among current
								ones.
							</p>
							<p>
								There are many reasons why content marketing is
								such an important strategy for businesses:
							</p>
							<p>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 7"
								></img>
								&nbsp;
								<span style={{ fontWeight: "bold" }}>
									It helps to build trust with your target
									audience.
								</span>{" "}
								When people feel trust towards a brand or
								company, they're more likely to take actions on
								its behalf (like buying a product). Content
								that's well written and On-brand promotes
								positive feelings towards the business, which
								leads to higher customer retention and even
								conversion rates.
							</p>
							<p>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 8"
								></img>
								&nbsp;
								<span style={{ fontWeight: "bold" }}>
									It creates stronger relationships with
									potential partners or affiliates.
								</span>{" "}
								Many companies use content as bait in order to
								attract partnerships or affiliate agreements -
								if the partner feels like they are helping
								contribute valuable information while also
								benefiting from organic promotion, they're more
								likely to agree than if they feel like their
								agreement is something forced upon them without
								respect for their time or interests.
							</p>
							<p>
								<img
									src={arrowIcon}
									className="img img-fluid ml-0 arrow-icon"
									alt="Arrow 9"
								></img>
								&nbsp;
								<span style={{ fontWeight: "bold" }}>
									It generates traffic that converts into
									leads and sales opportunities.
								</span>{" "}
								With so much competition out there today,
								generating quality traffic that will result in
								conversions is critical for any business - no
								matter how small it may be at the beginning
								stages! Quality content not only attracts
								attention from potential consumers; it also
								educates them about your product or service so
								that when they do decide to make a
								purchase/investment decision , it goes smoothly.
							</p>
							<div className="btn-request-proposal">
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

export default PerksSection;
