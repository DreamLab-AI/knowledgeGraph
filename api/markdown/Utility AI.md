
A game artificial intelligence architecture in which an agent scores every available action by evaluating weighted utility functions over the current world state — factors such as health, distance, threat, ammunition, and needs — and selects the highest-scoring option. Response curves map raw game variables onto normalised utilities that are combined multiplicatively or additively, yielding nuanced, context-sensitive behaviour that degrades gracefully and is easier to tune than rigid rule-based state machines or behaviour trees.

- ### Semantic Classification

- ### Content

  ## Definition

  **Utility AI** (also called utility-based AI or utility theory in games) is a [[Decision Making]] architecture for game agents rooted in the economic notion of utility: rather than following hand-authored transition logic, the agent continuously asks "how useful is each thing I could do right now?" and does the most useful one. Each candidate action — attack, flee, reload, heal, eat, patrol — is assigned a scorer built from **considerations**: functions of world-state inputs such as distance to target, own health, ammunition, visible threats, or a Sims-style need level. Each input passes through a **response curve** (linear, polynomial, logistic, step) that converts it to a normalised utility in [0, 1] and encodes designer intent — for example, healing utility that stays near zero at high health then rises steeply as health collapses. Consideration scores are combined, typically by multiplication so that any zero consideration vetoes the action, and the agent picks the top-scoring action or samples among the best few for variety.

  The approach contrasts sharply with the other staples of [[Game AI]]. A [[Finite State Machine]] is in exactly one state and only changes along authored transitions, so unanticipated situations need new states and edges; a [[Behaviour Tree]] evaluates a fixed priority ordering, so subtle trade-offs between competing concerns must be forced into a hierarchy. Utility AI instead makes every option compete numerically every tick, which handles situations the designer never explicitly enumerated and degrades gracefully — when the best option is unavailable, the second-best simply wins. The costs are the mirror image: behaviour is emergent from curves and weights rather than legible from a diagram, tuning is a balancing exercise, and debugging "why did the NPC do that?" requires score-inspection tooling rather than reading a tree.

  The canonical exposition is Dave Mark's *Behavioral Mathematics for Game AI* (2009) and his Infinite Axis Utility System, developed across GDC AI Summit talks. Celebrated deployments include *The Sims* (need-based scoring of interactions advertised by smart objects), the dynamic combat direction in *Left 4 Dead*, and NPC decision layers in RPGs and strategy titles such as *Dragon Age: Inquisition* and *Guild Wars 2*.

  ## Technical Details

  - **Scoring pipeline**: inputs → normalisation via response curves → per-consideration utilities → aggregation (product, weighted sum, or compensated product that offsets the score shrinkage of multiplying many factors) → optional priority buckets so categories such as "emergency" always outrank "idle" → action selection (argmax, weighted random over top-k, or hysteresis/commitment bonuses to prevent oscillation between similarly scored actions).
  - **Architecture in practice**: considerations are data-driven assets editable by designers; scorers are shared across agent archetypes with per-archetype weights; evaluation is cheap (a few dozen curve lookups per action) and easily amortised by staggering agents across frames.
  - **Hybridisation**: utility scoring is frequently embedded as the selector layer inside other architectures — utility-selected branches in behaviour trees, utility-weighted goal selection feeding GOAP or HTN planners, and utility gates on ability usage in MOBA/RTS bots — so the technique complements rather than strictly replaces its rivals in a modern [[AI Game Agent]] stack.

  ## Current Landscape

  - **Dave Mark's Infinite Axis Utility System (IAUS)** remains the canonical formulation: each action is scored by one or more *axes*, where an axis is one normalised [0,1] input passed through a response curve (linear, quadratic, logistic, logit, Gaussian) with four designer-tunable parameters (m, k, b, c), and axis scores are combined so any zero vetoes the action (the "zero rule").
  - Practitioner write-ups (2025) flag **naïve multiplication of many [0,1] axes as unfairly penalising complex actions** and recommend a **geometric-mean / compensated-product** aggregation, followed by a weight multiplier expressing an action's category urgency, to keep scores comparable regardless of axis count.
  - Guidance in the *Game AI Pro* series (Rabin/Mark) stresses that **response-curve selection — direction, monotonicity, and endpoints — is the heart of the technique**, and that good considerations often rely on proxy variables and influence-map combinations rather than exact metrics.
  - Standard runtime optimisations are early-exit-on-zero, weight-ordered evaluation with pruning, memoisation of reusable inputs (ammo, cooldowns, distance), and evaluating cheap axes before expensive ones such as line-of-sight; open-source IAUS implementations (e.g. Unity ECS ports) keep the approach in active use.

  **Sources**:
  - https://tonogameconsultants.com/infinite-axis-utility-systems/
  - http://www.gameaipro.com/GameAIPro3/GameAIPro3_Chapter13_Choosing_Effective_Utility-Based_Considerations.pdf

- ### Provenance

