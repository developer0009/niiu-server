import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import perksImg from "../../images/home/perks-section.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/WhyChooseUs.css";

function PerksSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we why-choose-us-section-website-development padding-y">
					<div className="row website-dev-service-2-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								Why Does Your Business Need Our Digital SEO
								Leaders ?
							</h2>

							<p className="who-are-we-p">
								Digital SEO is a critical part of any business's
								online strategy be it financial advisors or
								business coaches. If you're not optimizing your
								website for search engines, you're missing out
								on crucial potential traffic and profits. And
								that's where our team of digital SEO leaders can
								help you get the most out of your web presence.
								We know how to make your website show up higher
								in search engine results pages (SERPs), which
								will lead to more visitors and better sales
								opportunities.
							</p>
							<p>
								Being the best SEO agency in Singapore, we
								understand the importance of optimization across
								all channels - organic search, paid advertising,
								social media marketing, etc. Our team deploys
								strategies that are tailored specifically to
								your business objectives and needs, so you can
								reach your target audience with ease.{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Contact us
								</Link>{" "}
								today to learn more about what we can do for
								you!
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button contact-side">
										<span>Contact Us</span>
									</button>
								</Link>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={perksImg}
								className="img img-fluid"
								alt="Digital seo leaders"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PerksSection;
