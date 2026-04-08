# TS_Academy_FrontEnd_Practice_Task

This document outlines the approach for setting up and building the FrontEnd Practice Task using React.

## User Review Required

> [!IMPORTANT]
> Please review this plan. Once approved, I will automatically scaffold the React project for you and create the GitHub repository.

## Proposed Setup & Workflow

### 1. Project Scaffolding
- We will create the React application in `C:\Users\Ajose\.gemini\antigravity\scratch\TS_Academy_FrontEnd_Practice_Task` using **Vite** (a modern, fast build tool for React). 
- We will use standard Vanilla CSS as required.

### 2. Version Control & GitHub
- Initialize a local Git repository.
- Use the GitHub CLI (`gh`) to create a **public repository** on your GitHub account named `TS_Academy_FrontEnd_Practice_Task`.
- Push the initial initialized boilerplate to the `main` branch.

### 3. Proposed Component breakdown
Based on the assignment, we will organize the application into the following React components:
- `App.jsx` (Main Container)
- `Header.jsx` (Navigation, Video Background, CTA Buttons)
- `PlanetsSection.jsx` (Container for fetching and mapping planets)
- `PlanetCard.jsx` (Individual `<figure>` component for a planet)
- `ContactForm.jsx` (Form with validation and API submission)
- `Footer.jsx` (Dynamic links for team members, group name, etc.)

## Open Questions

> [!WARNING]
> Before I run the scaffolding, please confirm:
> 1. Do you have the GitHub CLI (`gh`) installed and logged in on your machine? If not, we can initialize it locally first and you can push it manually via the GitHub desktop app or website.
> 2. Would you like to use standard Javascript (JSX) or Typescript (TSX) for the React app? (I recommend Javascript based on the prompt description).

## Verification Plan

### Automated Setup
- Run Vite build processes and verify dependencies install correctly.

### Manual Verification
- You will be easily able to start the local development server using `npm run dev`.
- Verify the repository exists on GitHub.
