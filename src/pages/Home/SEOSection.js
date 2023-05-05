import React, { Component, useState } from "react";
import "../../css/Home/SeoSection.css";
import seoVideo from "../../images/seo.mp4";
import newsLetter from "../../images/home/news-letter.png";

import "../../css/error.css";

import "../../css/Home/SeoSection.css";

import ModalVideo from "react-modal-video";

function SEOSection() {
	const [isOpen, setOpen] = useState(false);

	function adjustMarginFun() {
		if (window.outerWidth > 1200) {
			const btnDivElement = document.getElementById("seo-btn-div");
			btnDivElement.style.marginTop = "35px";
		}
	}
	return (
		<>
			<ModalVideo
				channel="youtube"
				autoplay
				isOpen={isOpen}
				videoId="vjSb9ZC-7ic"
				onClose={() => setOpen(false)}
			/>
			<div
				className="container-fluid seo-section padding-y"
				// style={{ backgroundColor: "#F5F5F5" }}
			>
				<div className="container" style={{ height: "350px" }}>
					<div
						className="row title"
						style={{
							height: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div className="col-lg-6 offset-lg-3">
							<div data-aos="zoom-in" data-aos-duration="1000">
								<h2>
									Expect Great Things From Your Digital Agency
								</h2>
								<h5
									className="mt-4"
									style={{
										opacity: "0.5",
										textAlign: "center",
										fontWeight: "bolder",
									}}
								>
									Make The Right Choice For Your Future.
								</h5>
								<div
									className="svg mt-4"
									style={{
										textAlign: "center",
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
								</div>
							</div>
						</div>
						<div className="col-lg-3"></div>
					</div>
				</div>

				<div className="container padding-b">
					<div
						className="row text-white news-letter-box"
						data-aos="zoom-in"
						data-aos-duration="1000"
						style={{
							backgroundColor: "#fe4c1c",
							borderRadius: "20px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div className="col-lg-1 news-img">
							<img src={newsLetter} alt="newsletter"></img>
						</div>
						<div className="col-lg-5 news-letter">
							<h4 style={{ fontWeight: "bolder" }}>
								Subscribe For Newsletter
							</h4>
							<h6>Grow Your Business With Our SEO Agency</h6>
						</div>
						<div
							className="col-lg-6 form-section"
							// style={{
							// 	display: "flex",
							// 	justifyContent: "space-between",
							// }}
						>
							<form
								action="https://www.vbt.io/embedcode/submit/79977/?_format=page"
								target="_blank"
								method="post"
								data-vboutform="79977"
								id="vboutEmbedForm-79977"
								name="vboutEmbedForm-79977"
								encType="multipart/form-data"
							>
								<div>
									<div
										id="vboutEmbedFormResponse-79977"
										style={{
											display: "none",
										}}
									></div>
									<input
										type="email"
										name="vbout_EmbedForm[field][299800]"
										id="custom-299800"
										placeholder="Your Email *"
										className="email-input required"
									></input>
									<div
										className="recaptchaField"
										style={{
											marginTop: "20px",
											// marginBottom: "20px",
										}}
									></div>
								</div>
								<div id="seo-btn-div">
									<button
										onClick={adjustMarginFun}
										className="button"
										type="submit"
									>
										<span>Start Now</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SEOSection;
