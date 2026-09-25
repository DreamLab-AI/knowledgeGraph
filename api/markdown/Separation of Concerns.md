A foundational design principle holding that a system should be decomposed so that each part addresses a single, distinct concern — one aspect of functionality or one axis of decision-making — with minimal overlap between parts. Articulated by Dijkstra in 1974, it underlies modularity, layering, encapsulation, and interface design: by isolating concerns behind boundaries, changes to one concern can be made, understood, tested, and reused without cascading through the rest of the system.

### Semantic Classification

### Content

## Definition

**Separation of concerns** is the principle that a well-designed system dedicates each of its parts to one concern and keeps distinct concerns apart. Edsger Dijkstra introduced the phrase in "On the role of scientific thought" (1974), describing the discipline of "focusing one's attention upon some aspect" of a problem while deliberately setting others aside — not because the other aspects do not matter, but because a human mind reasons reliably about only one at a time. The principle converts that cognitive strategy into an architectural one: the structure of the system should mirror the structure of the concerns.

Its fingerprints are on most of software engineering's load-bearing ideas. Parnas's information hiding (1972) prescribes drawing module boundaries around design decisions likely to change; layering separates levels of abstraction, as in the [[OSI Model]]'s seven independently specified network layers or a [[Hardware Abstraction Layer]] that isolates device specifics from application logic; patterns such as model-view-controller separate domain state from presentation from input handling; and a [[Component]] is precisely a unit that owns one concern behind a defined interface. Where concerns resist clean decomposition — logging, security, transactions cutting across many modules — aspect-oriented programming and middleware exist specifically to re-separate these "cross-cutting concerns".

The payoff is change-tolerance: when one concern lives in one place, a modification touches one module, a defect is localised by construction, teams can work in parallel, and parts can be replaced independently — which is also why separated, well-specified boundaries are a precondition for [[Interoperability]] between independently built systems.

## Technical Details

- **Symptoms of violation**: coupling metrics rising, "shotgun surgery" (one logical change edits many files), god objects, business logic embedded in UI or SQL, and duplicated knowledge across layers.
- **Mechanisms of enforcement**: module systems and visibility rules, interface/implementation splits, dependency inversion, service boundaries in microservice architectures, and schema contracts between producers and consumers.
- **Related principles**: single responsibility principle (SoC applied at class level), high cohesion/low coupling, information hiding, and orthogonality; Kiczales et al.'s aspect-oriented programming (1997) addresses concerns that cross-cut a dominant decomposition.
- **Limits**: every decomposition privileges one dimension of concern ("tyranny of the dominant decomposition"); over-separation produces indirection-heavy designs where a single behaviour is smeared across many trivial parts, so the principle is applied against expected axes of change, not maximally.

  ## Current Landscape

- **Provenance is precise**: the term was coined by Edsger Dijkstra in EWD447, "On the role of scientific thought" (30 August 1974), framed as separating software qualities such as *correctness* from *efficiency* — a broader idea than modularity alone.
- **A taxonomy of separations**: current reference treatments (e.g. Wikipedia's consolidated entry) note SoC can be achieved temporally (lifecycle sequencing), by quality (correctness vs efficiency), by view (Kruchten's "4+1" architectural views), or by size (modularity) — modularity being only one application of the principle.
- **Cross-cutting concerns**: aspect-oriented programming (Kiczales et al., 1997) remains the canonical mechanism for concerns — logging, security, transactions — that resist a single dominant decomposition, weaving them at defined join points.
- **Enduring architectural driver**: SoC underpins today's dominant patterns — microservice and service boundaries, layered/hexagonal architectures, and the model-view separation in modern UI frameworks — where well-specified boundaries remain the precondition for independent deployment and interoperability.

  **Sources**:

- https://en.wikipedia.org/wiki/Separation_of_concerns
- https://ocw.mit.edu/courses/6-170-software-studio-spring-2013/67b9b2f52222362b273de0c6638626e4_MIT6_170S13_08-sep-of-conc.pdf

### Provenance

