import React, { Component } from "react";

import "../../css/Home/SimpleSteps.css";
import "../../css/Home/CEOVideo.css";

import JsonLd from "./JsonLd";

function CEOVideo() {
	let ceoData = {
		"@context": "https://schema.org",
		"@type": "VideoObject",
		name: "Message of CEO",
		description:
			"This video is a welcome message from CEO to Solopreneurs, SME, Coaches, Financial Advisors & Realtors and service base business.",
		thumbnailUrl:
			"https://www.canva.com/design/DAFOnFEBSb0/xX8sYB76lDTmucq8eKFqLQ/edit?utm_content=DAFOnFEBSb0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
		uploadDate: "2022-10-12",
		duration: "PT2M28S",
		embedUrl: "https://www.youtube.com/embed/zGR1RrfEuMI",
		potentialAction: {
			"@type": "SeekToAction",
			target: "https://niiu.digital/={seek_to_second_number}",
			"startOffset-input": "required name=seek_to_second_number",
		},
	};
	return (
		<>
			<JsonLd data={ceoData}></JsonLd>
			<div className="container-fluid">
				<div className="container three-steps-section simple-steps-section padding-y">
					<div className="row text-center">
						<div
							className="col-lg-12 heading"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<h5>MEET THE CEO</h5>
							<h2>A Message From The Founder !</h2>
						</div>
					</div>
					<div className="row cards-section ceo-video-row">
						<div
							className="col-lg-12"
							data-aos="zoom-in"
							data-aos-duration="1000"
						>
							<iframe
								src="https://www.youtube.com/embed/zGR1RrfEuMI"
								title="YouTube video player"
								frameBorder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen="yes"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default CEOVideo;
