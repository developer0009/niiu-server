import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import WhoAreWe1 from "../../images/who-are-we/who-are-we-1-bg.webp";

function AboutUs() {
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
								src={WhoAreWe1}
								className="img img-fluid"
								alt="A team of professionals to help solopreneurs, SME, coaches, financial advisor, realtor & service based business"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>ABOUT US</h5>
							<h2>
								NiiU Digital Leaders: A Team Of Professionals To
								Help Solopreneurs, SME, Coaches, Financial
								Advisor, Realtor & Service Based Business.
							</h2>

							<p className="who-are-we-p">
								NIIU is a digital agency located in Singapore
								that specializes in creative marketing solutions
								for businesses of all sizes. We offer a wide
								range of services, including website design and
								development, online advertising campaigns, and
								social media management.
							</p>
							<p>
								We know that good design comes from
								understanding your customer's needs and wants,
								and then finding the best way to fulfill those
								desires using the latest technology. Our team of
								experienced professionals will work with you to
								create an effective marketing strategy that
								targets your audience and meets your specific
								needs. We believe that every business deserves
								the opportunity to be seen by potential
								customers, so we will do everything we can to
								help you reach your target market.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default AboutUs;
