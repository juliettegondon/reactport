import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

function MyNav() {
	return (
		<div className="container-fluid justify-content-center">
			<Navbar className="fixed-top MyNav" expand="lg" sticky="fixed">
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/about">about</Nav.Link>
						<Nav.Link href="/contact">contact</Nav.Link>
						<Nav.Link href="/projects">projects</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default MyNav;
