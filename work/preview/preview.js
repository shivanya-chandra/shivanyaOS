const EMAIL = "shivanyachandra01@gmail.com";

const projectData = {
  safedesk: {
    title: "SafeDesk",
    eyebrow: "Controlled desktop AI · personal project",
    hook: "A desktop agent designed to complete real tasks without being given unrestricted control.",
    kind: "current",
    status: "In development",
    period: "Now",
    summary: "I’m exploring how an agent can understand a goal, request only the access it needs, act across controlled environments, verify the outcome, and recover safely when a workflow fails.",
    metrics: ["Permission-aware access", "Human approval gates", "Reversible actions", "Verification + rollback"],
    tech: ["Agentic AI", "Permission models", "Isolated execution", "Information-flow controls"],
    sections: [
      { title: "The problem", body: "A useful desktop agent needs to act, but unrestricted access is the wrong default. The interesting engineering problem is how to make autonomy legible and bounded: what the agent can see, what it can change, when it must ask, and how a user can recover." },
      { title: "The safety model", body: "The design starts with minimum necessary permission, explicit approval for sensitive operations, isolated execution environments, action verification, and a detailed history. Reversible actions and rollback are treated as product behavior, not emergency features.", bullets: ["Request access at the moment it is needed", "Preview consequential changes before applying them", "Keep email and unrelated personal data out of scope", "Retain a human-readable action trail"] },
      { title: "Current progress", body: "I’m currently designing the permission and rollback model, then moving toward controlled application actions and adversarial testing. The goal is not a flashy demo that succeeds once; it is a system that fails in understandable, recoverable ways." },
      { title: "What I’m testing", body: "The core questions are whether an agent can verify that an action actually produced the intended result, stop when evidence is weak, and recover without making the user reconstruct what happened.", takeaway: "CURRENTLY · Designing permission and rollback model. NEXT · Controlled application actions." }
    ]
  },
  "nokia-observability": {
    title: "AI Pipeline Observability",
    eyebrow: "Nokia · public-safe internship case study",
    hook: "A distributed pipeline should be able to explain where it is, what it is doing, and why it stopped.",
    kind: "case-study",
    status: "Running",
    period: "Summer 2026",
    summary: "I designed a shared observability framework that turns scattered application signals into one lifecycle story for multi-stage AI workflows.",
    metrics: ["30-second failure visibility", "15+ pipeline states", "10+ health signals", "12 app events normalized", "1 LLM event represented", "6 query classes"],
    tech: ["Python", "OpenTelemetry", "Backend systems", "Observability"],
    sections: [
      { title: "The visibility problem", body: "The backend crossed several services and processing stages. Ordinary logs could describe isolated activity, but they could not answer a more useful operational question: where is this workflow now? Synchronous storage would also couple the request path to telemetry work and make failure reporting another way to fail." },
      { title: "The shared model", body: "I designed a reusable layer for recording stage, status, timestamp, health, and failure context in one consistent language. The shared SDK captures application events once, then keeps the representation suitable for vendor-independent telemetry instead of binding product logic to one observability backend.", bullets: ["Model progress separately from service health", "Normalize lifecycle events across boundaries", "Keep instrumentation reusable across services"] },
      { title: "Finding stuck work", body: "A run can be unhealthy without producing a clean exception. Comparing expected stage transitions with timestamps, health signals, retry markers, and terminal states makes incomplete, failed, and stalled work visible within the reported 30-second window." },
      { title: "Engineering takeaway", body: "Observability is most useful when it is part of the system's vocabulary, not a dashboard added after the vocabulary has already fragmented.", takeaway: "PUBLIC VIEW · Selected system details are shared here. Internal architecture, production data, and implementation specifics remain protected." }
    ]
  },
  routewise: {
    title: "RouteWise",
    eyebrow: "Cost-aware LLM routing gateway",
    hook: "Not every prompt deserves the most expensive model.",
    kind: "personal",
    status: "Completed",
    period: "Sep – Dec 2025",
    summary: "A FastAPI gateway that routes requests through semantic caching, prompt compression, model selection, and quality-aware fallback.",
    metrics: ["10K+ requests routed", "52% lower inference cost", "41% fewer prompt tokens", "90%+ answer quality"],
    tech: ["Python", "FastAPI", "LiteLLM", "Redis", "PostgreSQL"],
    sections: [
      { title: "The waste", body: "Many AI applications send every request to the strongest available model even when a cached answer or a smaller model would be sufficient. I wanted to reduce that waste without allowing the quality curve to quietly collapse." },
      { title: "The gateway", body: "FastAPI accepts the request, Redis checks for semantically similar work, long prompts are compressed, and the router estimates the capability needed. Routing decisions and outcomes are recorded in PostgreSQL so cost, tokens, and fallback behavior remain measurable.", bullets: ["Cache hits avoid new inference", "Complexity informs the initial route", "Compression removes unnecessary prompt volume"] },
      { title: "Quality fallback", body: "The first route is an informed attempt, not a promise. If the response misses its quality threshold, RouteWise escalates to a stronger model. That safeguard is why the result is interesting: cost dropped by 52% while measured answer quality stayed above 90%." },
      { title: "Engineering takeaway", body: "The hard part was not choosing the cheapest model. It was defining when cheap stopped being good enough and making that boundary observable." }
    ]
  },
  "unix-shell": {
    title: "Custom Unix Shell",
    eyebrow: "Systems programming · C/C++",
    hook: "I rebuilt the layer between a typed command and the operating system.",
    kind: "personal",
    status: "Recently completed",
    period: "Mar – Jul 2026",
    summary: "A Unix-style shell built with Flex, Bison, and POSIX APIs to make parsing, processes, file descriptors, signals, and job control tangible.",
    metrics: ["15+ shell features", "10+ POSIX calls", "4+ command pipelines", "6+ redirection modes", "96%+ tests passed"],
    tech: ["C", "C++", "POSIX", "Flex", "Bison", "GDB", "Valgrind"],
    sections: [
      { title: "What I wanted to understand", body: "The goal was not merely to execute commands. I wanted to understand how a real shell coordinates parsing, process creation, file descriptors, signals, pipelines, foreground work, and background jobs without losing control of its own terminal." },
      { title: "From input to process", body: "Flex tokenizes the input and Bison builds the command structure. The shell then chooses a built-in or fork/exec path, creates each pipeline process, connects pipe ends with dup2(), applies redirection, and closes descriptors that no process should keep.", bullets: ["Multi-command pipelines", "Foreground and background jobs", "Expansion, history, and six-plus redirect modes"] },
      { title: "The debugging story", body: "The most revealing failures were interactions: a background pipeline that kept a descriptor open, a signal delivered to the shell instead of its foreground process group, or redirection that worked alone but failed across several commands. GDB, Valgrind, and the test suite made those invisible relationships concrete." },
      { title: "What 96% means", body: "Passing more than 96% of the tests covered combinations, not isolated features: pipelines with background jobs, redirection across commands, expansion, and signal handling without leaking descriptors or processes.", takeaway: "The lesson: ownership is the real systems primitive—of descriptors, processes, terminal control, and cleanup." }
    ]
  },
  "rag-reliability": {
    title: "RAG Reliability Evaluation",
    eyebrow: "Artificial intelligence research · Purdue",
    hook: "A RAG system can sound correct while retrieving the wrong evidence.",
    kind: "research",
    status: "Completed research",
    period: "Aug – Dec 2025",
    summary: "An experiment framework for measuring retrieval precision, faithfulness, citation reliability, and hallucination across RAG configurations.",
    metrics: ["4,800 responses", "1,200 QA pairs", "0.61 → 0.84 context precision", "70% less manual QA"],
    tech: ["RAG", "Evaluation", "Embeddings", "Reranking", "Python"],
    sections: [
      { title: "Hypothesis", body: "Fluent answers are not sufficient evidence of a reliable RAG system. I wanted to test whether retrieved context was relevant, whether the answer stayed faithful to it, and whether citations actually supported each claim." },
      { title: "Experiment matrix", body: "I compared chunk size and overlap, embedding models, top-k retrieval, reranking, prompt structure, and citation requirements across a controlled set of 1,200 question-answer pairs.", bullets: ["Retrieval configuration", "Optional reranking", "Prompt and citation strategy", "Automated metrics plus targeted human review"] },
      { title: "Evaluation result", body: "Across 4,800 generated responses, the strongest configurations improved context precision from 0.61 to 0.84. That means the model received substantially more relevant evidence—not merely instructions to sound more confident—and manual QA time fell by 70%." },
      { title: "What failed", body: "Metric gains did not guarantee a useful answer. Relevant passages could still be used incorrectly, citation format could mask weak support, and unrepresentative questions could flatter a configuration.", takeaway: "Retrieval quality and answer quality are related, not interchangeable." }
    ]
  },
  "hazard-detection": {
    title: "Real-Time Hazard Detection",
    eyebrow: "Machine learning research · Purdue",
    hook: "A hazard detector is only useful if it reacts quickly without crying wolf.",
    kind: "research",
    status: "Completed research",
    period: "Jan – Apr 2025",
    summary: "A reliability-aware detection pipeline combining event confidence with signal validity, zone criticality, and device health.",
    metrics: ["15K+ events/hour", "<2 seconds p95", "0.89 hazard F1", "32% fewer false alerts", "40% more device visibility"],
    tech: ["Machine learning", "IoT", "Anomaly detection", "Reliability"],
    sections: [
      { title: "Research question", body: "How should a real-time safety system behave when the sensor reporting danger may itself be unreliable? The design had to detect genuine risk quickly, avoid excessive false alarms, and distinguish environmental hazards from degrading devices." },
      { title: "What I analyzed", body: "The alert decision combined event confidence, signal validation, zone criticality, risk classification, anomaly output, and device-health context rather than trusting one model score in isolation." },
      { title: "Result", body: "The pipeline handled more than 15,000 events per hour with under two seconds p95 latency, reached 0.89 hazard F1, and reduced false alerts by 32%. It also improved visibility into sensor reliability by 40%." },
      { title: "What surprised me", body: "An anomaly is not automatically a hazard. Sometimes the most important alert is that the instrument observing the environment can no longer be trusted." }
    ]
  },
  "robotic-arm": {
    title: "Robotic Arm Planning & Control",
    eyebrow: "Undergraduate research · Purdue",
    hook: "Finding a path is not enough. The arm still has to follow it smoothly.",
    kind: "research",
    status: "Completed research",
    period: "Aug – Dec 2024",
    summary: "Motion planning, inverse kinematics, and PID control connected into an autonomous pick-and-place trajectory pipeline.",
    metrics: ["95%+ successful trials", "Reduced oscillation", "Planning → control pipeline"],
    tech: ["RRT*", "Inverse kinematics", "PID control", "Robotics"],
    sections: [
      { title: "Research question", body: "How can a robot move from a mathematically valid, collision-aware path to stable physical execution without losing the plan's intent?" },
      { title: "Experiment", body: "RRT* produced the path, spatial checks rejected collisions, interpolation created usable waypoints, inverse kinematics converted positions into joint targets, and PID control corrected the arm during motion." },
      { title: "Result", body: "After trajectory analysis and controller tuning, the system reduced oscillation and completed more than 95% of the reported pick-and-place trials successfully." },
      { title: "Reflection", body: "Planning asks where the arm should go. Kinematics asks which joint configuration can reach it. Control decides whether the physical system arrives gracefully.", takeaway: "A valid path is only valuable when the hardware can execute it." }
    ]
  },
  genpact: {
    title: "Workflow Systems at Genpact",
    eyebrow: "Genpact · public-safe internship case study",
    hook: "The goal was not only to process events, but to stop people from manually chasing every exception.",
    kind: "case-study",
    status: "Completed",
    period: "Summer 2025",
    summary: "A Spring and Kafka workflow platform for high-volume business events with SLA-aware routing, duplicate detection, auditability, and assisted resolution.",
    metrics: ["120K+ events processed", "55% less manual routing", "3.2 → 1.4 days resolution"],
    tech: ["Java", "Spring", "Kafka", "Workflow systems"],
    sections: [
      { title: "The operations problem", body: "Invoice, claims, vendor, and compliance events arrived with different urgency, ownership, duplication risk, and audit requirements. The slow part was often not ingesting an event—it was deciding who should handle the exception next." },
      { title: "What I built", body: "The workflow validated events, detected duplicates, applied SLA and priority signals, routed cases, recorded an audit trail, and used AI-assisted resolution where it could reduce repetitive manual decisions." },
      { title: "Measured impact", body: "The platform processed more than 120,000 disclosed business events, reduced manual routing effort by 55%, and shortened the measured resolution cycle from 3.2 days to 1.4 days." },
      { title: "Engineering takeaway", body: "Automation creates leverage when it removes a repeated decision while preserving ownership and traceability—not when it merely moves the queue.", takeaway: "This case study describes the problem and measured impact at a high level. Client data, workflow rules, and internal system details are intentionally omitted." }
    ]
  },
  hhs: {
    title: "Web Programmer",
    eyebrow: "Purdue College of Health and Human Sciences",
    hook: "Building and maintaining the software behind research workflows used by students, faculty, and study administrators.",
    kind: "experience",
    status: "Completed",
    period: "Oct 2024 – May 2026",
    summary: "I maintained web systems supporting psychological research, participant management, and internal academic workflows—with reliability and real users in mind.",
    metrics: ["Thousands of students supported", "40% less manual review", "15+ hours returned", "25% lower API cost"],
    tech: ["Server-rendered web", "Production debugging", "Workflow automation", "AI evaluation"],
    sections: [
      { title: "Programming for research", body: "At Purdue’s College of Health and Human Sciences, I worked on web systems that support psychological research, participant management, and internal academic workflows. The platform is used by thousands of students as well as faculty and study administrators." },
      { title: "What I worked on", body: "My work included investigating production issues, improving server-rendered interfaces, maintaining participant workflows, and building automation that reduced repetitive review work for staff. I also evaluated AI-assisted approaches for reliability, operating cost, and whether they genuinely improved the existing workflow." },
      { title: "Practical impact", body: "One project reduced manual review effort by approximately 40% and returned more than 15 hours of repetitive work to staff. Comparing multiple technical approaches also helped reduce API cost by roughly 25% while preserving usefulness." },
      { title: "What it taught me", body: "Internal software still deserves strong engineering. A tool may not be public-facing, but its reliability directly affects researchers, administrators, and students trying to complete real work.", takeaway: "ACCESS LEVEL · PUBLIC SUMMARY. Research data, participant information, internal infrastructure, and administrative implementation details remain protected." }
    ]
  },
  teaching: {
    title: "Object-Oriented Programming Teaching Assistant",
    eyebrow: "Purdue University · CS 18000",
    hook: "Helping students get from ‘I have no idea what this error means’ to ‘wait, I actually understand this.’",
    kind: "experience",
    status: "Completed",
    period: "Aug 2024 – May 2026",
    summary: "I helped students move from Java syntax to reasoning about classes, inheritance, interfaces, debugging, testing, concurrency, and larger software projects.",
    metrics: ["200+ students supported weekly", "100+ submissions evaluated", "Labs + office hours", "Java + OOP"],
    tech: ["Java", "Object-oriented design", "Concurrency", "Client-server programming", "Teaching"],
    sections: [
      { title: "Teaching object-oriented programming", body: "As a Teaching Assistant for Purdue’s introductory object-oriented programming course, I supported students as they moved from basic Java syntax to classes, inheritance, interfaces, debugging, testing, concurrency, and larger software projects." },
      { title: "How I help", body: "The part I enjoy most is helping someone untangle a problem without handing them the answer. During labs and office hours, I break confusing errors into smaller questions, trace what the program is actually doing, and help students build debugging habits they can carry forward." },
      { title: "The scale", body: "I supported more than 200 students each week through labs and office hours, evaluated over 100 submissions, and helped students navigate projects involving object-oriented design, concurrency, and client-server programming." },
      { title: "What teaching changed", body: "Teaching made me a better engineer. It taught me to explain an idea from multiple perspectives, recognize where a mental model has broken down, and communicate complicated concepts without making a student feel that they are the complicated part." }
    ]
  },
  shivanyaos: {
    title: "ShivanyaOS",
    eyebrow: "Interactive portfolio · currently building",
    hook: "The interface can be playful; the information cannot become a scavenger hunt.",
    kind: "current",
    status: "In development",
    period: "Now",
    summary: "The operating system you are exploring: professional information in 30 seconds, personality and technical depth whenever curiosity wins.",
    metrics: ["Recruiter fast path", "Keyboard navigation", "Responsive windows"],
    tech: ["JavaScript", "Interface systems", "Accessibility", "Storytelling"],
    sections: [
      { title: "The design constraint", body: "ShivanyaOS should feel specific to me without hiding project evidence, contact actions, or current work behind decorative controls." },
      { title: "What I built", body: "A responsive desktop shell, window manager, recruiter view, project-specific case-study visuals, command palette, running-process dock, and direct professional links." },
      { title: "What comes next", body: "Replace the illustrated human-space moments with a small camera roll of photos I explicitly choose to publish, then keep refining the visual evidence inside each case study." }
    ]
  }
};

const archive = [
  { slug: "trainher", title: "TrainHer", sub: "Camera-assisted self-defense training", period: "Hackathon build", status: "2nd place", change: "I would narrow the first version to one drill, add clearer feedback calibration, and test with beginners before expanding the library.", matters: "It taught me that a focused audience and working demonstration can matter more than feature count." },
  { slug: "college-apps", title: "Navigating College Applications", sub: "Java college filtering tool", period: "Version 1", status: "Archived", change: "I would model tradeoffs and user priorities instead of treating recommendation as a stack of independent filters.", matters: "It is the first version of a question I returned to later: what does a useful recommendation actually need to know?" },
  { slug: "applywise", title: "ApplyWise", sub: "AI-assisted college matching", period: "Later iteration", status: "Retired, not forgotten", change: "I would separate ranking evidence from generated explanation and evaluate both with real applicant decisions.", matters: "Revisiting the same problem made my own technical growth visible." },
  { slug: "boilerfind", title: "BoilerFind", sub: "Purdue mentor matching", period: "Earlier build", status: "Archived", change: "I would invest more in the intake questions before refining a scoring function.", matters: "Matching quality depends on what a product learns before it starts comparing people." },
  { slug: "marketlearn", title: "MarketLearn", sub: "Product and learning experiment", period: "Earlier build", status: "Archived", change: "I would choose one learning outcome and measure it instead of equating more features with more value.", matters: "It left behind a sharper habit: define the behavior that should change before building the interface." }
];

const experienceTimeline = [
  { slug: "nokia-observability", title: "Nokia", sub: "AI pipeline observability", period: "2026", kind: "case-study" },
  { slug: "genpact", title: "Genpact", sub: "Workflow systems", period: "2025", kind: "case-study" },
  { slug: "rag-reliability", title: "Purdue AI Research", sub: "RAG reliability evaluation", period: "2025", kind: "research" },
  { slug: "hazard-detection", title: "Purdue IoT Research", sub: "Real-time hazard detection", period: "2025", kind: "research" },
  { slug: "hhs", title: "Health & Human Sciences", sub: "Workflow automation", period: "2024–26", kind: "experience" },
  { slug: "robotic-arm", title: "Robotics Research", sub: "Planning and control", period: "2024", kind: "research" },
  { slug: "teaching", title: "Teaching", sub: "CS 180 · Java and debugging", period: "2024–26", kind: "experience" }
];

const titles = {
  home: "initializing_shivanya()",
  about: "About This Shivanya",
  start: "Start Here · 30-second view",
  finder: "Finder",
  activity: "Active Processes",
  human: "Outside the Terminal",
  notes: "Eventually, This Made Sense",
  terminal: "Terminal",
  mail: "Mail Shivanya"
};

const sizes = {
  home: [760, 480], about: [900, 690], start: [960, 680], finder: [980, 680], activity: [820, 630], human: [960, 680],
  notes: [780, 620], terminal: [720, 500], mail: [760, 620]
};

const minimizedStatus = {
  about: "still overthinking the bio", start: "fast path ready", finder: "indexing the work", activity: "monitoring reality",
  home: "boot sequence complete", human: "away from keyboard", notes: "mental model cached", terminal: "background job", mail: "connection open",
  safedesk: "checking permissions",
  "nokia-observability": "watching the pipeline", routewise: "routing cheaply", "unix-shell": "background job",
  "rag-reliability": "evaluating evidence", "hazard-detection": "listening to sensors", "robotic-arm": "recalculating trajectory",
  genpact: "routing exceptions", archive: "not deprecated, just older"
};

let z = 5;
let activeWindow = null;
let finderSection = "Featured";
let finderListView = false;
let aboutTab = "About";
let paletteSelection = 0;
const windowsLayer = document.getElementById("windows");
const toast = document.getElementById("toast");

const escapeHtml = (value) => String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character]));

function archiveProject(item) {
  return {
    title: item.title, eyebrow: item.sub, hook: "Archived work is version history, not a trophy shelf.", kind: "archive",
    status: item.status, period: item.period, summary: item.sub + ". Preserved because the earlier decisions make the current ones easier to understand.",
    metrics: [], tech: ["Earlier build", "Version history", "Learning"], sections: [
      { title: "What I built", body: item.sub + ". This is the original problem and direction, kept separate from the projects I actively promote now." },
      { title: "What I would change now", body: item.change },
      { title: "Why it still matters", body: item.matters }
    ]
  };
}

function allProject(slug) {
  if (projectData[slug]) return projectData[slug];
  const item = archive.find(project => project.slug === slug);
  return item ? archiveProject(item) : null;
}

function projectCard(item) {
  const icon = item.kind === "research" ? "∿" : item.kind === "case-study" ? "◎" : item.kind === "current" ? "◌" : item.kind === "experience" ? "▣" : item.kind === "archive" ? "⌂" : "↗";
  const badge = item.kind === "case-study" ? "PUBLIC-SAFE" : (item.status || item.period || "OPEN").toUpperCase();
  return `<button data-project="${item.slug}" class="project-card"><div class="folder-art kind-${item.kind}"><span>${icon}</span><i>${escapeHtml(badge)}</i></div><div class="project-card-copy"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.sub || item.eyebrow)}</p><small>${escapeHtml(item.period)}</small></div></button>`;
}

function homeTemplate() {
  return `<div class="home-app"><div class="home-signal" aria-hidden="true"><svg viewBox="0 0 72 72"><path d="M57 14H31C17 14 10 20 10 29s8 14 21 14h12c10 0 17 5 17 13s-7 12-19 12H15"/><circle cx="53" cy="14" r="4"/></svg></div><p class="home-command">initializing_shivanya()</p><div class="home-boot-copy"><span>boot sequence complete</span><span>identity: Shivanya Chandra</span><span>location: Purdue University</span><span>mode: building things that (hopefully) make sense</span></div><h1>I turn messy systems into things people can understand and use.</h1><p>I’m a Computer Science + Artificial Intelligence student. Most of what I build lives behind the scenes: backend systems, practical AI tools, and software that quietly does its job well—with reliability, explainability, and real people in mind.</p><div class="home-processes"><small>current_processes:</small><span>building</span><span>researching</span><span>teaching</span><span>occasionally touching grass</span></div><div class="home-actions"><button class="primary-button" data-open="finder">View my work ↗</button><button class="secondary-button" data-open="start">30-second overview</button><button class="text-button" data-open="about">More about me</button></div></div>`;
}

function aboutPanel() {
  const panels = {
    About: `<p class="section-kicker">ABOUT</p><h2>Technical depth, practical usefulness, and a little curiosity about how people think.</h2><p>I study Computer Science and Artificial Intelligence at Purdue, with a psychology minor that keeps pulling my attention toward the human side of systems. I’m most interested in backend, AI infrastructure, observability, reliability, and developer tools.</p><div class="about-mini-grid"><span><small>NOW</small>Building SafeDesk and observability systems</span><span><small>LEARNING</small>Safer agent actions and information-flow controls</span><span><small>LOOKING FOR</small>2027 backend, AI infrastructure, or reliability roles</span></div>`,
    "How I Think": `<p class="section-kicker">HOW I THINK</p><h2>Systems, signals, and the mental model in between.</h2><p>Observability and reliability turn invisible behavior into something a team can reason about. AI makes that need sharper: a plausible output is not the same as an explainable decision. Psychology makes me notice attention, confidence, cognitive load, and the stories users form when software gives incomplete feedback.</p><blockquote>The system’s behavior and the user’s understanding are both part of the product.</blockquote>`,
    "Why I Build": `<p class="section-kicker">WHY I BUILD</p><h2>I like projects where technical depth becomes practical usefulness.</h2><p>I gravitate toward distributed workflows, AI decisions, process behavior, and tools that help people see what software actually did. The satisfying part is not only making something work—it is making the result reliable, inspectable, and easier for the next person to understand.</p><button class="secondary-button" data-open="finder">See the work ↗</button>`,
    Teaching: `<p class="section-kicker">TEACHING</p><h2>An explanation is a debugging tool.</h2><p>Teaching CS 180 showed me how often a recurring bug is really a broken mental model. Helping a student trace their own reasoning—without taking the problem away from them—made me more patient, more precise, and much better at explaining technical choices.</p><button class="secondary-button" data-project="teaching">Open the teaching window ↗</button>`,
    "Outside the Terminal": `<p class="section-kicker">OUTSIDE THE TERMINAL</p><h2>Boxing, dance, gym, travel, and ordinary Purdue life.</h2><p>I like having parts of my life where progress is physical, social, slightly chaotic, or impossible to express as a benchmark. They make the technical work better by giving me somewhere else to put my attention.</p><button class="secondary-button" data-open="human">Open Human Stuff ↗</button>`
  };
  return panels[aboutTab];
}

function aboutTemplate() {
  const tabs = ["About", "How I Think", "Why I Build", "Teaching", "Outside the Terminal"];
  return `<div class="about-app tabbed-about"><div class="about-identity"><div class="portrait-mark"><span>SC</span><i>operational</i></div><div><p class="eyebrow">SHIVANYA CHANDRA</p><h1>Systems → signals → understanding.</h1><p>Computer Science + Artificial Intelligence + Psychology at Purdue</p></div></div><nav class="about-tabs" aria-label="About sections">${tabs.map(tab => `<button data-about-tab="${tab}" class="${tab === aboutTab ? "selected" : ""}">${tab}</button>`).join("")}</nav><section class="about-panel">${aboutPanel()}</section><div class="contact-ribbon"><a href="https://github.com/shivanya-chandra" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://linkedin.com/in/shivanya-chandra" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:${EMAIL}">Email ↗</a><button data-copy-email>Copy email</button></div></div>`;
}

function startTemplate() {
  const highlights = [
    ["01", "Experience", "Nokia observability, Genpact workflow systems, Purdue engineering, and teaching.", "experience"],
    ["02", "Featured work", "SafeDesk, Nokia observability, RouteWise, and the Custom Unix Shell.", "finder"],
    ["03", "Research", "RAG reliability, real-time hazard detection, and robotic-arm planning and control.", "research"],
    ["04", "Contact", "GitHub, LinkedIn, and email—direct and easy to find.", "mail"]
  ];
  return `<div class="start-app"><header><div><p class="eyebrow">RECRUITER FAST PATH · ABOUT 30 SECONDS</p><h1>The useful version,<br>before the side quests.</h1><p>Backend and AI systems engineer focused on observability, reliability, developer tools, and explanations people can actually use.</p></div><div class="start-status"><span>AVAILABLE</span><strong>2027 opportunities</strong><small>West Lafayette · open to relocation</small></div></header>
    <section class="start-snapshot"><article><small>BUILDING</small><strong>SafeDesk</strong><span>Permission model in progress</span></article><article><small>CURRENT</small><strong>Nokia observability</strong><span>Running</span></article><article><small>FEATURED</small><strong>RouteWise</strong><span>52% lower inference cost</span></article><article><small>TEACHING</small><strong>CS 18000</strong><span>200+ students weekly</span></article></section>
    <section class="fast-path">${highlights.map(item => `<button data-fast="${item[3]}"><span>${item[0]}</span><div><strong>${item[1]}</strong><p>${item[2]}</p></div><i>↗</i></button>`).join("")}</section>
    <footer><div><strong>Want to talk about the work?</strong><span>The direct routes do not require navigating a maze.</span></div><button class="primary-button" data-open="mail">Contact Shivanya ↗</button></footer></div>`;
}

function finderItems(section) {
  const featured = ["safedesk", "nokia-observability", "routewise", "unix-shell"];
  const current = ["safedesk", "nokia-observability", "shivanyaos", "unix-shell"];
  const research = ["rag-reliability", "hazard-detection", "robotic-arm"];
  if (section === "Featured") return featured.map(slug => ({ slug, ...projectData[slug] }));
  if (section === "Current Work") return current.map(slug => ({ slug, ...projectData[slug] }));
  if (section === "Experience") return experienceTimeline.map(item => ({ ...item, ...projectData[item.slug], sub: item.sub, period: item.period }));
  if (section === "Research Lab") return research.map(slug => ({ slug, ...projectData[slug] }));
  return archive.map(item => ({ ...item, kind: "archive" }));
}

function finderTemplate() {
  const sections = ["Featured", "Current Work", "Experience", "Research Lab", "Archive"];
  const counts = [4, 4, 7, 3, 5];
  const intros = {
    Featured: ["CURATED", "Current and representative work, expanded into the problem, contribution, measured change, and technical takeaway."],
    "Current Work": ["PROCESS STATE", "What is running, recently completed, under active development, or preserved in the archive."],
    Experience: ["TIMELINE", "A browseable path through internships, research, systems work, and teaching."],
    "Research Lab": ["EXPERIMENTS", "Research question → variables → measured result → what failed or surprised me."],
    Archive: ["VERSION HISTORY", "Earlier projects, what I would change now, and why each still matters to my development."]
  };
  const intro = intros[finderSection];
  return `<div class="finder-app"><aside class="finder-sidebar"><div class="sidebar-title"><span class="drive-icon">S</span><div><strong>Shivanya HD</strong><small>Career drive · 2027</small></div></div><p>FAVORITES</p>${sections.map((name, index) => `<button data-section="${name}" class="${finderSection === name ? "selected" : ""}"><span>${["★", "◌", "▣", "∿", "⌂"][index]}</span>${name}<em>${counts[index]}</em></button>`).join("")}<p>CATEGORIES</p><div class="tag-cloud"><span>AI systems</span><span>Backend</span><span>Research</span><span>Systems</span></div><div class="storage-meter"><div><span>Curiosity used</span><b>84%</b></div><i><em></em></i></div></aside>
    <section class="finder-content"><header><div><p class="eyebrow">SHIVANYA HD /</p><h2>${finderSection}</h2></div><div class="view-toggle"><button data-view="grid" class="${finderListView ? "" : "active"}" aria-label="Grid view">▦</button><button data-view="list" class="${finderListView ? "active" : ""}" aria-label="List view">☰</button></div></header><div class="finder-intro ${finderSection === "Current Work" ? "coral-intro" : finderSection === "Archive" ? "yellow-intro" : ""}"><span>${intro[0]}</span><p>${intro[1]}</p></div>${finderSection === "Experience" ? experienceTimelineTemplate() : `<div class="preview-project-list ${finderListView ? "list-view" : ""}">${finderItems(finderSection).map(projectCard).join("")}</div>`}</section></div>`;
}

function experienceTimelineTemplate() {
  return `<div class="experience-timeline">${experienceTimeline.map((item, index) => `<button data-project="${item.slug}"><span class="timeline-year">${item.period}</span><i></i><span class="timeline-index">${String(index + 1).padStart(2, "0")}</span><div><strong>${item.title}</strong><p>${item.sub}</p></div><em>Open ↗</em></button>`).join("")}</div>`;
}

function activityTemplate() {
  const processes = [
    ["SafeDesk", "In development", "safedesk", "green"],
    ["Nokia Observability Framework", "Running", "nokia-observability", "green"],
    ["ShivanyaOS portfolio", "In development", "shivanyaos", "green"],
    ["Custom Unix Shell", "Recently completed", "unix-shell", "lavender"],
    ["RouteWise", "Completed", "routewise", "lavender"],
    ["Research Lab", "Ongoing questions", "rag-reliability", "yellow"],
    ["Older projects", "Archive", null, "gray"]
  ];
  return `<div class="activity-app"><header class="app-header"><div><p class="eyebrow">SOURCE OF TRUTH · NOT EMOTIONALLY CALIBRATED</p><h2>Active processes</h2><p>Current, recently completed, research, and archived work in one view.</p></div><div class="live-pill"><span></span>updated July 2026</div></header>
    <div class="process-table modern-process"><div class="process-head"><span>PROCESS</span><span>STATE</span><span>OPEN</span></div>${processes.map(process => `<button ${process[2] ? `data-project="${process[2]}"` : "disabled"}><span><i class="${process[3]}"></i>${process[0]}</span><b>${process[1]}</b><em>${process[2] ? "View ↗" : "Finder / Archive"}</em></button>`).join("")}</div>
    <div class="activity-lower"><section><p class="section-kicker">WHAT IS ACTUALLY MOVING</p><div class="process-note"><strong>SafeDesk</strong><p>Permission-aware actions, verification, rollback, and safe recovery for a controlled desktop agent.</p></div><div class="process-note"><strong>Nokia</strong><p>Shared lifecycle instrumentation, failure visibility, and vendor-independent telemetry representation.</p></div></section><section class="touching-grass"><p class="section-kicker">OUTSIDE-WORK PROCESSES</p><div><span>boxing.service</span><b>Active</b></div><div><span>dance.service</span><b>Recurring</b></div><div><span>gym.service</span><b>Persistent</b></div><button data-open="human">Open human stuff ↗</button></section></div></div>`;
}

function humanTemplate() {
  const moments = [
    ["boxing", "🥊", "Boxing", "The fastest way to stop thinking about a bug."],
    ["dance", "♪", "Dance", "Counts, music, and occasionally remembering the choreography."],
    ["gym", "↟", "Gym", "Progress measured in very small plates."],
    ["travel", "✈", "Travel", "Collecting windows, streets, and better snacks."],
    ["purdue", "P", "Purdue", "Boilermaker life between labs and late walks."],
    ["events", "✦", "Events", "Showing up for the side quests."],
    ["ordinary", "☕", "Ordinary days", "Coffee, friends, and no production incident."],
    ["camera-roll", "∞", "Camera roll", "The unpolished bits are usually the good bits."]
  ];
  return `<div class="human-app"><header><div><p class="eyebrow">AFK, OCCASIONALLY</p><h1>Outside the Terminal</h1><p>When I’m not debugging something, I’m usually boxing, dancing, at the gym, exploring somewhere new, or collecting ordinary moments with people I like.</p></div><div class="human-stamp">HUMAN<br><strong>STUFF</strong><span>probably dancing</span></div></header>
    <section class="camera-roll">${moments.map((moment, index) => `<figure class="moment-card moment-${index + 1}"><div class="moment-image"><img src="./human/${moment[0]}.jpg" alt="" data-human-photo><span class="moment-fallback">${moment[1]}</span></div><figcaption><strong>${moment[2]}</strong><span>${moment[3]}</span></figcaption></figure>`).join("")}</section>
    <footer><span>Illustrated field notes for now.</span><p>The camera-roll slots are ready for photos I explicitly choose to publish; no stock or fabricated personal images.</p></footer></div>`;
}

function notesTemplate() {
  const notes = [
    ["Systems", "Why process groups matter in a shell", "A terminal has foreground ownership; signals follow that ownership."],
    ["Observability", "Why OpenTelemetry belongs around the SDK", "Telemetry should describe the application model, not replace it."],
    ["Observability", "A pipeline stage is not automatically a trace span", "One describes product progress; the other describes an execution boundary."],
    ["Algorithms", "Why greedy reach beats simulated jumps", "Sometimes the useful state is the frontier, not the path taken to reach it."],
    ["Debugging", "What lectures did not teach me about file descriptors", "The descriptor you forgot to close can be the reason another process never finishes."],
    ["AI", "Why a confident RAG answer can still be wrong", "Fluency, evidence relevance, and faithfulness are three separate questions."],
    ["Caching", "Every changing variable belongs in the cache key", "If it changes the answer, it belongs in the identity of the work."],
    ["Teaching", "Recurring bugs are feedback about the explanation", "If five people form the same wrong model, the interface or lesson is part of the bug."]
  ];
  return `<div class="notes-app"><header><div class="notes-mark">✦</div><p class="eyebrow">HARD-WON MENTAL MODELS</p><h2>Notable things which took<br>way longer to understand</h2><p>Short notes from the point where the diagram finally stopped lying.</p></header><div class="notes-layout"><aside><p>COLLECTIONS</p><button class="selected">All breakthroughs <span>${notes.length}</span></button><button>Systems <span>2</span></button><button>AI & observability <span>4</span></button><button>Algorithms & teaching <span>2</span></button></aside><section>${notes.map((note, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><small>${note[0]}</small><h3>${note[1]}</h3><p>${note[2]}</p></div><i>↗</i></article>`).join("")}</section></div></div>`;
}

function terminalTemplate() {
  return `<div class="terminal-app"><div class="terminal-top"><span>shivanya@portfolio</span><span>safe terminal · 80×24</span></div><div class="terminal-output" id="terminal-output"><p>ShivanyaOS Terminal · type ‘help’ to begin.</p></div><form id="terminal-form"><label for="terminal-command">shivanya@ShivanyaOS ~ %</label><input id="terminal-command" autocomplete="off" spellcheck="false"></form></div>`;
}

function mailTemplate() {
  return `<div class="mail-app"><div class="contact-card"><p class="eyebrow">DIRECT CONNECTIONS</p><h2>Let’s build something<br>that explains itself.</h2><p>No form required. The direct routes are always visible.</p><a href="mailto:${EMAIL}"><span>@</span><div><small>EMAIL</small><strong>${EMAIL}</strong></div></a><a href="https://github.com/shivanya-chandra" target="_blank" rel="noreferrer"><span>GH</span><div><small>GITHUB</small><strong>shivanya-chandra</strong></div></a><a href="https://linkedin.com/in/shivanya-chandra" target="_blank" rel="noreferrer"><span>in</span><div><small>LINKEDIN</small><strong>/in/shivanya-chandra</strong></div></a><button data-copy-email>Copy email address</button></div><form id="mail-form"><div class="compose-row"><span>To:</span><strong>Shivanya Chandra</strong></div><label>Your name<input required id="mail-name" placeholder="Jane Recruiter"></label><label>Email<input type="email" id="mail-email" placeholder="jane@company.com"></label><label>Subject<select id="mail-subject"><option>2027 opportunity</option><option>Project collaboration</option><option>Technical conversation</option><option>Something interesting</option></select></label><label>Message<textarea required id="mail-message" placeholder="Tell me what’s on your mind…"></textarea></label><button class="primary-button" type="submit">Open in mail app ↗</button></form></div>`;
}

function visualForProject(slug) {
  if (slug === "safedesk") return `<div class="case-visual permission-center"><div class="permission-task"><p>TASK</p><strong>Organize downloaded internship documents</strong><small>Agent requests only the access required for this task.</small><div class="requested-access"><p>REQUESTED ACCESS</p><span><i>✓</i> Downloads folder</span><span><i>✓</i> File renaming</span><span class="denied"><i>×</i> Email</span><span class="denied"><i>×</i> Browser history</span></div></div><div class="permission-plan"><p>PROPOSED PLAN</p><ol><li>Identify application documents</li><li>Group by company</li><li>Standardize filenames</li><li>Preview proposed changes</li><li>Apply after approval</li></ol><div class="safe-actions"><button data-safe-action="preview">Preview</button><button data-safe-action="approve">Approve plan</button><button data-safe-action="rollback">Rollback</button></div><strong id="safe-status">ROLLBACK AVAILABLE · NO CHANGES APPLIED</strong></div></div>`;
  if (slug === "unix-shell") return `<div class="case-visual shell-inspector"><div class="mini-terminal"><div><span></span><span></span><span></span><b>shivanya-shell</b></div><p id="shell-demo-output"><i>$</i> echo hello | grep h &gt; result.txt<br><em>pipeline complete · 0</em></p><nav>${["help", "architecture", "pipeline", "signals", "lessons"].map(command => `<button data-shell-command="${command}">${command}</button>`).join("")}</nav></div><div class="process-flow">${["parser", "fork / exec", "pipe config", "redirection", "foreground job"].map((step, index) => `<span>${step}${index < 4 ? "<i>↓</i>" : ""}</span>`).join("")}</div></div>`;
  if (slug === "routewise") return `<div class="case-visual route-console"><div class="route-choices"><p>TRY A REQUEST</p>${[["simple", "Simple factual"], ["coding", "Coding"], ["research", "Long research"], ["cached", "Previously answered"]].map(item => `<button data-route-case="${item[0]}">${item[1]}</button>`).join("")}</div><div class="route-path" id="route-path"><span>Incoming request</span><i>↓</i><span>Cache match?</span><i>↓</i><strong>Small model</strong><i>↓</i><span>Quality check</span><small id="route-reason">Low complexity · start small, verify quality.</small></div></div>`;
  if (slug === "nokia-observability") return `<div class="case-visual observe-console"><div class="observe-flow">${["Request received", "Processing stage", "AI enrichment", "Result delivery"].map((stage, index) => `<span><i>${String(index + 1).padStart(2, "0")}</i>${stage}<b>${index < 3 ? "→" : "✓"}</b></span>`).join("")}</div><div class="signal-panel"><p>EACH STAGE EMITS</p><span>status</span><span>timestamp</span><span>health</span><span>failure context</span><strong>failure visibility · 30s</strong></div></div>`;
  if (slug === "rag-reliability") return `<div class="case-visual rag-notebook"><div class="matrix"><p>EXPERIMENT MATRIX</p><div><span>Chunking</span><b>small / medium / large</b></div><div><span>Top-k</span><b>3 / 5 / 8</b></div><div><span>Reranking</span><b>off / on</b></div><div><span>Prompt</span><b>baseline / cited</b></div></div><div class="precision-chart"><p>CONTEXT PRECISION</p><div><span>Before</span><i style="--value:61%"></i><b>0.61</b></div><div><span>After</span><i style="--value:84%"></i><b>0.84</b></div><small>More relevant evidence reached the model.</small></div></div>`;
  if (slug === "hazard-detection") return `<div class="case-visual hazard-board"><header><span class="pulse"></span><strong>15,284 events/hour</strong><small>p95 · 1.8s</small></header><div><span>Zone A</span><b class="normal">Normal</b></div><div><span>Zone B</span><b class="warning">Signal confidence falling</b></div><div><span>Zone C</span><b class="danger">Hazard detected</b></div><div><span>Sensor 17</span><b class="device">Device-health warning</b></div></div>`;
  if (slug === "robotic-arm") return `<div class="case-visual motion-lab"><div class="arm-stage"><span class="arm-base"></span><span class="arm-one"></span><span class="arm-two"></span><i class="target">×</i><div class="motion-path"></div></div><div class="control-panel"><p>MOTION PIPELINE</p><span>RRT* → IK → PID → pick</span><label><input type="checkbox" id="pid-toggle" checked><i></i> PID tuned</label><small id="pid-status">Stable approach · reduced oscillation</small></div></div>`;
  if (slug === "genpact") return `<div class="case-visual workflow-center"><div class="workflow-line">${["Business event", "Validate + dedupe", "SLA + priority", "Route or assist", "Audit trail"].map((step, index) => `<span><i>${index + 1}</i>${step}${index < 4 ? "<b>→</b>" : ""}</span>`).join("")}</div><small>Public-safe workflow view · client rules omitted</small></div>`;
  if (slug === "hhs") return `<div class="case-visual research-status"><header><div><p>RESEARCH SYSTEM STATUS</p><strong>ACCESS LEVEL: PUBLIC SUMMARY</strong></div><span>Protected</span></header><div><span>Participant portal</span><b>Healthy</b></div><div><span>Workflow automation</span><b>Running</b></div><div><span>Manual review load</span><b>↓ 40%</b></div><div><span>Hours returned to staff</span><b>15+</b></div><div><span>API operating cost</span><b>↓ 25%</b></div><footer>Sensitive research and participant data hidden.</footer></div>`;
  if (slug === "teaching") return `<div class="case-visual office-hours"><div class="student-queue"><p>STUDENT QUEUE</p>${[["null","NullPointerException","Helping now"],["inheritance","Inheritance confusion","Next"],["threads","Thread synchronization","Waiting"],["laptop","“Works on my laptop”","Recurring"]].map((item,index) => `<button data-teaching-issue="${item[0]}" class="${index===0?"selected":""}"><span>${item[1]}</span><b>${item[2]}</b></button>`).join("")}</div><div class="teaching-principle"><p>TEACHING PRINCIPLE</p><strong id="teaching-principle">Trace the object, not just the line.</strong><small>Ask one smaller question, then let the student own the next step.</small></div></div>`;
  return `<div class="case-visual default-visual"><span>${slug === "shivanyaos" ? "SC" : "↗"}</span><div><strong>System view</strong><small>Problem → contribution → result → reflection</small></div></div>`;
}

function sectionMarkup(project, index) {
  const section = project.sections[index];
  return `<p class="section-kicker">${escapeHtml(section.title.toUpperCase())}</p><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p>${section.bullets ? `<ul>${section.bullets.map(bullet => `<li><span>✓</span>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}${section.takeaway ? `<blockquote>${escapeHtml(section.takeaway)}</blockquote>` : ""}`;
}

function projectTemplate(project, slug) {
  const icon = project.kind === "research" ? "∿" : project.kind === "case-study" ? "◎" : project.kind === "current" ? "◌" : project.kind === "archive" ? "⌂" : "↗";
  return `<div class="project-app custom-project" data-project-view="${slug}"><header class="project-hero kind-${project.kind}"><div class="project-hero-copy"><div class="project-breadcrumb">SHIVANYA HD / ${project.kind.replace("-", " ").toUpperCase()}</div><p>${escapeHtml(project.eyebrow)}</p><h1>${escapeHtml(project.title)}</h1><strong class="project-hook">${escapeHtml(project.hook)}</strong><p class="project-summary">${escapeHtml(project.summary)}</p><div class="project-meta"><span><small>STATUS</small><b>${escapeHtml(project.status)}</b></span><span><small>PERIOD</small><b>${escapeHtml(project.period)}</b></span></div></div><div class="project-system-art"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span>${icon}</span><small>${project.kind === "case-study" ? "PUBLIC-SAFE VIEW" : project.kind === "research" ? "RESEARCH NOTEBOOK" : "SYSTEM VIEW"}</small></div></header>
    <div class="metrics-strip">${project.metrics.map(metric => `<span>${escapeHtml(metric)}</span>`).join("")}</div>${visualForProject(slug)}
    <nav class="preview-tabs" aria-label="Case study sections">${project.sections.map((section, index) => `<button data-tab="${index}" class="${index === 0 ? "selected" : ""}">${escapeHtml(section.title)}</button>`).join("")}</nav>
    <section class="project-section"><div class="section-number">01</div><div class="project-section-copy">${sectionMarkup(project, 0)}<div class="tech-row">${project.tech.map(tech => `<span>${escapeHtml(tech)}</span>`).join("")}</div>${project.kind === "case-study" ? `<div class="sanitized-note"><strong>Sanitized by design.</strong> The engineering problem, my contribution, and disclosed results are public. Internal repositories, endpoints, schemas, payloads, production data, and proprietary rules are not.</div>` : ""}</div></section></div>`;
}

function templateFor(app) {
  if (app === "home") return homeTemplate();
  if (app === "about") return aboutTemplate();
  if (app === "start") return startTemplate();
  if (app === "finder") return finderTemplate();
  if (app === "activity") return activityTemplate();
  if (app === "human") return humanTemplate();
  if (app === "notes") return notesTemplate();
  if (app === "terminal") return terminalTemplate();
  return mailTemplate();
}

function loadingMessage(app, slug) {
  const messages = {
    "unix-shell": "Opening Unix Shell… checking file descriptors… ready.",
    routewise: "Estimating request complexity… declining frontier-model prices… ready.",
    "nokia-observability": "Correlating pipeline signals… public view ready.",
    "rag-reliability": "Checking whether the citation actually supports the claim… ready.",
    "hazard-detection": "Listening to sensors… validating the sensors… ready.",
    "robotic-arm": "Recalculating trajectory… PID stable… ready.",
    human: "Pausing LeetCode… locating boxing gloves… opening field notes."
  };
  return messages[slug || app];
}

function showToast(message) {
  if (!message) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1700);
}

function openWindow(app, options = {}) {
  const id = options.id || app;
  let existing = document.getElementById(`window-${id}`);
  if (existing) {
    existing.classList.remove("hidden", "minimized");
    focusWindow(existing);
    updateDock();
    updateRunningProcesses();
    return existing;
  }
  const visible = [...document.querySelectorAll(".preview-window:not(.hidden)")];
  if (visible.length >= 3) minimizeWindow(visible.sort((a, b) => Number(a.style.zIndex) - Number(b.style.zIndex))[0]);
  const offset = document.querySelectorAll(".preview-window").length % 5 * 22;
  const size = options.size || sizes[app] || [980, 700];
  const el = document.createElement("article");
  el.id = `window-${id}`;
  el.className = "os-window preview-window active";
  el.dataset.app = app;
  el.dataset.statusKey = options.slug || app;
  el.style.left = `${Math.max(20, (innerWidth - size[0]) / 2 + offset)}px`;
  el.style.top = `${Math.max(48, (innerHeight - size[1]) / 2 - 5 + offset)}px`;
  el.style.width = `${size[0]}px`;
  el.style.height = `${size[1]}px`;
  el.style.zIndex = ++z;
  el.innerHTML = `<div class="title-bar"><div class="traffic-lights"><button class="close" aria-label="Close ${escapeHtml(options.title || titles[app] || "window")}" data-tooltip="Close this thought"></button><button class="minimize" aria-label="Minimize ${escapeHtml(options.title || titles[app] || "window")}" data-tooltip="Send to background"></button><button class="maximize" aria-label="Maximize ${escapeHtml(options.title || titles[app] || "window")}" data-tooltip="Give it the whole screen"></button></div><strong>${escapeHtml(options.title || titles[app])}</strong><span class="title-status">active</span></div><div class="window-body">${options.html || templateFor(app)}</div>`;
  windowsLayer.appendChild(el);
  attachWindow(el);
  attachContent(el);
  focusWindow(el);
  updateDock();
  updateRunningProcesses();
  history.replaceState(null, "", options.slug ? `#/projects/${options.slug}` : `#/${app}`);
  showToast(loadingMessage(app, options.slug));
  return el;
}

function focusWindow(el) {
  document.querySelectorAll(".preview-window").forEach(windowElement => {
    windowElement.classList.remove("active");
    const status = windowElement.querySelector(".title-status");
    if (status) status.textContent = "";
  });
  el.classList.remove("hidden", "minimized");
  el.classList.add("active");
  el.style.zIndex = ++z;
  const status = el.querySelector(".title-status");
  if (status) status.textContent = "active";
  activeWindow = el;
}

function closeWindow(el) {
  el.remove();
  if (activeWindow === el) activeWindow = null;
  history.replaceState(null, "", "#/");
  updateDock();
  updateRunningProcesses();
}

function minimizeWindow(el) {
  if (!el) return;
  el.classList.add("hidden", "minimized");
  if (activeWindow === el) activeWindow = null;
  updateDock();
  updateRunningProcesses();
}

function updateDock() {
  document.querySelectorAll(".dock-item").forEach(button => {
    const appWindows = document.querySelectorAll(`.preview-window[data-app="${button.dataset.open}"]`);
    button.classList.toggle("is-open", appWindows.length > 0);
    button.classList.toggle("is-minimized", [...appWindows].some(windowElement => windowElement.classList.contains("hidden")));
  });
}

function updateRunningProcesses() {
  const strip = document.getElementById("running-processes");
  const minimized = [...document.querySelectorAll(".preview-window.hidden")];
  strip.hidden = minimized.length === 0;
  strip.innerHTML = minimized.length ? `<span class="running-label">RUNNING PROCESSES</span>${minimized.map(windowElement => `<button data-restore="${windowElement.id}"><strong>${windowElement.querySelector(".title-bar > strong").textContent}</strong><small>${minimizedStatus[windowElement.dataset.statusKey] || "background process"}</small><i></i></button>`).join("")}` : "";
  strip.querySelectorAll("[data-restore]").forEach(button => button.addEventListener("click", () => focusWindow(document.getElementById(button.dataset.restore))));
}

function attachWindow(el) {
  const bar = el.querySelector(".title-bar");
  let drag = null;
  bar.addEventListener("pointerdown", event => {
    if (event.target.tagName === "BUTTON" || el.classList.contains("maximized") || innerWidth < 720) return;
    focusWindow(el);
    drag = { x: event.clientX, y: event.clientY, left: parseFloat(el.style.left), top: parseFloat(el.style.top) };
    bar.setPointerCapture(event.pointerId);
  });
  bar.addEventListener("pointermove", event => {
    if (!drag) return;
    el.style.left = `${Math.max(6, drag.left + event.clientX - drag.x)}px`;
    el.style.top = `${Math.max(40, drag.top + event.clientY - drag.y)}px`;
  });
  bar.addEventListener("pointerup", () => { drag = null; });
  bar.addEventListener("dblclick", () => el.classList.toggle("maximized"));
  el.addEventListener("pointerdown", () => focusWindow(el));
  el.querySelector(".close").addEventListener("click", event => { event.stopPropagation(); closeWindow(el); });
  el.querySelector(".minimize").addEventListener("click", event => { event.stopPropagation(); minimizeWindow(el); });
  el.querySelector(".maximize").addEventListener("click", event => { event.stopPropagation(); el.classList.toggle("maximized"); });
}

function attachContent(el) {
  el.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openByName(button.dataset.open)));
  el.querySelectorAll("[data-about-tab]").forEach(button => button.addEventListener("click", () => {
    aboutTab = button.dataset.aboutTab;
    el.querySelector(".window-body").innerHTML = aboutTemplate();
    attachContent(el);
  }));
  el.querySelectorAll("[data-fast]").forEach(button => button.addEventListener("click", () => {
    const destination = button.dataset.fast;
    if (["experience", "research"].includes(destination)) {
      finderSection = destination === "experience" ? "Experience" : "Research Lab";
      openWindow("finder");
      rerenderFinder();
    } else openByName(destination);
  }));
  el.querySelectorAll("[data-copy-email]").forEach(button => button.addEventListener("click", copyEmail));
  el.querySelectorAll("[data-section]").forEach(button => button.addEventListener("click", () => {
    finderSection = button.dataset.section;
    el.querySelector(".window-body").innerHTML = finderTemplate();
    attachContent(el);
  }));
  el.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => {
    finderListView = button.dataset.view === "list";
    el.querySelector(".window-body").innerHTML = finderTemplate();
    attachContent(el);
  }));
  el.querySelectorAll("[data-project]").forEach(button => button.addEventListener("click", () => openProject(button.dataset.project)));
  const tabs = el.querySelectorAll("[data-tab]");
  tabs.forEach(button => button.addEventListener("click", () => {
    const slug = el.querySelector("[data-project-view]").dataset.projectView;
    const project = allProject(slug);
    const index = Number(button.dataset.tab);
    tabs.forEach(tab => tab.classList.remove("selected"));
    button.classList.add("selected");
    const copy = el.querySelector(".project-section-copy");
    const tech = copy.querySelector(".tech-row");
    const note = copy.querySelector(".sanitized-note");
    copy.innerHTML = sectionMarkup(project, index);
    copy.appendChild(tech);
    if (note) copy.appendChild(note);
    el.querySelector(".section-number").textContent = String(index + 1).padStart(2, "0");
  }));
  el.querySelectorAll("[data-shell-command]").forEach(button => button.addEventListener("click", () => runShellDemo(button.dataset.shellCommand, el)));
  el.querySelectorAll("[data-route-case]").forEach(button => button.addEventListener("click", () => runRouteDemo(button.dataset.routeCase, el)));
  el.querySelectorAll("[data-safe-action]").forEach(button => button.addEventListener("click", () => runSafeDeskDemo(button.dataset.safeAction, el)));
  el.querySelectorAll("[data-teaching-issue]").forEach(button => button.addEventListener("click", () => runTeachingDemo(button.dataset.teachingIssue, el)));
  const pid = el.querySelector("#pid-toggle");
  if (pid) pid.addEventListener("change", () => updatePidDemo(pid, el));
  const terminal = el.querySelector("#terminal-form");
  if (terminal) terminal.addEventListener("submit", runTerminal);
  const mail = el.querySelector("#mail-form");
  if (mail) mail.addEventListener("submit", sendMail);
  el.querySelectorAll("[data-human-photo]").forEach(image => {
    const reveal = () => image.parentElement.classList.add("has-photo");
    image.addEventListener("load", reveal);
    if (image.complete && image.naturalWidth) reveal();
  });
}

function rerenderFinder() {
  const finder = document.getElementById("window-finder");
  if (!finder) return;
  finder.querySelector(".window-body").innerHTML = finderTemplate();
  attachContent(finder);
}

function openProject(slug) {
  const project = allProject(slug);
  if (!project) return;
  openWindow("project", { id: `project-${slug}`, title: project.title, html: projectTemplate(project, slug), size: [1000, 720], slug });
}

function openByName(name) {
  if (name === "research" || name === "archive" || name === "experience" || name === "current") {
    finderSection = name === "research" ? "Research Lab" : name === "archive" ? "Archive" : name === "experience" ? "Experience" : "Current Work";
    openWindow("finder");
    rerenderFinder();
    return;
  }
  openWindow(name);
}

function runShellDemo(command, el) {
  const responses = {
    help: "$ help\narchitecture · pipeline · signals · lessons",
    architecture: "$ architecture\nFlex → Bison → command table → fork/exec → wait",
    pipeline: "$ pipeline\necho hello | grep h > result.txt\n3 processes · 2 pipes · descriptors closed",
    signals: "$ signals\nterminal → foreground process group\nshell remains in control",
    lessons: "$ lessons\nownership is the primitive: processes, descriptors, cleanup"
  };
  el.querySelector("#shell-demo-output").innerHTML = `<i>$</i> ${escapeHtml(responses[command].replace("$ ", "")).replace(/\n/g, "<br>")}`;
}

function runRouteDemo(type, el) {
  const routes = {
    simple: ["Small model", "Low complexity · start small, verify quality."],
    coding: ["Medium model", "Structured reasoning · keep fallback armed."],
    research: ["Frontier model", "High complexity and long context · route upward."],
    cached: ["Semantic cache", "Similar answer found · no new inference required."]
  };
  el.querySelectorAll("[data-route-case]").forEach(button => button.classList.toggle("selected", button.dataset.routeCase === type));
  el.querySelector("#route-path strong").textContent = routes[type][0];
  el.querySelector("#route-reason").textContent = routes[type][1];
}

function runSafeDeskDemo(action, el) {
  const status = el.querySelector("#safe-status");
  const messages = {
    preview: "PREVIEW READY · 8 FILE RENAMES · 0 CHANGES APPLIED",
    approve: "APPROVED · CONTROLLED ACTIONS MAY PROCEED",
    rollback: "ROLLED BACK · ORIGINAL STATE RESTORED"
  };
  el.querySelectorAll("[data-safe-action]").forEach(button => button.classList.toggle("selected", button.dataset.safeAction === action));
  status.textContent = messages[action];
}

function runTeachingDemo(issue, el) {
  const principles = {
    null: "Trace the object, not just the line.",
    inheritance: "Ask what relationship the design is actually expressing.",
    threads: "Draw the shared state before debugging the threads.",
    laptop: "Reproduce first, theorize second."
  };
  el.querySelectorAll("[data-teaching-issue]").forEach(button => button.classList.toggle("selected", button.dataset.teachingIssue === issue));
  el.querySelector("#teaching-principle").textContent = principles[issue];
}

function updatePidDemo(input, el) {
  const stage = el.querySelector(".arm-stage");
  stage.classList.toggle("untuned", !input.checked);
  el.querySelector(".control-panel label").lastChild.textContent = input.checked ? " PID tuned" : " PID untuned";
  el.querySelector("#pid-status").textContent = input.checked ? "Stable approach · reduced oscillation" : "Illustrative oscillation · correction needed";
}

function runTerminal(event) {
  event.preventDefault();
  const input = event.target.querySelector("input");
  const command = input.value.trim();
  if (!command) return;
  const output = event.target.parentElement.querySelector(".terminal-output");
  const add = text => { const line = document.createElement("p"); line.textContent = text; output.appendChild(line); output.scrollTop = output.scrollHeight; };
  add(`$ ${command}`);
  const normalized = command.toLowerCase();
  let reply = "Command not found. Try ‘help’.";
  if (normalized === "help") reply = "start · about · projects · current · experience · research · archive · human · contact · safedesk · shell · clear";
  if (normalized === "whoami" || normalized === "about") { reply = "Shivanya: systems engineer, AI student, teacher, boxer, dancer, and investigator of why the cache is wrong."; openWindow("about"); }
  if (normalized === "start") { reply = "Opening the 30-second route…"; openWindow("start"); }
  if (normalized === "projects") { reply = "Opening featured work…"; finderSection = "Featured"; openWindow("finder"); rerenderFinder(); }
  if (normalized === "current") { reply = "Opening active work…"; openWindow("activity"); }
  if (normalized === "experience") { reply = "Opening the experience timeline…"; openByName("experience"); }
  if (normalized === "research") { reply = "Opening the research lab…"; openByName("research"); }
  if (normalized === "archive") { reply = "Opening version history…"; openByName("archive"); }
  if (normalized === "human") { reply = "Pausing LeetCode. Opening human stuff…"; openWindow("human"); }
  if (normalized === "shell") { reply = "Opening the safe shell case study…"; openProject("unix-shell"); }
  if (normalized === "safedesk") { reply = "Opening SafeDesk… requesting minimum necessary access…"; openProject("safedesk"); }
  if (normalized === "contact" || normalized === "sudo hire-shivanya") { reply = normalized.startsWith("sudo") ? "Permission granted. Opening contact routes…" : "Opening Mail…"; openWindow("mail"); }
  if (normalized === "git status") reply = "On branch building-better-systems\nmodified: portfolio_depth\nuntracked: reasonable_sleep_schedule";
  if (normalized === "clear") { output.innerHTML = ""; input.value = ""; return; }
  add(reply);
  input.value = "";
}

function sendMail(event) {
  event.preventDefault();
  const name = document.getElementById("mail-name").value;
  const email = document.getElementById("mail-email").value;
  const subject = document.getElementById("mail-subject").value;
  const message = document.getElementById("mail-message").value;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shivanya,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`)}`;
}

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(EMAIL);
    showToast("Email copied · see you in the inbox.");
  } catch {
    window.prompt("Copy email", EMAIL);
  }
}

function closeMenus() {
  const systemMenu = document.getElementById("system-menu");
  const topMenu = document.getElementById("top-menu");
  systemMenu.hidden = true;
  topMenu.hidden = true;
  document.getElementById("brand-menu").setAttribute("aria-expanded", "false");
  document.querySelectorAll("[data-top-menu]").forEach(button => button.classList.remove("menu-active"));
}

const topMenus = {
  file: `<p>FILE</p><button data-menu="start">Open recruiter fast path <kbd>⌘ 1</kbd></button><button data-project-menu="safedesk">Open SafeDesk</button><a href="https://github.com/shivanya-chandra" target="_blank" rel="noreferrer">Open GitHub <span>↗</span></a><button data-copy-email>Copy email</button>`,
  view: `<p>VIEW</p><button data-view-mode="desktop">Desktop view</button><button data-view-mode="recruiter">Recruiter / list view</button><button data-action="maximize">Maximize active window</button><button data-action="minimize">Minimize active window</button>`,
  navigate: `<p>NAVIGATE</p><button data-menu="start">Start here</button><button data-menu="current">Current work</button><button data-menu="finder">Featured projects</button><button data-menu="experience">Experience</button><button data-menu="research">Research lab</button><button data-menu="archive">Archive</button><button data-menu="human">Human stuff</button>`,
  help: `<p>KEYBOARD</p><div class="shortcut-row"><kbd>⌘ K</kbd><span>Open command palette</span></div><div class="shortcut-row"><kbd>⌘ 1</kbd><span>Recruiter fast path</span></div><div class="shortcut-row"><kbd>⌘ A</kbd><span>About Shivanya</span></div><div class="shortcut-row"><kbd>ESC</kbd><span>Close menus or active window</span></div><button data-menu="about">About this interface</button>`
};

document.querySelectorAll("[data-open]").forEach(button => button.addEventListener("click", () => openByName(button.dataset.open)));
document.querySelectorAll("[data-menu]").forEach(button => button.addEventListener("click", () => { const name = button.dataset.menu; closeMenus(); openByName(name); }));

document.getElementById("brand-menu").addEventListener("click", event => {
  event.stopPropagation();
  const menu = document.getElementById("system-menu");
  const opening = menu.hidden;
  closeMenus();
  menu.hidden = !opening;
  event.currentTarget.setAttribute("aria-expanded", String(opening));
});

document.querySelectorAll("[data-top-menu]").forEach(button => button.addEventListener("click", event => {
  event.stopPropagation();
  const menu = document.getElementById("top-menu");
  const name = button.dataset.topMenu;
  const opening = menu.hidden || menu.dataset.menu !== name;
  closeMenus();
  if (!opening) return;
  menu.dataset.menu = name;
  menu.innerHTML = topMenus[name];
  const left = Math.min(button.offsetLeft, innerWidth - 285);
  menu.style.left = `${Math.max(8, left)}px`;
  menu.hidden = false;
  button.classList.add("menu-active");
  menu.querySelectorAll("[data-menu]").forEach(item => item.addEventListener("click", () => { const destination = item.dataset.menu; closeMenus(); openByName(destination); }));
  menu.querySelectorAll("[data-copy-email]").forEach(item => item.addEventListener("click", () => { closeMenus(); copyEmail(); }));
  menu.querySelectorAll("[data-project-menu]").forEach(item => item.addEventListener("click", () => { const slug = item.dataset.projectMenu; closeMenus(); openProject(slug); }));
  menu.querySelectorAll("[data-view-mode]").forEach(item => item.addEventListener("click", () => {
    const recruiter = item.dataset.viewMode === "recruiter";
    document.body.classList.toggle("recruiter-mode", recruiter);
    closeMenus();
    if (recruiter) openWindow("start");
  }));
  menu.querySelectorAll("[data-action]").forEach(item => item.addEventListener("click", () => {
    if (item.dataset.action === "maximize" && activeWindow) activeWindow.classList.toggle("maximized");
    if (item.dataset.action === "minimize" && activeWindow) minimizeWindow(activeWindow);
    closeMenus();
  }));
}));

document.getElementById("restart").addEventListener("click", () => {
  localStorage.removeItem("shivanyaos-preview-booted");
  closeMenus();
  document.getElementById("boot").style.display = "grid";
  setTimeout(hideBoot, 920);
});

document.addEventListener("pointerdown", event => {
  if (!event.target.closest(".popover") && !event.target.closest(".menu-left")) closeMenus();
});

const palette = document.getElementById("palette");
const paletteInput = document.getElementById("palette-input");
const paletteItems = [
  { label: "Start here · 30-second view", hint: "Recruiter path", action: () => openWindow("start") },
  { label: "Show current work", hint: "Active processes", action: () => openWindow("activity") },
  { label: "Open SafeDesk", hint: "Current project", action: () => openProject("safedesk") },
  { label: "Open Custom Unix Shell", hint: "Project", action: () => openProject("unix-shell") },
  { label: "Open RouteWise", hint: "Project", action: () => openProject("routewise") },
  { label: "Open Nokia observability", hint: "Public-safe case study", action: () => openProject("nokia-observability") },
  { label: "Browse experience", hint: "Timeline", action: () => openByName("experience") },
  { label: "Open Teaching Assistant", hint: "CS 18000", action: () => openProject("teaching") },
  { label: "Open Health & Human Sciences", hint: "Public summary", action: () => openProject("hhs") },
  { label: "Browse Research Lab", hint: "Experiments", action: () => openByName("research") },
  { label: "Go to Human Stuff", hint: "Outside work", action: () => openWindow("human") },
  { label: "Browse Archive", hint: "Version history", action: () => openByName("archive") },
  { label: "Copy email", hint: EMAIL, action: copyEmail },
  { label: "Contact Shivanya", hint: "Mail", action: () => openWindow("mail") }
];

function filteredPaletteItems() {
  const query = paletteInput.value.toLowerCase();
  return paletteItems.filter(item => `${item.label} ${item.hint}`.toLowerCase().includes(query));
}

function renderPalette() {
  const items = filteredPaletteItems();
  paletteSelection = Math.min(paletteSelection, Math.max(0, items.length - 1));
  document.getElementById("palette-results").innerHTML = `<p>QUICK ROUTES</p>${items.map((item, index) => `<button data-palette="${index}" class="${index === paletteSelection ? "selected" : ""}"><span>↗</span><strong>${escapeHtml(item.label)}</strong><em>${escapeHtml(item.hint)}</em></button>`).join("")}`;
  document.querySelectorAll("[data-palette]").forEach(button => button.addEventListener("click", () => { items[Number(button.dataset.palette)].action(); closePalette(); }));
}

function openPalette() { closeMenus(); palette.hidden = false; paletteSelection = 0; renderPalette(); paletteInput.focus(); }
function closePalette() { palette.hidden = true; paletteInput.value = ""; }
paletteInput.addEventListener("input", () => { paletteSelection = 0; renderPalette(); });
palette.addEventListener("mousedown", event => { if (event.target === palette) closePalette(); });

document.addEventListener("keydown", event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); openPalette(); return; }
  if ((event.metaKey || event.ctrlKey) && event.key === "1") { event.preventDefault(); openWindow("start"); return; }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "a") { event.preventDefault(); openWindow("about"); return; }
  if (!palette.hidden && ["ArrowDown", "ArrowUp", "Enter"].includes(event.key)) {
    event.preventDefault();
    const items = filteredPaletteItems();
    if (event.key === "ArrowDown") paletteSelection = (paletteSelection + 1) % items.length;
    if (event.key === "ArrowUp") paletteSelection = (paletteSelection - 1 + items.length) % items.length;
    if (event.key === "Enter" && items[paletteSelection]) { items[paletteSelection].action(); closePalette(); return; }
    renderPalette();
  }
  if (event.key === "Escape") {
    if (!palette.hidden) closePalette();
    else if (!document.getElementById("system-menu").hidden || !document.getElementById("top-menu").hidden) closeMenus();
    else if (activeWindow) closeWindow(activeWindow);
  }
});

const mobileTitles = {
  start: "30-second view", about: "About", projects: "Featured Work", research: "Research Lab",
  experience: "Experience", human: "Human Stuff", archive: "Archive", contact: "Contact", activity: "Current Processes", project: "Project"
};

function mobileProjectCard(slug) {
  const project = projectData[slug];
  return `<button data-mobile-project="${slug}" class="mobile-list-card"><span>${project.kind === "research" ? "∿" : project.kind === "current" ? "⌁" : "↗"}</span><div><small>${escapeHtml(project.status)}</small><strong>${escapeHtml(project.title)}</strong><p>${escapeHtml(project.summary)}</p></div><i>›</i></button>`;
}

function mobileProjectTemplate(slug) {
  const project = allProject(slug);
  return `<div class="mobile-project-page" data-mobile-project-view="${slug}"><header class="kind-${project.kind}"><p>${escapeHtml(project.eyebrow)}</p><span>${escapeHtml(project.status)}</span><h1>${escapeHtml(project.title)}</h1><strong>${escapeHtml(project.hook)}</strong><small>${escapeHtml(project.period)}</small></header><div class="mobile-metrics">${project.metrics.map(metric => `<span>${escapeHtml(metric)}</span>`).join("")}</div>${visualForProject(slug)}<section class="mobile-project-sections">${project.sections.map((section,index) => `<article><small>${String(index + 1).padStart(2,"0")} · ${escapeHtml(section.title.toUpperCase())}</small><h2>${escapeHtml(section.title)}</h2><p>${escapeHtml(section.body)}</p>${section.bullets ? `<ul>${section.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}${section.takeaway ? `<blockquote>${escapeHtml(section.takeaway)}</blockquote>` : ""}</article>`).join("")}</section></div>`;
}

function mobileAppTemplate(name) {
  if (name === "start") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">RECRUITER FAST PATH</p><h1>The useful version, before the side quests.</h1><p>Backend and AI systems engineer focused on observability, reliability, developer tools, and explanations people can actually use.</p><div class="mobile-quick-facts"><span><small>BUILDING</small><strong>SafeDesk</strong>Permission model in progress</span><span><small>CURRENT</small><strong>Nokia observability</strong>Pipeline signals + failure visibility</span><span><small>FEATURED</small><strong>RouteWise</strong>52% lower inference cost</span><span><small>TEACHING</small><strong>CS 18000</strong>200+ students supported weekly</span></div><button class="mobile-primary" data-mobile-open="projects">View featured work ↗</button><button class="mobile-secondary" data-mobile-open="contact">Contact me</button></div>`;
  if (name === "about") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">SHIVANYA CHANDRA</p><h1>Systems → signals → understanding.</h1><p>I study Computer Science and Artificial Intelligence at Purdue, with a psychology minor that keeps me thinking about the human side of systems. I like technical work that becomes reliable, inspectable, and genuinely useful.</p><div class="mobile-info-cards"><article><small>HOW I THINK</small><strong>The system and the user’s mental model are both part of the product.</strong></article><article><small>WHY I BUILD</small><strong>I like turning invisible behavior into something a team can reason about.</strong></article><article><small>RIGHT NOW</small><strong>Safe desktop agents, observability, teaching, and occasionally touching grass.</strong></article></div></div>`;
  if (name === "projects") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">FEATURED · SWIPE THROUGH</p><h1>Current and representative work.</h1><div class="mobile-project-stack">${["safedesk","nokia-observability","routewise","unix-shell"].map(mobileProjectCard).join("")}</div></div>`;
  if (name === "research") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">RESEARCH LAB</p><h1>Questions, experiments, and measured results.</h1><div class="mobile-project-stack">${["rag-reliability","hazard-detection","robotic-arm"].map(mobileProjectCard).join("")}</div></div>`;
  if (name === "experience") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">EXPERIENCE</p><h1>The work behind the timeline.</h1><div class="mobile-timeline">${experienceTimeline.map(item => `<button data-mobile-project="${item.slug}"><small>${item.period}</small><span></span><div><strong>${item.title}</strong><p>${item.sub}</p></div><i>›</i></button>`).join("")}</div></div>`;
  if (name === "human") return `<div class="mobile-simple-page mobile-human-page"><p class="mobile-eyebrow">AFK, OCCASIONALLY</p><h1>Outside the Terminal</h1><p>Boxing, dance, gym, travel, and ordinary Purdue moments—the parts that are not supposed to become productivity metrics.</p><div class="mobile-human-grid">${[["🥊","Boxing","No tabs open."],["♪","Dance","Probably counting."],["↟","Gym","Tiny plates count."],["✈","Travel","Better snacks."],["P","Purdue","Labs + late walks."],["☕","Ordinary days","Usually the good bits."]].map(item => `<article><span>${item[0]}</span><strong>${item[1]}</strong><small>${item[2]}</small></article>`).join("")}</div><p class="mobile-photo-note">Photo slots remain intentionally empty until I choose real personal images to publish.</p></div>`;
  if (name === "archive") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">VERSION HISTORY</p><h1>Earlier projects still worth remembering.</h1><div class="mobile-project-stack">${archive.map(item => `<button data-mobile-project="${item.slug}" class="mobile-list-card"><span>⌂</span><div><small>${item.status}</small><strong>${item.title}</strong><p>${item.sub}</p></div><i>›</i></button>`).join("")}</div></div>`;
  if (name === "contact") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">DIRECT CONNECTIONS</p><h1>Let’s build something that explains itself.</h1><p>No form required. Pick the route that works for you.</p><div class="mobile-contact-links"><a href="mailto:${EMAIL}"><span>@</span><div><small>EMAIL</small><strong>${EMAIL}</strong></div></a><a href="https://github.com/shivanya-chandra" target="_blank" rel="noreferrer"><span>GH</span><div><small>GITHUB</small><strong>shivanya-chandra</strong></div></a><a href="https://linkedin.com/in/shivanya-chandra" target="_blank" rel="noreferrer"><span>in</span><div><small>LINKEDIN</small><strong>/in/shivanya-chandra</strong></div></a><button data-copy-email>Copy email address</button></div></div>`;
  if (name === "activity") return `<div class="mobile-simple-page"><p class="mobile-eyebrow">NOTIFICATION CENTER</p><h1>Current processes</h1><div class="mobile-notification-list"><button data-mobile-project="safedesk"><span>⌁</span><div><strong>SafeDesk</strong><p>Permission model updated</p></div></button><button data-mobile-project="teaching"><span>{ }</span><div><strong>Teaching</strong><p>Student successfully defeated recursion</p></div></button><button data-mobile-open="human"><span>✦</span><div><strong>Human Stuff</strong><p>Screen time exceeded. Go boxing.</p></div></button><button data-mobile-open="start"><span>↗</span><div><strong>Portfolio</strong><p>Recruiter fast path ready</p></div></button></div></div>`;
  return "";
}

function attachMobileContent() {
  const content = document.getElementById("mobile-app-content");
  content.querySelectorAll("[data-mobile-open]").forEach(button => button.addEventListener("click", () => openMobileApp(button.dataset.mobileOpen)));
  content.querySelectorAll("[data-mobile-project]").forEach(button => button.addEventListener("click", () => openMobileProject(button.dataset.mobileProject)));
  content.querySelectorAll("[data-copy-email]").forEach(button => button.addEventListener("click", copyEmail));
  content.querySelectorAll("[data-safe-action]").forEach(button => button.addEventListener("click", () => runSafeDeskDemo(button.dataset.safeAction, content)));
  content.querySelectorAll("[data-teaching-issue]").forEach(button => button.addEventListener("click", () => runTeachingDemo(button.dataset.teachingIssue, content)));
  const pid = content.querySelector("#pid-toggle");
  if (pid) pid.addEventListener("change", () => updatePidDemo(pid, content));
}

function showMobileView(title, html) {
  document.getElementById("mobile-home").hidden = true;
  const view = document.getElementById("mobile-app-view");
  view.hidden = false;
  document.getElementById("mobile-app-title").textContent = title;
  document.getElementById("mobile-app-content").innerHTML = html;
  view.scrollTop = 0;
  attachMobileContent();
}

function openMobileApp(name) { showMobileView(mobileTitles[name] || name, mobileAppTemplate(name)); }
function openMobileProject(slug) { const project = allProject(slug); if (project) showMobileView(project.title, mobileProjectTemplate(slug)); }
function closeMobileApp() { document.getElementById("mobile-app-view").hidden = true; document.getElementById("mobile-home").hidden = false; document.getElementById("mobile-os").scrollTop = 0; }

document.querySelectorAll("[data-mobile-open]").forEach(button => button.addEventListener("click", () => openMobileApp(button.dataset.mobileOpen)));
document.querySelectorAll("[data-mobile-project]").forEach(button => button.addEventListener("click", () => openMobileProject(button.dataset.mobileProject)));
document.getElementById("mobile-back").addEventListener("click", closeMobileApp);
document.getElementById("mobile-home-button").addEventListener("click", closeMobileApp);

function hideBoot() {
  document.getElementById("boot").style.display = "none";
  localStorage.setItem("shivanyaos-preview-booted", "true");
}

document.getElementById("skip-boot").addEventListener("click", hideBoot);
setTimeout(hideBoot, localStorage.getItem("shivanyaos-preview-booted") ? 100 : 920);
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(now);
  document.getElementById("mobile-clock").textContent = new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(now);
  document.getElementById("mobile-date").textContent = new Intl.DateTimeFormat(undefined, { weekday: "long", month: "long", day: "numeric" }).format(now);
}
updateClock();
setInterval(updateClock, 30000);
openWindow("home");
