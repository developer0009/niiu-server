import React, { Component } from "react";
import "../../css/WhoAreWe/ThreeSteps.css";
import radical from "../../images/home/radical.webp";
import people from "../../images/home/people.webp";
import mission from "../../images/home/mission.webp";
import "../../css/Home/SimpleSteps.css";

function ThreeSteps() {
	return (
		<>
			<div className="container-fluid">
				<div className="container three-steps-section simple-steps-section padding-y">
					<div className="row who-are-we text-center">
						<div
							className="col-md-12 heading who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>OUR OBJECTIVES</h5>
							<h2>Never Be Without Goals !</h2>
							<p className="who-are-we-p">
								Niiu digital is one of the best digital
								marketing agency in singapore that provides
								top-class services to businesses of all sizes
								that specializes in developing and executing
								effective online campaigns. We are twinkle-toed,
								and all-rounder digital company that provide a
								right blend of skills and believes in providing
								the effective and impactful services. From
								designing , developing to technical auditing to
								site migration, our team of technical team have
								true experts in their field. Our objectives are:
							</p>
						</div>
					</div>

					<div className="row cards-section">
						<div className="col-md-12 steps">
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={radical}
									alt="Radical integrity"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Radical Integrity
									</h4>
									<p className="card-text">
										Radical integrity is a key value at our
										agency. It's the foundation on which
										everything we do revolves around. We
										believe that it's important to live our
										values in everything we do, from the way
										we treat our clients and employees, to
										how we run our business.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={people}
									alt="People first"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										People First
									</h4>
									<p className="card-text">
										At our company, we always put client
										first and work hard to create long-term
										relationships with our clients. We take
										pride in being reliable and honest,
										which is why we focus on providing
										high-quality services while also
										upholding ethical standards.
									</p>
								</div>
							</div>
							<div
								className="card"
								data-aos="zoom-in"
								data-aos-duration="1000"
							>
								<img
									className="card-img-top"
									src={mission}
									alt="Mission focus"
								/>
								<div className="card-body">
									<h4
										className="card-title"
										style={{ fontWeight: "bolder" }}
									>
										Mission Focus
									</h4>
									<p className="card-text">
										At our agency, we are firmly focused on
										helping our clients achieve their
										mission and goals. We understand that a
										strong digital presence is essential to
										driving business growth, and we work
										tirelessly to help our clients build
										successful online platforms that support
										their objectives.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ThreeSteps;
