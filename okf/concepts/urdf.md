---
okf_version: "0.2"
type: Class
title: URDF
resource: urn:ngm:class:urdf
domain: robotics
description: Unified Robot Description Format (URDF) is an XML-based schema used within the Robot Operating System (ROS) ecosystem to fully specify a robot's physical structure, including its kinematic chain of links and joints, collision geometries, inertial properties, and sensor placements. URDF files serve as the authoritative model consumed by simulation environments such as Gazebo, motion planners, and v
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-link
enables:
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:physics-simulation
uses:
  - urn:ngm:class:ros
  - urn:ngm:class:robot-kinematics
---

# URDF

Unified Robot Description Format (URDF) is an XML-based schema used within the Robot Operating System (ROS) ecosystem to fully specify a robot's physical structure, including its kinematic chain of links and joints, collision geometries, inertial properties, and sensor placements. URDF files serve as the authoritative model consumed by simulation environments such as Gazebo, motion planners, and visualisation tools like RViz, enabling consistent robot representation across software components. Each joint element declares its type (fixed, revolute, prismatic, continuous) along with axis, limits, and damping parameters, while link elements reference mesh geometry and material definitions.
