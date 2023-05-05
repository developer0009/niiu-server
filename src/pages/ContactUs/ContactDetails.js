import React, { Component } from "react";
import "../../css/ContactUs/ContactDetails.css";
import "../../css/our-button.css";

import { useState } from "react";
import "react-phone-number-input/style.css";

import "../../css/error.css";

function ContactDetails() {
	return (
		<>
			<div className="container-fluid">
				<div className="container contact-details padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 contact-us-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								background: "#F5F5F5",
								padding: "40px",
								borderRadius: "20px",
							}}
						>
							<h5>CONTACT DETAILS</h5>
							<h2>Connect With Us</h2>
							<p className="contact-us-p">
								Give us a call or drop by anytime, we endeavour
								to answer all enquiries within 24 hours on
								business days. We will be happy to answer your
								questions.
							</p>
							<h3 className="mt-4">
								<i className="fas fa-map-pin me-2"></i>Address:
							</h3>
							<p className="contact-us-p">
								Level 42, Suntec Tower Three, 8 Temasek
								Boulevard, Singapore 038988.
							</p>
							<h3 className="mt-3">
								<i className="fas fa-envelope-open me-2"></i>
								Email Address:
							</h3>
							<a
								href="mailto:info@niiu.digital"
								target="_top"
								className="email-phone"
							>
								<p className="contact-us-p">
									info@niiu.digital
								</p>
							</a>
							<h3 className="mt-3">
								<i className="fas fa-phone-office me-2"></i>
								Let's Talk:
							</h3>
							<a href="tel:+65 68292281" className="email-phone">
								<p className="contact-us-p">+65 68292281</p>
							</a>
						</div>
						<div
							className="col-lg-6 col-md-12 form-container"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								backgroundImage:
									"linear-gradient(to right, #2b0a78, #764ba2)",
								borderRadius: "25px",
							}}
						>
							<div className="container  text-white">
								<div
									className="row text-center"
									data-aos="zoom-in-left"
									data-aos-duration="1500"
								>
									<div className="col-lg-12 heading">
										{/* <h5>NiiU Digital Form</h5> */}
										<h2>NiiU Digital Form</h2>
										{/* <h2>Contact Us</h2> */}
									</div>
								</div>
								<div className="row text-center form-section">
									<div
										className="col-lg-12"
										data-aos="zoom-in"
										data-aos-duration="1000"
									>
										<form
											action="https://www.vbt.io/embedcode/submit/54716/?_format=page"
											target="_blank"
											method="post"
											data-vboutform="54716"
											id="vboutEmbedForm-54716"
											name="vboutEmbedForm-54716"
											encType="multipart/form-data"
										>
											<div className="first">
												<input
													type="text"
													name="vbout_EmbedForm[field][299798]"
													id="custom-299798"
													placeholder="Your First Name *"
													className="first-name-input required"
												></input>
											</div>
											<div className="second">
												<input
													type="text"
													name="vbout_EmbedForm[field][299799]"
													id="custom-299799"
													placeholder="Your Last Name *"
													className="last-name-input required"
												></input>
											</div>
											<div className="third">
												<input
													type="email"
													name="vbout_EmbedForm[field][299800]"
													id="custom-299800"
													placeholder="Your Email *"
													className="email-input required"
												></input>
											</div>
											<div className="third">
												<input
													type="tel"
													name="vbout_EmbedForm[field][299801]"
													id="custom-299801"
													className="email-input required"
													placeholder="Your Phone Number"
												></input>
											</div>
											<div className="four">
												<textarea
													name="vbout_EmbedForm[field][584851]"
													id="custom-584851"
													placeholder="Your Message *"
													className="required"
												></textarea>
											</div>
											<div className="four d-flex justify-content-center">
												<div className="recaptchaField"></div>
											</div>
											<div
												id="vboutEmbedFormResponse-54716"
												style={{
													display: "none",
													textAlign: "center",
												}}
											></div>
											<button
												className="button"
												type="submit"
											>
												<span>Send Message</span>
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ContactDetails;
