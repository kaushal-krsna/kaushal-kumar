# Work Experience Refactor Plan

## Goal

Refactor the portfolio Work Experience section so it moves from resume-style bullet points to a system-based experience layout.

For this first implementation phase, the goal is only to:

1. Set up routing in the portfolio repo.
2. Keep the existing homepage structure working.
3. Refactor the Work Experience component to show clickable work/system cards.
4. Use PNG card images created manually and stored in the repo.
5. Route each clicked card to a detail page for that system.
6. Create simple placeholder detail pages for now.

This phase should not attempt to write the final case-study content yet. The focus is the technical structure and UI flow.

---

## Current repo context

The current app renders all sections directly in `src/App.jsx`, including `Navbar`, `Hero`, `Technologies`, `Experience`, `Projects`, and `Contact`.

The current `Experience` component reads from `EXPERIENCES` in `src/constants/index.js` and renders resume-style bullet points with technologies.

The current project does not include `react-router-dom` in `package.json`, so routing needs to be installed before creating detail pages.

---

## What we want to build now

### User experience

On the homepage, the Work Experience section should show:

- Role/company summary.
- Short intro explaining that these are systems built in production.
- A grid of clickable system cards.
- Each card uses a PNG image.
- Clicking a card opens a route like `/work/ai-writing-canvas`.
- Each detail route shows a placeholder page with the system title, short description, and a back link.

### Systems to prepare routes for

Initial cards/routes:

1. AI Writing Canvas
2. Decision Tree for Tax Professionals
3. Vault File Management
4. File Upload Management
5. Notifications
6. News 
7. Third-Party Integrations

---

## Proposed routes

| Route | Purpose |
|---|---|
| `/` | Existing portfolio homepage |
| `/work/:slug` | Detail page for one system/work card |

Example detail routes:

| System | Route |
|---|---|
| AI Writing Canvas | `/work/ai-writing-canvas` |
| Decision Tree | `/work/decision-tree` |
| Vault File Management | `/work/vault-file-management` |
| File Upload Management | `/work/file-upload-management` |
| Notifications | `/work/notifications` |
| News / Third-Party Integrations | `/work/third-party-integrations` |

---

## File and folder plan

| Path | Purpose | Notes |
|---|---|---|
| `src/main.jsx` | Wrap the app with `BrowserRouter` | Needed for client-side routing |
| `src/App.jsx` | Define app-level routes | Keep homepage sections in a `HomePage` component |
| `src/pages/HomePage.jsx` | Existing homepage layout | Move current section composition here |
| `src/pages/WorkDetail.jsx` | Dynamic detail page for `/work/:slug` | Reads route param and finds matching work item |
| `src/components/Experience.jsx` | Refactored Work Experience section | Shows role summary and card grid |
| `src/components/work/WorkCard.jsx` | Reusable clickable work card | Receives image, title, subtitle, slug |
| `src/constants/work.js` | Work system card data | Keeps work cards separate from generic constants |
| `src/assets/work/` | PNG card images | User will create and save card PNGs here |

---

## Data model

Create a new data file:

```js
// src/constants/work.js

import aiWritingCanvasCard from '../assets/work/ai-writing-canvas.png';
import decisionTreeCard from '../assets/work/decision-tree.png';
import vaultCard from '../assets/work/vault-file-management.png';
import fileUploadCard from '../assets/work/file-upload-management.png';
import notificationsCard from '../assets/work/notifications.png';
import integrationsCard from '../assets/work/third-party-integrations.png';

export const WORK_SYSTEMS = [
  {
    slug: 'ai-writing-canvas',
    title: 'AI Writing Canvas',
    subtitle: 'Editable AI-generated client emails and tax memos.',
    image: aiWritingCanvasCard,
  },
  {
    slug: 'decision-tree',
    title: 'Decision Tree for Tax Professionals',
    subtitle: 'Guided tax decision workflows for complex professional use cases.',
    image: decisionTreeCard,
  },
  {
    slug: 'vault-file-management',
    title: 'Vault File Management',
    subtitle: 'A trusted file management experience for professional documents.',
    image: vaultCard,
  },
  {
    slug: 'file-upload-management',
    title: 'File Upload Management',
    subtitle: 'Frontend upload states, progress, validation, and recovery UX.',
    image: fileUploadCard,
  },
  {
    slug: 'notifications',
    title: 'Notifications',
    subtitle: 'A system communication layer for user alerts and updates.',
    image: notificationsCard,
  },
  {
    slug: 'third-party-integrations',
    title: 'News and Third-Party Integrations',
    subtitle: 'External data and integration workflows built for production use.',
    image: integrationsCard,
  },
];
```

---

## Implementation steps

### Step 1: Install routing

Install React Router:

```bash
npm install react-router-dom
```

After this, `package.json` should include `react-router-dom` in dependencies.

---

### Step 2: Wrap the app with BrowserRouter

Update `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

---

### Step 3: Move homepage layout into HomePage

Create `src/pages/HomePage.jsx`:

```jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Technologies from '../components/Technologies';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <Technologies />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
```

---

### Step 4: Add routes in App.jsx

Update `src/App.jsx`:

```jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WorkDetail from './pages/WorkDetail';

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]" />
        </div>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </div>
  );
};

export default App;
```

---

### Step 5: Create reusable WorkCard component

Create `src/components/work/WorkCard.jsx`:

```jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const WorkCard = ({ work }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group overflow-hidden rounded-2xl border border-stone-800 bg-stone-950/60"
    >
      <Link to={`/work/${work.slug}`} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-stone-900">
          <img
            src={work.image}
            alt={`${work.title} card`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-xl font-semibold text-stone-100">{work.title}</h3>
          <p className="mt-2 text-sm leading-6 text-stone-400">{work.subtitle}</p>
          <p className="mt-4 text-sm font-medium text-stone-200">Read system details →</p>
        </div>
      </Link>
    </motion.article>
  );
};

export default WorkCard;
```

---

### Step 6: Refactor Experience component

Update `src/components/Experience.jsx`:

```jsx
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';
import { WORK_SYSTEMS } from '../constants/work';
import WorkCard from './work/WorkCard';

const Experience = () => {
  const currentExperience = EXPERIENCES[0];

  return (
    <section className="pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Work Experience
      </motion.h2>

      <div className="mx-auto max-w-5xl rounded-3xl border border-stone-800 bg-stone-950/40 p-6 md:p-8">
        <p className="text-sm text-stone-500">{currentExperience.year}</p>
        <h3 className="mt-2 text-2xl font-semibold text-stone-100">
          {currentExperience.role} · {currentExperience.company}
        </h3>
        <p className="mt-4 max-w-3xl leading-7 text-stone-400">
          Building AI-first workflow systems for tax professionals, from editable document experiences and decision support to file management, notifications, and third-party integrations.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {currentExperience.technologies.map((tech) => (
            <span
              className="rounded bg-stone-900 px-3 py-1 text-sm font-medium text-stone-300"
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
        {WORK_SYSTEMS.map((work) => (
          <WorkCard key={work.slug} work={work} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
```

---

### Step 7: Create WorkDetail page

Create `src/pages/WorkDetail.jsx`:

```jsx
import { Link, useParams } from 'react-router-dom';
import { WORK_SYSTEMS } from '../constants/work';

const WorkDetail = () => {
  const { slug } = useParams();
  const work = WORK_SYSTEMS.find((item) => item.slug === slug);

  if (!work) {
    return (
      <main className="container mx-auto min-h-screen px-8 py-12">
        <Link to="/" className="text-sm text-stone-400 hover:text-stone-100">
          ← Back to home
        </Link>
        <h1 className="mt-12 text-4xl font-semibold text-stone-100">Work not found</h1>
        <p className="mt-4 text-stone-400">This system detail page does not exist yet.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto min-h-screen px-8 py-12">
      <Link to="/" className="text-sm text-stone-400 hover:text-stone-100">
        ← Back to home
      </Link>

      <section className="mx-auto mt-12 max-w-4xl">
        <div className="overflow-hidden rounded-3xl border border-stone-800 bg-stone-950/60">
          <img
            src={work.image}
            alt={`${work.title} visual`}
            className="aspect-[16/8] w-full object-cover"
          />

          <div className="p-6 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">System case study</p>
            <h1 className="mt-4 text-4xl font-semibold text-stone-100">{work.title}</h1>
            <p className="mt-4 text-lg leading-8 text-stone-400">{work.subtitle}</p>

            <div className="mt-10 rounded-2xl border border-stone-800 bg-black/30 p-5">
              <h2 className="text-xl font-semibold text-stone-100">Coming next</h2>
              <p className="mt-3 leading-7 text-stone-400">
                This page will later include the why, how, what, tradeoffs, screenshots, and implementation story behind this system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkDetail;
```

---

## Image setup

Create this folder:

```txt
src/assets/work/
```

Add these PNG files manually:

```txt
src/assets/work/ai-writing-canvas.png
src/assets/work/decision-tree.png
src/assets/work/vault-file-management.png
src/assets/work/file-upload-management.png
src/assets/work/notifications.png
src/assets/work/third-party-integrations.png
```

If any image is missing, Vite will fail the build. Add placeholder PNGs first, then replace them later with final designs.

---

## Prompt to implement this phase

Use this prompt with your coding assistant:

```txt
You are working in my React + Vite portfolio repo.

Implement only phase 1 of the Work Experience refactor.

Current behavior:
- `src/App.jsx` directly renders Navbar, Hero, Technologies, Experience, Projects, and Contact.
- `src/components/Experience.jsx` renders resume-style bullets from `EXPERIENCES` in `src/constants/index.js`.
- The project currently does not have routing configured.

Goal:
- Add React Router.
- Keep the existing homepage working at `/`.
- Create a dynamic work detail route at `/work/:slug`.
- Refactor the Work Experience section to show clickable system cards instead of only resume bullets.
- Each card should use a PNG image from `src/assets/work/`.
- Clicking a card should route to its placeholder detail page.
- Do not write the full case-study content yet.
- Do not redesign the whole portfolio.
- Do not remove existing Projects, Hero, Technologies, Contact, or Navbar sections.

Implementation requirements:
1. Install `react-router-dom`.
2. Wrap the app with `BrowserRouter` in `src/main.jsx`.
3. Create `src/pages/HomePage.jsx` and move the current homepage section composition into it.
4. Update `src/App.jsx` to use `Routes` and `Route`.
5. Create `src/pages/WorkDetail.jsx` for `/work/:slug`.
6. Create `src/components/work/WorkCard.jsx`.
7. Create `src/constants/work.js` with a `WORK_SYSTEMS` array.
8. Refactor `src/components/Experience.jsx` to show:
   - Work Experience heading
   - Bizora role summary
   - technology tags from the existing `EXPERIENCES[0]`
   - grid of clickable work cards from `WORK_SYSTEMS`
9. Create/use these image paths:
   - `src/assets/work/ai-writing-canvas.png`
   - `src/assets/work/decision-tree.png`
   - `src/assets/work/vault-file-management.png`
   - `src/assets/work/file-upload-management.png`
   - `src/assets/work/notifications.png`
   - `src/assets/work/third-party-integrations.png`
10. If the PNG files do not exist yet, add clear placeholder comments or temporary placeholder imports only if the build can still pass.

Routes to support:
- `/`
- `/work/ai-writing-canvas`
- `/work/decision-tree`
- `/work/vault-file-management`
- `/work/file-upload-management`
- `/work/notifications`
- `/work/third-party-integrations`

Expected result:
- Homepage still works.
- Work Experience section now looks like a system-card grid.
- Clicking a card opens a detail page.
- Detail page shows the image, title, subtitle, and a placeholder section saying the full case study will be added later.
- Unknown slug shows a simple "Work not found" state.

Quality requirements:
- Keep code simple and readable.
- Use existing Tailwind styling style from the repo.
- Reuse `framer-motion` only where it already makes sense.
- Avoid overengineering.
- Run `npm run build` after changes and fix any import/routing errors.
```

---

## Validation checklist

After implementation, verify:

- `npm install` completes.
- `npm run dev` starts successfully.
- `/` loads the homepage.
- Work Experience section displays cards.
- Each card image renders.
- Each card click navigates to the correct detail page.
- Browser back button works.
- Refreshing `/work/ai-writing-canvas` does not crash locally.
- Unknown route like `/work/random` shows the not-found state.
- `npm run build` passes.

---

## Definition of done

This phase is done when:

- Routing is configured.
- Homepage behavior is preserved.
- Work Experience is refactored into a system-card layout.
- Work detail pages exist as placeholders.
- PNG card images are wired into the data model.
- The project builds successfully.

