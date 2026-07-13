const projectData = {
  "nokia-observability": {
    title: "AI Pipeline Observability", eyebrow: "Nokia · Sanitized internship case study", kind: "case-study", status: "In progress", period: "Summer 2026",
    summary: "A reusable, OpenTelemetry-ready visibility layer for understanding where multi-stage AI workflows slow down, fail, or stop making progress.",
    metrics: ["15+ lifecycle states", "10+ health signals", "30-second failure visibility"], tech: ["Python", "OpenTelemetry", "Backend systems", "Observability"],
    sections: [
      ["Overview", "Multi-service AI workflows can fail across boundaries without making it obvious where processing stopped. I designed a shared observability approach that records lifecycle transitions, correlates health signals, and prepares application events for portable traces and metrics."],
      ["The visibility problem", "Service-local records could describe isolated activity, but not the path of one workflow from entry to completion. Progress needed a consistent language across services, and stalled work needed to be distinguishable from slow work."],
      ["What I designed", "A reusable lifecycle model and instrumentation layer for stage transitions, timing, failures, retries, and operational health. The public view intentionally abstracts internal names, endpoints, schemas, and company architecture."],
      ["Failure detection", "Timestamps, heartbeats, retry markers, error signals, and stage-duration checks make unhealthy or stalled workflows visible without exposing proprietary implementation details."],
      ["Impact & learnings", "The framework turns scattered application signals into a production-triage story while keeping telemetry OpenTelemetry-compatible and backend-independent."]
    ]
  },
  routewise: {
    title: "RouteWise", eyebrow: "Cost-aware LLM routing gateway", kind: "personal", status: "Completed", period: "Sep - Dec 2025",
    summary: "Routes each request to the least expensive model that can answer it well, with semantic caching, compression, evaluation, and quality-based fallback.",
    metrics: ["10K+ requests", "52% lower inference cost", "41% fewer prompt tokens", "90%+ quality"], tech: ["Python", "FastAPI", "LiteLLM", "Redis", "PostgreSQL"],
    sections: [
      ["Overview", "RouteWise treats model choice as an engineering decision instead of a default. Requests move through cache lookup, prompt analysis, compression, dynamic routing, and quality evaluation."],
      ["Architecture", "Request → semantic cache → prompt analysis → compression → model router → quality evaluator → return or escalate. Cache hits avoid new inference; failed evaluations retry with a stronger route."],
      ["How it works", "Straightforward prompts use smaller models. Ambiguous or demanding prompts move upward. Responses that miss quality thresholds automatically retry with a stronger model."],
      ["Hard parts", "The difficult part was not choosing a cheap model; it was defining when cheap stopped being good enough and making fallback behavior measurable rather than hopeful."],
      ["Results", "Across more than 10,000 routed requests, the gateway reduced inference cost and prompt volume while preserving the answer-quality target reported in my résumé."]
    ]
  },
  "unix-shell": {
    title: "Custom Unix Shell", eyebrow: "Systems programming · C/C++", kind: "personal", status: "Completed", period: "Mar - Jul 2026",
    summary: "A Unix-style shell built with Flex, Bison, and POSIX APIs to make process creation, pipes, signals, redirection, and job control tangible.",
    metrics: ["15+ shell features", "10+ POSIX calls", "6+ redirection modes", "96%+ tests"], tech: ["C", "C++", "POSIX", "Flex", "Bison", "GDB", "Valgrind"],
    sections: [
      ["Overview", "Commands move from tokenization and parsing into a command table, then through built-ins or fork/exec, pipes, redirects, background jobs, process groups, and exit handling."],
      ["Architecture", "Input → Flex tokenizer → Bison parser → command table → built-in or fork/exec → pipes, redirects, background jobs → process groups and signals."],
      ["How it works", "The shell creates a process for each pipeline stage, wires file descriptors with dup2(), closes every unused pipe end, and keeps foreground signals separate from the shell itself."],
      ["Hard parts", "File descriptors are invisible until one stays open. Signal behavior is simple until a foreground child, background job, and shell all believe Ctrl+C belongs to them."],
      ["Results", "Implemented multi-command pipelines, signal-safe foreground/background control, history, expansion, and redirection; validated with GDB, Valgrind, and the test suite."]
    ]
  },
  "rag-reliability": {
    title: "RAG Reliability Evaluation", eyebrow: "Artificial intelligence research · Purdue", kind: "research", status: "Completed", period: "Aug - Dec 2025",
    summary: "An experimental framework for measuring retrieval precision, answer faithfulness, citation reliability, and hallucination across RAG configurations.",
    metrics: ["4,800 responses", "1,200 QA pairs", "0.61 → 0.84 precision", "70% less manual QA"], tech: ["RAG", "Evaluation", "Embeddings", "Reranking", "Python"],
    sections: [
      ["Research question", "Which combinations of chunking, retrieval, reranking, and prompting produce answers that are not only relevant, but faithful and correctly cited?"],
      ["Methodology", "I varied chunk size, overlap, embedding models, top-k retrieval, reranking strategy, prompt format, and citation requirements across a controlled QA set."],
      ["Experimental pipeline", "Documents → chunking → embeddings → vector index → retrieval → optional reranking → prompt construction → generation → precision, faithfulness, citation, and hallucination evaluation."],
      ["Results", "The best configurations improved context precision from 0.61 to 0.84 and reduced manual QA review time by 70% across 4,800 generated responses."],
      ["What I learned", "Retrieval quality and answer quality are related, not interchangeable. A confident answer can still be unsupported, and a relevant passage can still be used incorrectly."]
    ]
  },
  "hazard-detection": {
    title: "Real-Time Hazard Detection", eyebrow: "Machine learning research · Purdue", kind: "research", status: "Completed", period: "Jan - Apr 2025",
    summary: "A reliability-aware hazard pipeline combining model confidence with signal validity, zone criticality, and device health.",
    metrics: ["15K+ events/hour", "<2s p95", "0.89 hazard F1", "32% fewer false alerts"], tech: ["Machine learning", "IoT", "Anomaly detection", "Reliability"],
    sections: [["Research question", "How should a real-time hazard system behave when the sensor reporting danger may itself be unreliable?"], ["Methodology", "Combined classifier and anomaly outputs with confidence scoring, signal validation, location criticality, and device-health context."], ["Results", "Reached 0.89 hazard F1 under two-second p95 latency, cut false alerts by 32%, and improved visibility into sensor reliability by 40%."], ["What I learned", "An anomaly is not automatically a hazard. Reliable decisions require evidence about both the environment and the instrument observing it."]]
  },
  "robotic-arm": {
    title: "Robotic Arm Planning & Control", eyebrow: "Undergraduate research · Purdue", kind: "research", status: "Completed", period: "Aug - Dec 2024",
    summary: "Motion planning, inverse kinematics, and PID control combined into an autonomous pick-and-place trajectory pipeline.",
    metrics: ["95%+ successful trials", "Reduced oscillation", "Planning → control pipeline"], tech: ["RRT*", "Inverse kinematics", "PID control", "Robotics"],
    sections: [["Research question", "How can a robot move from a valid planned path to stable physical execution without losing the intent of the plan?"], ["Experimental pipeline", "Start and goal pose → RRT* → waypoints → inverse kinematics → joint targets → PID control → execution → trajectory analysis and retuning."], ["Results", "Reduced oscillation and achieved more than 95% successful pick-and-place trajectories in the reported trials."], ["What I learned", "Planning asks where the arm should go, kinematics asks what joint angles can reach it, and control decides whether the physical system gets there gracefully."]]
  },
  safedesk: {
    title: "SafeDesk", eyebrow: "AI agent security desktop", kind: "current", status: "Architecture & development", period: "Currently building",
    summary: "A controlled desktop where AI agents can be useful without receiving unrestricted access to files, browsers, email, code, or your afternoon.",
    metrics: [], tech: ["AI agents", "Security", "Policy engines", "Sandboxing"],
    sections: [["Overview", "Enough access to be useful, but not enough access to ruin your afternoon."], ["Architecture", "User intent → agent planner → policy engine → sandboxed desktop → tool gateway → checkpoint and audit layer."], ["How it works", "Every proposed action passes through policy and scope checks before touching a tool. Sensitive operations can pause for approval, while checkpoints make behavior inspectable and recoverable."], ["Hard parts", "Useful agents need context and capability; safe agents need boundaries. The design problem is granting exactly enough of both without trusting the model to police itself."], ["What comes next", "Build the minimum sandbox, tool gateway, and audit trail first; then expand to hostile test environments and structured adversarial evaluation."]]
  },
  shivanyaos: {
    title: "ShivanyaOS", eyebrow: "Interactive personal portfolio", kind: "current", status: "Currently building", period: "Now",
    summary: "The operating system you are currently exploring: professional information in 30 seconds, personality and technical depth whenever curiosity wins.",
    metrics: [], tech: ["TypeScript", "Interface systems", "Accessibility", "Storytelling"],
    sections: [["Overview", "Not a website pretending to be an operating system—an operating system built around my career, projects, research, and current goals."], ["Architecture", "A responsive desktop shell, app registry, window manager, project templates, recruiter-first navigation, and direct résumé/contact paths."], ["Hard parts", "The interface must be playful without turning essential information into a scavenger hunt."], ["What comes next", "Route-backed windows, polished project diagrams, hard-won engineering notes, and careful motion that respects reduced-motion preferences."]]
  }
};

const experience = [
  { slug:"nokia-observability", title:"Nokia", sub:"AI pipeline observability · sanitized case study", kind:"case-study", date:"Summer 2026" },
  { slug:"genpact", title:"Genpact Workflow Systems", sub:"Spring/Kafka · 120K+ events", kind:"experience", date:"Summer 2025" },
  { slug:"hhs", title:"Health & Human Sciences", sub:"Study and grading workflow automation", kind:"experience", date:"2024 - 2026" },
  { slug:"teaching", title:"CS 180 Teaching Assistant", sub:"Java, OOP, debugging, teaching", kind:"experience", date:"2024 - 2026" }
];
const archive = [
  {slug:"applywise",title:"ApplyWise",sub:"AI college matching platform",kind:"archive",date:"Earlier build"},
  {slug:"college-apps",title:"Navigating College Applications",sub:"The project before the project became intelligent",kind:"archive",date:"v1"},
  {slug:"trainher",title:"TrainHer",sub:"Camera-assisted self-defense training · 2nd place",kind:"archive",date:"Hackathon"},
  {slug:"boilerfind",title:"BoilerFind",sub:"Purdue mentor matching",kind:"archive",date:"Earlier build"},
  {slug:"marketlearn",title:"MarketLearn",sub:"Earlier product experiment",kind:"archive",date:"Earlier build"}
];

const titles = { about:"About This Shivanya", finder:"Finder", activity:"Activity Monitor", notes:"Eventually, This Made Sense", terminal:"Terminal", resume:"Shivanya_SWE.pdf", mail:"Mail Shivanya" };
const sizes = { about:[700,560], finder:[940,650], activity:[760,570], notes:[760,600], terminal:[720,500], resume:[820,700], mail:[720,600] };
const appIcons = { about:"SC", finder:"⌁", activity:"⌁", notes:"≡", terminal:">_", resume:"PDF", mail:"↗" };
let z = 5;
let activeWindow = null;
let finderSection = "Featured";
const windows = document.getElementById("windows");
const toast = document.getElementById("toast");

const card = (item) => `<button data-project="${item.slug}" class="project-card"><div class="folder-art kind-${item.kind}"><span>${item.kind === "research" ? "∿" : item.kind === "case-study" ? "◎" : item.kind === "current" ? "◌" : item.kind === "experience" ? "▣" : item.kind === "archive" ? "⌂" : "↗"}</span><i>${item.kind === "case-study" ? "SANITIZED" : (item.status || item.date).toUpperCase()}</i></div><div class="project-card-copy"><h3>${item.title}</h3><p>${item.sub || item.eyebrow}</p><small>${item.date || item.period}</small></div></button>`;

function aboutTemplate() {
  return `<div class="about-app"><div class="about-hero"><div class="portrait-mark"><span>SC</span><i>operational</i></div><div><p class="eyebrow">Hello, I’m</p><h1>Shivanya Chandra<span>.</span></h1><p class="role-line">Computer Science + Artificial Intelligence at Purdue</p><p class="about-lede">I build backend and AI systems, then make their behavior easier to inspect, debug, and trust.</p><div class="hero-actions"><button class="primary-button" data-open="finder">View projects <span>↗</span></button><a class="secondary-button" href="../../public/Shivanya_Resume.pdf" download>Download résumé <span>↓</span></a><button class="text-button" data-open="mail">Contact me</button></div></div></div><div class="about-grid"><section><p class="section-kicker">SYSTEM INFORMATION</p><dl class="system-list"><div><dt>Current status</dt><dd><span class="status-dot"></span>Operational</dd></div><div><dt>Current location</dt><dd>Purdue University</dd></div><div><dt>Primary interests</dt><dd>Backend · AI systems · Developer tools</dd></div><div><dt>Side processes</dt><dd>Boxing · Dance · Gym</dd></div></dl></section><section class="witty-specs"><p class="section-kicker">HARDWARE, ALLEGEDLY</p><dl><div><dt>Processor</dt><dd>Curiosity-driven</dd></div><div><dt>Open tabs</dt><dd>Unreasonable</dd></div><div><dt>Retry policy</dt><dd>Persistent</dd></div><div><dt>Current branch</dt><dd>building-better-systems</dd></div></dl></section></div><footer class="about-footer"><span>Available for Summer 2027 opportunities</span><span>Version 2027.0</span></footer></div>`;
}

function finderItems(section) {
  if (section === "Featured") return ["nokia-observability","routewise","unix-shell","rag-reliability"].map(slug => ({slug,...projectData[slug],sub:projectData[slug].eyebrow,date:projectData[slug].period}));
  if (section === "Currently Building") return ["safedesk","shivanyaos"].map(slug => ({slug,...projectData[slug],sub:projectData[slug].eyebrow,date:projectData[slug].period}));
  if (section === "Research Lab") return ["rag-reliability","hazard-detection","robotic-arm"].map(slug => ({slug,...projectData[slug],sub:projectData[slug].eyebrow,date:projectData[slug].period}));
  if (section === "Experience") return experience;
  return archive;
}

function finderTemplate() {
  const intro = finderSection === "Featured" ? `<div class="finder-intro"><span>CURATED</span><p>Résumé-verified work that best represents the systems, AI, and research problems I like solving.</p></div>` : finderSection === "Currently Building" ? `<div class="finder-intro coral-intro"><span>IN MOTION</span><p>Transparent works in progress—not presented as completed résumé projects.</p></div>` : finderSection === "Archive" ? `<div class="finder-intro yellow-intro"><span>VERSION HISTORY</span><p>Retired, not forgotten. Earlier builds that explain where the current work came from.</p></div>` : "";
  return `<div class="finder-app"><aside class="finder-sidebar"><div class="sidebar-title"><span class="drive-icon">S</span><div><strong>Shivanya HD</strong><small>Career drive · 2027</small></div></div><p>FAVORITES</p>${["Featured","Currently Building","Experience","Research Lab","Archive"].map((name,i)=>`<button data-section="${name}" class="${finderSection===name?"selected":""}"><span>${["★","◌","▣","∿","⌂"][i]}</span>${name}<em>${[4,2,4,3,5][i]}</em></button>`).join("")}<p>CATEGORIES</p><div class="tag-cloud"><span>AI systems</span><span>Backend</span><span>Research</span><span>Systems</span></div><div class="storage-meter"><div><span>Curiosity used</span><b>84%</b></div><i><em></em></i></div></aside><section class="finder-content"><header><div><p class="eyebrow">SHIVANYA HD /</p><h2>${finderSection}</h2></div><div class="view-toggle"><button class="active">▦</button><button>☰</button></div></header>${intro}<div class="preview-project-list">${finderItems(finderSection).map(card).join("")}</div></section></div>`;
}

function activityTemplate() {
  const processes = [["Nokia Observability Framework",35,"Running","nokia-observability"],["SafeDesk",25,"In Development","safedesk"],["ShivanyaOS",19,"Running","shivanyaos"],["Touching Grass",12,"Scheduled",null],["GitHub Cleanup",8,"Running",null],["Sleep",1,"Not Responding",null]];
  const goals = [["Nokia observability framework",76],["SafeDesk foundation",43],["ShivanyaOS",64],["GitHub profile cleanup",52],["Touching grass protocol",61],["Reasonable sleep schedule",20]];
  return `<div class="activity-app"><header class="app-header"><div><p class="eyebrow">SYSTEM LOAD · EMOTIONALLY CALIBRATED</p><h2>Active processes</h2></div><div class="live-pill"><span></span>updated manually</div></header><div class="process-table"><div class="process-head"><span>PROCESS NAME</span><span>% CPU</span><span>STATUS</span></div>${processes.map(p=>`<button ${p[3]?`data-project="${p[3]}"`:"disabled"}><span><i class="${p[2]==="Not Responding"?"red":p[2]==="Scheduled"?"yellow":"green"}"></i>${p[0]}</span><b>${p[1]}%</b><em>${p[2]}</em></button>`).join("")}</div><div class="activity-lower"><section><p class="section-kicker">CURRENT GOALS</p>${goals.map(g=>`<div class="goal"><div><span>${g[0]}</span><b>${g[1]}%</b></div><i><em style="width:${g[1]}%"></em></i></div>`).join("")}</section><section class="touching-grass"><p class="section-kicker">TOUCHING GRASS SUBPROCESSES</p><div><span>boxing.service</span><b>Active</b></div><div><span>dance.service</span><b>Runs Sundays</b></div><div><span>calisthenics.service</span><b>Warming up</b></div><div><span>gym.service</span><b>Persistent</b></div><p>Progress values are approximate and emotionally calibrated.</p></section></div></div>`;
}

function notesTemplate() {
  const notes=["Why Every Changing Variable Belongs in a Cache Key","How Dynamic Programming Grids Actually Store Decisions","Why Shell Pipelines Keep Leaking File Descriptors","What an OpenTelemetry SDK Actually Emits","Logs vs. Metrics vs. Traces Without the Marketing Language","Why the ‘Buying’ Boolean Means Permission, Not an Action","Why Sliding Windows Expand and Then Suddenly Panic","How Goal-Post Greedy Algorithms Work"];
  return `<div class="notes-app"><header><div class="notes-mark">✦</div><p class="eyebrow">HARD-WON MENTAL MODELS</p><h2>Eventually, This Made Sense</h2><p>Things that took an unreasonable number of diagrams, wrong turns, and staring at the same line of code.</p></header><div class="notes-layout"><aside><p>COLLECTIONS</p><button class="selected">All breakthroughs <span>8</span></button><button>Systems <span>3</span></button><button>AI & ML <span>2</span></button><button>Algorithms <span>3</span></button></aside><section>${notes.map((n,i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><div><h3>${n}</h3><p>${i%2?"A visual walkthrough with fewer heroic leaps":"What confused me · the wrong model · the version that finally clicked"}</p></div><i>↗</i></article>`).join("")}</section></div></div>`;
}

function terminalTemplate() {
  return `<div class="terminal-app"><div class="terminal-top"><span>shivanya@portfolio</span><span>zsh · 80×24</span></div><div class="terminal-output" id="terminal-output"><p>ShivanyaOS Terminal · type ‘help’ to begin.</p></div><form id="terminal-form"><label for="terminal-command">shivanya@ShivanyaOS ~ %</label><input id="terminal-command" autocomplete="off" spellcheck="false"></form></div>`;
}

function resumeTemplate() {
  return `<div class="resume-app"><div class="resume-toolbar"><div><span class="pdf-badge">PDF</span><div><strong>Shivanya_SWE.pdf</strong><small>1 page · Updated July 2026</small></div></div><div><a href="../../public/Shivanya_Resume.pdf" target="_blank">Open full screen</a><a class="primary-button" href="../../public/Shivanya_Resume.pdf" download>Download ↓</a></div></div><iframe src="../../public/Shivanya_Resume.pdf#view=FitH" title="Shivanya Chandra résumé preview"></iframe><div class="resume-fallback">Can’t see the preview? <a href="../../public/Shivanya_Resume.pdf" target="_blank">Open the résumé directly.</a></div></div>`;
}

function mailTemplate() {
  return `<div class="mail-app"><div class="contact-card"><p class="eyebrow">DIRECT CONNECTIONS</p><h2>Let’s build something<br>that explains itself.</h2><p>No form required. The direct routes are always visible.</p><a href="mailto:shivanyachandra01@gmail.com"><span>@</span><div><small>EMAIL</small><strong>shivanyachandra01@gmail.com</strong></div></a><a href="https://github.com/shivanya-chandra" target="_blank"><span>GH</span><div><small>GITHUB</small><strong>shivanya-chandra</strong></div></a><a href="https://linkedin.com/in/shivanya-chandra" target="_blank"><span>in</span><div><small>LINKEDIN</small><strong>/in/shivanya-chandra</strong></div></a></div><form id="mail-form"><div class="compose-row"><span>To:</span><strong>Shivanya Chandra</strong></div><label>Your name<input required id="mail-name" placeholder="Jane Recruiter"></label><label>Email<input type="email" id="mail-email" placeholder="jane@company.com"></label><label>Subject<select id="mail-subject"><option>Internship opportunity</option><option>Project collaboration</option><option>Technical conversation</option><option>Something interesting</option></select></label><label>Message<textarea required id="mail-message" placeholder="Tell me what’s on your mind…"></textarea></label><button class="primary-button" type="submit">Open in mail app ↗</button></form></div>`;
}

function projectTemplate(project, slug) {
  const sections=project.sections.map((s,i)=>`<button data-tab="${i}" class="${i===0?"selected":""}">${s[0]}</button>`).join("");
  return `<div class="project-app" data-project-view="${slug}"><header class="project-hero kind-${project.kind}"><div class="project-hero-copy"><div class="project-breadcrumb">SHIVANYA HD / ${project.kind.replace("-"," ").toUpperCase()}</div><p>${project.eyebrow}</p><h1>${project.title}</h1><p class="project-summary">${project.summary}</p><div class="project-meta"><span><small>STATUS</small><b>${project.status}</b></span><span><small>PERIOD</small><b>${project.period}</b></span><span><small>TYPE</small><b>${project.kind.replace("-"," ")}</b></span></div></div><div class="project-system-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span>${project.kind==="research"?"∿":project.kind==="case-study"?"◎":project.kind==="current"?"◌":"↗"}</span><small>${project.kind==="case-study"?"PUBLIC-SAFE VIEW":"SYSTEM VIEW"}</small></div></header>${project.metrics.length?`<div class="metrics-strip">${project.metrics.map(m=>`<span>${m}</span>`).join("")}</div>`:""}<nav class="preview-tabs">${sections}</nav><section class="project-section"><div class="section-number">01</div><div class="project-section-copy"><p class="section-kicker">${project.sections[0][0].toUpperCase()}</p><h2>${project.sections[0][0]}</h2><p>${project.sections[0][1]}</p><div class="tech-row">${project.tech.map(t=>`<span>${t}</span>`).join("")}</div>${project.kind==="case-study"?`<div class="sanitized-note"><strong>Sanitized by design.</strong>This case study discusses the engineering problem and my design contribution without publishing internal repositories, endpoints, schemas, customer names, code, or proprietary architecture.</div>`:""}</div></section></div>`;
}

function archiveProjectTemplate(item) {
  const project={title:item.title,eyebrow:item.sub,kind:"archive",status:item.title==="TrainHer"?"2nd place hackathon project":"Retired, not forgotten",period:item.date,summary:item.title==="ApplyWise"?"Personalized college rankings using academic, financial, essay, and preference-based signals.":item.title==="TrainHer"?"Guided drills, tutorials, progress tracking, and movement feedback for beginner self-defense practice.":item.sub,metrics:[],tech:["Earlier build","Version history","Learning"],sections:[["What I built",item.sub+". This project is preserved as part of the path to the systems and AI work I do now."],["What I learned","Archived work is not a trophy shelf. It is version history—and each version left behind a sharper question for the next one."]]};
  return projectTemplate(project,item.slug);
}

function experienceProjectTemplate(item) {
  const summaries={genpact:"Shipped a Spring/Kafka workflow platform processing 120K+ invoice, claims, vendor, and compliance events, with SLA-aware routing, duplicate detection, audit logging, and AI-assisted case resolution.",hhs:"Reworked participant study setup and built rubric-based grading support that reduced staff effort, review time, and API spend.",teaching:"Led CS 180 labs and office hours, reviewed student work, and turned recurring implementation mistakes into clearer debugging guidance."};
  const project={title:item.title,eyebrow:item.sub,kind:"experience",status:"Completed",period:item.date,summary:summaries[item.slug],metrics:item.slug==="genpact"?["120K+ events","55% less manual routing","3.2 → 1.4 day resolution"]:item.slug==="hhs"?["1,000+ monthly records","3-4 hours saved/week","40% less review effort"]:["20+ students","100+ assignments/semester"],tech:["Résumé-verified","Public snapshot","Systems work"],sections:[["Public snapshot",summaries[item.slug]],["What I learned","The most useful systems work usually begins by locating the repetitive decision people have quietly accepted as normal."]]};
  return projectTemplate(project,item.slug);
}

function templateFor(app) {
  if(app==="about") return aboutTemplate(); if(app==="finder") return finderTemplate(); if(app==="activity") return activityTemplate(); if(app==="notes") return notesTemplate(); if(app==="terminal") return terminalTemplate(); if(app==="resume") return resumeTemplate(); return mailTemplate();
}

function openWindow(app, options={}) {
  const id=options.id || app;
  let existing=document.getElementById(`window-${id}`);
  if(existing){ existing.classList.remove("hidden"); focusWindow(existing); return existing; }
  const offset=document.querySelectorAll(".preview-window").length%5*22;
  const size=options.size || sizes[app] || [980,680];
  const el=document.createElement("article");
  el.id=`window-${id}`; el.className="os-window preview-window active"; el.dataset.app=app;
  el.style.left=`${Math.max(20,250+offset)}px`; el.style.top=`${Math.max(46,66+offset)}px`; el.style.width=`${size[0]}px`; el.style.height=`${size[1]}px`; el.style.zIndex=++z;
  el.innerHTML=`<div class="title-bar"><div class="traffic-lights"><button class="close" aria-label="Close window"></button><button class="minimize" aria-label="Minimize window"></button><button class="maximize" aria-label="Maximize window"></button></div><strong>${options.title || titles[app]}</strong><span class="title-status">active</span></div><div class="window-body">${options.html || templateFor(app)}</div>`;
  windows.appendChild(el); attachWindow(el); attachContent(el); focusWindow(el); updateDock(); return el;
}

function focusWindow(el){ document.querySelectorAll(".preview-window").forEach(w=>w.classList.remove("active")); el.classList.add("active"); el.style.zIndex=++z; activeWindow=el; }
function closeWindow(el){ el.remove(); if(activeWindow===el) activeWindow=null; updateDock(); }
function updateDock(){ document.querySelectorAll(".dock-item").forEach(button=>button.classList.toggle("is-open",!!document.querySelector(`.preview-window[data-app="${button.dataset.open}"]`))); }

function attachWindow(el){
  const bar=el.querySelector(".title-bar"); let drag=null;
  bar.addEventListener("pointerdown",e=>{ if(e.target.tagName==="BUTTON"||el.classList.contains("maximized")||innerWidth<720)return; focusWindow(el); drag={x:e.clientX,y:e.clientY,left:parseFloat(el.style.left),top:parseFloat(el.style.top)}; bar.setPointerCapture(e.pointerId); });
  bar.addEventListener("pointermove",e=>{ if(!drag)return; el.style.left=`${Math.max(6,drag.left+e.clientX-drag.x)}px`; el.style.top=`${Math.max(40,drag.top+e.clientY-drag.y)}px`; });
  bar.addEventListener("pointerup",()=>drag=null); bar.addEventListener("dblclick",()=>el.classList.toggle("maximized"));
  el.addEventListener("pointerdown",()=>focusWindow(el));
  el.querySelector(".close").addEventListener("click",e=>{e.stopPropagation();closeWindow(el)});
  el.querySelector(".minimize").addEventListener("click",e=>{e.stopPropagation();el.classList.add("hidden");updateDock()});
  el.querySelector(".maximize").addEventListener("click",e=>{e.stopPropagation();el.classList.toggle("maximized")});
}

function attachContent(el){
  el.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>openByName(button.dataset.open)));
  el.querySelectorAll("[data-section]").forEach(button=>button.addEventListener("click",()=>{finderSection=button.dataset.section;el.querySelector(".window-body").innerHTML=finderTemplate();attachContent(el)}));
  el.querySelectorAll("[data-project]").forEach(button=>button.addEventListener("click",()=>openProject(button.dataset.project)));
  const tabs=el.querySelectorAll("[data-tab]"); tabs.forEach(button=>button.addEventListener("click",()=>{ const root=el.querySelector("[data-project-view]"); const p=projectData[root.dataset.projectView] || projectForFallback(root.dataset.projectView); const index=Number(button.dataset.tab); tabs.forEach(t=>t.classList.remove("selected")); button.classList.add("selected"); const copy=el.querySelector(".project-section-copy"); copy.querySelector(".section-kicker").textContent=p.sections[index][0].toUpperCase(); copy.querySelector("h2").textContent=p.sections[index][0]; copy.querySelector("p:not(.section-kicker)").textContent=p.sections[index][1]; el.querySelector(".section-number").textContent=String(index+1).padStart(2,"0"); }));
  const terminal=el.querySelector("#terminal-form"); if(terminal) terminal.addEventListener("submit",runTerminal);
  const mail=el.querySelector("#mail-form"); if(mail) mail.addEventListener("submit",sendMail);
}

function projectForFallback(slug){
  const item=[...experience,...archive].find(x=>x.slug===slug);
  if(!item)return null;
  const holder=document.createElement("div"); holder.innerHTML=item.kind==="archive"?archiveProjectTemplate(item):experienceProjectTemplate(item);
  return {sections:[...holder.querySelectorAll(".preview-tabs button")].map((b,i)=>[b.textContent,i?"Archived work is version history—and each version left behind a sharper question for the next one.":item.sub])};
}

function openProject(slug){
  if(projectData[slug]) return openWindow("project",{id:`project-${slug}`,title:projectData[slug].title,html:projectTemplate(projectData[slug],slug),size:[980,680]});
  const item=[...experience,...archive].find(x=>x.slug===slug); if(!item)return;
  openWindow("project",{id:`project-${slug}`,title:item.title,html:item.kind==="archive"?archiveProjectTemplate(item):experienceProjectTemplate(item),size:[900,640]});
}

function openByName(name){
  if(name==="research"){finderSection="Research Lab";return openWindow("finder")}
  if(name==="archive"){finderSection="Archive";return openWindow("finder")}
  openWindow(name);
}

function runTerminal(event){
  event.preventDefault(); const input=event.target.querySelector("input"); const command=input.value.trim(); if(!command)return; const out=event.target.parentElement.querySelector(".terminal-output");
  const add=text=>{const p=document.createElement("p");p.textContent=text;out.appendChild(p);out.scrollTop=out.scrollHeight}; add(`$ ${command}`);
  const c=command.toLowerCase(); let reply="Command not found. Try ‘help’.";
  if(c==="help")reply="about · projects · experience · research · current · resume · contact · clear · git status · sudo hire-shivanya";
  if(c==="whoami"||c==="about"){reply="Shivanya: software engineer, AI student, systems enthusiast, and frequent investigator of why the cache is wrong.";openWindow("about")}
  if(c==="projects"||c==="open projects"){reply="Opening Finder…";finderSection="Featured";openWindow("finder")}
  if(c==="research"){reply="Opening Research Lab…";finderSection="Research Lab";openWindow("finder")}
  if(c==="current"){reply="SafeDesk and ShivanyaOS are currently building.";finderSection="Currently Building";openWindow("finder")}
  if(c==="resume"){reply="Opening Shivanya_SWE.pdf…";openWindow("resume")}
  if(c==="contact"||c==="sudo hire-shivanya"){reply=c.startsWith("sudo")?"Permission granted. Opening contact application…":"Opening Mail…";openWindow("mail")}
  if(c==="git status")reply="On branch building-better-systems\nmodified: sleep_schedule\nuntracked: new_project_idea_47";
  if(c==="clear"){out.innerHTML="";input.value="";return} add(reply); input.value="";
}

function sendMail(event){ event.preventDefault(); const name=document.getElementById("mail-name").value; const email=document.getElementById("mail-email").value; const subject=document.getElementById("mail-subject").value; const message=document.getElementById("mail-message").value; location.href=`mailto:shivanyachandra01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shivanya,\n\n${message}\n\n— ${name}${email?` (${email})`:""}`)}`; }

document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>openByName(button.dataset.open)));
document.querySelectorAll("[data-menu]").forEach(button=>button.addEventListener("click",()=>openByName(button.dataset.menu)));
document.getElementById("brand-menu").addEventListener("click",()=>{const menu=document.getElementById("system-menu");menu.hidden=!menu.hidden});
document.getElementById("restart").addEventListener("click",()=>{localStorage.removeItem("shivanyaos-preview-booted");document.getElementById("system-menu").hidden=true;document.getElementById("boot").style.display="grid";setTimeout(hideBoot,900)});
document.querySelector("[data-action=maximize]").addEventListener("click",()=>activeWindow&&activeWindow.classList.toggle("maximized"));

const palette=document.getElementById("palette"); const paletteInput=document.getElementById("palette-input");
const paletteItems=[{label:"View featured projects",hint:"Finder",action:()=>{finderSection="Featured";openWindow("finder")}},{label:"Open SafeDesk",hint:"Currently building",action:()=>openProject("safedesk")},{label:"Read the RouteWise case study",hint:"Project",action:()=>openProject("routewise")},{label:"Preview résumé",hint:"PDF",action:()=>openWindow("resume")},{label:"Contact Shivanya",hint:"Mail",action:()=>openWindow("mail")}];
function renderPalette(){const q=paletteInput.value.toLowerCase();document.getElementById("palette-results").innerHTML=`<p>QUICK ROUTES</p>${paletteItems.filter(i=>i.label.toLowerCase().includes(q)).map((i,n)=>`<button data-palette="${n}"><span>↗</span><strong>${i.label}</strong><em>${i.hint}</em></button>`).join("")}`;document.querySelectorAll("[data-palette]").forEach((b,index)=>b.addEventListener("click",()=>{paletteItems.filter(i=>i.label.toLowerCase().includes(q))[index].action();closePalette()}))}
function openPalette(){palette.hidden=false;renderPalette();paletteInput.focus()} function closePalette(){palette.hidden=true;paletteInput.value=""}
document.getElementById("navigate").addEventListener("click",openPalette); paletteInput.addEventListener("input",renderPalette); palette.addEventListener("mousedown",e=>{if(e.target===palette)closePalette()});
document.addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openPalette()}if(e.key==="Escape"){if(!palette.hidden)closePalette();else if(activeWindow)closeWindow(activeWindow)}});

function hideBoot(){document.getElementById("boot").style.display="none";localStorage.setItem("shivanyaos-preview-booted","true")}
document.getElementById("skip-boot").addEventListener("click",hideBoot); setTimeout(hideBoot,localStorage.getItem("shivanyaos-preview-booted")?100:920);
function updateClock(){document.getElementById("clock").textContent=new Intl.DateTimeFormat(undefined,{hour:"numeric",minute:"2-digit"}).format(new Date())} updateClock();setInterval(updateClock,30000);
openWindow("about");
