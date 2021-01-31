import React from "react";
import Container from "../components/Container";
import { Image } from "react-bootstrap";
import Col from "../components/Col";
import { Link } from "react-router-dom";


function Contact()
  {
    return (

      <div className="text-center">
        <Col size="md-12 align-center">
        		<Container style={{ marginTop: 30 }}>
        <h1 className="text-center"> let's connect.</h1>
        <h1 className="text-center"><a href="https://www.linkedin.com/in/juliettegondon/"> linkedin </a></h1>
        <h1 className="text-center"><a href="https://github.com/juliettegondon"> github </a></h1>
        <h1 className="text-center">
          send me an email <a href="mailto:juliette@gmail.com"> here </a>
        </h1>
        
											<Image src="/images/juliette.jpg" thumbnail />

        <h2 className="text-center"> think i'm amazing and want to hire me? <Link to="/public/resume.pdf" target="_blank" download>download my resume! <i className="fas fa-file-download"></i></Link></h2>
       
        </Container>
        </Col>

      </div>
    );
  }


export default Contact;
