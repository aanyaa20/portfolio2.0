import React from "react";
import "./projects.css";
import expenseTrackerImg from "../../assets/expense-tracker.png";
import tasklyImg from "../../assets/taskly.png";

const projects = [
  {
    title: "Expense Tracker",
    description: "A web app to track daily expenses with charts and filters.",
    image: expenseTrackerImg,
    tech: ["React", "Tailwind CSS"],
    live: "https://expense-tracker-gamma-drab-55.vercel.app/",
    github: "https://github.com/aanyaa20/expense_tracker"
  },
  {
    title: "Taskly",
    description: "A task management tool with drag & drop and deadlines.",
    image: tasklyImg,
    tech: ["React", "Tailwind CSS"],
    live: "https://taskly-lilac.vercel.app/",
    github: "https://github.com/aanyaa20/Taskly"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projectTitle">Projects</h2>
      <p className="projectDesc">
        Here are some of my featured projects, showcasing my skills and work style.
      </p>

      <div className="projectImg">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            {/* Image */}
            <img src={project.image} alt={project.title} className="img" />

            {/* Details */}
            <div className="projectDetails">
              <h3 className="projectName">{project.title}</h3>
              <p className="projectText">{project.description}</p>

              {/* Tech stack */}
              <div className="techStack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="techItem">{tech}</span>
                ))}
              </div>

              {/* Buttons */}
              <div className="projectButtons">
                <a href={project.live} className="projectBtn btnLive">Live URL</a>
                <a href={project.github} className="projectBtn btnGithub">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
