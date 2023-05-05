import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../../images/niiu-digital-new-logo.png";
import logo from "../../images/niiu-digital-new-logo-2.png";
import "../../css/Home/Footer.css";

import instaPost1 from "../../images/insta_1.jpg";
import instaPost2 from "../../images/insta_2.jpg";
import instaPost3 from "../../images/insta_3.jpg";

function Footer() {
	return (
		<>
			<footer>
				<div
					className="container-fluid footer-section-bg"
					style={{
						// backgroundColor: "#2b0a78",
						backgroundImage:
							"linear-gradient(to right, #2b0a78, #764ba2)",
					}}
				>
					<div className="container footer-section">
						<div className="row">
							<div
								className="col-lg-12 footer-data"
								// data-aos="zoom-in-right"
								// data-aos-duration="1500"
							>
								<div className="data">
									<div className="logo">
										<Link to="/">
											<img
												src={logo}
												// style={{ width: "260px" }}
												className="img img-fluid"
												alt="Niiu digital logo"
											></img>
										</Link>
									</div>
									<div className="mt-3">
										<p
											className="text-white"
											style={{ opacity: "0.6" }}
										>
											We are NIIU Digital, a twinkle-toed,
											and all-rounder digital company. Our
											team is a right blend of skills and
											believes in providing the effective
											and impactful services.
										</p>
									</div>
									<div className="mt-3 links">
										<Link
											to="/terms-of-use/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Terms Of Use
											</p>
										</Link>
										<Link
											to="/privacy-policy/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Privacy-Policy
											</p>
										</Link>
									</div>
								</div>
								<div className="data">
									<h5
										style={{
											opacity: "0.9",
											fontWeight: "bolder",
										}}
									>
										Contacts
									</h5>
									<div className="mt-3">
										<span style={{ opacity: "0.8" }}>
											Address:{" "}
										</span>
										<span style={{ opacity: "0.6" }}>
											Level 42, Suntec Tower Three, 8
											Temasek Boulevard, Singapore 038988.
										</span>
									</div>
									<div className="mt-3">
										<span style={{ opacity: "0.8" }}>
											Email:{" "}
										</span>
										<a
											href="mailto:info@niiu.digital"
											target="_top"
											className="email-phone"
										>
											<span style={{}}>
												info@niiu.digital
											</span>
										</a>
									</div>
									<div className="mt-3">
										<span style={{ opacity: "0.8" }}>
											Phone:{" "}
										</span>
										<a
											href="tel:+65 68292281"
											className="email-phone"
										>
											<span> +65 68292281</span>
										</a>
									</div>
									<div className="mt-3">
										<span style={{ opacity: "0.8" }}>
											Open:{" "}
										</span>
										<span style={{ opacity: "0.6" }}>
											{" "}
											Mon 10:00 am – 06:00 pm
										</span>
									</div>
								</div>
								<div className="data">
									<h5
										style={{
											opacity: "0.9",
											fontWeight: "bolder",
										}}
									>
										Web Services
									</h5>
									<div className="mt-3">
										<Link
											to="/website-development/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Website Design & Development
											</p>
										</Link>
										<Link
											to="/content-marketing/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Content Marketing
											</p>
										</Link>
										<Link
											to="/ui-ux-design/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												UI/UX Design
											</p>
										</Link>
										<Link
											to="/search-engine-optimization/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Search Engine Optimization
											</p>
										</Link>
										<Link
											to="/social-media-marketing/"
											style={{ textDecoration: "none" }}
										>
											<p className="text-white link">
												Social Media Marketing
											</p>
										</Link>
									</div>
								</div>
								<div className="data">
									<h5
										style={{
											opacity: "0.9",
											fontWeight: "bolder",
										}}
									>
										Instagram
									</h5>

									<div
										style={{ paddingTop: "0px" }}
										data-mc-src="024f144e-9527-4c1b-985b-f0373012537a#instagram"
									></div>

									<div className="icons">
										<a
											href="https://www.youtube.com/channel/UCIkk1LrvkByxMd4yANM1Hsg"
											target="_blank"
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											<i
												className="fab fa-youtube"
												style={{ fontSize: "25px" }}
											></i>
										</a>
										<a
											href="https://www.linkedin.com/company/niiudigital/"
											target="_blank"
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											<i
												className="fab fa-linkedin-in"
												style={{ fontSize: "25px" }}
											></i>
										</a>

										<a
											href="https://www.instagram.com/niiu_digital/"
											target="_blank"
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											<i
												className="fab fa-instagram"
												style={{ fontSize: "25px" }}
											></i>
										</a>
										<a
											href="https://www.facebook.com/niiudigital"
											target="_blank"
											style={{
												textDecoration: "none",
												color: "white",
											}}
										>
											<i
												className="fab fa-facebook"
												style={{ fontSize: "25px" }}
											></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="row text-white last-row">
							<div className="col-lg-12 col-md-=12 text-center">
								<span style={{ opacity: "0.8" }}>
									Copyright © 2021 NIIU CAPITAL PTE LTD. All
									Rights Reserved.
								</span>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
