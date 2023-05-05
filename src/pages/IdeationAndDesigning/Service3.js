import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import logoDesignImg from "../../images/id/logo-design.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function Service3() {
	return (
		<>
			<div className="container-fluid">
				<div className="container who-are-we  padding-b">
					<div className="row">
						<div
							className="col-lg-6 col-md-12 who-are-we-1"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<img
								src={logoDesignImg}
								className="img img-fluid"
								alt="Logo design"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Logo Design</h3>

							<p className="who-are-we-p">
								A great logo conveys your brand's personality
								and values to potential customers. It should be
								distinctive enough to avoid being confused with
								other brands, but generic enough that it can be
								used on different types of products.
							</p>
							<p>
								It helps attract attention when people browse
								through Websites, search for information about
								your company or product, or view portfolio
								pages. We have the ability to design a logo that
								will help your business achieve its desired
								results. With combinations and skills that stand
								out, we work together sharing ideas and
								interacting with clients for triumphing with the
								best results.
							</p>
							<div className="btn-request-proposal">
								<Link to="/contact-us/">
									<button className="our-button req-pro-side">
										<span>Request A Proposal</span>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Service3;
