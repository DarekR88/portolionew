import React from "react";
import eog_img from "../eog_img.PNG";
import scraper_img from "../scrape.PNG";
import hair_img from "../hair.PNG";
import HerokuIcon from "../heroku-icon-27.jpg";

const projects = [
	{
		title: "EOG Oil & Gas Data Visualization",
		description: 'Live visualizations for simulated oil rig metrics, subscribed to a GraphQL API, publishing every 30 seconds',
		tools: 'React (Hooks), Redux, Reselect, Saga, GraphQL',
		image: eog_img,
		deployedURL: "https://github.com/DarekR88/eog-react-visualization",
		githubURL: "https://github.com/DarekR88/eog-react-visualization",
	},
	{
		title: "Nintendo News Webscaper",
		description:
			"Tool for scraping web content about news and upcoming product launches related to Nintendo ®.",
		tools: 'Node, Express, Axios, Mongoose, and Cheerio',
		image: scraper_img,
		deployedURL: "https://mysterious-woodland-91607.herokuapp.com/",
		githubURL: "https://github.com/DarekR88/ScrapeToMongo",
	},
	{
		title: "Hair by Julie",
		description:
			"Dashboard for local hair stylist allowing an admin to customize hours, services, contact information.",
		tools: 'React, Sass, JSX, Javascript, MongoDB',
		image: hair_img,
		deployedURL: "https://hair-salon-julieg.herokuapp.com",
		githubURL: "https://github.com/Emilykradke/hair-salon-julie",
	},
];

const Projects = (props) => {
	return (
		<div className="projects-container" id="projects">
			<h2 className="heading-l">Projects</h2>

			{projects.map((project, i) => {
				return (
					<>
						<div className="section">
							<div className="project-actions">
								<div className="image-container">
									<a
										className="deployedLink"
										href={project.deployedURL}
										target={"_blank"}
									>
										<img
											className="project-image"
											src={project.image}
											alt="Hair screenshot"
										/>
									</a>
								</div>
								<a
									className="github-link"
									href={project.githubURL}
									target={"_blank"}
								>
									<span className="fab fa-github github-icon"></span>
									GitHub
								</a>
							</div>
							<div className="project-description">
								<p className="title">{project.title}</p>
								<p className="description">{project.description}</p>
								<p className="description"><strong>{project.tools}</strong></p>
							</div>
						</div>
					</>
				);
			})}
		</div>
	);
};

export default Projects;
