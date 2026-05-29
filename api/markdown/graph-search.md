- ### Definition
  - Algorithms that systematically explore graph-structured state spaces to find optimal or feasible paths between configurations, forming the computational foundation for robot motion planning, task planning, and navigation. Classical methods (BFS, Dijkstra, A*) guarantee completeness or optimality on discrete graphs; sampling-based variants (RRT, PRM) address high-dimensional continuous configuration spaces.

- ### Semantic Classification
  - owl-class:: infrastructure:GraphSearch
  - owl-role:: Concept

- ### Relationships
  - Uses: [[Graph Algorithms]], [[Knowledge Representation]]
  - Enables: [[Motion Planning]], [[Navigation]]
  - Related To: [[Graph Neural Network]], [[Knowledge Graph]]

- ### Content
  term-id: RB-9009
  domain: rb
  # GraphSearch
  Graph Search refers to algorithms that explore graph-structured state spaces to find optimal or feasible paths between configurations, forming the computational foundation for robot motion planning, task planning, and navigation. These algorithms systematically explore nodes (states) and edges (transitions) to identify paths satisfying optimality criteria and constraint satisfaction.
  Classical algorithms include breadth-first search (BFS) for unweighted graphs, Dijkstra's algorithm for weighted graphs, and A* search incorporating heuristics for informed exploration. Advanced variants like D* and D* Lite enable efficient replanning when environment changes occur, while RRT (Rapidly-exploring Random Trees) and PRM (Probabilistic Roadmaps) handle high-dimensional configuration spaces through sampling-based approaches.
  Applications span path planning for mobile robots in static and dynamic environments, manipulation planning for robotic arms avoiding obstacles, multi-robot coordination optimizing collective behavior, and task-level planning searching through action sequences. Graph search algorithms trade off completeness guarantees, optimality properties, and computational efficiency based on problem characteristics.
  Contemporary research addresses anytime algorithms that improve solutions with additional computation time, incremental search techniques reusing previous search efforts, learning-based heuristics derived from experience data, and parallel search implementations leveraging GPU acceleration. Recent work explores neural network-guided search, integrating learned value functions to accelerate exploration, and graph neural networks for learning problem-specific heuristics from training data across multiple planning instances.
  - LaValle, S.M. (2006). Planning Algorithms. Cambridge University Press
  - Likhachev, M., & Ferguson, D. (2009). "Planning Long Dynamically Feasible Maneuvers for Autonomous Vehicles." International Journal of Robotics Research, 28(8), 933-945
  - Karaman, S., & Frazzoli, E. (2011). "Sampling-based algorithms for optimal motion planning." International Journal of Robotics Research, 30(7), 846-894
  - Gammell, J.D., et al. (2014). "Informed RRT*: Optimal sampling-based path planning focused via direct sampling of an admissible ellipsoidal heuristic." IEEE/RSJ International Conference on Intelligent Robots and Systems, 2997-3004

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z