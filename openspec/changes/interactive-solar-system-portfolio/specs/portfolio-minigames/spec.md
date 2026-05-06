## ADDED Requirements

### Requirement: Probability Planet Game
The site SHALL provide a Probability Planet minigame where visitors guess whether the next card is higher or lower than the current card.

#### Scenario: Visitor opens Probability Planet
- **WHEN** a visitor opens the Probability Game planet
- **THEN** the panel shows title "Probability Planet" in DM Serif Display, subtitle "Test your statistical intuition", a styled current card with suit and number, "Higher ▲" and "Lower ▼" buttons, and DM Mono score and streak counters.

#### Scenario: Visitor guesses correctly
- **WHEN** a visitor chooses Higher or Lower and the next card satisfies the guess
- **THEN** the game updates the current card, increments score and streak, and allows the visitor to continue.

#### Scenario: Visitor guesses incorrectly
- **WHEN** a visitor chooses Higher or Lower and the next card does not satisfy the guess
- **THEN** the game shows the correct answer, shows what the probability was, stops the current round, and displays a "Play again" button.

#### Scenario: Visitor starts a new round
- **WHEN** a visitor clicks "Play again"
- **THEN** the game resets the deck state, current card, score, streak, and feedback for a new round.

### Requirement: Gravity Puzzle Game
The site SHALL provide a canvas-based Gravity Puzzle minigame where a ship reaches a target star while gravity wells alter its trajectory.

#### Scenario: Visitor opens Gravity Puzzle
- **WHEN** a visitor opens the Gravity Puzzle planet
- **THEN** the panel shows title "Gravity Puzzle" in DM Serif Display, subtitle "Navigate through gravitational fields", a dark space themed canvas, the current level, score, time, and fuel indicators.

#### Scenario: Ship receives thrust
- **WHEN** a visitor clicks or taps the Gravity Puzzle canvas
- **THEN** the triangular ship thrusts forward, fuel decreases, and the ship continues moving through the level.

#### Scenario: Gravity wells pull the ship
- **WHEN** the Gravity Puzzle game is running
- **THEN** each gravity well continuously pulls the ship using simplified inverse-square gravity behavior based on distance.

#### Scenario: Visitor reaches target
- **WHEN** the ship reaches the target star
- **THEN** the game completes the current level, advances through three levels of increasing difficulty, and calculates score based on time and fuel used.

#### Scenario: Visitor fails level
- **WHEN** the ship is pulled off course, leaves bounds, or collides with a gravity well
- **THEN** the game shows failure feedback and provides a way to retry the level.

### Requirement: Minigame Responsiveness
The minigames SHALL be playable with pointer and touch input within their expanded panels.

#### Scenario: Mobile visitor plays minigames
- **WHEN** a mobile visitor opens either minigame planet
- **THEN** controls and canvases fit the viewport, accept touch input, and do not require horizontal scrolling.
