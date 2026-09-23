---
okf_version: "0.2"
type: Class
title: Collaborative Robot
resource: urn:ngm:class:collaborative-systems-modality-robot
domain: robotics
description: Collaborative Robot (cobot) - A lightweight robotic arm engineered to operate safely alongside human workers, combining force/torque sensing, reduced kinetic energy, and speed limitations to enable Human-Robot Collaboration in shared manufacturing and assembly environments. Cobots are distinguished from traditional industrial robots by their intrinsic safety mechanisms, ease of programming, and ab
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:robotics
hasPart:
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:end-effector
  - urn:ngm:class:collision-detection-system
requires:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:rb-0094-power-and-force-limiting
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:safety-controller
  - urn:ngm:class:iso-ts-15066
enables:
  - urn:ngm:class:human-robot-collaboration
  - urn:ngm:class:flexible-assembly
  - urn:ngm:class:reduced-labour-costs
  - urn:ngm:class:rapid-deployment
implements:
  - urn:ngm:class:iso-10218
  - urn:ngm:class:rb-0104-hand-guiding
contrastsWith:
  - urn:ngm:class:autonomous-mobile-robots
bridgesTo:
  - urn:ngm:class:telecollaboration
  - urn:ngm:class:digital-twin
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:ros
  - urn:ngm:class:machine-vision
  - urn:ngm:class:sensor-fusion
standardizedBy:
  - urn:ngm:class:iso
  - urn:ngm:class:ieee
partOf:
  - urn:ngm:class:collaborative-systems-modality
  - urn:ngm:class:collaborative-systems-modality
relatedTo:
  - urn:ngm:class:teleoperation
---

# Collaborative Robot

Collaborative Robot (cobot) - A lightweight robotic arm engineered to operate safely alongside human workers, combining force/torque sensing, reduced kinetic energy, and speed limitations to enable Human-Robot Collaboration in shared manufacturing and assembly environments. Cobots are distinguished from traditional industrial robots by their intrinsic safety mechanisms, ease of programming, and ability to share workspace with humans without physical guarding barriers.
