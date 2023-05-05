import React, { Component } from "react";
import "../../css/FAQS/TicketSection.css";

import "../../css/error.css";
function TicketSection() {
	return (
		<>
			<div className="container-fluid padding-y">
				<div
					className="container ticket-section text-white"
					data-aos="zoom-in"
					data-aos-duration="1000"
					style={{
						backgroundImage:
							"linear-gradient(to right, #2b0a78, #764ba2)",
						borderRadius: "25px",
					}}
				>
					<div
						className="row text-center"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-lg-12 heading">
							<h5>SUBMIT A TICKET</h5>
							<h2>Not Found Your Answer ? Just Ask Us !</h2>
						</div>
					</div>
					<div className="row text-center form-section">
						<div
							className="col-lg-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<form
								action="https://www.vbt.io/embedcode/submit/79979/?_format=page"
								target="_blank"
								method="post"
								data-vboutform="79979"
								id="vboutEmbedForm-79979"
								name="vboutEmbedForm-79979"
								encType="multipart/form-data"
							>
								<div className="first">
									<input
										type="text"
										name="vbout_EmbedForm[field][299798]"
										id="custom-299798"
										placeholder="Your Name *"
										className="name-input"
									></input>
									<input
										type="email"
										name="vbout_EmbedForm[field][299800]"
										id="custom-299800"
										placeholder="Your Email *"
										className="email-input"
									></input>
								</div>
								<div className="second">
									<input
										type="text"
										name="vbout_EmbedForm[field][584852]"
										id="custom-584852"
										placeholder="Your Website"
										className="website-input"
									></input>
								</div>
								<div className="third">
									<textarea
										className="message-input"
										name="vbout_EmbedForm[field][584853]"
										id="custom-584853"
										placeholder="Your Question *"
									></textarea>
								</div>
								<div className="third d-flex justify-content-center">
									<div className="recaptchaField"></div>
								</div>
								<div
									id="vboutEmbedFormResponse-79979"
									style={{
										display: "none",
										textAlign: "center",
									}}
								></div>
								<button className="button" type="submit">
									<span>Submit</span>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TicketSection;
