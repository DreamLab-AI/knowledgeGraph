---
okf_version: "0.2"
type: Class
title: Backdrivability
resource: urn:ngm:class:backdrivability
domain: robotics
description: Backdrivability is the property of a mechanical actuator or transmission that allows external forces applied at the output to drive the input in reverse, so motion and force pass freely in both directions. A highly backdrivable joint exhibits low reflected inertia and friction, enabling it to comply with and sense external contact. It is a key enabler of safe, compliant physical human-robot intera
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:torque
enables:
  - urn:ngm:class:impedance-control
  - urn:ngm:class:admittance-control
contrastsWith:
  - urn:ngm:class:rigid-body
bridgesTo:
  - urn:ngm:class:safety
uses:
  - urn:ngm:class:transparency
supports:
  - urn:ngm:class:force-control
  - urn:ngm:class:torque-control
  - urn:ngm:class:compliance
partOf:
  - urn:ngm:class:series-elastic-actuator
relatedTo:
  - urn:ngm:class:actuator
  - urn:ngm:class:manipulator
  - urn:ngm:class:robotics
---

# Backdrivability

Backdrivability is the property of a mechanical actuator or transmission that allows external forces applied at the output to drive the input in reverse, so motion and force pass freely in both directions. A highly backdrivable joint exhibits low reflected inertia and friction, enabling it to comply with and sense external contact. It is a key enabler of safe, compliant physical human-robot interaction and force-controlled robots.
