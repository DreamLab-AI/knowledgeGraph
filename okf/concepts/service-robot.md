---
okf_version: "0.2"
type: Class
title: Service Robot
resource: urn:ngm:class:service-robot
domain: robotics
description: "A Service Robot is an autonomous or semi-autonomous robotic system designed to perform tasks for humans in non-industrial settings such as healthcare, logistics, hospitality, and domestic environments. Unlike fixed industrial robots, service robots operate in dynamic, unstructured spaces and must navigate safely around people, relying on sensor fusion, motion planning, and human-robot interaction "
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:robo-robot-type
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:human-robot-interaction
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:autonomous-robot
relatedTo:
  - urn:ngm:class:robot-control
---

# Service Robot

A Service Robot is an autonomous or semi-autonomous robotic system designed to perform tasks for humans in non-industrial settings such as healthcare, logistics, hospitality, and domestic environments. Unlike fixed industrial robots, service robots operate in dynamic, unstructured spaces and must navigate safely around people, relying on sensor fusion, motion planning, and human-robot interaction capabilities.
