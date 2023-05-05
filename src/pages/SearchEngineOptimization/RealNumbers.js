import React, { Component } from "react";
import { useState } from "react";

import "../../css/Home/SimpleSteps.css";
import "../../css/SearchEngineOptimization/RealNumbers.css";

import bgChart1 from "../../images/seo/bg-chart1.webp";
import bgChart2 from "../../images/seo/bg-chart2.webp";
import bgChart3 from "../../images/seo/bg-chart3.webp";

function RealNumbers() {
	const [trafficNumber, setTrafficNumber] = useState("20,457");
	const [keywords, setKeywords] = useState("3,740");
	const [trafficPercentage, setTrafficPercentage] = useState("68%");

	function checkedFun() {
		var checkBox = document.getElementById("checkbox");

		var beforeH5 = document.getElementById("before-h5");
		var afterH5 = document.getElementById("after-h5");

		if (checkBox.checked == true) {
			afterH5.classList.add("after-h5-color");
			beforeH5.classList.remove("before-h5-color");
			setTrafficNumber("60,297");
			setKeywords("6,369");
			setTrafficPercentage("98%");
		} else {
			beforeH5.classList.add("before-h5-color");
			afterH5.classList.remove("after-h5-color");
			setTrafficNumber("20,457");
			setKeywords("3,740");
			setTrafficPercentage("68%");
		}
	}

	return (
		<>
			<div className="container-fluid">
				<div className="container real-numbers three-steps-section simple-steps-section padding-y">
					<div className="row text-center">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>REAL NUMBERS</h5>
							<h2>Expect Great Things From Our SEO Agency !</h2>
						</div>
					</div>
					<div className="row cards-section text-center heading">
						<div
							className="col-lg-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<h5 id="before-h5">Before</h5>
							<label className="switch mx-3">
								<input
									id="checkbox"
									type="checkbox"
									onClick={checkedFun}
								/>
								<span className="slider round"></span>
							</label>
							<h5 id="after-h5">After</h5>
						</div>
					</div>
					<div className="row cards-section">
						<div className="col-md-12 steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<div className="card-body">
									<h3 style={{ fontWeight: "bolder" }}>
										{trafficNumber}
									</h3>
									<h5
										className="card-title"
										style={{
											fontWeight: "bolder",
											opacity: "0.5",
										}}
									>
										Annual Organic Traffic
									</h5>
								</div>
								<img
									className="card-img-top"
									src={bgChart1}
									alt="Annual organic traffic"
								/>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<div className="card-body">
									<h3 style={{ fontWeight: "bolder" }}>
										{keywords}
									</h3>
									<h5
										className="card-title"
										style={{
											fontWeight: "bolder",
											opacity: "0.5",
										}}
									>
										Ranking Keywords
									</h5>
								</div>
								<img
									className="card-img-top"
									src={bgChart2}
									alt="Ranking keywords"
								/>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<div className="card-body">
									<h3 style={{ fontWeight: "bolder" }}>
										{trafficPercentage}
									</h3>
									<h5
										className="card-title"
										style={{
											fontWeight: "bolder",
											opacity: "0.5",
										}}
									>
										Annual Organic Traffic
									</h5>
								</div>
								<img
									className="card-img-top"
									src={bgChart3}
									alt="Annual organic traffic in percent"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default RealNumbers;
