
Sampling-based planning is a family of motion-planning methods that find feasible paths by randomly sampling the configuration space and connecting collision-free samples into a graph or tree, rather than constructing an explicit representation of the free space. By trading completeness for probabilistic completeness, these methods scale to the high-dimensional spaces typical of articulated robots. Representative algorithms include the Probabilistic Roadmap and the Rapidly Exploring Random Tree.

- ### Overview
  - Sampling-based planning emerged to overcome the intractability of complete planning in high dimensions. Rather than computing the exact boundary of the obstacle region, these planners probe the configuration space with random samples, verify each for collision freedom, and link feasible samples through local connection attempts. The result is a roadmap (multi-query) or tree (single-query) whose density grows with computation, guaranteeing that a solution is found with probability approaching one as samples accumulate.
- ### Mechanisms
  - Random or quasi-random sampling of configurations to populate the search structure.
  - Collision checking that classifies each sample and each edge as feasible or obstructed.
  - Local planning to connect nearby samples with short feasible motions.
  - Probabilistic completeness: the guarantee of finding a path if one exists, given enough samples.
  - Multi-query roadmaps versus single-query trees, chosen by whether the environment is reused.
- ### Applications
  - High-degree-of-freedom manipulation and humanoid whole-body planning.
  - Self-driving and mobile robot navigation through complex environments.
  - Computational biology applications such as molecular conformation search.
  - Game and animation pathfinding for characters in rich 3D scenes.
- ### Provenance

