import React, { Component } from "react";
import "../../css/MeetOurTeam/ProfessionalPeople.css";
import daren from "../../images/meet-our-team/daren.webp";
import carla from "../../images/meet-our-team/carla.webp";
import jason from "../../images/meet-our-team/jason.webp";
import rhealyn from "../../images/meet-our-team/rhealyn.webp";
import princess from "../../images/meet-our-team/princess.webp";
import jessica from "../../images/meet-our-team/jessica.webp";
import shrishti from "../../images/meet-our-team/shrishti.webp";
import mitesh from "../../images/meet-our-team/mitesh.webp";
import elizabeth from "../../images/meet-our-team/elizabeth.webp";
import ananya from "../../images/meet-our-team/ananya.webp";

function ProfessionalPeople() {
	return (
		<>
			<div className="container-fluid">
				<div className="container professional-people padding-y">
					<div className="row heading">
						<div className="col-lg-12">
							<div className="row heading who-are-we">
								<div
									className="col-lg-12 who-are-we-content"
									data-aos="zoom-in"
									data-aos-duration="1000"
								>
									<h5>PROFESSIONAL PEOPLE</h5>
									<h2>Our Leadership Team</h2>
									<h6 className="mt-3">
										We have experience working with large
										and small businesses and are ready to
										develop a targeted strategy and plan
										that’s just right for you.
									</h6>
								</div>
							</div>
						</div>
					</div>
					<div className="row steps-images text-center">
						<div className="col-md-12 steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={jason}
									alt="Niiu digital founder"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Jason Wong
									</h5>
									<h3 className="card-text">Founder</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={daren}
									alt="Research analyst"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Daren Lee
									</h5>
									<h3 className="card-text">
										Research Analyst
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={carla}
									alt="Digital marketer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Carla
									</h5>
									<h3 className="card-text">
										Digital Marketer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={shrishti}
									alt="Content writer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Shrishti Shukla
									</h5>
									<h3 className="card-text">
										Content Writer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={elizabeth}
									alt="Digital marketer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Elizabeth Assey
									</h5>
									<h3 className="card-text">
										Digital Marketer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={princess}
									alt="Content writer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Princess May Racho
									</h5>
									<h3 className="card-text">
										Content Writer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={mitesh}
									alt="Full stack web developer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Mitesh Panchal
									</h5>
									<h3 className="card-text">
										Full Stack Web Developer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={ananya}
									alt="Graphic and web designer"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Ananya Jain
									</h5>
									<h3 className="card-text">
										Graphic And Web Designer
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={rhealyn}
									alt="SEO specialist"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Rhealyn Jabonero
									</h5>
									<h3 className="card-text">
										SEO Specialist
									</h3>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top img-fluid"
									src={jessica}
									alt="Social media specialist"
								/>
								<div className="card-body">
									<h5
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Zousangkim Naulak
									</h5>
									<h3 className="card-text">
										Social Media Specialist
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProfessionalPeople;
