---
okf_version: "0.2"
type: Class
title: Mobile Robot
resource: urn:ngm:class:mobile-robot
domain: robotics
description: A mobile robot is an autonomous or semi-autonomous electromechanical system equipped with a locomotion mechanism — wheels, tracks, legs, rotors, or thrusters — that enables it to navigate within or across physical environments without being fixed to a stationary base. Mobile robots integrate sensing, actuation, and computation to perceive their surroundings, plan feasible paths, and execute goal-d
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robot
hasPart:
  - urn:ngm:class:locomotion
  - urn:ngm:class:sensor-suite
  - urn:ngm:class:onboard-computer
  - urn:ngm:class:power-supply
  - urn:ngm:class:actuator
  - urn:ngm:class:locomotion
  - urn:ngm:class:sensor-suite
requires:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:motion-planning
  - urn:ngm:class:obstacle-avoidance
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:last-mile-delivery
  - urn:ngm:class:search-and-rescue-robotics
  - urn:ngm:class:warehouse-automation
dependsOn:
  - urn:ngm:class:localisation
  - urn:ngm:class:embedded-systems
contrastsWith:
  - urn:ngm:class:manipulator
  - urn:ngm:class:manipulator
  - urn:ngm:class:fixed-base-robot
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:edge-computing
  - urn:ngm:class:internet-of-things
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:computer-vision
  - urn:ngm:class:ros
standardizedBy:
  - urn:ngm:class:iso-8373-2021
  - urn:ngm:class:ansi-ria-r15-08
partOf:
  - urn:ngm:class:robotics
  - urn:ngm:class:multi-robot-systems
  - urn:ngm:class:multi-robot-systems
relatedTo:
  - urn:ngm:class:unmanned-aerial-vehicle
  - urn:ngm:class:legged-robot
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:autonomous-underwater-vehicle
---

# Mobile Robot

A mobile robot is an autonomous or semi-autonomous electromechanical system equipped with a locomotion mechanism — wheels, tracks, legs, rotors, or thrusters — that enables it to navigate within or across physical environments without being fixed to a stationary base. Mobile robots integrate sensing, actuation, and computation to perceive their surroundings, plan feasible paths, and execute goal-directed motion, distinguishing them from fixed industrial manipulators. They span a wide spectrum of embodiments including ground vehicles (UGVs), aerial vehicles (UAVs/drones), underwater vehicles (AUVs), and legged walkers, unified by the capability to self-relocate in service of a task. Defined formally by ISO 8373:2021 as a robot able to travel under its own control.
