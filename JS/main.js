const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {
  document.body.classList.toggle("dark");
};

// ===== TYPEWRITER =====
const title = document.querySelector(".hero h2");
const text = "Junior Data Engineer";
let i = 0;

function type(){
  if(i < text.length){
    title.textContent += text[i];
    i++;
    setTimeout(type, 80);
  }
}
title.textContent = "";
type();

// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll(".project-card, .skill-card, .section");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add("show");
    }
  });
});

elements.forEach(el=>{
  el.classList.add("hidden");
  observer.observe(el);
});
