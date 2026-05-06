## ADDED Requirements

### Requirement: About Panel
The site SHALL provide an About panel with Eduardo's identity, summary, and stat blocks.

#### Scenario: Visitor opens About
- **WHEN** a visitor opens the About planet
- **THEN** the panel shows the large italic name "Eduardo Ángel Martínez" in DM Serif Display, the DM Mono subtitle "Actuary · Data Scientist · Musician", the provided biography paragraph, and four DM Mono stat blocks for "02" degrees in progress, "3+" years tutoring math & economics, "3" instruments: violin · guitar · bass, and "2×" top GPA recognition.

### Requirement: Education Panel
The site SHALL provide an Education panel with a vertical timeline, coursework chips, and recognition badge.

#### Scenario: Visitor opens Education
- **WHEN** a visitor opens the Education planet
- **THEN** the panel shows timeline entries for Bachelor's in Actuarial Science at ITAM from Aug 2022-present and Bachelor's in Data Science at ITAM from Aug 2024-present.

#### Scenario: Education chips and badge appear
- **WHEN** the Education panel is visible
- **THEN** it shows the requested coursework chips for each degree and a "🏆 Top GPA recognition — Spring & Fall 2025" badge.

### Requirement: Projects Panel
The site SHALL provide a Projects panel with three project cards and links.

#### Scenario: Visitor opens Projects
- **WHEN** a visitor opens the Projects planet
- **THEN** the panel shows cards for Actuarial Python Library, World Cup 2026 & Subjective Wellbeing, and Food Labeling Policy NOM-051 with their provided descriptions and tags.

#### Scenario: Project links are available
- **WHEN** the project cards are visible
- **THEN** the Actuarial Python Library card links to `https://github.com/Eduardo-Angel-Martinez/Libreria-Calculo-Actuarial-1`, and the other two project links use `#` placeholders.

### Requirement: Community Panel
The site SHALL provide a Community panel about teaching and volunteer work.

#### Scenario: Visitor opens Community
- **WHEN** a visitor opens the Community planet
- **THEN** the panel shows a warm introduction about teaching and giving back, an Enlace Rural card with role "Education Volunteer · Aug 2024-present", the provided volunteer description, and DM Mono stats for +15% avg grades, +25% teamwork, and +15% engagement.

#### Scenario: Community photo placeholder appears
- **WHEN** the Community panel is visible
- **THEN** it shows a photo placeholder with a 2px dashed accent border, glass background, centered italic muted text, and label "[ photo from Enlace Rural ]".

### Requirement: Beyond Panel
The site SHALL provide a Beyond the Classroom panel for music and personal life.

#### Scenario: Visitor opens Beyond
- **WHEN** a visitor opens the Beyond planet
- **THEN** the panel shows a music subsection describing violin, guitar, and bass with tags for each instrument, plus a life subsection with two warm sentences about friends and life outside academia.

#### Scenario: Beyond placeholders appear
- **WHEN** the Beyond panel is visible
- **THEN** it shows styled placeholders labeled "[ photo with instrument ]" and "[ photo with friends ]".

### Requirement: Contact Panel
The site SHALL provide a Contact panel with direct contact links and copyright.

#### Scenario: Visitor opens Contact
- **WHEN** a visitor opens the Contact planet
- **THEN** the panel shows "Let's talk" in DM Serif Display, a mailto link for `ed.mtz.ga@gmail.com`, a GitHub link for `github.com/Eduardo-Angel-Martinez`, phone number `+52 55 7895 2017`, and copyright "© 2026 Eduardo Ángel Martínez Garduño".

### Requirement: Content Panel Responsiveness
The site SHALL keep all panel content readable and usable across mobile and desktop viewports.

#### Scenario: Content fits viewport
- **WHEN** any content panel is opened on mobile or desktop
- **THEN** text, cards, tags, placeholders, buttons, and close controls remain visible without incoherent overlap.
