/* =====================================================
   EDIT YOUR CONTENT HERE – the page builds itself from this
   ===================================================== */
const CONFIG = {
  name: "Jaishika Singh",
  email: "jaishika.singh17@gmail.com",           // used by the contact form
  socials: [
    { icon: "fa-brands fa-github",    url: "https://github.com/jaishika-17" },
    { icon: "fa-brands fa-linkedin",  url: "https://linkedin.com/in/jaishika-singh-a44245337" },
    { icon: "fa-brands fa-instagram", url: "https://instagram.com/jaishika_06" },
    { icon: "fa-solid fa-envelope",   url: "mailto:jaishika.singh17@gmail.com" },
  ],
  about: [
    { icon: "fa-regular fa-lightbulb", color: "#6d28d9", title: "Problem Solver",    text: "I enjoy finding creative solutions to real-world problems." },
    { icon: "fa-solid fa-code",        color: "#2563eb", title: "Tech Enthusiast",   text: "Always curious about new technologies and trends." },
    { icon: "fa-solid fa-users",       color: "#0d9488", title: "Team Player",       text: "I value collaboration and diverse perspectives." },
    { icon: "fa-regular fa-star",      color: "#be185d", title: "Goal Oriented",     text: "Focused on building a better version of myself every day." },
  ],
  /* icon can be:
     1) a devicon name        -> "python/python-original"
     2) a Font Awesome icon   -> "fa-solid fa-brain"   (browse: fontawesome.com/icons)
     3) your own image file   -> "mylogo.png"          */
  skills: [
    { name: "Python",     icon: "python/python-original" },
    { name: "Java",       icon: "java/java-original" },
    { name: "HTML",       icon: "html5/html5-original" },
    { name: "CSS",        icon: "css3/css3-original" },
    { name: "JavaScript", icon: "javascript/javascript-original" },
    { name: "C",          icon: "c/c-original" },
    { name: "AI",         icon: "fa-solid fa-brain" },
    { name: "Machine Learning", icon: "fa-solid fa-robot" },
    { name: "MySQL",      icon: "mysql/mysql-original" },
  ],
  projects: [
    { title: "TeachBackAi", emoji: "⚡", image: "", tags: ["python","HTML","CSS","javascript"],
      text: "An AI-powered platform for personalized learning experiences.", url: "https://github.com/jaishika-17/TeachBackAi.git" },
    { title: "Speech to Text (Python)", emoji: "🎙️", image: "", tags: ["Python","NLP","Audio"],
      text: "A simple speech-to-text model built from scratch using Python (no external API).", url:"https://github.com/jaishika-17/Speech-To-Text.git" },
    { title: "Invisible-at-blue-color", emoji: "📈", image: "", tags: ["Python","opencv"],
      text: "a model which predicts visibility of objects at blue color and make it invisible", url:"https://github.com/jaishika-17/Invisible-at-blue-color.git" },
  ],
  experience: [
    { title: "BTech (Ongoing)", sub: "Computer Science & Engineering", date: "2024 – Present" },
    { title: "Projects & Learning", sub: "Building real-world solutions, exploring AI/ML, Web Dev", date: "2024 – Present" },
  ],
  education: [
    { title: "BTech in Computer Science & Engineering", sub: "(Ongoing)" },
  ],
};

/* ================= RENDER ================= */
const $ = (s) => document.querySelector(s);
const socialsHTML = CONFIG.socials.map(s => `<a href="${s.url}" target="_blank" rel="noopener"><i class="${s.icon}"></i></a>`).join("");
$("#heroSocials").innerHTML = socialsHTML;
$("#footSocials").innerHTML = socialsHTML;
$("#copy").textContent = `© ${new Date().getFullYear()} ${CONFIG.name}. All rights reserved.`;

$("#aboutCards").innerHTML = CONFIG.about.map(a => `
  <div class="card"><div class="ico" style="background:${a.color}"><i class="${a.icon}"></i></div>
  <h4>${a.title}</h4><p>${a.text}</p></div>`).join("");

function skillIcon(s) {
  if (s.icon.startsWith("fa-"))   // Font Awesome icon
    return `<i class="${s.icon}" style="font-size:1.6rem;color:#a855f7"></i>`;
  if (s.icon.includes("."))       // your own image file
    return `<img src="${s.icon}" alt="${s.name}">`;
  return `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${s.icon}.svg" alt="${s.name}">`; // devicon
}
$("#skillsList").innerHTML = CONFIG.skills.map(s => `
  <div class="skill"><div class="circle">${skillIcon(s)}</div>${s.name}</div>`).join("");

$("#projectList").innerHTML = CONFIG.projects.map(p => `
  <article class="project">
    <div class="thumb" style="background:linear-gradient(135deg,#1b2350,#3b1d6e)">
      ${p.image ? `<img src="${p.image}" alt="${p.title}">` : p.emoji}</div>
    <h4>${p.title}</h4>
    <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    <p>${p.text}</p>
    <a class="link" href="${p.url}" target="_blank" rel="noopener">View Project <i class="fa-solid fa-arrow-right"></i></a>
  </article>`).join("");

$("#expList").innerHTML = CONFIG.experience.map(e => `
  <li><div class="top"><span>${e.title}</span><small>${e.date}</small></div><p>${e.sub}</p></li>`).join("");

$("#eduList").innerHTML = CONFIG.education.map(e => `
  <div class="edu"><div class="ico"><i class="fa-solid fa-graduation-cap"></i></div>
  <div><b>${e.title}</b><p>${e.sub}</p></div></div>`).join("");

/* ================= BEHAVIOUR ================= */
// mobile menu
$("#burger").onclick = () => $("#menu").classList.toggle("open");
document.querySelectorAll("#menu a").forEach(a => a.onclick = () => $("#menu").classList.remove("open"));

// active nav link + back-to-top
const links = [...document.querySelectorAll("#menu a")];
const sections = links.map(l => document.querySelector(l.getAttribute("href")));
window.addEventListener("scroll", () => {
  const y = window.scrollY + 120;
  sections.forEach((sec, i) => {
    if (sec.offsetTop <= y && sec.offsetTop + sec.offsetHeight > y) {
      links.forEach(l => l.classList.remove("active"));
      links[i].classList.add("active");
    }
  });
  $("#toTop").classList.toggle("show", window.scrollY > 400);
});
$("#toTop").onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// contact form: toggles open, then sends via the visitor's email app
$("#openForm").onclick = () => {
  $("#contactForm").classList.toggle("hidden");
  $("#contactForm").scrollIntoView({ behavior: "smooth", block: "center" });
};
$("#contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
  $("#formStatus").textContent = "Opening your email app…";
});