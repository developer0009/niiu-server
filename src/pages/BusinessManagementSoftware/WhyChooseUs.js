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
								How Can NiiU Digital Leaders Manage Your
								Business Software Services ?
							</h2>

							<p className="who-are-we-p">
								A comprehensive, one-stop solution for the best
								software for small business management that
								takes care of all of your project needs,
								including CRM, invoicing, team collaboration and
								knowledge management. Organize your entire
								workflow and grow your business in ways that it
								couldn't before. Organize, prioritize, and
								harmonize — enable remote access to every
								project and task on your company’s hands.
								Empower your projects with detailed planning,
								quick problem solving and precise decision
								making.
							</p>
							<p className="mb-1">
								Here is our main key point of focus:
							</p>
							<p className="mb-1">
								- To Manage your projects and orders with
								project management features. Define project
								scope, deadlines, responsibilities. Manage
								project budgets, earnings and cash flow. Plan
								and control the workload of people on projects.
							</p>
							<p className="mb-1">
								- To Drive teams with clever responsibilities -
								everyone knows what is assigned to them, when to
								complete their tasks. Teams communicate through
								tasks, comments, mentions, smart notifications.
								Use integrated chat and video conferences.
							</p>
							<p className="mb-1">
								- To Track and manage your company's lifeblood -
								cash flow. You simply plan cash flow and nothing
								will surprise you. You can easily evaluate which
								activities, clients or projects bring money and
								where the money flows from the company.
							</p>
							<p>
								- To Keep track of your sales activities - from
								customer overview, offers, orders, to proforma
								and invoices. All logically linked together,
								linked to projects, timesheets and cash flow
								management of the entire company
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
								alt="Digital leaders management of business software"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUs;
