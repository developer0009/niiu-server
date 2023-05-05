import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import reasonsImg from "../../images/ai/reasons-ai.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Reasons() {
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
								src={reasonsImg}
								className="img img-fluid"
								alt="AI conversational chatbot"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WE GOT YOU !</h5>
							<h2>
								Reasons Why Businesses Use AI Conversational
								Chatbot
							</h2>
							<p className="who-are-we-p">
								Chatbot interactions can be scripted or
								completely random - This allows companies to
								create seamless experiences for their customers
								by programming certain responses into the
								chatbot, or letting it run on its own and
								interact with customers in an unpredictable way.
							</p>
							<p>
								They make it easier for customers to find what
								they're looking for - no matter how complicated
								the question may be - thanks to their natural
								vocabulary and understanding of grammar
								guidelines. They're able to hold conversations
								on different topics, so there's never any need
								for managers or employees redundant training
								session.
							</p>
							<p>
								Bots can help manage queues and respond quickly
								to inquiries. By automating customer support
								processes, bots can help reduce wait times and
								keep everyone moving forward as efficiently as
								possible. They also allow companies to focus on
								other areas of business while the bot handles
								requests seamlessly.
							</p>
							<p>
								Customer service chatbots provide feedback which
								helps improve future interactions. Through data
								collection and analysis, customer service bots
								can learn about customer preferences and
								behavior so that future conversations are more
								productive and satisfying overall.
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

export default Reasons;
