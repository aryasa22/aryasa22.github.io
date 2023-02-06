// Mobile Navbar Animation
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-navbar");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("nav-appear");
  hamburger.classList.toggle("toggle");
  document.body.classList.toggle("no-scroll");
});

// Smooth Scroll Animation
const homeLink = document.querySelector(".home-link");
const projectsLink = document.querySelector(".projects-link");
const contactLink = document.querySelector(".contact-link");
const mobileHomeLink = document.querySelector(".mobile-home-link");
const mobileProjectsLink = document.querySelector(".mobile-projects-link");
const mobileContactLink = document.querySelector(".mobile-contact-link");

const homeSection = document.querySelector("#homeSection");
const projectsSection = document.querySelector("#projectsSection");
const contactSection = document.querySelector("#contactSection");

homeLink.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});

mobileHomeLink.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

projectsLink.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

mobileProjectsLink.addEventListener("click", () => {
  projectsSection.scrollIntoView({ behavior: "smooth" });
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

contactLink.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

mobileContactLink.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
  hamburger.classList.remove("toggle");
  mobileNav.classList.remove("nav-appear");
  document.body.classList.remove("no-scroll");
});

window.addEventListener("scroll", () => {
  if (homeSection.getBoundingClientRect().bottom >= 700) {
    homeLink.classList.add("link-active");
    mobileHomeLink.classList.add("mobile-link-active");

    projectsLink.classList.remove("link-active");
    mobileProjectsLink.classList.remove("mobile-link-active");
  } else {
    homeLink.classList.remove("link-active");
    mobileHomeLink.classList.remove("mobile-link-active");
  }

  if (
    projectsSection.getBoundingClientRect().bottom >= 700 &&
    homeSection.getBoundingClientRect().bottom < 700
  ) {
    projectsLink.classList.add("link-active");
    mobileProjectsLink.classList.add("mobile-link-active");

    contactLink.classList.remove("link-active");
    mobileContactLink.classList.remove("mobile-link-active");
  } else {
    projectsLink.classList.remove("link-active");
    mobileProjectsLink.classList.remove("mobile-link-active");
  }

  if (
    contactSection.getBoundingClientRect().bottom >= 700 &&
    projectsSection.getBoundingClientRect().bottom < 700
  ) {
    contactLink.classList.add("link-active");
    mobileContactLink.classList.add("mobile-link-active");
  } else {
    contactLink.classList.remove("link-active");
    mobileContactLink.classList.remove("mobile-link-active");
  }
});

// GSAP Appear Animation
const tl = gsap.timeline({ duration: 0.5, ease: "Power1" });

tl.from(".jumbo", {
  x: "-100%",
  opacity: 0,
}).from(".navbar", {
    scale: 0,
    opacity: 0,
  });

// Gsap ScrollTrigger Animation
gsap.registerPlugin(ScrollTrigger);

const sectionTitles = document.querySelectorAll(".section-title");

sectionTitles.forEach((title) => {
  gsap.from(title, {
    opacity: 0,
    x: -50,
    duration: 0.3,

    scrollTrigger: {
      trigger: title,
      start: "top 90%",
      end: "top 0%",
      toggleActions: "play reset play reset",
    },
  });
});

// Project Content Scroll Animation
const projectImages = document.querySelectorAll(".project-img");
const projectDescs = document.querySelectorAll(".project-desc");
const aboutItems = document.querySelectorAll(".about-item");

projectImages.forEach((image) => {
  gsap.from(image, {
    y: 50,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
      trigger: image,
      start: "top 100%",
      end: "top -20%",
      toggleActions: "play reset play reset",
    },
  });
});

projectDescs.forEach((desc) => {
  gsap.from(desc, {
    y: -50,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
      trigger: desc,
      start: "top 100%",
      end: "top -20%",
      toggleActions: "play reset play reset",
    },
  });
});

// Contact Form Scroll Animation
aboutItems.forEach((item) => {
  gsap.from(item, {
    x: -50,
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
      trigger: item,
      start: "top 100%",
      end: "top -20%",
      toggleActions: "play reset play reset",
    },
  });
});
