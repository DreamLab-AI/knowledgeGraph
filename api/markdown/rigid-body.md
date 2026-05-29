- ### Definition
  - A Rigid Body is an idealised mechanical object whose internal distances between all constituent points remain constant regardless of applied forces, making it the foundational abstraction for classical mechanics, robotic kinematics, and physics simulation. In robotics, links of a kinematic chain are modelled as rigid bodies connected by joints; their mass, centre of gravity, and inertia tensor parameterise the dynamics equations used for motion planning, control, and simulation. Rigid body assumptions break down for flexible or soft-robotic systems.

- ### Semantic Classification
  - owl-class:: robotics:RigidBody
  - owl-role:: concept

- ### Relationships
  - **hasPart**: Kinematics
  - **uses**: Inverse Kinematics, Forward Kinematics
  - **partOf**: Robot Component
  - **enables**: Control System

- ### Content

  ## Overview

  Rigid Body represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z