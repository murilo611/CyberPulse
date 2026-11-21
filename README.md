# CyberPulse

CyberPulse is a mobile-first cybersecurity awareness experience built around the idea: **Small reminders. Smarter habits. Stronger security.** It presents the exact 100 selected reminders and simulates one new security message every two hours, every day, saving the history locally in the browser.

## Features

- 100 selected reminders in 10 practical security categories.
- Daily schedule with five two-hour delivery slots from 09:00 to 18:00.
- Non-repeating message selection with a randomized new cycle after library exhaustion.
- Persistent delivery history, read state, favorites, reactions and preferences via localStorage.
- A single, interactive message experience designed for mobile and desktop.
- A touch-friendly carousel for browsing all 100 phrases without changing the delivery sequence.
- An e-learning resource section with official guides and PDFs for all 10 awareness topics.
- Optional browser alerts while the site is open.

## Stack

React, TypeScript, Vite, Motion, Lucide React and CSS. No backend or account is required.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Build for production with `npm run build`; preview with `npm run preview`. Run the scheduler and selector unit tests with `npm test`.

## Scheduler

`src/services/scheduler.ts` converts the current instant into calendar parts in the selected IANA timezone using `Intl.DateTimeFormat`. It chooses the latest configured slot that has arrived on any day of the week. The default slots are 09:00, 11:00, 13:00, 15:00 and 17:00; no message is delivered at or after 18:00. Before the first slot and after the schedule there is no active slot. The application checks on focus and periodically while open; when loaded during a slot, it calculates that slot directly rather than replaying every missed slot. A slot key (date and local time) prevents duplicate deliveries after refresh. A refresh within a previously delivered slot reuses the persisted message.

The default timezone is `Europe/Lisbon`, 09:00–18:00, every day, every two hours. Browser timers are used only to refresh the displayed clock and detect a new slot while the page remains open; the schedule itself is derived from actual current time, not an accumulating timer.

## Anti-repetition

`src/services/scheduler.ts` owns the independent selector. It builds the used-ID set for the current cycle from delivery history, randomly selects from unused messages, and stores the message ID and cycle with each delivery. Once all 100 reminders are used, it starts a new cycle with a randomized order. Selection avoids the immediately previous ID where another option exists. `src/data/messages.ts` contains the structured message records and stable unique IDs; new messages can be added to the category data without changing UI logic.

## Notifications and limitations

Browser notifications require explicit permission and a secure context (HTTPS, or localhost for development). Notifications are created only while the application is open and running. There is no push server or service worker, so notifications do not arrive when the browser/app is closed; actual background delivery to employee phones requires push infrastructure and an installed PWA/native client. localStorage is device- and browser-specific; clearing browser data clears the demonstration history. The demonstration profile is not an authentication system.

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import it in Vercel and use the Vite preset (build command `npm run build`, output directory `dist`).
3. Deploy. No environment variables are required. Browser notifications are available on the resulting HTTPS site after permission is granted.

## Deploy to GitHub Pages

This repository includes a GitHub Actions workflow that builds the Vite app and publishes the `dist` folder. The Vite build is configured for the repository URL `https://<username>.github.io/CyberPulse/`.

1. Push the project files, including `.github/workflows/pages.yml`, to the `main` branch.
2. In GitHub, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy CyberPulse to GitHub Pages** to finish successfully.
4. Visit `https://<username>.github.io/CyberPulse/`.

If the repository has a different name, update the production `base` path in `vite.config.ts` to match that repository name before publishing.

## Screenshots

Add a screenshot of the message experience here after deployment, for example `![CyberPulse message](docs/message.png)`.
