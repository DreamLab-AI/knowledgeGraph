Heuristic search is a family of search algorithms that use a problem-specific evaluation function to estimate the cost or promise of candidate states, focusing exploration on the most promising regions of a search space. By trading exhaustive coverage for informed guidance, heuristic methods such as A* and best-first search solve large combinatorial problems that are intractable for uninformed search. The quality of the heuristic determines both efficiency and, in admissible cases, optimality.

### Overview

- Heuristic search algorithms expand states in an order determined by an evaluation function f(n) that combines known cost and estimated future cost. The defining example, A*, uses f(n) = g(n) + h(n), where g is the path cost so far and h is a heuristic estimate to the goal. When h is admissible (never overestimates), A* returns optimal solutions while expanding far fewer nodes than uninformed methods.
- The discipline studies how to derive heuristics automatically, how admissibility and consistency affect optimality, and how to bound memory through iterative-deepening and memory-bounded variants.

### Key aspects

- Admissibility (h never overestimates) guarantees optimality; consistency guarantees no re-expansion.
- The open and closed lists (frontier and explored set) structure the search.
- Memory-bounded variants: IDA*, SMA*, and weighted A* for bounded-suboptimal speed.
- Heuristic accuracy versus computation cost trade-off.

### Mechanisms

- Best-first expansion ordered by f-value using a priority queue.
- Relaxation-based heuristic derivation (ignore constraints to compute a lower bound).
- Pattern databases and abstraction heuristics for large state spaces.
- Tie-breaking and weighting to trade optimality for speed.

### Applications

- Route and [[Pathfinding]] in maps, games, and networks.
- Action planning in [[Classical Planning]] and [[Robotics]].
- [[Game Playing]] and combinatorial puzzles.
- Resource scheduling and [[Optimisation]] problems.

### Provenance

