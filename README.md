# ShivanyaOS

Shivanya Chandra's interactive portfolio: a playful operating system on the
surface, with detailed systems, AI, research, and experience case studies
underneath.

## Current milestone

- Short, skippable boot sequence
- Responsive desktop and mobile layouts
- Draggable, focusable, minimizable, and maximizable app windows
- Finder sections for Featured, Currently Building, Experience, Research Lab,
  and Archive
- Separate public-safe templates for personal projects, internship case
  studies, research, current work, experience, and archived projects
- Activity Monitor, Notes, Terminal, Resume, Mail, and Command-K navigation
- Integrated résumé PDF
- Reduced-motion and keyboard-accessible interactions

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Then open the local URL printed by the development server.

## Validate

```bash
npm run build
npm test
```

The portfolio is frontend-only. Project content is intentionally separated by
source: current professional work is grounded in the current résumé, ongoing
projects are labeled as in progress, internship case studies are sanitized,
and older projects live only in Archive.
