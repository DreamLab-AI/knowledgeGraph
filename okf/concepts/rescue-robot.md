---
okf_version: "0.2"
type: Class
title: Rescue Robot
resource: urn:ngm:class:rescue-robot
domain: robotics
description: "A Rescue Robot is a specialised mobile robot engineered to operate in hazardous, unstructured environments—including collapsed structures, disaster zones, and nuclear incidents—where direct human presence is unsafe. Such systems integrate multimodal locomotion (tracked, wheeled, or legged), sensor suites (IR, LIDAR, acoustic, tactile), and teleoperation or autonomous navigation to locate, assess, "
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:robotics
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:path-planning
  - urn:ngm:class:human-robot-interaction
partOf:
  - urn:ngm:class:mobile-robot
relatedTo:
  - urn:ngm:class:functional-safety
---

# Rescue Robot

A Rescue Robot is a specialised mobile robot engineered to operate in hazardous, unstructured environments—including collapsed structures, disaster zones, and nuclear incidents—where direct human presence is unsafe. Such systems integrate multimodal locomotion (tracked, wheeled, or legged), sensor suites (IR, LIDAR, acoustic, tactile), and teleoperation or autonomous navigation to locate, assess, and extract casualties or gather situational data. Conformance with safety standards such as ISO 8373 and participation in benchmarks such as the RoboCup Rescue Robot League drives continuous capability development.
