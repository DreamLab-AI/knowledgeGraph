---
okf_version: "0.2"
type: Class
title: Hydraulic Cylinder
resource: urn:ngm:class:hydraulic-cylinder
domain: robotics
description: A hydraulic cylinder is a mechanical actuator that converts hydraulic pressure and fluid flow into unidirectional linear force and motion. It consists of a cylindrical barrel, piston, piston rod, end caps, and seals; pressurised fluid acts on the piston face to extend or retract the rod, generating forces from tens of newtons to several meganewtons depending on bore diameter and system pressure. H
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:hydraulic-actuator
hasPart:
  - urn:ngm:class:chinese-seal-art-ai-classification-pipeline
  - urn:ngm:class:pressure-sensor
requires:
  - urn:ngm:class:hydraulic-motor
  - urn:ngm:class:feedback-control
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:industrial-robot
contrastsWith:
  - urn:ngm:class:pneumatic-cylinder
  - urn:ngm:class:servo-motor
uses:
  - urn:ngm:class:pid-control
  - urn:ngm:class:position-control
relatedTo:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:industrial-automation
---

# Hydraulic Cylinder

A hydraulic cylinder is a mechanical actuator that converts hydraulic pressure and fluid flow into unidirectional linear force and motion. It consists of a cylindrical barrel, piston, piston rod, end caps, and seals; pressurised fluid acts on the piston face to extend or retract the rod, generating forces from tens of newtons to several meganewtons depending on bore diameter and system pressure. Hydraulic cylinders are foundational components in industrial robots, heavy machinery, manufacturing automation, and construction equipment where high force density and precise position control are required.
