import React, { Component } from "react";
import "../../css/WhoAreWe/AboutUs.css";
import seoKingImg from "../../images/seo/seo-king-section.webp";
import { Link } from "react-router-dom";
import "../../css/our-button.css";

function SEOKing() {
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
								src={seoKingImg}
								className="img img-fluid"
								alt="SEO services"
							></img>
						</div>
						<div
							className="col-lg-6 col-md-12 who-are-we-content"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>TAKE WEBSITE TO THE NEXT LEVEL</h5>
							<h2>
								SEO Services For Digital Agency Singapore :
								Marketing For Solopreneurs, SME, Coaches,
								Financial Advisors & Realtors
							</h2>

							<p className="who-are-we-p">
								Search Engine Optimization (SEO) is the practice
								of improving the ranking of a website or webpage
								in search engine results pages (SERPs). The
								higher a page ranks, the more likely people are
								to find it. SEO can help improve traffic and
								sales for your business, by increasing
								visibility and attracting more qualified
								visitors from Google and other search engines.
							</p>
							<p>
								If you're looking for best SEO packages for your
								business. We are the best digital agency in
								Singapore, then you've come to the right place.
								At Search Engine Optimization (SEO), we know
								just how important it is to have your website
								ranked high on search engines. That's why we
								offer a wide range of SEO services for business
								coaches, Solopreneurs and financial advisor that
								will help your business achieve top results
								online.
							</p>
							<p>
								By properly implementing SEO techniques into
								your marketing plan, you can increase traffic to
								your website and improve conversions rates.
								Prior to that ongoing optimization will help
								ensure that you remain visible in search engine
								results pages (SERPs), which leads to increased
								visibility and higher web traffic volumes.
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

export default SEOKing;
