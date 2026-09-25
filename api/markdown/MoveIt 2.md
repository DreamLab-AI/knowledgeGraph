MoveIt 2 is the open-source motion-planning framework for ROS 2, providing manipulation capabilities including inverse kinematics, collision-aware path planning, trajectory generation, and execution for robotic arms and mobile manipulators. It integrates planners, perception, and control through a plugin architecture and is the de facto standard for arm motion planning in the ROS ecosystem. The ROS 2 version adds real-time and lifecycle improvements over the original MoveIt.

### Content

- Its plugin architecture lets users swap planners (OMPL, CHOMP, Pilz), kinematics solvers, and controllers, while the planning scene fuses sensor data for collision checking. MoveIt 2 leverages ROS 2's DDS middleware and lifecycle nodes for deterministic, real-time-capable manipulation pipelines.

