const profile = {
    email: "pragadeeswaran6802@gmail.com",
    contact: "+91 8220309750",
    github: "https://github.com/praga6802",
    linkedin: "https://www.linkedin.com/in/praga06/",
};

const isPlaceholder = (v) => v.startsWith("[");

const architecture = [
    "HTML, CSS & JavaScript",
    "RESTful APIs",
    "Spring Boot",
    "Spring Security",
    "JPA / Hibernate",
    "MySQL",
];

const projects = [
    {
        num: "01",
        title: "Job Portal System",
        description:
            "A full-stack job portal connecting job seekers with companies and job opportunities.",
        features: [
            "JWT Authentication",
            "Job Posting & Management",
            "Job Applications",
            "Role-Based Authorization",
            "RESTful APIs",
            "MySQL Database Integration",
        ],
        visual: [
            "Home",
            "Job Listings",
            "Job Details & Apply",
            "Company Dashboard",
            "Job Posting & Management",
            "Admin Dashboard",
        ],
        github: "https://github.com/praga6802/Job-Portal-System",
        demo: "[ADD LIVE DEMO URL]",
        problem:
            "Job seekers need a centralized platform to discover relevant job opportunities and manage applications, while companies and administrators need efficient tools to manage job postings, applications, and users.",

        solution:
            "Built a full-stack job portal that enables job seekers to browse and apply for jobs, while providing companies and administrators with tools to manage job postings, applications, and users.",

        challenges: [
            "Designing and implementing role-based access control (RBAC)",
            "Managing job posting and application workflows",
            "Implementing secure JWT authentication",
            "Maintaining data consistency across related entities",
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "HTML",
            "CSS",
            "TypeScript",
            "React",
            "TailwindCss",
        ],
    },

    {
        num: "02",
        title: "Travellers Pick",
        description:
            "A full-stack travel platform connecting travelers with tour packages and booking opportunities.",
        features: [
            "Travel Package Management",
            "Tour & Itinerary Management",
            "Tour Booking",
            "Secure Authentication & Authorization",
            "RESTful APIs",
            "Database Integration",
        ],
        visual: [
            "Home",
            "Packages",
            "Tour Details",
            "Booking",
            "Admin Dashboard",
            "User Profile",
        ],
        github: "https://github.com/praga6802/Travellers-Pick",
        demo: "https://travellers-pick-frontend.vercel.app",
        problem:
            "Managing travel packages, tours, itineraries, and bookings across separate processes can be difficult and inefficient. Travelers also need a simple way to explore tours and access detailed travel information.",
        solution:
            "Built a full-stack travel management platform that centralizes packages, tours, itineraries, and bookings in one system. The application provides secure authentication, RESTful APIs, database integration, and an intuitive interface for managing and accessing travel information.",
        challenges: [
            "Designing relationships between packages, tours, itineraries, and bookings.",
            "Implementing secure authentication and authorization.",
            "Building and integrating RESTful APIs with the frontend.",
            "Implementing data validation and meaningful error responses.",
            "Maintaning data consistency across related entities.",
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Bootstrap",
        ],
    },
];

const skills = [
    {
        title: "Frontend",
        icon: "bi-window",
        items: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "TypeScript",
            "Bootstrap",
            "TailwindCss",
        ],
    },
    {
        title: "Backend",
        icon: "bi-server",
        items: [
            "Java",
            "Spring Boot",
            "Spring Security",
            "Hibernate / JPA",
            "REST APIs",
        ],
    },
    {
        title: "Database",
        icon: "bi-database",
        items: ["MySQL", "PostgreSQL"],
    },
    {
        title: "Tools & IDE's",
        icon: "bi-tools",
        items: [
            "Git",
            "GitHub",
            "Maven",
            "Postman",
            "Docker",
            "IntelliJ IDEA",
            "Eclipse",
        ],
    },
];

const tags = (arr) => arr.map((t) => `<span class="tag">${t}</span>`).join("");

// Skills
document.getElementById("skillGrid").innerHTML = skills
    .map(
        (s) => `
  <div class="col-md-6 col-lg-3 reveal"><div class="card-dark p-4 h-100">
    <i class="bi ${s.icon} icon"></i><h5 class="mt-3 mb-3">${s.title}</h5>${tags(s.items)}
  </div></div>`,
    )
    .join("");

// Projects
document.getElementById("projectGrid").innerHTML = projects
    .map(
        (p, i) => `
  <div class="col-lg-6 reveal"><div class="card-dark p-4 h-100 d-flex flex-column">
    <div class="project-visual mb-4">${p.visual.map((v) => `<div><i class="bi bi-grid accent me-1"></i>${v}</div>`).join("")}</div>
    <span class="num">${p.num}</span>
    <h4 class="fw-bold mt-1">${p.title}</h4>
    <p class="text-secondary">${p.description}</p>
    <div class="mb-4">${tags(p.stack)}</div>
    <button class="btn btn-accent mt-auto align-self-start" data-project="${i}">View Project <i class="bi bi-arrow-right"></i></button>
  </div></div>`,
    )
    .join("");

// Project modal
const modal = new bootstrap.Modal(document.getElementById("projectModal"));
const link = (url, label, icon) =>
    isPlaceholder(url)
        ? `<span class="btn btn-outline-secondary disabled"><i class="bi ${icon}"></i> ${label} (coming soon)</span>`
        : `<a class="btn btn-outline-light" href="${url}" target="_blank" rel="noopener"><i class="bi ${icon}"></i> ${label}</a>`;

document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-project]");
    if (!btn) return;
    const p = projects[btn.dataset.project];
    document.getElementById("pmTitle").textContent = p.title;
    document.getElementById("pmBody").innerHTML = `
    <p class="text-secondary">${p.description}</p>
    <h6 class="accent mt-4">Problem</h6><p>${p.problem}</p>
    <h6 class="accent">Solution</h6><p>${p.solution}</p>
    <h6 class="accent">Key Features</h6><ul>${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
    <h6 class="accent">Architecture</h6><ol>${architecture.map((a) => `<li>${a}</li>`).join("")}</ol>
    <h6 class="accent">Tech Stack</h6><div class="mb-3">${tags(p.stack)}</div>
    <h6 class="accent">Challenges</h6><ul>${p.challenges.map((c) => `<li>${c}</li>`).join(" ")}</ul>
    <div class="d-flex flex-wrap gap-2 mt-4">${link(p.github, "GitHub", "bi-github")}${link(p.demo, "Live Demo", "bi-box-arrow-up-right")}</div>`;
    modal.show();
});

// Profile links
document.querySelectorAll("[data-link]").forEach((a) => {
    const key = a.dataset.link;
    const val = profile[key];
    if (isPlaceholder(val)) return;
    if (key === "email") a.href = `mailto:${val}`;
    else {
        a.href = val;
        a.target = "_blank";
        a.rel = "noopener";
    }
});
document.getElementById("emailText").textContent = profile.email;

// Back to top
const toTop = document.getElementById("toTop");
window.addEventListener(
    "scroll",
    () => toTop.classList.toggle("show", window.scrollY > 600),
    { passive: true },
);

// Close mobile menu after clicking a link
document.querySelectorAll("#menu .nav-link").forEach((l) =>
    l.addEventListener("click", () => {
        const menu = document.getElementById("menu");
        if (menu.classList.contains("show"))
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }),
);

// Reveal on scroll
const io = new IntersectionObserver(
    (entries) =>
        entries.forEach((en) => {
            if (en.isIntersecting) {
                en.target.classList.add("visible");
                io.unobserve(en.target);
            }
        }),
    { threshold: 0.1 },
);
document.querySelectorAll(".section, .reveal").forEach((el) => {
    el.classList.add("reveal");
    io.observe(el);
});

// Terminal typing delays
document
    .querySelectorAll(".terminal-body p")
    .forEach((p, i) => (p.style.animationDelay = `${0.3 + i * 0.25}s`));

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const note = document.getElementById("formNote");
    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }
    if (isPlaceholder(profile.email)) {
        note.textContent =
            "Email address not set up yet. Please reach out via LinkedIn.";
        return;
    }
    const subject = encodeURIComponent(
        `Portfolio message from ${form.name.value}`,
    );
    const body = encodeURIComponent(
        `${form.message.value}\n\nFrom: ${form.name.value} (${form.email.value})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    note.textContent = "Opening your email app…";
});

document.getElementById("year").textContent = new Date().getFullYear();
