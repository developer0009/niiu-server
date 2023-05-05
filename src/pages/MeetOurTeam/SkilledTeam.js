import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import meetOurTeamImg from "../../images//meet-our-team/meet-our-team-bg.webp";

function SkilledTeam() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we padding-y">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={meetOurTeamImg}
								className="img img-fluid"
								alt="Niiu digital team members"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>SKILLED TEAM</h5>
							<h2>Meet Our Executive Team Members</h2>
							<h6 className="mt-3">
								If we had a ‘secret sauce’ it would be our
								awesome people.
							</h6>
							<p className="who-are-we-p">
								We're incredibly proud of what we do and what we
								offer such as website development, content
								marketing, search engine optimization, social
								media marketing and etc. We are a team of
								leaders who ensure to take care of your online
								identity and presence. And that's the reason we
								are 101% committed towards clients' success and
								help them to achieve their long term goal.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SkilledTeam;
