## Context

The repository is configured for OpenSpec and GitHub Pages, but there is no existing portfolio implementation to preserve. The requested experience is a static, single-page solar system portfolio for Eduardo Ángel Martínez Garduño with rich client-side animation, canvas effects, responsive behavior, and two browser games.

The implementation must work on GitHub Pages without a backend or server-side rendering. It should use static HTML, CSS, and JavaScript assets that can be served directly from the repository root.

## Goals / Non-Goals

**Goals:**

- Deliver a fully static portfolio experience that runs on GitHub Pages.
- Make the solar system the primary navigation model on desktop.
- Preserve full portfolio content and interaction parity on mobile through a simplified planet-card grid.
- Use canvas only where it adds value: the star field and Gravity Puzzle.
- Keep animations smooth, understandable, and resilient across common desktop and mobile viewport sizes.
- Implement the two minigames as self-contained client-side modules.

**Non-Goals:**

- Add a build pipeline, package manager requirement, backend service, database, or API integration.
- Implement content editing through a CMS.
- Add analytics, authentication, contact form submission, or third-party game engines.
- Replace photo placeholders with real photo assets unless the assets are later supplied.

## Decisions

1. Use a static root entry point.

   The site will be implemented as static files, likely `index.html`, `styles.css`, and `script.js`, so GitHub Pages can serve it without a build step. This is simpler and more reliable than introducing a framework for a single interactive page.

   Alternative considered: a React or Vite app. That would make component organization convenient, but it adds deployment and dependency complexity that is not needed for the requested scope.

2. Model planet content as structured client-side data.

   Planet metadata, orbit settings, labels, and panel content will be represented in JavaScript data structures and rendered into reusable panel/card templates. This reduces duplication between desktop orbit navigation and mobile planet-card navigation.

   Alternative considered: manually duplicating panel markup for desktop and mobile. That would make the first implementation faster but increases the chance that desktop and mobile content drift.

3. Use CSS animation for orbital motion and UI transitions.

   Orbital rings and planet revolution will use CSS animations with per-planet durations matching the requested speeds. JavaScript will manage state changes such as opening and closing panels, while CSS handles transforms, opacity, blur, hover glow, and staggered fade-up effects.

   Alternative considered: drive all orbit motion from `requestAnimationFrame`. CSS animation is less code for this visual layer and lets the browser optimize continuous motion.

4. Use canvas for randomized visual simulation.

   The background star field will use a fixed set of about 200 randomized stars with twinkling opacity animation. Gravity Puzzle will use its own canvas loop for physics, collisions, thrust input, level progression, and scoring.

   Alternative considered: DOM stars and DOM-based game entities. Canvas is a better fit for many small animated points and continuous physics.

5. Keep minigames embedded in their planet panels.

   Probability Planet and Gravity Puzzle will live inside their expanded planet panels and initialize/reset when the relevant panel opens. This keeps navigation consistent and avoids separate pages.

   Alternative considered: route-like separate game views. That adds browser history and navigation concerns without improving the portfolio experience.

6. Prefer progressive enhancement for motion-heavy features.

   The desktop solar system will provide the full orbiting experience. Mobile will intentionally use a grid of planet cards with the same panel content to avoid cramped orbital layouts and reduce interaction friction.

   Alternative considered: scaled-down orbits on mobile. Eight animated orbital rings would be visually dense and harder to tap accurately on small screens.

## Risks / Trade-offs

- Motion or canvas work could affect low-powered devices -> Keep canvas loops lean, pause or reduce expensive updates when panels are hidden where practical, and use CSS transforms for orbiting planets.
- Desktop orbit layout could overlap at unusual aspect ratios -> Use responsive orbit dimensions, constrained panel sizing, and viewport testing at mobile and desktop sizes.
- Expanded panels could obscure navigation or trap users -> Provide a visible close button, Escape-key close support, and keep background context visible with blur.
- Google Fonts loading could cause brief typography shifts -> Use sensible font fallbacks and define layout dimensions that do not depend on exact font metrics.
- Placeholder photos could feel unfinished -> Style them intentionally with dashed accent borders, glass background, centered italic muted text, and clear labels.
- Gravity Puzzle physics can become too hard or unstable -> Cap force near gravity wells, set sensible level layouts, and provide reset/progression controls.

## Migration Plan

1. Add static site files at the GitHub Pages root.
2. Implement the visual shell, planet navigation, and reusable panel rendering.
3. Add portfolio content panels and responsive mobile grid behavior.
4. Add Probability Planet and Gravity Puzzle interactions.
5. Verify locally by opening the static site or serving it with a simple local server.
6. Deploy through the existing GitHub Pages workflow or repository Pages settings.

Rollback is straightforward because the change is static-file based: revert the added site files or the implementing commit.

## Open Questions

- Are real photo assets expected before launch, or should the first version intentionally ship with placeholders?
