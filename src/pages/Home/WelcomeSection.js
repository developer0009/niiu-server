import React, { Component, useState } from "react";
import welcomeimg from "../../images//home/header-home3.png";
import "../../css/Home/WelcomeSection.css";
import { Link } from "react-router-dom";

import ModalVideo from "react-modal-video";

import "react-modal-video/scss/modal-video.scss";

import "../../css/our-button.css";

function WelcomeSection() {
	const [isOpen, setOpen] = useState(false);

	return (
		<>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="vjSb9ZC-7ic"
				onClose={() => setOpen(false)}
			/>
			<div className="container-fluid welcome-section-bg">
				<div className="container welcome-section welcome-padding">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 welcome-content "
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>WELCOME TO NiiU DIGITAL</h5>
							<h1 className="mb-3">
								Empower Your Web Identity & Presence With NiiU
								Digital The Best Digital Agency In Singapore
							</h1>

							<h6>If you can imagine it, we can build it.</h6>
							<br></br>
							<div className="hire-us-now">
								<div className="btn-hire-us-now">
									<Link to="/contact-us/">
										<button className="our-button hire-side">
											<span>Hire Us Now</span>
										</button>
									</Link>
								</div>

								<div
									className="svg"
									style={{
										display: "flex",
										alignItems: " center",
									}}
								>
									<svg
										onClick={() => setOpen(true)}
										version="1.1"
										id="play"
										className="play-icon"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										viewBox="0 0 100 100"
										enableBackground="new 0 0 100 100"
										xmlSpace="preserve"
									>
										<path
											className="stroke-solid"
											fill="none"
											stroke="white"
											d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                              C97.3,23.7,75.7,2.3,49.9,2.5"
										></path>
										<path
											className="stroke-dotted"
											fill="none"
											stroke="white"
											d="M49.9,2.5C23.6,2.8,2.1,24.4,2.5,50.4C2.9,76.5,24.7,98,50.3,97.5c26.4-0.6,47.4-21.8,47.2-47.7
                              C97.3,23.7,75.7,2.3,49.9,2.5"
										></path>
										<path
											className="icon"
											fill="white"
											d="M38,69c-1,0.5-1.8,0-1.8-1.1V32.1c0-1.1,0.8-1.6,1.8-1.1l34,18c1,0.5,1,1.4,0,1.9L38,69z"
										></path>
									</svg>

									<span
										className="ms-2"
										style={{ opacity: "1" }}
									>
										Check How It Works
									</span>
								</div>
							</div>
							<div className="icons">
								<a
									href="https://www.youtube.com/channel/UCIkk1LrvkByxMd4yANM1Hsg"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<i className="fab fa-youtube"></i>
								</a>
								<a
									href="https://www.linkedin.com/company/niiudigital/"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<i className="fab fa-linkedin-in"></i>
								</a>
								<a
									href="https://www.instagram.com/niiu_digital/"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<i className="fab fa-instagram"></i>
								</a>

								<a
									href="https://www.facebook.com/niiudigital"
									target="_blank"
									style={{
										textDecoration: "none",
										color: "white",
									}}
								>
									<i className="fab fa-facebook"></i>
								</a>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 welcome-image"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={welcomeimg}
								alt="NiiU Digital the best digital agency in singapore"
								className="img img-fluid"
							></img>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WelcomeSection;
