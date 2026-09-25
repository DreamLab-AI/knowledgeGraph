HTN (Hierarchical Task Network) planning is an automated planning approach that solves problems by recursively decomposing high-level compound tasks into ordered subtasks using a library of methods, until only directly executable primitive actions remain. Unlike classical goal-state planning, it encodes domain knowledge as task decompositions, yielding efficient, human-interpretable plans. HTN planning is widely used in robotics, game AI, and workflow automation.

### Content

- Planners select applicable methods for each non-primitive task, expanding the network top-down while respecting ordering and precondition constraints. Encoding expert decomposition knowledge makes HTN plans efficient and explainable, though it requires hand-authored methods, trading generality for domain-tailored performance.

