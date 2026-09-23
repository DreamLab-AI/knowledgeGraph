---
okf_version: "0.2"
type: Class
title: Pneumatic Motor
resource: urn:ngm:class:pneumatic-motor
domain: robotics
description: A Pneumatic Motor is an actuator that converts the energy stored in compressed air into continuous rotational mechanical motion, producing torque and speed proportional to the supply pressure and airflow rate. Pneumatic motors are characterised by high power-to-weight ratios, inherent overload protection through stall behaviour, and suitability for hazardous environments where electrical motors wo
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:pneumatic-actuator
hasPart:
  - urn:ngm:class:torque
requires:
  - urn:ngm:class:pneumatic-actuator
enables:
  - urn:ngm:class:robotics
contrastsWith:
  - urn:ngm:class:hydraulic-motor
  - urn:ngm:class:servo-motor
uses:
  - urn:ngm:class:torque-control
partOf:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:pneumatic-cylinder
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:robotics-control
---

# Pneumatic Motor

A Pneumatic Motor is an actuator that converts the energy stored in compressed air into continuous rotational mechanical motion, producing torque and speed proportional to the supply pressure and airflow rate. Pneumatic motors are characterised by high power-to-weight ratios, inherent overload protection through stall behaviour, and suitability for hazardous environments where electrical motors would pose ignition risks. They are widely used in industrial tooling, material handling equipment, and mobile robotics applications requiring lightweight, spark-free drive systems.
