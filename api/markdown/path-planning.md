- ### Definition
  - The computational process of finding a feasible path for a robot to move from a start configuration to a goal configuration while avoiding obstacles and satisfying constraints. It determines a sequence of configurations connecting start to goal in the robot's configuration space.

- ### Semantic Classification
  - owl-class:: robotics:PathPlanning
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Motion Planning]], [[Autonomous Systems]]

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - requires:: [[RB-1013-localization]], [[Mapping]]
  - enables:: [[RB-1007-trajectory-generation]], [[Navigation]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[Motion Planning]]
  - requires:: [[Start Configuration]]
  - requires:: [[Goal Configuration]]
  - requires:: [[Environment Model]]
  - produces:: [[Path]]
  - avoids:: [[Obstacles]]
  - characterized-by:: [[Feasibility]], [[Optimality]]

  - #### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - uses:: [[RB-1017-rrt-algorithm]], [[RB-1018-dijkstra-algorithm]]
  - enables:: [[RB-1007-trajectory-generation]], [[Navigation]]
  - requires:: [[RB-1013-localization]], [[Mapping]]
  - skos:related:: [[RB-1019-obstacle-avoidance]], [[RB-1003-optimal-control]]
  - applied-in:: [[Autonomous Vehicles]], [[Mobile Robots]], [[Manipulators]]

  - **Problem Formulation**
  - **Input**:
    - Robot model (geometry, kinematics)
    - Start configuration q_start
    - Goal configuration q_goal
    - Environment model (obstacles)
    - Constraints (kinematic, dynamic)
  - **Output**:
    - Path: sequence of configurations [q_start, ..., q_goal]
    - Or "No solution" if no feasible path exists

  - **Configuration Space (C-space)**
  - Space of all possible robot configurations
  - Obstacles mapped to C-space obstacles
  - Free space: collision-free configurations
  - Path planning searches in C-space
  - Dimensionality = robot degrees of freedom

  - **Planning Approaches**
  - **Complete Planners**: Find solution if exists, or report failure
  - **Resolution Complete**: Find solution at given resolution
  - **Probabilistically Complete**: Probability → 1 as time → ∞

  - **Classical Planning Methods**
  - **Graph Search Algorithms**:
    - [[RB-1018-dijkstra-algorithm]]
    - A* (A-star)
    - D* (Dynamic A*)
    - Theta*
  - **Roadmap Methods**:
    - Visibility Graph
    - Voronoi Diagram
    - Probabilistic Roadmap (PRM)
  - **Cell Decomposition**:
    - Exact decomposition
    - Approximate decomposition
    - Potential Fields

  - **Sampling-Based Methods**
  - [[RB-1017-rrt-algorithm]] (Rapidly-exploring Random Tree)
  - RRT* (optimal variant)
  - RRT-Connect (bidirectional)
  - PRM (Probabilistic Roadmap)
  - EST (Expansive Space Trees)

  - **Optimization Criteria**
  - Shortest path (distance)
  - Fastest path (time)
  - Smoothest path (curvature)
  - Energy-efficient path
  - Safest path (clearance from obstacles)
  - Multi-objective optimization

  - **Types of Path Planning**
  - **Global Planning**:
    - Complete environment known
    - Offline computation possible
    - Optimal or near-optimal solutions
  - **Local Planning**:
    - Partial environment knowledge
    - Real-time reactive planning
    - Fast computation required

  - **Constraints**
  - **Kinematic Constraints**:
    - Non-holonomic (e.g., car-like robots)
    - Joint limits
    - Workspace boundaries
  - **Dynamic Constraints**:
    - Velocity limits
    - Acceleration limits
    - Momentum considerations
  - **Environmental Constraints**:
    - Static obstacles
    - Dynamic obstacles
    - Narrow passages

  - **Special Cases**
  - **Multi-Robot Path Planning**:
    - Coordination required
    - Collision avoidance between robots
    - Centralized vs decentralized
  - **Dynamic Environments**:
    - Moving obstacles
    - Replanning required
    - Prediction of obstacle motion
  - **High-Dimensional Spaces**:
    - Manipulators (7+ DOF)
    - Humanoid robots
    - Curse of dimensionality

  - **Path Smoothing**
  - Post-processing to improve path quality
  - Remove unnecessary waypoints
  - Spline fitting
  - Shortcutting techniques

  - **Applications**
  - Autonomous vehicles (self-driving cars)
  - Mobile robot navigation
  - Manipulator motion planning
  - Drone flight planning
  - Warehouse automation (AGVs)
  - Surgical robots
  - Video game character movement

  - **Challenges**
  - Computational complexity (NP-hard in general)
  - High-dimensional configuration spaces
  - Dynamic and uncertain environments
  - Real-time requirements
  - Narrow passages
  - Non-holonomic constraints

  - **Metrics for Evaluation**
  - Path length/distance
  - Computation time
  - Path smoothness
  - Clearance from obstacles
  - Success rate
  - Memory usage

  - **Related Topics**
  - [[RB-1019-obstacle-avoidance]] (reactive)
  - [[RB-1007-trajectory-generation]] (time parameterization)
  - SLAM (building maps while planning)
  - Coverage path planning (area coverage)

  - **Quality Metrics**
  - authority-score:: 0.97
  - completeness:: 0.94
  - accuracy:: 0.96

- ### Provenance
  - sources:: [[Motion Planning]], [[Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z