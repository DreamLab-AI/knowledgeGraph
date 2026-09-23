---
okf_version: "0.2"
type: Class
title: URDF Robot Model
resource: urn:ngm:class:urdf-robot-model
domain: robotics
description: A URDF (Unified Robot Description Format) robot model is an XML specification that describes a robot's kinematic and dynamic properties, including links, joints, inertial parameters, visual meshes and collision geometry. It is the canonical model format in the ROS ecosystem, consumed by simulators, motion planners and visualisation tools to reason about a robot's physical structure. URDF files ena
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:kinematics-model
relatedTo:
  - urn:ngm:class:ros
  - urn:ngm:class:gazebo-simulator
---

# URDF Robot Model

A URDF (Unified Robot Description Format) robot model is an XML specification that describes a robot's kinematic and dynamic properties, including links, joints, inertial parameters, visual meshes and collision geometry. It is the canonical model format in the ROS ecosystem, consumed by simulators, motion planners and visualisation tools to reason about a robot's physical structure. URDF files enable consistent representation of articulated robots across simulation and control software.
