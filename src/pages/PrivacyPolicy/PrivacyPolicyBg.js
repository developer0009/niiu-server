import React, { Component } from "react";
import "../../css/WhoAreWe/WhoAreWeBgSection.css";

function PrivacyPolicyBg() {
	return (
		<>
			<div className="container-fluid who-are-we-bg">
				<div
					className="container who-are-we padding-y"
					data-aos="zoom-in-down"
					data-aos-duration="1500"
				>
					<div className="row">
						<div className="col-lg-10 offset-lg-1 content">
							<h1>Privacy Policy</h1>
							<p className="subhead-p">
								Home {">"} Privacy Policy
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default PrivacyPolicyBg;
