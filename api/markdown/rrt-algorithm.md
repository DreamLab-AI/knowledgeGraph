- ### Definition
  - A sampling-based path planning algorithm that incrementally builds a tree of collision-free configurations by randomly sampling the configuration space and connecting samples to the nearest existing tree node. It efficiently explores high-dimensional spaces and is probabilistically complete.

- ### Semantic Classification
  - owl-class:: robotics:RRTAlgorithm
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Motion Planning]], [[Path Planning]]

- ### Relationships
  - is-subclass-of:: [[RB-1016-path-planning]]
  - requires:: [[Configuration Space]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[RB-1016-path-planning]]
  - is-instance-of:: [[Sampling-Based Method]]
  - requires:: [[Configuration Space]]
  - requires:: [[Collision Checker]]
  - produces:: [[Tree Structure]]
  - characterized-by:: [[Probabilistic Completeness]], [[Randomization]]

  - #### Relationships
  - is-subclass-of:: [[RB-1016-path-planning]]
  - alternative-to:: [[RB-1018-dijkstra-algorithm]], [[A-Star Algorithm]]
  - variant-of:: [[RRT-Star]], [[RRT-Connect]], [[Informed RRT-Star]]
  - uses:: [[Nearest Neighbor Search]], [[Collision Detection]]
  - applied-in:: [[Mobile Robots]], [[Manipulators]], [[Autonomous Vehicles]]

  - **Basic Algorithm**
  1. Initialize tree with start configuration
  2. **Loop** (until goal reached or max iterations):
     a. Sample random configuration q_rand
     b. Find nearest node q_near in tree
     c. Steer from q_near toward q_rand (limited step size)
     d. Check if new configuration q_new is collision-free
     e. If valid, add q_new to tree with edge from q_near
  3. Return path from start to goal (if found)

  - **Key Operations**
  - **Sample()**: Generate random configuration
  - **Nearest(tree, q)**: Find closest node to q
  - **Steer(q_near, q_rand, δ)**: Extend toward q_rand by step δ
  - **CollisionFree(q)**: Check if configuration is valid
  - **AddNode(tree, q_new, q_near)**: Add new node and edge

  - **Sampling Strategies**
  - Uniform Random Sampling (standard)
  - Goal Biasing (sample goal with probability p)
  - Informed Sampling (sample within heuristic regions)
  - Obstacle-based Sampling

  - **Properties**
  - **Probabilistically Complete**: Finds solution as iterations → ∞
  - **Not Optimal**: Initial solution may be far from optimal
  - **Randomized**: Different runs produce different paths
  - **Single-Query**: Builds new tree for each query
  - **Voronoi Bias**: Explores unexplored areas naturally

  - **Advantages**
  - Handles high-dimensional spaces effectively
  - Fast exploration of large spaces
  - No need to discretize configuration space
  - Works with complex constraints
  - Simple to implement
  - Handles non-holonomic constraints

  - **Limitations**
  - Paths are not optimal (jagged, suboptimal length)
  - Difficulty with narrow passages
  - No quality guarantees on solution
  - Sensitive to step size parameter
  - Slow in cluttered environments

  - **RRT Variants**
  - **RRT*** (RRT-star):
    - Asymptotically optimal
    - Rewires tree for better paths
    - Higher computational cost
  - **RRT-Connect**:
    - Bidirectional search (from start and goal)
    - Faster than basic RRT
    - Good for multi-robot coordination
  - **Informed RRT***:
    - Uses heuristics to focus search
    - Faster convergence to optimal
  - **Dynamic RRT**:
    - Handles moving obstacles
    - Replanning capability
  - **Kinodynamic RRT**:
    - Considers velocity/acceleration
    - For dynamic systems
  - **Anytime RRT**:
    - Provides improving solutions over time

  - **Parameters**
  - **Step Size (δ)**: Max extension distance
    - Small: Slower, smoother paths
    - Large: Faster, more jagged paths
  - **Goal Bias**: Probability of sampling goal
    - 0.05-0.10 typical
  - **Max Iterations**: Termination condition

  - **Data Structures**
  - Tree: Nodes and edges
  - KD-Tree or Ball Tree for nearest neighbor search
  - Configuration space representation
  - Collision checker data structures

  - **Applications**
  - Robot arm motion planning
  - Mobile robot navigation
  - Autonomous vehicle path planning
  - Drone flight planning
  - Surgical robot planning
  - Multi-robot coordination
  - Animation and graphics

  - **Extensions and Improvements**
  - Path smoothing post-processing
  - Adaptive step size
  - Multi-tree approaches
  - Learning-based sampling
  - Parallel RRT implementations

  - **Comparison with Graph Search**
  - RRT vs [[RB-1018-dijkstra-algorithm]]:
    - RRT: Sampling-based, probabilistic
    - Dijkstra: Discrete, deterministic
    - RRT: Better for high dimensions
    - Dijkstra: Optimal in discrete spaces

  - **Computational Complexity**
  - Time: O(n log n) per iteration (nearest neighbor)
  - Space: O(n) for n nodes
  - Iterations needed: Problem-dependent

  - **Implementation Considerations**
  - Efficient nearest neighbor search
  - Fast collision checking
  - Step size tuning
  - Goal region definition
  - Early termination conditions

  - **Quality Metrics**
  - authority-score:: 0.96
  - completeness:: 0.94
  - accuracy:: 0.95

- ### Provenance
  - sources:: [[Motion Planning]], [[Steven LaValle 1998]]
  - migration-date:: 2026-04-26T00:00:00Z