/* ================== SCROLL REVEAL ================== */
const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );
  
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
  
    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 120;
  
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
  
  /* ================== NAVBAR SHADOW ================== */
  const navbar = document.querySelector(".navbar");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  /* ================== ACTIVE NAV LINK ================== */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");
  
  function activateNavLink() {
    let currentSection = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
  
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  }
  
  window.addEventListener("scroll", activateNavLink);
  
  /* ================== MOBILE MENU ================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-links");
  
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
  }
  
  /* Close menu when clicking link (mobile) */
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
  
  /* ================== DARK MODE ================== */
  const themeBtn = document.querySelector(".theme-btn");
  
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
  
      // حفظ الوضع
      if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }
  
  /* Load saved theme */
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
  
  /* ================== COPY EMAIL ================== */
  const copyBtn = document.querySelector(".copy-btn");
  const emailText = document.querySelector(".email-text");
  const tooltip = document.querySelector(".copy-tooltip");
  
  if (copyBtn && emailText) {
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(emailText.textContent.trim());
  
      if (tooltip) {
        tooltip.style.display = "block";
        setTimeout(() => {
          tooltip.style.display = "none";
        }, 1500);
      }
    });
  }
  