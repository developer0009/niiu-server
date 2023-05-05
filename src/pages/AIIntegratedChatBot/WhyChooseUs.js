import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Home/AboutUsSection.css";
import "../../css/WhoAreWe/AboutUs.css";
import "../../css/our-button.css";

import "../../css/WebsiteDevelopment/WhyChooseUs.css";
import chooseAIImg from "../../images/bms/choose-us-ai.webp";
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
								Let NiiU Digital Leaders Help Your Business To
								Deliver The Best Customer Service Experience
							</h2>

							<p className="who-are-we-p">
								NIIU helps companies automatically resolve
								customer service tickets on email, chat,
								messaging and voice (add if available). It has
								the highest accuracy of any customer service for
								AI Chatbot for website due to its advanced
								Natural Language Understanding (NLU) engine.
							</p>
							<p>
								It can automatically resolve over 70% of
								customer queries without human intervention and
								focuses holistically on AI customer experience.
								NIIU chatbots' are incredibly easy to adopt and
								have out-of-the-box integrations with all of the
								leading agent desk platforms.
							</p>
							<p>
								These AI-based chatbots have the ability to
								understand customer queries better and adapt the
								response accordingly. The best part? They do not
								require any significant investment. All you need
								is a good understanding of your business
								processes, strategy for growth and budget. Once
								that’s done, you can unlock potential hidden in
								these chatbots.
							</p>
							<p>
								At NIIU Digital Leaders, we bring together all
								these factors under one roof and best online AI
								Chatbot so that you can drive sales with ease
								and increase revenue while maintaining a
								high-quality service.{" "}
								<Link
									to="/contact-us/"
									style={{
										color: "#2b0a78",
										fontWeight: "bold",
									}}
								>
									Call us
								</Link>{" "}
								today to get started!
							</p>
						</div>
						<div
							className="col-lg-6 col-md-12 content-marketing-img who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={chooseAIImg}
								className="img img-fluid"
								alt="Niiu digital leaders for AI chatbot"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
