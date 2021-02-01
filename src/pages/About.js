import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SkillCard from "../components/SkillCard"

function About() {
	return (
		<div>
			<Container style={{ marginTop: 30 }}>
				<Row>
					<Col size="md-12">
					<h1 className="text-center">About Juliette</h1>
						<p>
							My name is Juliette and I'm a Web Developer using my experience as
							a content creator to create beautiful user interfaces and
							memorable web experiences. I am a graduate of the UCONN School of
							Engineering Full Stack Web Development Boot Camp. My boot-camp
							experience also brought me experience in teamwork and project
							management. Through learning frontend and backend development,
							I’ve carved out a path for myself to create functional full stack
							web applications. In addition, I have a strong background in
							managing social media channels and tech marketing, which brings
							together my ability to provide meaningful online experiences for
							brands and users alike.
						</p>
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
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default About;
