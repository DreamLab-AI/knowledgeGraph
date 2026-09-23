
A URDF (Unified Robot Description Format) robot model is an XML specification that describes a robot's kinematic and dynamic properties, including links, joints, inertial parameters, visual meshes and collision geometry. It is the canonical model format in the ROS ecosystem, consumed by simulators, motion planners and visualisation tools to reason about a robot's physical structure. URDF files enable consistent representation of articulated robots across simulation and control software.

- ### Content
  - URDF captures the parent-child joint tree, joint limits, mass and inertia, and references to visual and collision meshes. Extensions and macro languages such as Xacro make large models maintainable, while plugins map URDF entities onto physics-engine bodies during simulation.

