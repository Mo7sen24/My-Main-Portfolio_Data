// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Progress Indicator
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("scrollProgress").style.width = scrolled + "%";
});

// 2. Hero Section Animations
gsap.from(".hero h1", {
  duration: 1.2,
  y: 50,
  opacity: 0,
  ease: "power4.out",
  delay: 0.2
});

gsap.from(".hero p, .hero-buttons", {
  duration: 1,
  y: 30,
  opacity: 0,
  stagger: 0.2,
  ease: "power3.out",
  delay: 0.6
});

// 3. Section Titles Scroll Animation
gsap.utils.toArray(".section h2").forEach((heading) => {
  gsap.from(heading, {
    scrollTrigger: {
      trigger: heading,
      start: "top 85%",
      toggleActions: "play none none reverse"
    },
    duration: 0.8,
    y: 30,
    opacity: 0,
    scale: 0.95,
    ease: "back.out(1.7)"
  });
});

// 4. Staggered Grid Reveal (Cards & Timeline)
const animateGrid = (selector) => {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector[0]?.parentElement || selector,
      start: "top 85%",
    },
    duration: 0.8,
    y: 40,
    opacity: 0,
    stagger: 0.15,
    ease: "power3.out",
    clearProps: "transform" // السطر ده بيمسح أي تحريك بعد ما الانيميشن يخلص عشان الـ CSS يشتغل طبيعي
  });
};

animateGrid(document.querySelectorAll(".skill-card"));
animateGrid(document.querySelectorAll(".project-card"));
animateGrid(document.querySelectorAll(".timeline-item"));
animateGrid(document.querySelectorAll(".contact-box"));

// 5. About Image parallax & Fade-in
gsap.from(".about-image-wrapper", {
  scrollTrigger: {
    trigger: ".about-container",
    start: "top 75%",
  },
  duration: 1.2,
  scale: 0.8,
  opacity: 0,
  rotation: -5,
  ease: "power3.out"
});

// 6. Interactive 3D Parallax Tilt on Cards (Mouse movement)
document.querySelectorAll(".skill-card, .project-card, .contact-box").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
  });
  
  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
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
