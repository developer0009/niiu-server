import React, { Component } from "react";
import "../../css/FAQS/Questions.css";
import questionImg from "../../images/question.png";
import answerImg from "../../images/answer.png";

function Questions() {
	return (
		<>
			<div className="container-fluid">
				<div className="container questions-section padding-y">
					<div className="row heading">
						<div
							className="col-12 "
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>FAQs</h5>
							<h2>Read Most Frequent Questions !</h2>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question one "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								Do I really need a website?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer one"
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								People incorrectly assume they can market and
								grow their business online using only social
								media channels. Think of the various social
								media channels as the wheels of your vehicle.
								They are important pieces of the vehicle but
								useless on their own. Your website is your
								vehicle. Every marketing channel and strategy
								should tie back to your website for one reason:
								You own your website and can control the path
								your visitors take.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question two"
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								How does a website increase sales?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer two"
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								Working on the following points will help you
								create a good website which will increase sales.
								<br></br>Domain name, Logo, Design, Speed, Call
								to actions, Useful content (+blog and
								newsletter), Incentives - Reviews
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question three"
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								How often should I update my web content?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer three"
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								Whether you have a blog, corporate website or
								ecommerce store, updating your website on a
								regular basis has many benefits. A website that
								is updated regularly is crawled more often, has
								more pages in the index and more possibilities
								to boost SEO.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1 question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question four "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								Best SEO Practices for High Quality Content
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer four "
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								We help ambitious businesses like yours generate
								more profits by building awareness, driving web
								traffic, connecting with customers.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question five "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								What is the main purpose of social media
								marketing?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer five "
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								With over 37 billions active users of social
								media world-wide, this is a platform where you
								get massive audience of your business to connect
								with your customer increase brand awareness and
								generate more lead. Social media is becoming one
								of the most important aspects of digital
								marketing which provides Incredible benefit by
								reaching millions of customers.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question six "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								What social media platforms are best for my
								business?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer six "
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								When it comes to figuring out the best social
								media for your business, the first step is to
								prioritize what’s important to you. Is it
								expanding your reach? Is it generating more
								leads? Is it about brand awareness? From there,
								it’s about determining which platform will give
								you the right exposure with the right audience.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question seven "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">
								Why is SEO Link Building Important?
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer seven "
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								Google has said for years that the most
								important single factor to them is high quality
								content. Now more than ever, they have the
								ability.
							</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  question">
							<img
								src={questionImg}
								className="img img-fluid"
								alt="Question eight "
							></img>
						</div>
						<div className="col-11 question">
							<p className="m-0 p-0">How can I reach you guys?</p>
						</div>
					</div>

					<div
						className="row"
						data-aos="zoom-in"
						data-aos-duration="1000"
					>
						<div className="col-1  answer">
							<img
								src={answerImg}
								className="img img-fluid"
								alt="Answer eight "
							></img>
						</div>
						<div className="col-11 answer">
							<p className="m-0 p-0">
								You can submit a ticket on our website with your
								personal information and our experts will
								connect with you!
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Questions;
