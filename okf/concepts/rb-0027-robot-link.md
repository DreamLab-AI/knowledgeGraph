---
okf_version: "0.2"
type: Class
title: rb 0027 robot link
resource: urn:ngm:class:rb-0027-robot-link
domain: robotics
description: A robot link is a rigid (or semi-rigid) structural body that forms one segment of a robot's kinematic chain, connecting adjacent joints and transmitting forces and torques between them. Links define the geometry of the robot's workspace by their length, mass, and inertial properties, and together with joints they constitute the Denavit-Hartenberg representation used in forward and inverse kinemati
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot
hasPart:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:robot-link
partOf:
  - urn:ngm:class:robot
  - urn:ngm:class:robot-kinematics
relatedTo:
  - urn:ngm:class:kinematics
  - urn:ngm:class:rigid-body
  - urn:ngm:class:inertia
  - urn:ngm:class:rb-0039-stiffness
---

# rb 0027 robot link

A robot link is a rigid (or semi-rigid) structural body that forms one segment of a robot's kinematic chain, connecting adjacent joints and transmitting forces and torques between them. Links define the geometry of the robot's workspace by their length, mass, and inertial properties, and together with joints they constitute the Denavit-Hartenberg representation used in forward and inverse kinematics. Link stiffness, material choice, and mass distribution directly affect dynamic performance, vibration characteristics, and safety in human-robot interaction.
