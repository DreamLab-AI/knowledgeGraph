- ### Definition
  - Force control is a robot control paradigm that regulates the contact force between the end-effector and the environment rather than tracking a pure position trajectory. By reading a force-torque sensor in real time, the controller can adapt the robot's motion to maintain a desired interaction force, making it suitable for tasks where the geometry of the environment is uncertain or deformable — such as polishing, grinding, assembly insertion, and collaborative handover. The three principal architectures are hybrid position/force control, impedance control, and admittance control.
  - Force control is a key enabler of safe human-robot collaboration: by limiting the forces the robot can exert, it directly supports the power-and-force limiting safety mode defined in ISO/TS 15066 for collaborative robot operations.

- ### Semantic Classification
  - owl-class:: robotics:rb0053forcecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires force-torque sensor (rb 0067) for feedback; closely related to impedance control (rb 0056) and admittance control (rb 0057); contrasts with pure position control (rb 0054).

- ### Content
  - ### Primary Definition
  **Force Control** - Force Control in robotics systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z