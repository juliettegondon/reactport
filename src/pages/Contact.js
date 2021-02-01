import React from "react";
import Container from "../components/Container";
import Col from "../components/Col";





function Contact()
  {
    return (

      <div className="text-center">
        <Col size="md-12 align-center">
        		<Container style={{ marginTop: 30 }}>
        <h1 className="text-center"> let's connect.</h1>
        <h1 className="text-center"><a href="https://www.linkedin.com/in/juliettegondon/" target="_blank" rel="noopener noreferrer"> linkedin </a></h1>
        <h1 className="text-center"><a href="https://github.com/juliettegondon" target="_blank" rel="noopener noreferrer"> github </a></h1>
    
        
											<img src="https://avatars.githubusercontent.com/u/68354391?s=460&u=b41b2e58b9eeb2e692d4b038b6032c6a47cddb3c&v=4" alt=""></img>

        <h2 className="text-center"> think i'm amazing and want to hire me? send me an email <a href="mailto:juliette@gmail.com"> here! </a></h2>

        </Container>
        </Col>

      </div>
    );
  }


export default Contact;
