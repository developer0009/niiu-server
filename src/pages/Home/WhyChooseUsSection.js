import React, { Component } from "react";
import "../../css/Home/WhyChooseUsSection.css";
import whyChooseUsImg from "../../images/home/choose-social-media.webp";

function WhyChooseUsSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container why-choose-us-section padding-y">
					<div className="row website-dev-service-2-section">
						<div
							className="col-lg-6 col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5
								style={{
									opacity: "0.5",
									fontWeight: "bolder",
								}}
							>
								WHY CHOOSE US
							</h5>
							<h2>
								What Makes Us The Best Agency In Singapore ?
							</h2>
							<div className="content">
								<p className="who-are-we-p">
									As one of the top marketing agency in
									Singapore, we believe that being the best is
									not about having the biggest name in town or
									charging the most money. Instead, it's about
									continuously improving ourselves and giving
									our clients what they truly deserve.
								</p>
								<p>
									We've built a team of talented professionals
									who are passionate about their work and take
									pride in exceeding expectations. Our
									multi-faceted services allow us to provide
									solutions for all types of businesses, from
									small startups, Solopreneurs, Financial
									advisors, Real estate. Coaches to online
									business
								</p>
								<p>
									We use cutting-edge technology to create
									engaging, effective content that reaches
									your target audience. And our clients always
									enjoy the consistent quality and creativity
									we bring to every project.
								</p>
								<p>
									Our approach is simple: We focus on exceeded
									goals rather than targets, because if we can
									help one client reach their full potential
									then that's worth everything to us.
								</p>
								<p>
									It's all about delivering on our promise -
									providing superior customer service,
									creating great work products, and meeting or
									exceeding expectations every single time we
									work together.
								</p>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={whyChooseUsImg}
								className="img img-fluid"
								alt="Best agency in singapore"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhyChooseUsSection;
