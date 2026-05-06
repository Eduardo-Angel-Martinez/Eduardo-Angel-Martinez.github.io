## 1. Static Site Foundation

- [x] 1.1 Create the GitHub Pages-compatible root site files (`index.html`, `styles.css`, `script.js`) without requiring a build step.
- [x] 1.2 Import Google Fonts for DM Serif Display, DM Mono, and DM Sans, and define the requested CSS color variables.
- [x] 1.3 Build the base page structure for the solar system stage, mobile planet grid, expanded panel container, and script hooks.
- [x] 1.4 Add responsive layout rules that switch from desktop orbital navigation to the mobile planet-card grid.

## 2. Space Background and Solar System

- [x] 2.1 Implement the full-page deep black background with faint purple/blue nebula gradient.
- [x] 2.2 Implement the canvas star field with about 200 randomized twinkling stars.
- [x] 2.3 Create the glowing central star with the "EM" monogram in DM Serif Display.
- [x] 2.4 Create eight subtle semi-transparent orbital rings and eight planet elements with the requested names, colors, sizes, and orbit speeds.
- [x] 2.5 Add continuous CSS orbital animation with different durations for each planet.
- [x] 2.6 Add planet hover labels and glow feedback without shifting the layout.

## 3. Planet Panel Interaction

- [x] 3.1 Define structured planet metadata and content mappings shared by desktop planets and mobile cards.
- [x] 3.2 Implement click/tap behavior that expands the selected planet into an in-place content panel.
- [x] 3.3 Keep non-selected planets orbiting behind the open panel with slight blur.
- [x] 3.4 Implement close button behavior and Escape-key closing behavior.
- [x] 3.5 Add staggered fade-up animation for content inside opened panels.
- [x] 3.6 Ensure focus, pointer, and scroll behavior remains usable while panels open and close.

## 4. Portfolio Content Panels

- [x] 4.1 Implement the About panel with Eduardo's name, subtitle, biography paragraph, and four stat blocks.
- [x] 4.2 Implement the Education panel with vertical timeline entries, coursework chips, and the top GPA recognition badge.
- [x] 4.3 Implement the Projects panel with three project cards, descriptions, tags, hover lift/glow, and the requested links.
- [x] 4.4 Implement the Community panel with warm teaching intro, Enlace Rural volunteer card, stats, and styled photo placeholder.
- [x] 4.5 Implement the Beyond the Classroom panel with music and life subsections, tags, and two styled photo placeholders.
- [x] 4.6 Implement the Contact panel with email mailto link, GitHub link, phone number, and copyright.
- [x] 4.7 Add tag hover styling that fills coursework and skill tags with the accent color.

## 5. Probability Planet

- [x] 5.1 Implement a deck/card state model for the higher-or-lower probability game.
- [x] 5.2 Render the Probability Planet title, subtitle, current card, Higher/Lower buttons, score counter, and streak counter.
- [x] 5.3 Implement guess resolution for correct guesses, including current-card update, score increment, and streak increment.
- [x] 5.4 Implement wrong-guess feedback showing the correct answer, probability, stopped round state, and Play again button.
- [x] 5.5 Implement Play again reset behavior.

## 6. Gravity Puzzle

- [x] 6.1 Implement the Gravity Puzzle canvas, HUD, ship, target star, gravity wells, and level state.
- [x] 6.2 Implement click/tap thrust controls with fuel usage.
- [x] 6.3 Implement simplified inverse-square gravity pull from wells with stability caps near wells.
- [x] 6.4 Implement win, fail, retry, and three-level progression behavior.
- [x] 6.5 Implement scoring based on time and fuel used.
- [x] 6.6 Ensure the Gravity Puzzle canvas resizes cleanly and accepts touch input on mobile.

## 7. Polish and Verification

- [x] 7.1 Verify desktop layout for orbit visibility, panel expansion, background blur, and readable content.
- [x] 7.2 Verify mobile layout uses planet cards, opens every panel, and avoids horizontal scrolling.
- [x] 7.3 Verify all requested typography, colors, labels, copy, links, and placeholders are present.
- [x] 7.4 Verify Probability Planet correct/wrong/reset flows.
- [x] 7.5 Verify Gravity Puzzle thrust, gravity, win, fail, retry, scoring, and level progression.
- [x] 7.6 Run an accessibility and interaction pass for keyboard Escape close behavior, visible buttons, and non-overlapping text.
