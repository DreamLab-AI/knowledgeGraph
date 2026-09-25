Real-time systems are computing systems whose correctness depends not only on logical results but also on the time at which those results are produced. They must respond to events within defined timing constraints, classified as hard, firm or soft depending on the consequences of a missed deadline. Such systems are central to control, robotics, simulation and immersive applications where late results are useless or dangerous.

### Overview

- A real-time system guarantees that responses occur within bounded time, not merely as fast as possible on average.
- Hard real-time deadlines must never be missed; soft real-time degrades gracefully under occasional overruns.
- Predictability and worst-case analysis matter more than raw throughput in these systems.

### Mechanisms

- Deterministic scheduling such as rate-monotonic or earliest-deadline-first.
- Bounded interrupt latency and preemption for timely event handling.
- Resource reservation and priority management to avoid inversion.
- Worst-case execution analysis to verify deadlines.

### Applications

- Robotic motion control and actuation loops.
- Autonomous vehicle perception and control pipelines.
- Immersive rendering and physics simulation at fixed frame budgets.
- Industrial automation and safety-critical control systems.

### Provenance

- This class was materialised to resolve existing inbound references in the knowledge graph.

