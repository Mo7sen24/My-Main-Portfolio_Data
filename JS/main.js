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

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item, .cert-card")
.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Active nav
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const height = section.clientHeight;

    if (pageYOffset >= top && pageYOffset < top + height) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// navbar shadow
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// typewriter
const heroTitle = document.querySelector(".hero h2");
const text = "Junior Data Engineer";
let index = 0;

if (heroTitle) {
  heroTitle.textContent = "";

  function typeWriter() {
    if (index < text.length) {
      heroTitle.textContent += text[index++];
      setTimeout(typeWriter, 80);
    }
  }

  typeWriter();
}
