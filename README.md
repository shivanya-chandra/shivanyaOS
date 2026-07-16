# ShivanyaOS

Shivanya Chandra's interactive portfolio: a playful operating system on the
surface, with detailed systems, AI, research, and experience case studies
underneath.

## Current milestone

- Short, skippable boot sequence
- Dedicated desktop and ShivanyaOS Mobile layouts
- Draggable, focusable, minimizable, and maximizable app windows
- Finder sections for Featured, Currently Building, Experience, Research Lab,
  and Archive
- Separate public-safe templates for personal projects, internship case
  studies, research, current work, experience, and archived projects
- Activity Monitor, Notes, Terminal, Mail, and Command-K navigation
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

The portfolio is frontend-only. Ongoing projects are labeled as in progress,
internship case studies are sanitized, and older projects live only in Archive.
