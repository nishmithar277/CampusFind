# CampusFind — Milestone 1 MVP

CampusFind is a student-focused campus lost-and-found website prototype.

## Tech stack
- Next.js (App Router)
- React
- JavaScript
- CSS
- React Context
- Dummy/mock data

## Pages
- `/` — Home
- `/login` — Demo login
- `/register` — Demo registration
- `/lost` — Lost item reports
- `/found` — Found item reports
- `/report` — Submit a report

## Run locally
1. Install Node.js.
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Visit `http://localhost:3000`.

## State and data
The project uses React Context (`createContext`, Provider, `useContext`) to share reports and demo login state. Initial reports are in `data/items.js`. New reports are added to in-memory React state for the current app session.

## Milestone scope
This is intentionally frontend-only and uses dummy data, as required for Milestone 1. There is no backend, API, database, secure authentication, or permanent storage. Demo login only stores a name/email in React state.

## Team and inspiration
Add your team members, GitHub repository link, and the Product Hunt / Antler India / Y Combinator inspiration reference here.

## Required team-authored document
Complete `PRODUCT-ASSUMPTIONS.md` yourselves. The milestone instructions prohibit AI-generated content for that document.

## Other deliverables
- `WIREFRAME.md` is a low-fidelity guide; create and attach/export your actual wireframe using Figma, Excalidraw, or paper.
- `DESIGN-SYSTEM.md` records the visual system.
- `PROJECT-PLAN.md` suggests task division and GitHub issues.
