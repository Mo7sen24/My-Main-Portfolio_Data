// Theme toggle logic
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeBtn.textContent = "🌙";
    }
  });
}

// Mobile Navigation Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");

if (menuToggle && navLinksContainer) {
  menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("open");
    });
  });
}

// Scroll reveal observer with dynamic staggering delay
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 100);
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".section, .project-card, .skill-card, .timeline-item, .contact-box")
  .forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
  });

// Active Navbar Highlight on Scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let currentSectionId = "";

  sections.forEach((section) => {
    const top = section.offsetTop - 150;
    const height = section.clientHeight;

    if (window.scrollY >= top && window.scrollY < top + height) {
      currentSectionId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSectionId}`) {
      link.classList.add("active");
    }
  });
});

// Dynamic Navbar Shadow on Scroll
const navbar = document.querySelector(".navbar");

if (navbar) {
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  });
}

// Hero Typewriter Effect
const heroTitle = document.querySelector(".hero h2");
const textToType = "Junior .NET Backend Developer";
let index = 0;

if (heroTitle) {
  heroTitle.textContent = "";

  function typeWriter() {
    if (index < textToType.length) {
      heroTitle.textContent += textToType[index++];
      setTimeout(typeWriter, 80);
    }
  }

  typeWriter();
}
