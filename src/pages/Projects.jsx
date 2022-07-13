import { useEffect } from "react";
import { motion } from "framer-motion";

import projects from "../projects.json";

export default function Projects({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("projects");
  }, []);

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        y: "-110%",
        transition: {
          type: "easeIn",
          duration: 0.3,
        },
      }}
      transition={{ type: "easeInOut", duration: 1 }}
    >
      <div className="section">
        <div className="section-header">
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle">See all my works here.</p>
        </div>
        <div className="projects-content-container">
          {projects.map((project) => {
            return (
              <div key={project.id}>
                <img
                  className="project-img"
                  src={require(`../images/${project.img_url}.png`)}
                  alt=""
                />
                <h1 className="project-title">{project.title}</h1>
                <p className="project-desc">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <motion.button
                    className="project-btn"
                    whileHover={{
                      scale: 1.5,
                      borderRadius: "1rem",
                    }}
                  >
                    Visit
                  </motion.button>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
