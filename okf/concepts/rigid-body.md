---
okf_version: "0.2"
type: Class
title: Rigid Body
resource: urn:ngm:class:rigid-body
domain: robotics
description: A Rigid Body is an idealised mechanical object whose internal distances between all constituent points remain constant regardless of applied forces, making it the foundational abstraction for classical mechanics, robotic kinematics, and physics simulation. In robotics, links of a kinematic chain are modelled as rigid bodies connected by joints; their mass, centre of gravity, and inertia tensor par
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:kinematics
enables:
  - urn:ngm:class:control-system
uses:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:forward-kinematics
partOf:
  - urn:ngm:class:robot-component
---

# Rigid Body

A Rigid Body is an idealised mechanical object whose internal distances between all constituent points remain constant regardless of applied forces, making it the foundational abstraction for classical mechanics, robotic kinematics, and physics simulation. In robotics, links of a kinematic chain are modelled as rigid bodies connected by joints; their mass, centre of gravity, and inertia tensor parameterise the dynamics equations used for motion planning, control, and simulation. Rigid body assumptions break down for flexible or soft-robotic systems.
