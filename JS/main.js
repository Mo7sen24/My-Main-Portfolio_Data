// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

// 1. Scroll Progress Bar
window.addEventListener("scroll", () => {
  const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  const progressEl = document.getElementById("scrollProgress");
  if (progressEl) progressEl.style.width = scrolled + "%";
});

// 2. Active Link on Scroll (Scrollspy) - مُعدّل ومحسّن 100%
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-item");

function activateNavLink() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    // 150px offset لحساب ارتفاع الناف بار المباشر والتأكد من التنقل السلس
    const sectionTop = current.offsetTop - 150; 
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach((item) => {
        item.classList.remove("active");
        if (item.getAttribute("href") === `#${sectionId}`) {
          item.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", activateNavLink);
window.addEventListener("load", activateNavLink);

// 3. Hero Section Animation
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

// 4. Section Title Animation
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

// 5. Container Scroll Reveal
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

// 6. Theme Toggle Logic
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

// 7. Typewriter Effect
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

// 8. Mobile Sidebar Toggle Logic
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function openSidebar() {
  navLinks?.classList.add("active");
  navOverlay?.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeSidebar() {
  navLinks?.classList.remove("active");
  navOverlay?.classList.remove("active");
  document.body.style.overflow = "auto";
}

menuBtn?.addEventListener("click", openSidebar);
closeBtn?.addEventListener("click", closeSidebar);
navOverlay?.addEventListener("click", closeSidebar);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeSidebar);
});
