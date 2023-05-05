import React, { Component } from "react";
import "../../css/WhoAreWe/WhoAreWeBgSection.css";

function MeetOurTeamBgSection() {
	return (
		<>
			<div className="container-fluid who-are-we-bg">
				<div
					className="container who-are-we padding-y"
					data-aos="zoom-in"
					data-aos-duration="1000"
				>
					<div className="row">
						<div className="col-lg-12 content">
							<h1>Meet Our Team</h1>
							<p className="subhead-p">
								About Us {">"} Meet Our Team
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MeetOurTeamBgSection;
