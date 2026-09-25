A heuristic function is an estimating function used in search and optimisation that approximates the cost or distance from a given state to a goal state. It guides informed search algorithms by prioritising the exploration of states that appear most promising, trading guaranteed optimality for improved efficiency. A heuristic is admissible when it never overestimates the true cost, and consistent when it satisfies the triangle inequality, properties that determine the optimality guarantees of algorithms that use it.

### Overview

- Heuristics encode domain knowledge that ranks candidate states by estimated remaining cost.
- Admissibility and consistency determine whether algorithms such as A* return optimal solutions.
- Well-designed heuristics dramatically prune the search space while preserving solution quality.

### Key aspects

- Admissibility (never overestimates true cost)
- Consistency (monotonic, triangle inequality)
- Dominance and informedness comparisons
- Heuristic design: relaxation, pattern databases
- Trade-off between accuracy and computation cost

### Applications

- A* and best-first search pathfinding
- Automated [[Task Planning]] and scheduling
- Game tree evaluation and move ordering
- Routing and navigation systems

### Provenance

