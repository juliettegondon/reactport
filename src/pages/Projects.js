import React from "react";
import Container from "../components/Container"
import ProjectCard from "../components/ProjectCard"
import Row from "../components/Row"
import Col from "../components/Col"

function Projects() {
    return (
      <Row>
					<Col size="mb-6 md-12">
            <Container style={{ marginTop: 50 }}>
    <ProjectCard />
    </Container>
					</Col>
				</Row>
     
    );
  }


export default Projects;
