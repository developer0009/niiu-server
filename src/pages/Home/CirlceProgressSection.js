import React, { Component } from "react";

import "../../css/Home/CircleProgressSection.css";

function CircleProgressSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container circle-progress-section padding-y">
					<div className="row" id="circle-bars">
						<div
							className="col-lg-3 col-md-6 box"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								display: "block",
								justifyContent: "center",
							}}
						>
							<div className="progress" data-percentage="90">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">
									<div>
										<h2
											id="audience-id"
											className="m-0 p-0"
											style={{
												color: "#2b0a78",
												fontWeight: "bolder",
											}}
										>
											90%
										</h2>
									</div>
								</div>
							</div>
							<h5
								style={{ fontWeight: "bolder" }}
								className="mt-3 text-center"
							>
								Audience To Leads
							</h5>
						</div>
						<div
							className="col-lg-3 col-md-6 box"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								display: "block",
								justifyContent: "center",
							}}
						>
							<div className="progress mb-3" data-percentage="85">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">
									<div>
										<h2
											id="campaign-id"
											className="m-0 p-0"
											style={{
												color: "#2b0a78",
												fontWeight: "bolder",
											}}
										>
											85%
										</h2>
									</div>
								</div>
							</div>
							<h5
								style={{ fontWeight: "bolder" }}
								className="mt-3 text-center"
							>
								Campaign Development
							</h5>
						</div>
						<div
							className="col-lg-3 col-md-6 box"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								display: "block",
								justifyContent: "center",
							}}
						>
							<div className="progress mb-3" data-percentage="80">
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">
									<div>
										<h2
											id="market-id"
											className="m-0 p-0"
											style={{
												color: "#2b0a78",
												fontWeight: "bolder",
											}}
										>
											80%
										</h2>
									</div>
								</div>
							</div>
							<h5
								style={{ fontWeight: "bolder" }}
								className="mt-3 text-center"
							>
								Market Automation
							</h5>
						</div>
						<div
							className="col-lg-3 col-md-6 box"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								display: "block",
								justifyContent: "center",
							}}
						>
							<div
								className="progress mb-3"
								data-percentage="100"
							>
								<span className="progress-left">
									<span className="progress-bar"></span>
								</span>
								<span className="progress-right">
									<span className="progress-bar"></span>
								</span>
								<div className="progress-value">
									<div>
										<h2
											id="productivity-id"
											className="m-0 p-0"
											style={{
												color: "#2b0a78",
												fontWeight: "bolder",
											}}
										>
											100%
										</h2>
									</div>
								</div>
							</div>
							<h5
								style={{ fontWeight: "bolder" }}
								className="mt-3 text-center"
							>
								Productivity Growth
							</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CircleProgressSection;
