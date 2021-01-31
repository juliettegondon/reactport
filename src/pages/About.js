import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/SkillCard"

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
					</Col>
				</Row>
				<Card />
			</Container>
		</div>
	);
}

export default About;
