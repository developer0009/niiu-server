import React, { Component } from "react";
import "../../css/ContactUs/Map.css";

const Map = () => {
	return (
		<>
			<div
				className="container map-section padding-y"
				data-aos="zoom-in"
				data-aos-duration="1000"
			>
				<div className="row">
					<div className="col-md-12">
						<div
							id="map-container-google-3"
							className="z-depth-1-half map-container-3"
						>
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.798815627134!2d103.85739641482468!3d1.2952838121089858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da196c3bab7c2f%3A0x80c6bb163350dda9!2sNiiU%20Digital!5e0!3m2!1sen!2sin!4v1674192168027!5m2!1sen!2sin"
								frameBorder="0"
								style={{ border: "0" }}
								allowFullScreen
								height="100%"
								width="100%"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Map;
