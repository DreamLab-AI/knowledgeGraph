---
okf_version: "0.2"
type: Class
title: Robot Programming
resource: urn:ngm:class:robot-programming
domain: robotics
description: Robot programming is the discipline of specifying the tasks, motions, and decision logic that a robot executes, ranging from low-level joint commands to high-level behavioural goals. It encompasses textual programming languages, graphical and teach-by-demonstration interfaces, and middleware frameworks that connect perception, planning, and actuation. The aim is to translate human intent into reli
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:ros
requires:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:robot-control
enables:
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:motion-planning
  - urn:ngm:class:industrial-robot
dependsOn:
  - urn:ngm:class:sensor-fusion
bridgesTo:
  - urn:ngm:class:autonomous-vehicle
uses:
  - urn:ngm:class:programming-language
  - urn:ngm:class:ros
supports:
  - urn:ngm:class:robot-control
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:automation
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:ros
  - urn:ngm:class:simulation
  - urn:ngm:class:digital-twin
---

# Robot Programming

Robot programming is the discipline of specifying the tasks, motions, and decision logic that a robot executes, ranging from low-level joint commands to high-level behavioural goals. It encompasses textual programming languages, graphical and teach-by-demonstration interfaces, and middleware frameworks that connect perception, planning, and actuation. The aim is to translate human intent into reliable, repeatable robot behaviour while respecting safety, timing, and hardware constraints.
