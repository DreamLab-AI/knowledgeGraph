---
okf_version: "0.2"
type: Class
title: rb 0017 rescue robot
resource: urn:ngm:class:rb-0017-rescue-robot
domain: robotics
description: A rescue robot is a mobile robotic system specifically designed or adapted for deployment in disaster, emergency, or hazardous environments where direct human access is dangerous or impossible. Rescue robots perform tasks such as victim search-and-detection, structural reconnaissance, rubble traversal, gas sensing, and teleoperated manipulation of debris. They typically integrate rugged locomotion
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:mobile-robot
requires:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:obstacle-avoidance
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:rb-0077-depth-camera
  - urn:ngm:class:rb-0069-lidar
supports:
  - urn:ngm:class:rescue-robot
  - urn:ngm:class:swarm-robotics
relatedTo:
  - urn:ngm:class:rb-0008-autonomous-robot
  - urn:ngm:class:rb-0018-inspection-robot
  - urn:ngm:class:mobile-robot-platform
---

# rb 0017 rescue robot

A rescue robot is a mobile robotic system specifically designed or adapted for deployment in disaster, emergency, or hazardous environments where direct human access is dangerous or impossible. Rescue robots perform tasks such as victim search-and-detection, structural reconnaissance, rubble traversal, gas sensing, and teleoperated manipulation of debris. They typically integrate rugged locomotion systems (tracked, legged, or serpentine), multiple sensor modalities (thermal, depth camera, LIDAR, gas detectors), and semi-autonomous navigation with human-on-the-loop teleoperation.
