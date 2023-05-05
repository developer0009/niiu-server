import React, { Component } from "react";
import "../../css/Home/WhyChooseUsSection.css";

import "../../css/ContentMarketing/BarsSection.css";

function BarsSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container why-choose-us-section bars-section padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<div className="bar-names">
								<h5>Content Target</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "90%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="90"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<br></br>
								<h5>Relevant Content</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "95%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="95"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<br></br>
								<h5>Technically Effective</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "100%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="100"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>
						<div
							className="col-lg-6 col-md-12 second-bar-set"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<div className="bar-names">
								<h5>Eye Catchy</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "95%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="95"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<br></br>
								<h5>Strategy Supportive</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "90%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="90"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
								<br></br>
								<h5>Technically Efficient</h5>
								<div className="progress">
									<div
										className="progress-bar"
										role="progressbar"
										style={{
											width: "100%",
											backgroundColor: "#2b0a78",
										}}
										aria-valuenow="100"
										aria-valuemin="0"
										aria-valuemax="100"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default BarsSection;
