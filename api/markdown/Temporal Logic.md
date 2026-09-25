Temporal logic is a formal system of logic that extends classical propositional or predicate logic with operators for reasoning about propositions whose truth changes over time. Operators such as 'eventually', 'always', 'next' and 'until' allow the specification of orderings and timing of events without explicit reference to clock values. It is the standard language for stating correctness properties of reactive and concurrent systems in formal verification.

### Overview

- Temporal logic gives engineers a precise vocabulary for properties that unfold over execution rather than holding at a single instant — for example that a request is always eventually served, or that a critical section is never entered by two processes simultaneously. Linear temporal logic reasons over individual execution paths, while branching-time logics such as computation tree logic quantify over the tree of possible futures. These logics are the specification half of the model-checking pipeline, paired with a state-space model to be checked.

### Key aspects

- Temporal operators including next, eventually, always and until for ordering and timing.
- Linear-time logic that interprets formulae over single execution paths.
- Branching-time logic that quantifies over the tree of possible future states.
- Safety properties ('nothing bad happens') versus liveness properties ('something good eventually happens').
- Semantics defined over transition systems and infinite execution traces.

### Applications

- Specifying correctness properties for model checking of hardware and software.
- Expressing liveness and safety requirements for concurrent and distributed systems.
- Runtime verification and monitoring of execution traces against temporal specifications.
- Reasoning about plans and goals in artificial intelligence and robotics.

### Provenance

