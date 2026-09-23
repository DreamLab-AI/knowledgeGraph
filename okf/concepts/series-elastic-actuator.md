---
okf_version: "0.2"
type: Class
title: Series Elastic Actuator
resource: urn:ngm:class:series-elastic-actuator
domain: robotics
description: "A Series Elastic Actuator (SEA) is a robotic joint mechanism that interposes a compliant spring element in series between the gearbox output and the load, deliberately introducing controlled elasticity into the drivetrain. By measuring the spring deflection with a position sensor, the SEA provides accurate, low-noise torque measurement without a dedicated force-torque sensor, while simultaneously "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robot-actuator
hasPart:
  - urn:ngm:class:compliant-spring-element
  - urn:ngm:class:rotary-encoder
  - urn:ngm:class:planetary-gearbox
  - urn:ngm:class:torque-control
requires:
  - urn:ngm:class:position-sensor
  - urn:ngm:class:feedback-control
  - urn:ngm:class:motor-driver
enables:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:soft-robotics
  - urn:ngm:class:legged-locomotion
implements:
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:force-torque-sensor
contrastsWith:
  - urn:ngm:class:quasi-direct-drive
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:actuator
bridgesTo:
  - urn:ngm:class:biomechanics
  - urn:ngm:class:safe-human-robot-interaction
uses:
  - urn:ngm:class:position-sensor
  - urn:ngm:class:torque-control
  - urn:ngm:class:hookes-law
  - urn:ngm:class:pid-controller
supports:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:variable-impedance-control
  - urn:ngm:class:force-control
  - urn:ngm:class:backdrivability
partOf:
  - urn:ngm:class:humanoid-robot
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:exoskeleton
relatedTo:
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:variable-stiffness-actuator
  - urn:ngm:class:actuator
---

# Series Elastic Actuator

A Series Elastic Actuator (SEA) is a robotic joint mechanism that interposes a compliant spring element in series between the gearbox output and the load, deliberately introducing controlled elasticity into the drivetrain. By measuring the spring deflection with a position sensor, the SEA provides accurate, low-noise torque measurement without a dedicated force-torque sensor, while simultaneously providing passive mechanical compliance that absorbs impact energy and reduces stiffness at the point of contact. This architecture enables safe, backdrivable interactions between robots and humans or unstructured environments.
