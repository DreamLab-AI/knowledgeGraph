---
okf_version: "0.2"
type: Class
title: rb 0105 speed and separation monitoring
resource: urn:ngm:class:rb-0105-speed-and-separation-monitoring
domain: robotics
description: Speed and Separation Monitoring (SSM) is a collaborative robot safety function in which the speed of the robot is continuously regulated based on the measured distance between the robot and any human operator in the shared workspace. When the separation distance decreases below defined thresholds the robot slows or stops, and it resumes normal speed once sufficient separation is restored. SSM is s
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:light-curtain
requires:
  - urn:ngm:class:rb-0066-robot-sensor
  - urn:ngm:class:rb-0095-safety-zone
enables:
  - urn:ngm:class:rb-0103-collaborative-operation
dependsOn:
  - urn:ngm:class:rb-0093-speed-limitation
  - urn:ngm:class:rb-0069-lidar
standardizedBy:
  - urn:ngm:class:rb-0087-safety-standard
relatedTo:
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:rb-0089-risk-assessment
---

# rb 0105 speed and separation monitoring

Speed and Separation Monitoring (SSM) is a collaborative robot safety function in which the speed of the robot is continuously regulated based on the measured distance between the robot and any human operator in the shared workspace. When the separation distance decreases below defined thresholds the robot slows or stops, and it resumes normal speed once sufficient separation is restored. SSM is standardised under ISO/TS 15066 as one of the four permitted collaborative operation modes.
