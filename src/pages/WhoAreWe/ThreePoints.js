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
							<h5>TWO SIGNIFICANT POINTS</h5>
							<h2>
								Advantage of Working with NiiU Digital Agency !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>1. Our Goal </h3>
							<p>
								In order to ensure that NIIU continues to be at
								the forefront of digital innovation, we have
								developed a vision for our agency. Our goal is
								to become an indispensable resource for
								businesses and individuals who want to stay
								ahead of the curve in their industry. We will
								provide high-quality content that is
								educational, insightful, and use. We will work
								tirelessly to form long-term relationships with
								our clients so they can always count on us when
								it comes to online marketing solutions.
							</p>
						</div>
					</div>
					<div className="row">
						<div
							className="col-md-12 who-are-we-content who-are-we-heading text-center"
							data-aos="zoom-in-down"
							data-aos-duration="1000"
						>
							<h3>2. Our Core Values</h3>

							<p>
								At NIIU, we believe that our core values are the
								foundation upon which everything we do is built.
								They are essential to who we are as a team, and
								they guide us in how we interact with each
								other, our clients, and the world around us.
							</p>
							<p>
								Here's a brief overview of each of our core
								values:{" "}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Creativity:
								</span>{" "}
								We value creativity above all else because it is
								what drives innovation. We encourage everyone at
								NIIU to be creative thinkers and problem
								solvers; nothing gets done if everyone just
								follows the crowd. Our work must constantly
								challenge traditional ways of thinking and push
								boundaries in order to remain fresh and
								relevant.{" "}
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Service-Oriented:
								</span>{" "}
								At NIIU, our ultimate goal is always service
								delivery excellence for our clients. Everything
								we do must be oriented towards fulfilling this
								objective; even when things seem tough or
								impossible, keep striving forward until delivers
								on promise. We take a service-orientation
								approach to everything we do, from start to
								finish. This means that all of our employees are
								dedicated to meeting the needs and expectations
								of our clients.
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Integrity:
								</span>{" "}
								We believe that honesty and integrity are the
								foundations of any good relationship, both
								personal and professional. We strive to always
								be true to ourselves and our clients; dishonesty
								will not be tolerated in our workplace. We take
								pride in working collaboratively towards common
								goals, maintaining a high level of trust between
								us all.
							</p>
							<p>
								<span style={{ fontWeight: "bold" }}>
									Impeccability:
								</span>{" "}
								As professionals entrusted with valuable
								information and assets, it is absolutely crucial
								that we uphold high standards both internally
								and externally. This means being trustworthy
								advocates for ourselves (and others), leading by
								example instead of demanding perfection from
								others (even when it's difficult).
								Accountability also extends beyond personal
								performance appraisal; every individual at NIIU
								takes complete ownership of their actions &
								responsibilities so mistakes can never happen
								again.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ThreePoints;
