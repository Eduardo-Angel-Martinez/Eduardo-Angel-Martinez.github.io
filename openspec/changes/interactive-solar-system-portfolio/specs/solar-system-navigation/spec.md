## ADDED Requirements

### Requirement: Desktop Solar System Shell
The site SHALL present a desktop solar system interface with a deep-space background, glowing central star, orbital rings, and eight orbiting planets.

#### Scenario: Desktop visitor sees solar system
- **WHEN** a visitor opens the site on a desktop-width viewport
- **THEN** the page shows a `#0a0a0f` deep-space background, a faint purple/blue nebula gradient, a canvas star field of about 200 twinkling stars, a glowing central star with an "EM" monogram in DM Serif Display, eight semi-transparent orbital rings, and eight planets on separate orbits.

#### Scenario: Planets orbit continuously
- **WHEN** the desktop solar system is visible
- **THEN** each planet continuously orbits on its own ring using its configured speed: About 25s, Education 35s, Projects 45s, Community 30s, Beyond 55s, Probability Game 20s, Gravity Puzzle 65s, and Contact 15s.

#### Scenario: Planet visual specs are applied
- **WHEN** the desktop solar system is visible
- **THEN** each planet uses its configured name, color, and size: About `#6b8cae` 18px, Education `#d4a843` 24px, Projects `#4a9d8f` 28px, Community `#5a8a5a` 16px, Beyond `#8b6fb5` 22px, Probability Game `#c4522a` 14px, Gravity Puzzle `#7ab8d4` 20px, and Contact `#e8e8e8` 12px.

### Requirement: Planet Hover Feedback
The site SHALL provide clear hover feedback for planets on pointer-capable devices.

#### Scenario: Visitor hovers a planet
- **WHEN** a visitor hovers over a planet
- **THEN** the planet glows and its name label appears without shifting the orbital layout.

### Requirement: Planet Expansion Interaction
The site SHALL expand a clicked planet into an in-place content panel while preserving animated solar system context in the background.

#### Scenario: Visitor opens a planet
- **WHEN** a visitor clicks a planet
- **THEN** the selected planet smoothly expands into its content panel, the panel content appears with staggered fade-up animation, and the other planets continue orbiting in the background with slight blur.

#### Scenario: Visitor closes an expanded planet
- **WHEN** a planet panel is open and the visitor clicks the close button
- **THEN** the panel closes smoothly and the solar system returns to its normal view.

#### Scenario: Visitor presses Escape
- **WHEN** a planet panel is open and the visitor presses the Escape key
- **THEN** the open panel closes and focus returns to the solar system experience.

### Requirement: Mobile Planet Grid
The site SHALL replace orbital navigation with a simplified mobile grid while preserving access to every planet panel.

#### Scenario: Mobile visitor sees planet cards
- **WHEN** a visitor opens the site on a mobile-width viewport
- **THEN** the site shows a responsive grid of planet cards instead of the animated orbital layout.

#### Scenario: Mobile visitor opens content
- **WHEN** a mobile visitor taps a planet card
- **THEN** the same corresponding content panel opens with a close control and responsive layout.

### Requirement: Visual System
The site SHALL apply the requested portfolio typography, color palette, and interactive polish consistently.

#### Scenario: Typography and colors load
- **WHEN** the site renders
- **THEN** headings use DM Serif Display, data and mono labels use DM Mono, body copy uses DM Sans, and the palette includes `--bg: #0a0a0f`, `--accent: #C4522A`, `--accent2: #f0c060`, `--muted: #8A8478`, `--surface: rgba(255,255,255,0.05)`, and `--text: #f0ede8`.

#### Scenario: Interactive polish is visible
- **WHEN** a visitor hovers over tags or project cards
- **THEN** tags fill with `#C4522A` and project cards lift with a subtle glow shadow.
