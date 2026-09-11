// Theme Toggle Logic
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeBtn.textContent = "🌙";
  } else {
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeBtn.textContent = isLight ? "🌙" : "☀️";
  });
}

// Mobile Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Scroll Reveal with Staggering Effect
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
        }, index * 80);
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

// Typewriter Effect
const typedTextSpan = document.querySelector(".typed-text");
const textToType = "Junior .NET Backend Developer";
let charIndex = 0;

if (typedTextSpan) {
  function typeWriter() {
    if (charIndex < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 70);
    }
  }
  setTimeout(typeWriter, 300);
}
