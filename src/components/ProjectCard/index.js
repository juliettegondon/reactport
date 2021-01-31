import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import "./style.css";
import { Image } from "react-bootstrap";

const ProjectCard = () => {
	return (
		<Container style={{ marginTop: 20 }}>
			<Row>
				<Col size="md-12">
					<div className="projects">
						<section className="project">
							<header className="project-header">
								<h2 className="project-title">E-Volve</h2>
								<p className="project-meta">
									<div id="downloadbtn" className="fab fa-github"></div>
									<a
										href="https://github.com/juliettegondon/evolve"
										id="downloadbtn"
									>
										VIEW REPO
									</a>
									<a> | </a>
									<a href="https://e-volve.herokuapp.com/" id="downloadbtn">
										DEPLOYED APP
									</a>
									<div className="post-description">
										<p>
											A online wellness portal that allows users to manage all
											aspects of their personal health - from fitness, to
											medical data, to mindfulness and mental health. Stores
											user information and requires sign-in authentication.
										</p>
										<br></br>
										<br></br>
										<div className="card">
											<Image src="/images/evolve.png" fluid />
										</div>
									</div>
								</p>
							</header>
						</section>
						<section className="project">
							<header className="project-header">
								<h2 className="project-title">Timesheet Manager</h2>
								<p className="project-meta">
									<div id="downloadbtn" className="fab fa-github"></div>
									<a
										href="https://github.com/Rivenception/P2_Time_Manager"
										id="downloadbtn"
									>
										VIEW REPO
									</a>
									<a> | </a>
									<a
										href="https://intense-badlands-45869.herokuapp.com/admin"
										id="downloadbtn"
									>
										DEPLOYED APP
									</a>
									<div className="post-description">
										<p>
											This is application serves tech workers and administrators
											who need to keep track of expenses and hours. Engineers
											don’t always have a punch-in punch-out method of logging
											their work hours, so this timesheet app offers a user
											friendly way to log hours and manage their expenses.
										</p>
										<br></br>
										<br></br>
										<div className="card">
											<Image src="/images/timesheet.png" fluid />
										</div>
									</div>
								</p>
							</header>
						</section>
						<section className="project">
							<header className="project-header">
								<h2 className="project-title">Dinner With Developers</h2>
								<p className="project-meta">
									<div id="downloadbtn" className="fab fa-github"></div>
									<a
										href="https://github.com/mkolek1015/Group-Project-1"
										id="downloadbtn"
									>
										VIEW REPO
									</a>
									<a> | </a>
									<a
										href="https://mkolek1015.github.io/Group-Project-1/htmlfiles/wine2.html"
										id="downloadbtn"
									>
										DEPLOYED APP
									</a>
									<div className="post-description">
										<p>
											This dinner planning app allows a user to search for
											recipes and wine parings based upon a choice of cuisine,
											food type, dietary restrictions and generates a wine
											pariing. API calls to Edamam and Spoonacular.
										</p>
										<br></br>
										<br></br>
										<div className="card">
											<Image src="/images/wine.png" fluid />
										</div>
									</div>
								</p>
							</header>
						</section>
						<section className="project">
							<header className="project-header">
								<h2 className="project-title">
									Big Kahuna Burger - Mini Project
								</h2>
								<p className="project-meta">
									<div id="downloadbtn" className="fab fa-github"></div>
									<a
										href="https://github.com/juliettegondon/nomnomburger"
										id="downloadbtn"
									>
										VIEW REPO
									</a>
									<a> | </a>
									<a
										href="https://boiling-badlands-79668.herokuapp.com/"
										id="downloadbtn"
									>
										DEPLOYED APP
									</a>
									<div className="post-description">
										<p>
											This app is a burger logger with MySQL, Node, Express,
											Handlebars and a homemade ORM. Users can input the names
											of burgers they want to eat. Whenever a user submits a
											burger's name, this app will display the burger on the
											left side of the page -- waiting to be devoured. Once
											devoured, it appears on the right. All burgers are stored
											in the mySQL database!
										</p>
										<br></br>
										<br></br>
										<div className="card">
											<Image src="/images/burger.png" fluid />
										</div>
									</div>
								</p>
							</header>
						</section>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ProjectCard;
