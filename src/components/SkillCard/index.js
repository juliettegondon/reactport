import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./style.css";

const SkillCard = (props) => {
	return (
		<Container style={{ marginTop: 20 }}>
			<Row>
				<Col size="md-12">
					<br></br>
					<div className="md-2 projects">
						<section className="project">
							<div className="card">
								<h2 className="h2tag">SKILLS & TECHNOLOGIES</h2>
								<div className="thumbnails">
									<div className="thumbnail">
										<div className="fab fa-react caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-html5 caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-css3 caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-js caption"></div>
									</div>
								</div>
								<div className="thumbnails">
									<div className="thumbnail">
										<div className="fab fa-js caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-git caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-node caption"></div>
									</div>
									<div className="thumbnail">
										<div className="fab fa-npm caption"></div>
									</div>
								</div>
								<div className="thumbnailstext">
									<div className="thumbnail">
										<div className="captiontext">JQUERY</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">JSON</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">HANDLEBARS</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">EXPRESS</div>
									</div>
								</div>
								<div className="thumbnailstext">
									<div className="thumbnail">
										<div className="captiontext">MONGODB</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">MYSQL</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">HEROKU</div>
									</div>
									<div className="thumbnail">
										<div className="captiontext">CLI</div>
									</div>
								</div>
							</div>
						</section>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default SkillCard;
