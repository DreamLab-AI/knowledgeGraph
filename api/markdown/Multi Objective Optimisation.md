Multi-objective optimisation is the discipline of optimising two or more conflicting objective functions simultaneously, where improving one objective typically degrades another. Rather than a single optimum it yields a Pareto front of non-dominated trade-off solutions, from which a decision-maker selects according to preferences. It is solved with scalarisation, evolutionary, and gradient-based methods and is pervasive in engineering design, machine learning, and resource allocation.

### Overview

- When objectives conflict, the goal becomes finding the set of non-dominated (Pareto-optimal) solutions where no objective can improve without worsening another.
- Methods either scalarise objectives into a single weighted goal or search the front directly with population-based heuristics such as a [[Genetic Algorithm]].
- The decision-maker then applies preferences to pick a point on the front.

### Key aspects

- Pareto dominance and the Pareto front as the solution concept.
- Conflicting objectives with no universally best outcome.
- Scalarisation versus population-based front approximation.
- Diversity and convergence as joint quality measures.

### Mechanisms

- Weighted-sum and epsilon-constraint scalarisation.
- Evolutionary multi-objective algorithms (NSGA-II, MOEA/D) via an [[Evolutionary Algorithm]].
- Hypervolume and crowding-distance indicators guiding selection.
- Gradient-based methods for differentiable multi-loss settings.

### Applications

- Engineering design balancing cost, weight, and performance.
- Tuning accuracy versus latency in [[Hyperparameter Optimisation]].
- Resource allocation and scheduling under competing constraints.
- Trade-off analysis informing [[Model Comparison]].

### Provenance

