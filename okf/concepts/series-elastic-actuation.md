---
okf_version: "0.2"
type: Class
title: Series Elastic Actuation
resource: urn:ngm:class:series-elastic-actuation
domain: robotics
description: Series Elastic Actuation (SEA) is a robotic actuation paradigm in which a calibrated compliant element — typically a torsional or linear spring — is interposed in series between a motor-gearbox drive train and the output link of a robot joint. The spring deflection under load provides an indirect torque measurement via Hooke's Law, enabling high-fidelity closed-loop torque control without the comp
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:compliant-spring-element
  - urn:ngm:class:torque-sensor
  - urn:ngm:class:motor-gearbox
requires:
  - urn:ngm:class:position-encoder
  - urn:ngm:class:torque-control
  - urn:ngm:class:spring-stiffness-selection
  - urn:ngm:class:torque-control
enables:
  - urn:ngm:class:force-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:admittance-control
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:safe-human-robot-interaction
dependsOn:
  - urn:ngm:class:actuator
  - urn:ngm:class:pid-controller
  - urn:ngm:class:mechanical-compliance
contrastsWith:
  - urn:ngm:class:variable-stiffness-actuator
  - urn:ngm:class:actuator
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:actuator
bridgesTo:
  - urn:ngm:class:wearable-robotics
  - urn:ngm:class:prosthetics
uses:
  - urn:ngm:class:hookes-law
  - urn:ngm:class:rotary-encoder
  - urn:ngm:class:deflection-measurement
supports:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:rehabilitation-robotics
standardizedBy:
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:iso-10218
partOf:
  - urn:ngm:class:robot-joint
  - urn:ngm:class:compliant-robot
relatedTo:
  - urn:ngm:class:backdrivability
  - urn:ngm:class:collaborative-systems-modality-robot
  - urn:ngm:class:torque-bandwidth-tradeoff
---

# Series Elastic Actuation

Series Elastic Actuation (SEA) is a robotic actuation paradigm in which a calibrated compliant element — typically a torsional or linear spring — is interposed in series between a motor-gearbox drive train and the output link of a robot joint. The spring deflection under load provides an indirect torque measurement via Hooke's Law, enabling high-fidelity closed-loop torque control without the complexity of strain-gauge transducers. This intrinsic mechanical compliance attenuates shock loads, lowers the reflected inertia experienced during unintended contact, and passively limits peak interaction forces — properties that are essential for safe physical human–robot interaction. SEA is a foundational technology in legged locomotion systems, rehabilitation exoskeletons, prosthetic limbs, and compliant collaborative robots, and stands as the seminal example of intentional mechanical compliance in actuation design.
