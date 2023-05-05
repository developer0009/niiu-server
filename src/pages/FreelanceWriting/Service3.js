import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import businessBlogsImg from "../../images/fw/business-blogs.webp";
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
								src={businessBlogsImg}
								className="img img-fluid"
								alt="Business blogs"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h3>Business Blogs</h3>

							<p className="who-are-we-p">
								Blog writing is a great way to connect with your
								target audience, share your expertise, and
								promote your business. However, creating a
								successful blog can be difficult -writing for
								the web isn't like writing for print. There's a
								growing trend among businesses of outsourcing
								their web copywriting needs to freelancers. And
								for good reason: freelance web copywriting
								service is typically a better option when it to
								writing engaging and persuasive content than
								many in-house staffers. In fact, studies have
								shown that quality content is one of the key
								factors that helps businesses win customers and
								grow revenue.
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
