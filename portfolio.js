const links = document.querySelector(".nav-links");
const homeLeft = document.querySelector(".left");
const skillLink = document.querySelector(".aside");
const skills = document.querySelector(".right");

//reveal sections

const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const observer = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  observer.observe(section);
  section.classList.add("section--hidden");
});

const smoothBehavior = function (cls, e) {
  if (e.target.classList.contains(cls)) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

//Event Handlers
skillLink.addEventListener("click", (e) => {
  e.preventDefault();
  smoothBehavior("skill-link", e);
});

links.addEventListener("click", (e) => {
  e.preventDefault();

  smoothBehavior("links", e);
});
