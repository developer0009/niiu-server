import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import frontEndTecnologiesImg from "../../images/website-development/front-end-technologies.webp";
import backEndTecnologiesImg from "../../images/website-development/back-end-technologies.webp";
import cmsPlatformsImg from "../../images/website-development/cms-platforms.webp";
import "../../css/our-button.css";
import "../../css/WebsiteDevelopment/Technologies.css";

function Technologies() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we technologies-section padding-y simple-steps-section ">
					<div className="row">
						<div
							className="col-md-12 who-are-we-content text-center"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WHAT WE USE</h5>
							<h2>
								Technologies Used For The Website Development
								Services !
							</h2>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>Front-end Programming Languages</h5>
							<img
								src={frontEndTecnologiesImg}
								className="img img-fluid"
								alt="Front-end Programming Languages"
							></img>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>Back-end Programming Languages</h5>
							<img
								src={backEndTecnologiesImg}
								className="img img-fluid"
								alt="Back-end Programming Languages"
							></img>
						</div>
					</div>
					<div className="row cards-section">
						<div
							className="col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>Platforms & CMS</h5>
							<img
								src={cmsPlatformsImg}
								className="img img-fluid"
								alt="Platforms & CMS"
							></img>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Technologies;
