"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, PointerEvent as ReactPointerEvent, ReactNode } from "react";

type AppId = "about" | "finder" | "activity" | "notes" | "terminal" | "resume" | "mail" | "project";
type WindowMode = "open" | "minimized" | "maximized";
type ProjectKind = "personal" | "case-study" | "research" | "current" | "experience" | "archive";

type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  kind: ProjectKind;
  status: string;
  date: string;
  technologies: string[];
  metrics?: string[];
  sections: { title: string; body: string; bullets?: string[] }[];
};

type WindowState = {
  id: string;
  appId: AppId;
  title: string;
  projectSlug?: string;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  mode: WindowMode;
};

const projects: Project[] = [
  {
    slug: "nokia-observability",
    title: "AI Pipeline Observability",
    eyebrow: "Nokia · Sanitized internship case study",
    summary: "A reusable, OpenTelemetry-ready visibility layer for understanding where multi-stage AI workflows slow down, fail, or stop making progress.",
    kind: "case-study",
    status: "In progress",
    date: "Summer 2026",
    technologies: ["Python", "OpenTelemetry", "Backend systems", "Observability"],
    metrics: ["15+ lifecycle states", "10+ health signals", "30-second failure visibility"],
    sections: [
      { title: "Overview", body: "Multi-service AI workflows can fail across boundaries without making it obvious where processing stopped. I designed a shared observability approach that records lifecycle transitions, correlates health signals, and prepares application events for portable traces and metrics." },
      { title: "The visibility problem", body: "Service-local records could describe isolated activity, but not the path of one workflow from entry to completion.", bullets: ["Progress needed a consistent language across services", "Healthy infrastructure did not always mean healthy work", "Stalled operations needed to be distinguishable from slow operations"] },
      { title: "What I designed", body: "A reusable lifecycle model and instrumentation layer for stage transitions, timing, failures, retries, and operational health. The public view intentionally abstracts internal names, endpoints, schemas, and company architecture." },
      { title: "Failure detection", body: "Timestamps, heartbeats, retry markers, error signals, and stage-duration checks make unhealthy or stalled workflows visible without exposing proprietary implementation details." },
      { title: "Impact & learnings", body: "The framework turns scattered application signals into a production-triage story while keeping telemetry OpenTelemetry-compatible and backend-independent." },
    ],
  },
  {
    slug: "routewise",
    title: "RouteWise",
    eyebrow: "Cost-aware LLM routing gateway",
    summary: "Routes each request to the least expensive model that can answer it well, with semantic caching, compression, evaluation, and quality-based fallback.",
    kind: "personal",
    status: "Completed",
    date: "Sep - Dec 2025",
    technologies: ["Python", "FastAPI", "LiteLLM", "Redis", "PostgreSQL"],
    metrics: ["10K+ requests", "52% lower inference cost", "41% fewer prompt tokens", "90%+ answer quality"],
    sections: [
      { title: "Overview", body: "RouteWise treats model choice as an engineering decision instead of a default. Requests move through cache lookup, prompt analysis, compression, dynamic routing, and quality evaluation." },
      { title: "Architecture", body: "Request → semantic cache → prompt analysis → compression → model router → quality evaluator → return or escalate.", bullets: ["Cache hits bypass new inference", "Complexity and quality needs inform routing", "Failed evaluations escalate to a stronger model", "Cost, latency, and token use are recorded"] },
      { title: "How it works", body: "Straightforward prompts use smaller local or hosted models. Ambiguous or demanding prompts move upward. Responses that miss quality thresholds automatically retry with a stronger route." },
      { title: "Hard parts", body: "The difficult part was not choosing a cheap model; it was defining when cheap stopped being good enough and making fallback behavior measurable rather than hopeful." },
      { title: "Results", body: "Across more than 10,000 routed requests, the gateway reduced inference cost and prompt volume while preserving the answer-quality target reported in my résumé." },
    ],
  },
  {
    slug: "unix-shell",
    title: "Custom Unix Shell",
    eyebrow: "Systems programming · C/C++",
    summary: "A Unix-style shell built with Flex, Bison, and POSIX APIs to make process creation, pipes, signals, redirection, and job control tangible.",
    kind: "personal",
    status: "Completed",
    date: "Mar - Jul 2026",
    technologies: ["C", "C++", "POSIX", "Flex", "Bison", "GDB", "Valgrind"],
    metrics: ["15+ shell features", "10+ POSIX calls", "6+ redirection modes", "96%+ tests"],
    sections: [
      { title: "Overview", body: "Commands move from tokenization and parsing into a command table, then through built-ins or fork/exec, pipes, redirects, background jobs, process groups, and exit handling." },
      { title: "Architecture", body: "Input → Flex tokenizer → Bison parser → command table → built-in or fork/exec → pipes, redirects, and background jobs → process groups and signals." },
      { title: "How it works", body: "The shell creates a process for each pipeline stage, wires file descriptors with dup2(), closes every unused pipe end, and keeps foreground signals separate from the shell itself." },
      { title: "Hard parts", body: "File descriptors are invisible until one stays open. Signal behavior is simple until a foreground child, background job, and shell all believe Ctrl+C belongs to them." },
      { title: "Results", body: "Implemented multi-command pipelines, signal-safe foreground/background control, history, expansion, and redirection; validated with GDB, Valgrind, and the project test suite." },
    ],
  },
  {
    slug: "rag-reliability",
    title: "RAG Reliability Evaluation",
    eyebrow: "Artificial intelligence research · Purdue",
    summary: "An experimental framework for measuring retrieval precision, answer faithfulness, citation reliability, and hallucination across RAG configurations.",
    kind: "research",
    status: "Completed",
    date: "Aug - Dec 2025",
    technologies: ["RAG", "Evaluation", "Embeddings", "Reranking", "Python"],
    metrics: ["4,800 responses", "1,200 QA pairs", "0.61 → 0.84 context precision", "70% less manual QA"],
    sections: [
      { title: "Research question", body: "Which combinations of chunking, retrieval, reranking, and prompting produce answers that are not only relevant, but faithful and correctly cited?" },
      { title: "Methodology", body: "I varied chunk size, overlap, embedding models, top-k retrieval, reranking strategy, prompt format, and citation requirements across a controlled QA set." },
      { title: "Experimental pipeline", body: "Documents → chunking → embeddings → vector index → retrieval → optional reranking → prompt construction → generation → precision, faithfulness, citation, and hallucination evaluation." },
      { title: "Results", body: "The best configurations improved context precision from 0.61 to 0.84 and reduced manual QA review time by 70% across 4,800 generated responses." },
      { title: "Limitations", body: "Metric gains do not automatically imply usefulness. Evaluation still needs representative questions, careful citation checks, and targeted human review." },
      { title: "What I learned", body: "Retrieval quality and answer quality are related, not interchangeable. A confident answer can still be unsupported, and a relevant passage can still be used incorrectly." },
    ],
  },
  {
    slug: "hazard-detection",
    title: "Real-Time Hazard Detection",
    eyebrow: "Machine learning research · Purdue",
    summary: "A reliability-aware hazard pipeline that combines model confidence with signal validity, zone criticality, and device health.",
    kind: "research",
    status: "Completed",
    date: "Jan - Apr 2025",
    technologies: ["Machine learning", "IoT", "Anomaly detection", "Reliability"],
    metrics: ["15K+ events/hour", "<2s p95", "0.89 hazard F1", "32% fewer false alerts"],
    sections: [
      { title: "Research question", body: "How should a real-time hazard system behave when the sensor reporting danger may itself be unreliable?" },
      { title: "Methodology", body: "Combined classifier and anomaly outputs with confidence scoring, signal validation, location criticality, and device-health context." },
      { title: "Experimental pipeline", body: "Sensor streams → validation → feature windows → classifier and anomaly detector → confidence and device-health scoring → alert decision." },
      { title: "Results", body: "Reached 0.89 hazard F1 under two-second p95 latency, cut false alerts by 32%, and improved visibility into sensor reliability by 40%." },
      { title: "Limitations", body: "A reliability-aware alert can reduce noise, but no single confidence threshold generalizes across every zone, sensor type, and failure mode." },
      { title: "What I learned", body: "An anomaly is not automatically a hazard. Reliable decisions require evidence about both the environment and the instrument observing it." },
    ],
  },
  {
    slug: "robotic-arm",
    title: "Robotic Arm Planning & Control",
    eyebrow: "Undergraduate research · Purdue",
    summary: "Motion planning, inverse kinematics, and PID control combined into an autonomous pick-and-place trajectory pipeline.",
    kind: "research",
    status: "Completed",
    date: "Aug - Dec 2024",
    technologies: ["RRT*", "Inverse kinematics", "PID control", "Robotics"],
    metrics: ["95%+ successful trials", "Reduced oscillation", "Planning → control pipeline"],
    sections: [
      { title: "Research question", body: "How can a robot move from a valid planned path to stable physical execution without losing the intent of the plan?" },
      { title: "Methodology", body: "Used RRT* for planning, spatial data structures for collision checks, interpolation for waypoints, inverse kinematics for joint targets, and PID tuning for execution." },
      { title: "Experimental pipeline", body: "Start and goal pose → RRT* → waypoints → inverse kinematics → joint targets → PID control → execution → trajectory analysis and retuning." },
      { title: "Results", body: "Reduced oscillation and achieved more than 95% successful pick-and-place trajectories in the reported trials." },
      { title: "Limitations", body: "Success depends on environment assumptions, calibration, collision models, and the controller’s ability to absorb real-world error." },
      { title: "What I learned", body: "Planning asks where the arm should go, kinematics asks what joint angles can reach it, and control decides whether the physical system gets there gracefully." },
    ],
  },
  {
    slug: "safedesk",
    title: "SafeDesk",
    eyebrow: "AI agent security desktop",
    summary: "A controlled desktop where AI agents can be useful without receiving unrestricted access to files, browsers, email, code, or your afternoon.",
    kind: "current",
    status: "Architecture & development",
    date: "Currently building",
    technologies: ["AI agents", "Security", "Policy engines", "Sandboxing"],
    sections: [
      { title: "Overview", body: "Enough access to be useful, but not enough access to ruin your afternoon." },
      { title: "Architecture", body: "User intent → agent planner → policy engine → sandboxed desktop → tool gateway → checkpoint and audit layer.", bullets: ["Scoped permissions", "Information-flow labels", "Prompt-injection detection", "Action approval levels", "Rollback checkpoints", "Adversarial evaluation"] },
      { title: "How it works", body: "Every proposed action passes through policy and scope checks before touching a tool. Sensitive operations can pause for approval, while checkpoints make behavior inspectable and recoverable." },
      { title: "Hard parts", body: "Useful agents need context and capability; safe agents need boundaries. The design problem is granting exactly enough of both without trusting the model to police itself." },
      { title: "What comes next", body: "Build the minimum sandbox, tool gateway, and audit trail first; then expand to hostile test environments and structured adversarial evaluation." },
    ],
  },
  {
    slug: "shivanyaos",
    title: "ShivanyaOS",
    eyebrow: "Interactive personal portfolio",
    summary: "The operating system you are currently exploring: professional information in 30 seconds, personality and technical depth whenever curiosity wins.",
    kind: "current",
    status: "Currently building",
    date: "Now",
    technologies: ["TypeScript", "Interface systems", "Accessibility", "Storytelling"],
    sections: [
      { title: "Overview", body: "Not a website pretending to be an operating system—an operating system built around my career, projects, research, and current goals." },
      { title: "Architecture", body: "A responsive desktop shell, app registry, window manager, project templates, recruiter-first navigation, and direct résumé/contact paths." },
      { title: "How it works", body: "Desktop visitors can explore overlapping apps; mobile visitors receive a focused home screen and full-page app views. Important content remains accessible without dragging." },
      { title: "Hard parts", body: "The interface must be playful without turning essential information into a scavenger hunt." },
      { title: "What comes next", body: "Route-backed windows, polished project diagrams, a small set of hard-won engineering notes, and careful motion that respects reduced-motion preferences." },
    ],
  },
];

const experienceProjects: Project[] = [
  { slug: "genpact", title: "Workflow Systems at Genpact", eyebrow: "Software engineering internship", summary: "A Spring/Kafka workflow platform for high-volume invoice, claims, vendor, and compliance events.", kind: "experience", status: "Completed", date: "Summer 2025", technologies: ["Java", "Spring", "Kafka", "Workflow systems"], metrics: ["120K+ events", "55% less manual routing", "3.2 → 1.4 day resolution"], sections: [{ title: "Public snapshot", body: "Shipped workflow infrastructure with SLA-aware routing, duplicate detection, audit logging, and AI-assisted case resolution." }] },
  { slug: "hhs", title: "Health & Human Sciences Systems", eyebrow: "Software engineering internship · Purdue", summary: "Study-setup and grading workflows designed to remove repetitive access fixes and unnecessary review effort.", kind: "experience", status: "Completed", date: "Oct 2024 - May 2026", technologies: ["Backend workflows", "LLM evaluation", "Automation"], metrics: ["1,000+ monthly records", "3-4 hours saved/week", "40% less review effort"], sections: [{ title: "Public snapshot", body: "Reworked participant study setup and built rubric-based grading support that reduced staff effort and API spend." }] },
  { slug: "teaching", title: "CS 180 Teaching Assistant", eyebrow: "Purdue · Object-oriented programming in Java", summary: "Labs, office hours, assignment review, and recurring-bug diagnosis for introductory Java students.", kind: "experience", status: "Completed", date: "Aug 2024 - May 2026", technologies: ["Java", "OOP", "Debugging", "Teaching"], metrics: ["20+ students", "100+ assignments/semester"], sections: [{ title: "Public snapshot", body: "Led labs and office hours, reviewed student work, and turned recurring implementation mistakes into clearer debugging guidance." }] },
];

const archiveProjects: Project[] = [
  { slug: "applywise", title: "ApplyWise", eyebrow: "AI college matching platform", summary: "Personalized college rankings using academic, financial, essay, and preference-based signals.", kind: "archive", status: "Retired, not forgotten", date: "Earlier build", technologies: ["AI", "Ranking", "Product"], sections: [{ title: "What I built", body: "An evolution of an earlier college-filtering idea into an AI-assisted ranking experience." }, { title: "What I learned", body: "Revisiting an old problem can show growth more honestly than pretending the first version never happened." }] },
  { slug: "college-apps", title: "Navigating College Applications", eyebrow: "Java college filtering tool", summary: "An earlier attempt to simplify college research using scores, expenses, essays, and extracurricular criteria.", kind: "archive", status: "The project before the project became intelligent", date: "v1", technologies: ["Java", "Filtering", "Education"], sections: [{ title: "Original goal", body: "Make a difficult research process less overwhelming through structured filters." }, { title: "What I learned", body: "Useful recommendations need more than filters; they need a model of what the user actually values." }] },
  { slug: "trainher", title: "TrainHer", eyebrow: "Camera-assisted self-defense training", summary: "Guided drills, tutorials, progress tracking, and movement feedback for beginner self-defense practice.", kind: "archive", status: "2nd place hackathon project", date: "Earlier build", technologies: ["Firebase", "Computer vision", "Mobile"], sections: [{ title: "What I built", body: "A camera-assisted training application created within a hackathon timeline." }, { title: "What I learned", body: "A focused problem, clear audience, and working demonstration can matter more than feature count." }] },
  { slug: "boilerfind", title: "BoilerFind", eyebrow: "Purdue mentor matching", summary: "Matched students and mentors by interests and academic preferences with authenticated Purdue flows.", kind: "archive", status: "Archived", date: "Earlier build", technologies: ["Matching", "Authentication", "Backend"], sections: [{ title: "What I built", body: "A mentor-matching system grounded in academic interests and Purdue identity." }, { title: "What I learned", body: "Matching quality depends on the questions a product asks before it starts scoring people." }] },
  { slug: "marketlearn", title: "MarketLearn", eyebrow: "Earlier résumé project", summary: "An archived product experiment preserved as part of the path to the systems and AI work I do now.", kind: "archive", status: "Archived", date: "Earlier build", technologies: ["Product", "Learning", "Iteration"], sections: [{ title: "Original goal", body: "Explore a practical problem through a small working product." }, { title: "What I learned", body: "Every archived build left behind a sharper question for the next one." }] },
];

const allProjects = [...projects, ...experienceProjects, ...archiveProjects];

const appMeta: Record<Exclude<AppId, "project">, { title: string; icon: string; className: string; size: [number, number] }> = {
  about: { title: "About This Shivanya", icon: "SC", className: "icon-about", size: [700, 560] },
  finder: { title: "Finder", icon: "⌁", className: "icon-finder", size: [940, 650] },
  activity: { title: "Activity Monitor", icon: "⌁", className: "icon-activity", size: [760, 570] },
  notes: { title: "Eventually, This Made Sense", icon: "≡", className: "icon-notes", size: [760, 600] },
  terminal: { title: "Terminal", icon: ">_", className: "icon-terminal", size: [720, 500] },
  resume: { title: "Shivanya_Resume.pdf", icon: "PDF", className: "icon-resume", size: [820, 700] },
  mail: { title: "Mail Shivanya", icon: "↗", className: "icon-mail", size: [720, 600] },
};

const initialWindow: WindowState = { id: "about", appId: "about", title: "About This Shivanya", x: 320, y: 104, width: 700, height: 560, z: 2, mode: "open" };

export default function Home() {
  const [booting, setBooting] = useState(true);
  const [windows, setWindows] = useState<WindowState[]>([initialWindow]);
  const [activeId, setActiveId] = useState("about");
  const [finderSection, setFinderSection] = useState("Featured");
  const [systemMenu, setSystemMenu] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [paletteQuery, setPaletteQuery] = useState("");
  const [terminalLines, setTerminalLines] = useState<string[]>(["ShivanyaOS Terminal · type ‘help’ to begin."]);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const returning = window.localStorage.getItem("shivanyaos-booted");
    const timer = window.setTimeout(() => {
      setBooting(false);
      window.localStorage.setItem("shivanyaos-booted", "true");
    }, returning ? 120 : 920);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const update = () => setClock(new Intl.DateTimeFormat(undefined, { hour: "numeric", minute: "2-digit" }).format(new Date()));
    update();
    const timer = window.setInterval(update, 30000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((value) => !value);
      }
      if (event.key === "Escape") {
        if (paletteOpen) setPaletteOpen(false);
        else if (activeId) closeWindow(activeId);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeId, paletteOpen]);

  const highestZ = () => Math.max(2, ...windows.map((item) => item.z));

  const focusWindow = (id: string) => {
    setWindows((current) => current.map((item) => item.id === id ? { ...item, z: highestZ() + 1, mode: item.mode === "minimized" ? "open" : item.mode } : item));
    setActiveId(id);
  };

  const openApp = (appId: Exclude<AppId, "project">) => {
    const existing = windows.find((item) => item.id === appId);
    if (existing) return focusWindow(existing.id);
    const meta = appMeta[appId];
    const offset = (windows.length % 5) * 24;
    const id = appId;
    setWindows((current) => [...current, { id, appId, title: meta.title, x: 250 + offset, y: 88 + offset, width: meta.size[0], height: meta.size[1], z: highestZ() + 1, mode: "open" }]);
    setActiveId(id);
    setSystemMenu(false);
    window.history.replaceState(null, "", `#/${appId === "finder" ? "projects" : appId}`);
  };

  const openProject = (slug: string) => {
    const project = allProjects.find((item) => item.slug === slug);
    if (!project) return;
    const id = `project-${slug}`;
    const existing = windows.find((item) => item.id === id);
    if (existing) return focusWindow(id);
    const offset = (windows.length % 4) * 22;
    setWindows((current) => [...current, { id, appId: "project", title: project.title, projectSlug: slug, x: 190 + offset, y: 72 + offset, width: 980, height: 680, z: highestZ() + 1, mode: "open" }]);
    setActiveId(id);
    window.history.replaceState(null, "", `#/projects/${slug}`);
  };

  const closeWindow = (id: string) => {
    setWindows((current) => current.filter((item) => item.id !== id));
    setActiveId((current) => current === id ? "" : current);
    window.history.replaceState(null, "", "#/");
  };

  const setMode = (id: string, mode: WindowMode) => {
    setWindows((current) => current.map((item) => item.id === id ? { ...item, mode: item.mode === "maximized" && mode === "maximized" ? "open" : mode } : item));
  };

  const moveWindow = (id: string, x: number, y: number) => {
    setWindows((current) => current.map((item) => item.id === id ? { ...item, x: Math.max(8, x), y: Math.max(46, y) } : item));
  };

  const restart = () => {
    window.localStorage.removeItem("shivanyaos-booted");
    setSystemMenu(false);
    setBooting(true);
    window.setTimeout(() => {
      setBooting(false);
      window.localStorage.setItem("shivanyaos-booted", "true");
    }, 920);
  };

  const finderItems = useMemo(() => {
    if (finderSection === "Featured") return projects.filter((item) => ["nokia-observability", "routewise", "unix-shell", "rag-reliability"].includes(item.slug));
    if (finderSection === "Currently Building") return projects.filter((item) => item.kind === "current");
    if (finderSection === "Experience") return [projects[0], ...experienceProjects];
    if (finderSection === "Research Lab") return projects.filter((item) => item.kind === "research");
    return archiveProjects;
  }, [finderSection]);

  const paletteItems = [
    { label: "View featured projects", hint: "Finder", action: () => { setFinderSection("Featured"); openApp("finder"); } },
    { label: "Open SafeDesk", hint: "Currently building", action: () => openProject("safedesk") },
    { label: "Read the RouteWise case study", hint: "Project", action: () => openProject("routewise") },
    { label: "Preview résumé", hint: "PDF", action: () => openApp("resume") },
    { label: "Contact Shivanya", hint: "Mail", action: () => openApp("mail") },
  ].filter((item) => item.label.toLowerCase().includes(paletteQuery.toLowerCase()));

  const runTerminalCommand = (command: string) => {
    const normalized = command.trim().toLowerCase();
    let response = "Command not found. Try ‘help’.";
    if (normalized === "help") response = "about · projects · experience · research · current · resume · contact · clear · git status · sudo hire-shivanya";
    if (normalized === "about" || normalized === "whoami") { response = "Shivanya: software engineer, AI student, systems enthusiast, and frequent investigator of why the cache is wrong."; openApp("about"); }
    if (normalized === "projects" || normalized === "open projects") { response = "Opening Finder…"; setFinderSection("Featured"); openApp("finder"); }
    if (normalized === "experience") { response = "Opening résumé-verified experience…"; setFinderSection("Experience"); openApp("finder"); }
    if (normalized === "research") { response = "Opening Research Lab…"; setFinderSection("Research Lab"); openApp("finder"); }
    if (normalized === "current") { response = "SafeDesk and ShivanyaOS are currently building."; setFinderSection("Currently Building"); openApp("finder"); }
    if (normalized === "resume") { response = "Opening Shivanya_Resume.pdf…"; openApp("resume"); }
    if (normalized === "contact" || normalized === "sudo hire-shivanya") { response = normalized.startsWith("sudo") ? "Permission granted. Opening contact application…" : "Opening Mail…"; openApp("mail"); }
    if (normalized === "git status") response = "On branch building-better-systems\nmodified: sleep_schedule\nuntracked: new_project_idea_47";
    if (normalized === "clear") return setTerminalLines([]);
    setTerminalLines((lines) => [...lines, `$ ${command}`, response]);
  };

  return (
    <main className="os-root">
      {booting && <BootScreen onSkip={() => setBooting(false)} />}

      <header className="menu-bar">
        <div className="menu-left">
          <button className="brand-menu" onClick={() => setSystemMenu((value) => !value)} aria-expanded={systemMenu}>◉ <strong>ShivanyaOS</strong></button>
          <button onClick={() => setFinderSection("Featured")}>File</button>
          <button onClick={() => setMode(activeId, "maximized")}>View</button>
          <button onClick={() => setPaletteOpen(true)}>Navigate</button>
          <button onClick={() => openApp("about")}>Help</button>
        </div>
        <div className="current-process"><span className="status-dot" /> Current process: Building systems that explain themselves</div>
        <div className="menu-right"><span>Purdue</span><span className="availability">Available for 2027 opportunities</span><strong>{clock}</strong></div>
        {systemMenu && (
          <div className="system-menu popover">
            <button onClick={() => openApp("about")}><span>About This Shivanya</span><kbd>⌘ A</kbd></button>
            <button onClick={() => openApp("activity")}><span>System Information</span></button>
            <a href="/Shivanya_Resume.pdf" download>Download Resume <span>↧</span></a>
            <div className="menu-separator" />
            <button onClick={restart}><span>Restart Portfolio</span></button>
          </div>
        )}
      </header>

      <section className="desktop" aria-label="ShivanyaOS desktop">
        <Wallpaper />
        <div className="desktop-icons">
          <DesktopIcon label="Projects" icon="⌁" tone="lavender" onOpen={() => { setFinderSection("Featured"); openApp("finder"); }} />
          <DesktopIcon label="Research Lab" icon="∿" tone="mint" onOpen={() => { setFinderSection("Research Lab"); openApp("finder"); }} />
          <DesktopIcon label="Archive" icon="⌂" tone="yellow" onOpen={() => { setFinderSection("Archive"); openApp("finder"); }} />
          <DesktopIcon label="Shivanya_Resume.pdf" icon="PDF" tone="coral" onOpen={() => openApp("resume")} />
        </div>

        <div className="windows-layer">
          {windows.filter((item) => item.mode !== "minimized").sort((a, b) => a.z - b.z).map((item) => (
            <OSWindow key={item.id} state={item} active={activeId === item.id} onFocus={() => focusWindow(item.id)} onClose={() => closeWindow(item.id)} onMinimize={() => setMode(item.id, "minimized")} onMaximize={() => setMode(item.id, "maximized")} onMove={(x, y) => moveWindow(item.id, x, y)}>
              {item.appId === "about" && <AboutApp openApp={openApp} openFinder={() => { setFinderSection("Featured"); openApp("finder"); }} />}
              {item.appId === "finder" && <FinderApp section={finderSection} setSection={setFinderSection} items={finderItems} openProject={openProject} />}
              {item.appId === "activity" && <ActivityApp openProject={openProject} />}
              {item.appId === "notes" && <NotesApp />}
              {item.appId === "terminal" && <TerminalApp lines={terminalLines} run={runTerminalCommand} />}
              {item.appId === "resume" && <ResumeApp />}
              {item.appId === "mail" && <MailApp />}
              {item.appId === "project" && item.projectSlug && <ProjectApp project={allProjects.find((project) => project.slug === item.projectSlug)!} />}
            </OSWindow>
          ))}
        </div>

        <nav className="dock" aria-label="Applications">
          {(Object.keys(appMeta) as Exclude<AppId, "project">[]).map((appId) => {
            const meta = appMeta[appId];
            const isOpen = windows.some((item) => item.appId === appId);
            return <button key={appId} className={`dock-item ${isOpen ? "is-open" : ""}`} onClick={() => openApp(appId)} aria-label={`Open ${meta.title}`} data-tooltip={meta.title}><span className={`app-icon ${meta.className}`}>{meta.icon}</span></button>;
          })}
        </nav>
      </section>

      {paletteOpen && <CommandPalette query={paletteQuery} setQuery={setPaletteQuery} items={paletteItems} close={() => setPaletteOpen(false)} />}
    </main>
  );
}

function BootScreen({ onSkip }: { onSkip: () => void }) {
  return <div className="boot-screen" role="dialog" aria-label="Starting ShivanyaOS"><div className="boot-card"><div className="boot-logo">SC</div><h1>Starting ShivanyaOS<span className="blink">_</span></h1><div className="boot-lines"><p>Loading systems engineering <span>done</span></p><p>Loading artificial intelligence <span>done</span></p><p>Loading research experiments <span>done</span></p><p>Loading several side quests <span>done</span></p><p>Checking reasonable workload <span className="warning">failed</span></p></div><div className="boot-progress"><i /></div><button onClick={onSkip}>Skip boot ↗</button></div></div>;
}

function Wallpaper() {
  return <div className="wallpaper" aria-hidden="true"><div className="grain" /><div className="network-line line-a" /><div className="network-line line-b" /><div className="network-line line-c" /><div className="wall-node node-systems"><i />Systems</div><div className="wall-node node-ai"><i />AI</div><div className="wall-node node-observe"><i />Observability</div><div className="wall-node node-teach"><i />Teaching</div><div className="wall-node node-human"><i />Human stuff</div><span className="wall-caption">systems → signals → understanding</span></div>;
}

function DesktopIcon({ label, icon, tone, onOpen }: { label: string; icon: string; tone: string; onOpen: () => void }) {
  return <button className="desktop-icon" onDoubleClick={onOpen} onClick={onOpen} aria-label={`Open ${label}`}><span className={`desktop-icon-art ${tone}`}>{icon}</span><span>{label}</span></button>;
}

function OSWindow({ state, active, onFocus, onClose, onMinimize, onMaximize, onMove, children }: { state: WindowState; active: boolean; onFocus: () => void; onClose: () => void; onMinimize: () => void; onMaximize: () => void; onMove: (x: number, y: number) => void; children: ReactNode }) {
  const drag = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null);
  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (state.mode === "maximized" || window.innerWidth < 760) return;
    drag.current = { startX: event.clientX, startY: event.clientY, originX: state.x, originY: state.y };
    event.currentTarget.setPointerCapture(event.pointerId);
    onFocus();
  };
  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!drag.current) return;
    onMove(drag.current.originX + event.clientX - drag.current.startX, drag.current.originY + event.clientY - drag.current.startY);
  };
  const onPointerUp = () => { drag.current = null; };
  return <article className={`os-window ${active ? "active" : ""} ${state.mode === "maximized" ? "maximized" : ""}`} style={state.mode === "maximized" ? { zIndex: state.z } : { left: state.x, top: state.y, width: state.width, height: state.height, zIndex: state.z }} onPointerDown={onFocus} aria-label={`${state.title} window`}>
    <div className="title-bar" onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerUp={onPointerUp} onDoubleClick={onMaximize}>
      <div className="traffic-lights"><button className="close" onClick={(event) => { event.stopPropagation(); onClose(); }} aria-label={`Close ${state.title} window`} /><button className="minimize" onClick={(event) => { event.stopPropagation(); onMinimize(); }} aria-label={`Minimize ${state.title} window`} /><button className="maximize" onClick={(event) => { event.stopPropagation(); onMaximize(); }} aria-label={`Maximize ${state.title} window`} /></div>
      <strong>{state.title}</strong><span className="title-status">{active ? "active" : ""}</span>
    </div>
    <div className="window-body">{children}</div>
  </article>;
}

function AboutApp({ openApp, openFinder }: { openApp: (id: Exclude<AppId, "project">) => void; openFinder: () => void }) {
  return <div className="about-app"><div className="about-hero"><div className="portrait-mark"><span>SC</span><i>operational</i></div><div><p className="eyebrow">Hello, I’m</p><h1>Shivanya Chandra<span>.</span></h1><p className="role-line">Computer Science + Artificial Intelligence at Purdue</p><p className="about-lede">I build backend and AI systems, then make their behavior easier to inspect, debug, and trust.</p><div className="hero-actions"><button className="primary-button" onClick={openFinder}>View projects <span>↗</span></button><a className="secondary-button" href="/Shivanya_Resume.pdf" download>Download résumé <span>↓</span></a><button className="text-button" onClick={() => openApp("mail")}>Contact me</button></div></div></div><div className="about-grid"><section><p className="section-kicker">SYSTEM INFORMATION</p><dl className="system-list"><div><dt>Current status</dt><dd><span className="status-dot" /> Operational</dd></div><div><dt>Current location</dt><dd>Purdue University</dd></div><div><dt>Primary interests</dt><dd>Backend · AI systems · Developer tools</dd></div><div><dt>Side processes</dt><dd>Boxing · Dance · Gym</dd></div></dl></section><section className="witty-specs"><p className="section-kicker">HARDWARE, ALLEGEDLY</p><dl><div><dt>Processor</dt><dd>Curiosity-driven</dd></div><div><dt>Open tabs</dt><dd>Unreasonable</dd></div><div><dt>Retry policy</dt><dd>Persistent</dd></div><div><dt>Current branch</dt><dd>building-better-systems</dd></div></dl></section></div><footer className="about-footer"><span>Available for Summer 2027 opportunities</span><span>Version 2027.0</span></footer></div>;
}

function FinderApp({ section, setSection, items, openProject }: { section: string; setSection: (value: string) => void; items: Project[]; openProject: (slug: string) => void }) {
  const sections = ["Featured", "Currently Building", "Experience", "Research Lab", "Archive"];
  return <div className="finder-app"><aside className="finder-sidebar"><div className="sidebar-title"><span className="drive-icon">S</span><div><strong>Shivanya HD</strong><small>Career drive · 2027</small></div></div><p>FAVORITES</p>{sections.map((item) => <button key={item} className={section === item ? "selected" : ""} onClick={() => setSection(item)}><span>{item === "Featured" ? "★" : item === "Currently Building" ? "◌" : item === "Experience" ? "▣" : item === "Research Lab" ? "∿" : "⌂"}</span>{item}<em>{item === "Featured" ? 4 : item === "Currently Building" ? 2 : item === "Experience" ? 4 : item === "Research Lab" ? 3 : 5}</em></button>)}<p>CATEGORIES</p><div className="tag-cloud"><span>AI systems</span><span>Backend</span><span>Research</span><span>Systems</span></div><div className="storage-meter"><div><span>Curiosity used</span><b>84%</b></div><i><em /></i></div></aside><section className="finder-content"><header><div><p className="eyebrow">SHIVANYA HD /</p><h2>{section}</h2></div><div className="view-toggle"><button aria-label="Grid view" className="active">▦</button><button aria-label="List view">☰</button></div></header>{section === "Featured" && <div className="finder-intro"><span>CURATED</span><p>Résumé-verified work that best represents the systems, AI, and research problems I like solving.</p></div>}{section === "Currently Building" && <div className="finder-intro coral-intro"><span>IN MOTION</span><p>Transparent works in progress—not presented as completed résumé projects.</p></div>}{section === "Archive" && <div className="finder-intro yellow-intro"><span>VERSION HISTORY</span><p>Retired, not forgotten. Earlier builds that explain where the current work came from.</p></div>}<div className="project-grid">{items.map((project) => <button className="project-card" key={project.slug} onClick={() => openProject(project.slug)}><div className={`folder-art kind-${project.kind}`}><span>{project.kind === "research" ? "∿" : project.kind === "case-study" ? "◎" : project.kind === "current" ? "◌" : project.kind === "experience" ? "▣" : project.kind === "archive" ? "⌂" : "↗"}</span><i>{project.kind === "case-study" ? "SANITIZED" : project.status.toUpperCase()}</i></div><div className="project-card-copy"><h3>{project.title}</h3><p>{project.eyebrow}</p><small>{project.date}</small></div></button>)}</div></section></div>;
}

function ActivityApp({ openProject }: { openProject: (slug: string) => void }) {
  const processes = [{ name: "Nokia Observability Framework", cpu: 35, status: "Running", slug: "nokia-observability" }, { name: "SafeDesk", cpu: 25, status: "In Development", slug: "safedesk" }, { name: "ShivanyaOS", cpu: 19, status: "Running", slug: "shivanyaos" }, { name: "Touching Grass", cpu: 12, status: "Scheduled" }, { name: "GitHub Cleanup", cpu: 8, status: "Running" }, { name: "Sleep", cpu: 1, status: "Not Responding" }];
  const goals = [{ label: "Nokia observability framework", value: 76 }, { label: "SafeDesk foundation", value: 43 }, { label: "ShivanyaOS", value: 64 }, { label: "GitHub profile cleanup", value: 52 }, { label: "Touching grass protocol", value: 61 }, { label: "Reasonable sleep schedule", value: 20 }];
  return <div className="activity-app"><header className="app-header"><div><p className="eyebrow">SYSTEM LOAD · EMOTIONALLY CALIBRATED</p><h2>Active processes</h2></div><div className="live-pill"><span /> updated manually</div></header><div className="process-table"><div className="process-head"><span>PROCESS NAME</span><span>% CPU</span><span>STATUS</span></div>{processes.map((process) => <button key={process.name} onClick={() => process.slug && openProject(process.slug)} disabled={!process.slug}><span><i className={process.status === "Not Responding" ? "red" : process.status === "Scheduled" ? "yellow" : "green"} />{process.name}</span><b>{process.cpu}%</b><em>{process.status}</em></button>)}</div><div className="activity-lower"><section><p className="section-kicker">CURRENT GOALS</p>{goals.map((goal) => <div className="goal" key={goal.label}><div><span>{goal.label}</span><b>{goal.value}%</b></div><i><em style={{ width: `${goal.value}%` }} /></i></div>)}</section><section className="touching-grass"><p className="section-kicker">TOUCHING GRASS SUBPROCESSES</p><div><span>boxing.service</span><b>Active</b></div><div><span>dance.service</span><b>Runs Sundays</b></div><div><span>calisthenics.service</span><b>Warming up</b></div><div><span>gym.service</span><b>Persistent</b></div><p>Progress values are approximate and emotionally calibrated.</p></section></div></div>;
}

function NotesApp() {
  const notes = ["Why Every Changing Variable Belongs in a Cache Key", "How Dynamic Programming Grids Actually Store Decisions", "Why Shell Pipelines Keep Leaking File Descriptors", "What an OpenTelemetry SDK Actually Emits", "Logs vs. Metrics vs. Traces Without the Marketing Language", "Why the ‘Buying’ Boolean Means Permission, Not an Action", "Why Sliding Windows Expand and Then Suddenly Panic", "How Goal-Post Greedy Algorithms Work"];
  return <div className="notes-app"><header><div className="notes-mark">✦</div><p className="eyebrow">HARD-WON MENTAL MODELS</p><h2>Eventually, This Made Sense</h2><p>Things that took an unreasonable number of diagrams, wrong turns, and staring at the same line of code.</p></header><div className="notes-layout"><aside><p>COLLECTIONS</p><button className="selected">All breakthroughs <span>{notes.length}</span></button><button>Systems <span>3</span></button><button>AI & ML <span>2</span></button><button>Algorithms <span>3</span></button></aside><section>{notes.map((note, index) => <article key={note}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{note}</h3><p>{index % 3 === 0 ? "What confused me · the wrong model · the version that finally clicked" : index % 3 === 1 ? "A visual walkthrough with fewer heroic leaps" : "Notes from the eventual breakthrough"}</p></div><i>↗</i></article>)}</section></div></div>;
}

function TerminalApp({ lines, run }: { lines: string[]; run: (command: string) => void }) {
  const [value, setValue] = useState("");
  const submit = (event: FormEvent) => { event.preventDefault(); if (!value.trim()) return; run(value); setValue(""); };
  return <div className="terminal-app"><div className="terminal-top"><span>shivanya@portfolio</span><span>zsh · 80×24</span></div><div className="terminal-output">{lines.map((line, index) => <p key={`${line}-${index}`}>{line}</p>)}</div><form onSubmit={submit}><label htmlFor="terminal-command">shivanya@ShivanyaOS ~ %</label><input id="terminal-command" value={value} onChange={(event) => setValue(event.target.value)} autoComplete="off" spellCheck="false" autoFocus /></form></div>;
}

function ResumeApp() {
  return <div className="resume-app"><div className="resume-toolbar"><div><span className="pdf-badge">PDF</span><strong>Shivanya_Resume.pdf</strong><small>1 page · Updated July 2026</small></div><div><a href="/Shivanya_Resume.pdf" target="_blank" rel="noreferrer">Open full screen</a><a className="primary-button" href="/Shivanya_Resume.pdf" download>Download ↓</a></div></div><iframe src="/Shivanya_Resume.pdf#view=FitH" title="Shivanya Chandra résumé preview" /><div className="resume-fallback">Can’t see the preview? <a href="/Shivanya_Resume.pdf" target="_blank" rel="noreferrer">Open the résumé directly.</a></div></div>;
}

function MailApp() {
  const [subject, setSubject] = useState("Internship opportunity");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submit = (event: FormEvent) => { event.preventDefault(); window.location.href = `mailto:shivanyachandra01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Hi Shivanya,\n\n${message}\n\n— ${name}${email ? ` (${email})` : ""}`)}`; };
  return <div className="mail-app"><div className="contact-card"><p className="eyebrow">DIRECT CONNECTIONS</p><h2>Let’s build something<br />that explains itself.</h2><p>No form required. The direct routes are always visible.</p><a href="mailto:shivanyachandra01@gmail.com"><span>@</span><div><small>EMAIL</small><strong>shivanyachandra01@gmail.com</strong></div></a><a href="https://github.com/shivanya-chandra" target="_blank" rel="noreferrer"><span>GH</span><div><small>GITHUB</small><strong>shivanya-chandra</strong></div></a><a href="https://linkedin.com/in/shivanya-chandra" target="_blank" rel="noreferrer"><span>in</span><div><small>LINKEDIN</small><strong>/in/shivanya-chandra</strong></div></a></div><form onSubmit={submit}><div className="compose-row"><span>To:</span><strong>Shivanya Chandra</strong></div><label>Your name<input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Jane Recruiter" /></label><label>Email<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="jane@company.com" /></label><label>Subject<select value={subject} onChange={(event) => setSubject(event.target.value)}><option>Internship opportunity</option><option>Project collaboration</option><option>Technical conversation</option><option>Something interesting</option></select></label><label>Message<textarea required value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Tell me what’s on your mind…" /></label><button className="primary-button" type="submit">Open in mail app ↗</button></form></div>;
}

function ProjectApp({ project }: { project: Project }) {
  const [tab, setTab] = useState(0);
  const section = project.sections[tab] ?? project.sections[0];
  return <div className="project-app"><header className={`project-hero kind-${project.kind}`}><div className="project-hero-copy"><div className="project-breadcrumb">SHIVANYA HD / {project.kind.replace("-", " ").toUpperCase()}</div><p>{project.eyebrow}</p><h1>{project.title}</h1><p className="project-summary">{project.summary}</p><div className="project-meta"><span><small>STATUS</small><b>{project.status}</b></span><span><small>PERIOD</small><b>{project.date}</b></span><span><small>TYPE</small><b>{project.kind.replace("-", " ")}</b></span></div></div><div className="project-system-art"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><span>{project.kind === "research" ? "∿" : project.kind === "case-study" ? "◎" : project.kind === "current" ? "◌" : "↗"}</span><small>{project.kind === "case-study" ? "PUBLIC-SAFE VIEW" : "SYSTEM VIEW"}</small></div></header>{project.metrics && <div className="metrics-strip">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>}<nav className="project-tabs" aria-label="Project sections">{project.sections.map((item, index) => <button key={item.title} className={tab === index ? "selected" : ""} onClick={() => setTab(index)}>{item.title}</button>)}</nav><section className="project-section"><div className="section-number">{String(tab + 1).padStart(2, "0")}</div><div><p className="section-kicker">{section.title.toUpperCase()}</p><h2>{section.title}</h2><p>{section.body}</p>{section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet}><span>✓</span>{bullet}</li>)}</ul>}<div className="tech-row">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>{project.kind === "case-study" && <div className="sanitized-note"><strong>Sanitized by design.</strong> This case study discusses the engineering problem and my design contribution without publishing internal repositories, endpoints, schemas, customer names, code, or proprietary architecture.</div>}</div></section></div>;
}

function CommandPalette({ query, setQuery, items, close }: { query: string; setQuery: (value: string) => void; items: { label: string; hint: string; action: () => void }[]; close: () => void }) {
  return <div className="palette-backdrop" onMouseDown={close}><section className="command-palette" onMouseDown={(event) => event.stopPropagation()} role="dialog" aria-label="Search ShivanyaOS"><div className="palette-search"><span>⌘</span><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search ShivanyaOS…" /><kbd>ESC</kbd></div><div className="palette-results"><p>QUICK ROUTES</p>{items.map((item) => <button key={item.label} onClick={() => { item.action(); close(); }}><span>↗</span><strong>{item.label}</strong><em>{item.hint}</em></button>)}</div><footer><span>↑↓ navigate</span><span>↵ open</span><span>Professional information, no scavenger hunt.</span></footer></section></div>;
}
