import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import chatbotImg from "../../images/ai/chatbot-bg.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Experience() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={chatbotImg}
								className="img img-fluid"
								alt="AI integrated chatbot services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>TIRELESS 24/7 CUSTOMER SUPPORT AGENT</h5>
							<h2>The Ultimate AI Integrated Chatbot Services</h2>
							<p className="who-are-we-p">
								An AI (Artificial Intelligent) Chatbot is a
								computer system that interacts with humans using
								natural language. As such, they can learn about
								users' interests and preferences over time
								(through conversation). This allows them to
								provide customized experiences based on past
								interactions or insights gathered from other
								sources (such as web searches or social media
								posts).
							</p>
							<p>
								So far, most AI Chatbots have been built for
								businesses rather than individual users. This is
								because businesses face more complex challenges
								than individuals when it comes: dealing with
								customers via phone or email; managing multiple
								channels (web, mobile app, social media);
								tracking customer interactions over time;
								etcetera...
							</p>
							<p>
								There is no doubt that AI chatbots are here to
								stay. Thanks to their mobility and ability to
								understand human language, chatbots have become
								a powerful tool for customer service, marketing,
								and more. In this article, we will introduce you
								to the basics of AI chatbot technology and how
								it can be applied in your business. First
								though, let's take a look at what exactly an AI
								Chatbot is.
							</p>
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
