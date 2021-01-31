
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
		title:"BURGER",
		repo:"https://github.com/juliettegondon/evolve",
		demo:"https://e-volve.herokuapp.com/",
		description:"A online wellness portal  BURGER ects of their personal health - from fitness, to medical data, to mindfulness and mental health. Stores user information and requires sign-in authentication.",
		image: Burger
		},
		{
			title:"TIMESHEET",
			repo:"https://github.com/juliettegondon/evolve",
			demo:"https://e-volve.herokuapp.com/",
			description:"A online wellness portal  BURGER ects of their personal health - from fitness, to medical data, to mindfulness and mental health. Stores user information and requires sign-in authentication.",
			image: Timesheet
			}
]

function ProjectCard(){
	return(
		<div className="container-lg">
			{projectInfo.map((project) => (
				<div key={project.title} className="projects">
					 <h2 className="project-title">{project.title}</h2>
					 <p>{project.description}</p>
					<a href={project.repo} target="_blank>" className="downloadbtn"> <i className="fab fa-github"></i> VIEW REPO |</a>
					<a href={project.demo} target="_blank>" className="downloadbtn"> VIEW DEMO</a>
        <img className="thumbnail" src={project.image} alt=""/>
      <div className="post-descriptions">

      </div>
    </div>

			))}
		</div>
	)
}
export default ProjectCard;
