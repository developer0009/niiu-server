import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import services1Img from "../../images/home/service1.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service1() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y simple-steps-section">
					<div className="row text-center mb-3">
						<div
							className="col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR PRIMARY SERVICES</h5>
							<h2>
								NiiU Digital Website Development Services
								Offered !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={services1Img}
								className="img img-fluid"
								alt="website development"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Website Development</h3>

							<p className="who-are-we-p">
								We specialize in website development services
								that are tailored to meet the specific needs of
								our clients. From start to finish, we take care
								of everything - from developing a custom content
								management system (CMS) to designing and
								deploying an online presence that will be sure
								to impress your customers. We understand that
								not every business is the same, which is why we
								offer a variety of unique website development
								services that are perfect for each and every
								client. Our team of experienced developers will
								work with you to develop your website based on
								your specific needs and requirements. We'll take
								the time to understand your business and its
								unique selling points, so that we can create a
								site that accurately represents who you are and
								what you offer. From custom templates to
								user-friendly design features, our team takes
								great pride in crafting effective websites that
								look good and perform well.
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

export default Service1;
