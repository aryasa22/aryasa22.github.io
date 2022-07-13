import { useEffect } from "react";
import { motion } from "framer-motion";

import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandBootstrap,
} from "react-icons/tb";
import { DiReact, DiSass } from "react-icons/di";

export default function About({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("about");
  }, []);
  return (
    <div className="container about-page">
      <motion.div
        className="section"
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        exit={{
          y: "-100vh",
          transition: {
            type: "easeIn",
            duration: 0.2,
          },
        }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        <div className="section-header">
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle">A piece about myself</p>
        </div>

        <div className="about-content">
          <p className="about-text">
            My name is Putu Arya Saputrawan. I am graduated in bachelor degree
            from Mathematics Eduactional Department, Ganesha University of
            Education, Indonesia. I am highly passioned in programming specially
            for web development. I have been learning web development since
            March 2022 and still improving my skills. I love coding because i
            feel happy when my code running as well. I am an hardworker and
            quite good to work as a team.
          </p>

          <h3 className="skills-title">Skills</h3>
          <div className="skill-icons">
            <TbBrandHtml5 className="skill-icon icon-html" />
            <TbBrandCss3 className="skill-icon icon-css" />
            <TbBrandJavascript className="skill-icon icon-js" />
            <TbBrandBootstrap className="skill-icon icon-bs" />
            <DiReact className="skill-icon icon-react" />
            <DiSass className="skill-icon icon-sass" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
