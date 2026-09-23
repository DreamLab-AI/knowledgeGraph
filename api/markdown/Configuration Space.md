
Configuration space, often written C-space, is the set of all possible configurations of a robot, where each point fully specifies the position of every part of the mechanism. Its dimensionality equals the robot's degrees of freedom, and obstacles in the physical workspace map to forbidden regions, partitioning C-space into free and blocked subsets. Motion planning is then recast as finding a continuous path through the free portion of configuration space.

- ### Overview
  - By abstracting the robot to a single point moving through C-space, planning becomes a search for a continuous free-space path.
  - This reformulation, due to Lozano-Perez, unifies path planning across very different mechanisms.
  - Constructing C-space obstacles requires mapping geometry through [[Forward Kinematics]] and testing for [[Collision Detection]].
- ### Key aspects
  - Dimensionality equal to the number of joints or degrees of freedom.
  - Distinction between free space and configuration-space obstacles.
  - Topology that can be non-trivial, with wrap-around for revolute joints.
- ### Mechanisms
  - Explicit C-space obstacles are expensive, so high-dimensional planners sample points and test them for collision.
  - [[Sampling-Based Planning]] methods such as the [[Rapidly-Exploring Random Tree]] and [[Probabilistic Roadmap]] build graphs in free space.
  - Continuous paths are then extracted and smoothed for execution.
- ### Applications
  - Planning collision-free arm and mobile-robot trajectories.
  - Reasoning about reachability and [[Robot Manipulation]].
  - Underpinning [[Obstacle Avoidance]] in cluttered environments.
- ### Provenance

