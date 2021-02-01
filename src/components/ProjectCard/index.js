
import "./style.css";
import React from 'react'
import Burger from '../Images/Burger.png'
import Evolve from '../Images/Evolve.png'
import Timesheet from '../Images/Timesheet.png'
import Wine from '../Images/Wine.png'


const projectInfo =[
	{
	title:"E-VOLVE",
	repo:"https://github.com/juliettegondon/evolve",
	demo:"https://e-volve.herokuapp.com/",
	description:"A online wellness portal that allows users to manage all aspects of their personal health - from fitness, to medical data, to mindfulness and mental health. Stores user information and requires sign-in authentication.",
	image: Evolve
	},
	{
		title:"TIMESHEET MANAGER",
		repo:"https://github.com/Rivenception/P2_Time_Manager",
		demo:"https://intense-badlands-45869.herokuapp.com/admin",
		description:"This application serves tech workers and administrators who need to keep track of expenses and hours. Engineers don’t always have a punch-in punch-out method of logging their work hours, so this timesheet app offers a user friendly way to log hours and manage their expenses.",
		image: Timesheet
		},
	{
		title:"DINNER WITH DEVELOPERS",
		repo:"https://github.com/mkolek1015/Group-Project-1",
		demo:"https://mkolek1015.github.io/Group-Project-1/index.html",
		description:"This dinner planning app allows a user to search for recipes and wine parings based upon a choice of cuisine,food type, dietary restrictions and generates a wine pariing. API calls to Edamam and Spoonacular",
		image: Wine
		},
		{
			title:"Big Kahuna Burger - Mini Project",
			repo:"https://github.com/juliettegondon/nomnomburger",
			demo:"https://boiling-badlands-79668.herokuapp.com/",
			description:"This app is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. Users can input the names of burgers they want to eat. Whenever a user submits a burger's name, this app will display the burger on the left side of the page -- waiting to be devoured. Once devoured, it appears on the right. All burgers are stored in the mySQL database!",
			image: Burger
			},

]

function ProjectCard(){
	return(
		<div className="container-lg">
			{projectInfo.map((project) => (
				<div key={project.title} className="projects">
					<br></br>
					 <h2 className="project-title">{project.title}</h2>
					 <a href={project.repo} target="_blank>" className="downloadbtn"> <i className="fab fa-github"></i> VIEW REPO |</a>
					<a href={project.demo} target="_blank>" className="downloadbtn"> VIEW DEMO</a>
					 <p>{project.description}</p>
        <img className="thumbnail" src={project.image} alt=""/>
      <div className="post-descriptions">

      </div>
    </div>

			))}
		</div>
	)
}
export default ProjectCard;
