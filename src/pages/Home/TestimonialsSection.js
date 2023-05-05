import React, { Component } from "react";
import "../../css/Home/TestimonialsSection.css";

function TestimonialsSection() {
	return (
		<>
			<div className="container-fluid">
				<div className="container testimonials-section padding-y">
					<div className="row">
						<div
							className="col-lg-4 content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5
								style={{
									opacity: "0.5",
									fontWeight: "bolder",
								}}
							>
								REAL TESTIMONIALS
							</h5>
							<h2>What They Say About Our Company ?</h2>
						</div>
						<div
							className="col-lg-8 p-5 carousel"
							data-aos="zoom-in"
							data-aos-duration="1000"
							style={{
								backgroundImage:
									"linear-gradient(to right, #2b0a78, #764ba2)",
								// backgroundColor: "#2b0a78",
								color: "white",
							}}
						>
							<div
								id="carouselExampleControls"
								className="carousel slide"
								data-ride="carousel"
							>
								<div className="carousel-inner text-center">
									<div className="carousel-item active">
										<div className="d-block w-100">
											<p>
												"Absolutely wonderful! I would
												also like to say thank you to
												all your staff. I can't say
												enough about NiiU Digital."
											</p>
											<h6>Kim Lee</h6>
											<h5 style={{ opacity: "0.7" }}>
												Performance Coach
											</h5>
										</div>
									</div>
									<div className="carousel-item">
										<div className="d-block w-100">
											<p>
												"I couldn't have asked for more
												than this. Website development
												was worth a fortune to my
												company. I am really satisfied
												with my website development. I
												can't say enough about NiiU
												Digital."
											</p>
											<h6>Tan Mei Yi Janine</h6>
											<h5 style={{ opacity: "0.7" }}>
												E-Commerce Owner
											</h5>
										</div>
									</div>
									<div className="carousel-item">
										<div className="d-block w-100">
											<p>
												"Absolutely wonderful! Website
												development is exactly what our
												business has been lacking.
												Thanks to NiiU Digital. We've
												seen amazing results already."
											</p>
											<h6>Valerie</h6>
											<h5 style={{ opacity: "0.7" }}>
												Charted Accountant
											</h5>
										</div>
									</div>
								</div>
								<a
									className="carousel-control-prev"
									href="#carouselExampleControls"
									role="button"
									data-slide="prev"
								>
									<span
										className="carousel-control-prev-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Previous</span>
								</a>
								<a
									className="carousel-control-next"
									href="#carouselExampleControls"
									role="button"
									data-slide="next"
								>
									<span
										className="carousel-control-next-icon"
										aria-hidden="true"
									></span>
									<span className="sr-only">Next</span>
								</a>
							</div>
						</div>
						<div className="col-lg-1"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TestimonialsSection;
