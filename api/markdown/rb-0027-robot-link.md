- ### Definition
  - ### Primary Definition
  A **Robot Link** is a rigid structural segment in a robot manipulator's kinematic chain. Each link connects two joints and is characterised by its length, mass, centre of mass, and moment of inertia. The Denavit-Hartenberg convention encodes link geometry as four parameters (a, d, α, θ), enabling systematic forward and inverse kinematic computation. Link design choices — material, cross-section, and mounting configuration — determine workspace geometry, payload capacity, and collision severity.

- ### Semantic Classification
  - owl-class:: robotics:rb0027robotlink
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - A robot link is part of a robot and connects robot joints to form the kinematic chain.
  - Its geometric and inertial properties are the inputs to kinematics and robot dynamics models.
  - Link stiffness (see rb 0039 stiffness) determines deflection under payload and affects positioning accuracy.
  - Rigid-body representations such as URDF/SDF serialise link geometry for simulation and ROS-based control.

- ### Content
  - ### Primary Definition
  **Robot Link** - Rigid body component of robot kinematic chain

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z