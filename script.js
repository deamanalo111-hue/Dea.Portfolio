function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  document.getElementById("datetime").innerHTML =
    `${hours}:${minutes} ${ampm}<br>${now.toLocaleDateString()}`;
}
updateTime();
setInterval(updateTime, 1000);


// ------------------------------
//  nav buttons
// ------------------------------
document.getElementById("homeBtn").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("profileBtn").addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("stackBtn").addEventListener("click", () => {
  document.getElementById("Stack").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("projBtn").addEventListener("click", () => {
  document.getElementById("Project").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("certBtn").addEventListener("click", () => {
  document.getElementById("Cert").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("orgBtn").addEventListener("click", () => {
  document.getElementById("Org").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("webBtn").addEventListener("click", () => {
  document.getElementById("Web").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("hireBtn").addEventListener("click", () => {
  document.getElementById("Hire").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("HireBtn").addEventListener("click", () => {
  document.getElementById("Hire").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("ProjBtn").addEventListener("click", () => {
  document.getElementById("Project").scrollIntoView({ behavior: "smooth" });
});

//  FIXED HAMBURGER 
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  // Open/Close menu
  navMenu.classList.toggle('nav-open');

  // Toggle icon: hamburger <-> X (close)
  const icon = navToggle.querySelector('i');
  if(navMenu.classList.contains('nav-open')) {
    icon.classList.replace('fa-bars', 'fa-times');
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
  }
});




// Auto-close menu 
document.querySelectorAll('#navMenu li').forEach(navItem => {
  navItem.addEventListener('click', () => {
    navMenu.classList.remove('nav-open');
    navToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
  });
});

// tagline

const text = "Crafting beautiful interfaces that users love.";
const speed = 75;

let index = 0;
let typingTimeout;

function typeEffect() {
  const element = document.getElementById("typing-text");

  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    typingTimeout = setTimeout(typeEffect, speed);
  }
}

function resetTyping() {
  const element = document.getElementById("typing-text");

  clearTimeout(typingTimeout); // stop previous animation
  element.textContent = "";    // clear text
  index = 0;
  typeEffect();               // restart typing
}

//  HOME SECTION
const homeSection = document.getElementById("home");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      resetTyping();
    }
  });
}, {
  threshold: 0.6
});

observer.observe(homeSection);


