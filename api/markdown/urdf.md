- ### Definition
  - Unified Robot Description Format (URDF) is an XML-based schema used within the Robot Operating System (ROS) ecosystem to fully specify a robot's physical structure, including its kinematic chain of links and joints, collision geometries, inertial properties, and sensor placements. URDF files serve as the authoritative model consumed by simulation environments such as Gazebo, motion planners, and visualisation tools like RViz, enabling consistent robot representation across software components. Each joint element declares its type (fixed, revolute, prismatic, continuous) along with axis, limits, and damping parameters, while link elements reference mesh geometry and material definitions.

- ### Semantic Classification
  - owl-class:: urdf:URDF
  - owl-role:: Concept

- ### Relationships
  - uses [[Robot Operating System]]
  - uses [[Robot Kinematics]]
  - enables [[Gazebo Simulator]]
  - enables [[Physics Simulation]]
  - hasPart [[Robot Joint]]
  - hasPart [[RobotLink]]

- ### Content
  - URDF was developed alongside ROS as a standardised way to decouple robot model authoring from the software stacks that consume it. A single URDF file can be shared across the ROS parameter server, allowing multiple nodes — from the joint-state publisher to MoveIt! motion planning — to operate on an identical kinematic model without bespoke configuration per tool.
  - The format defines a tree-structured kinematic chain rooted at a base link. Closed-loop kinematic structures (e.g., parallel mechanisms) are not natively supported; the URDF Extras (XACRO macros) and the newer SRIDF/SDF formats address this limitation within Gazebo. XACRO, an XML macro language, is commonly layered atop URDF to parameterise repetitive robot components such as identical finger links, reducing authoring effort and errors.
  - Collision geometry defined in URDF is used both for physics-engine contact simulation and for motion-planning collision checking. Simplified convex-hull meshes are typically specified for collision while higher-fidelity visual meshes are referenced for rendering. Inertial tensors per link are critical for accurate dynamics simulation in Gazebo; if omitted, the simulator defaults to uniform-density assumptions that may diverge from real robot behaviour. URDF is the de facto standard for ROS-based robots and is consumed by ROS 2 equally.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z