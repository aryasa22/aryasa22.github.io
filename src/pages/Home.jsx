import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("home");
  }, []);

  return (
    <motion.div className="container home-page">
      <motion.div
        className="home-content"
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
        <h1 className="intro-title">Hello, I am Arya</h1>
        <p className="intro-subtitle">Front-end developer</p>
      </motion.div>
    </motion.div>
  );
}
