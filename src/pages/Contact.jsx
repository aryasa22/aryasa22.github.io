import { useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function Contact({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("contact");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rj74daf",
        "template_b260lvq",
        e.target,
        "oeZQUBz-MjU0J8-yy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container contact-page">
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
          <h1 className="section-title">Get In Touch</h1>
          <p className="section-subtitle">I will take you in seconds.</p>
        </div>

        <div className="contact-card">
          <div className="contact-socials">
            <a
              href="https://instagram.com/aryasaputrawan"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaInstagram className="social-link" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100009951542758"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaFacebookF className="social-link" />
            </a>
            <a
              href="https://www.linkedin.com/in/arya-saputrawan-711402243/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaLinkedinIn className="social-link" />
            </a>
            <a
              href="https://github.com/aryasa22"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <FaGithub className="social-link" />
            </a>
          </div>
          <div className="contact-form">
            <form onSubmit={sendEmail}>
              <input type="text" placeholder="Name/Company" name="name" />
              <input type="email" placeholder="Email" name="email" />
              <textarea name="message" placeholder="Message"></textarea>
              <button className="contact-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
