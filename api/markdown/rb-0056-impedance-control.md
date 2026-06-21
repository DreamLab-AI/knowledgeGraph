- ### Definition
  - **Impedance Control** (RB-0056) regulates the force-motion relationship at a robot's end effector by imposing a desired mechanical impedance (virtual mass, damping, stiffness). This allows compliant interaction with humans and uncertain environments without requiring an explicit force setpoint, making it foundational to safe collaborative operation.

- ### Semantic Classification
  - owl-class:: robotics:rb0056impedancecontrol
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0057 admittance control, rb 0053 force control, rb 0038 compliance
  - requires:: rb 0067 force torque sensor, rb 0072 encoder
  - supports:: rb 0007 collaborative robot, rb 0094 power and force limiting
  - contrastsWith:: rb 0054 position control

- ### Content
  - ### Primary Definition
  **Impedance Control** (RB-0056) shapes robot behaviour at contact by imposing a virtual mechanical impedance on the end effector, described by the equation: F = M_d * x_ddot + B_d * x_dot + K_d * x, where M_d, B_d, and K_d are desired inertia, damping, and stiffness matrices respectively.

  Unlike pure position control (which is rigid) or pure force control (which is compliant), impedance control occupies the full position-force spectrum and is therefore the preferred strategy for tasks involving unpredictable contact, such as assembly with tight tolerances, surface finishing, or physical human-robot collaboration.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z