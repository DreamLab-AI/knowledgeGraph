- ### Definition
  - A **Robot Joint** is a mechanical articulation connecting two adjacent robot links, permitting one or more degrees of relative motion. Revolute (rotational) joints are the most common in industrial manipulators; prismatic (translational) joints appear in Cartesian and SCARA configurations. Joint dynamic properties — inertia, backlash, stiffness, and compliance — directly determine control bandwidth, positioning repeatability, and safe interaction forces during human-robot collaboration.

- ### Semantic Classification
  - owl-class:: robotics:rb0026robotjoint
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - hasPart:: rb 0072 encoder, Robot Actuator
  - partOf:: rb 0027 robot link
  - relatedTo:: rb 0040 backlash, rb 0041 inertia, rb 0038 compliance, rb 0039 stiffness
  - enables:: rb 0021 robot kinematics, rb 0054 position control

- ### Content
  - ### Primary Definition
  **Robot Joint** - Articulation between robot links allowing relative motion

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z