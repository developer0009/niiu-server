import React, { Component } from "react";
import "../../css/WhoAreWe/WhoAreWeBgSection.css";

function WhoAreWeBgSection() {
	return (
		<>
			<div className="container-fluid who-are-we-bg">
				<div
					className="container who-are-we py-2"
					data-aos="zoom-in"
					data-aos-duration="1000"
				>
					<div className="row">
						<div className="col-lg-12 content">
							<h1>Who Are We</h1>
							<p className="subhead-p">About Us {">"} Who Are We</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default WhoAreWeBgSection;
