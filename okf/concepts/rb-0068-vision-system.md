---
okf_version: "0.2"
type: Class
title: rb 0068 vision system
resource: urn:ngm:class:rb-0068-vision-system
domain: robotics
description: A robotic vision system is an integrated sensor subsystem that captures and processes visual data—using cameras, depth sensors, or LiDAR—to provide a robot with spatial awareness, object recognition, and scene understanding capabilities. Vision systems underpin tasks including visual servoing, part inspection, SLAM-based localisation, and human-robot interaction, and conform to ISO 8373:2021 perce
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:rb-0077-depth-camera
  - urn:ngm:class:rb-0066-robot-sensor
enables:
  - urn:ngm:class:rb-0065-visual-servoing
  - urn:ngm:class:human-robot-interaction
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:object-detection
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
relatedTo:
  - urn:ngm:class:rb-0069-lidar
  - urn:ngm:class:perception-system
---

# rb 0068 vision system

A robotic vision system is an integrated sensor subsystem that captures and processes visual data—using cameras, depth sensors, or LiDAR—to provide a robot with spatial awareness, object recognition, and scene understanding capabilities. Vision systems underpin tasks including visual servoing, part inspection, SLAM-based localisation, and human-robot interaction, and conform to ISO 8373:2021 perception-system definitions.
