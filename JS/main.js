// Dynamic Theme Toggle
const themeBtn = document.getElementById("themeToggle");

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    const isLight = document.body.classList.contains("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    themeBtn.textContent = isLight ? "🌙" : "☀️";
  });
}

// Staggered Scroll Observer
const observerOptions = {
  threshold: 0.15
};

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("show");
      }, index * 80); // Staggering effect
    }
  });
}, observerOptions);

document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item").forEach((el) => {
  el.classList.add("hidden");
  scrollObserver.observe(el);
});

// Typewriter Effect with Blinking Cursor
const heroTitle = document.querySelector(".hero h2");
const textToType = "Junior .NET Backend Developer";
let charIndex = 0;

if (heroTitle) {
  heroTitle.innerHTML = '<span class="typed-text"></span><span class="typing-cursor"></span>';
  const typedTextSpan = heroTitle.querySelector(".typed-text");

  function typeWriter() {
    if (charIndex < textToType.length) {
      typedTextSpan.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 70);
    }
  }
  
  setTimeout(typeWriter, 500);
}
