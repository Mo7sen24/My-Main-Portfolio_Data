// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressEl = document.getElementById("scrollProgress");
  if (progressEl) progressEl.style.width = scrolled + "%";
});

// 2. Hero Section Animations
gsap.from(".hero h1", {
  duration: 1,
  y: 40,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".hero p, .hero-buttons", {
  duration: 0.8,
  y: 30,
  opacity: 0,
  stagger: 0.15,
  ease: "power3.out",
  delay: 0.3
});

// 3. Section Titles Scroll Animation
gsap.utils.toArray(".section h2").forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 85%",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });
});

// 4. Clean Container Animation (بيحرك الكروت مع بعض بدون ما يلغبط موقعهم)
gsap.utils.toArray(".skills-grid, .projects-grid, .timeline, .contact-card").forEach((container) => {
  gsap.from(container, {
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    ease: "power3.out"
  });
});

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
// Mobile Sidebar Toggle Logic
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function openSidebar() {
  navLinks?.classList.add("active");
  navOverlay?.classList.add("active");
  document.body.style.overflow = "hidden"; // منع السكرول أثناء فتح القائمة
}

function closeSidebar() {
  navLinks?.classList.remove("active");
  navOverlay?.classList.remove("active");
  document.body.style.overflow = "auto";
}

menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
navOverlay?.addEventListener("click", closeSidebar);

// غلق القائمة تلقائياً عند الضغط على أي لينك
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});

