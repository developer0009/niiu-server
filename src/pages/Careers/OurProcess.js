import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import careersImg from "../../images/careers/careers.webp";

function OurProcess() {
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
								src={careersImg}
								className="img img-fluid"
								alt="Niiu digital job openings"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>JOIN US AT NiiU DIGITAL</h5>
							<h2>Explore Openings</h2>
							<h6 className="mt-3">
								We can't wait to meet you !
							</h6>
							<p className="who-are-we-p">
								At our company, we believe that digital
								marketing is the key to success for any
								business. We understand that not every business
								is equipped or willing to do traditional
								advertising and marketing methods, so we have
								developed a unique approach that focuses on
								creating long-term relationships with our
								clients. We are passionate about what we do, and
								our goal is to help businesses achieve their
								full potential through effective digital
								marketing
							</p>
							<p>
								Team player is one of the core values that we at
								our company uphold. We believe in working
								together as a team to achieve common goals, and
								we value collaboration above all else.
							</p>
							<p>
								Are you an expert in a specific field? Would you
								like to share your knowledge and skills with
								others? Or do you have a creative idea that you
								would like to develop into a reality? Whatever
								the case may be, we want to hear from you!
							</p>
							<p>
								We are always looking for talented individuals
								who want to be part of something bigger than
								themselves. If this sounds like you, then we
								would love to hear from you!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default OurProcess;
