---
okf_version: "0.2"
type: Class
title: Electric Actuator
resource: urn:ngm:class:electric-actuator
domain: robotics
description: Electric actuator converts electrical energy into controlled mechanical motion through electromagnetic forces, providing the primary means of actuation in modern robots.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-actuator
  - urn:ngm:class:electromechanical-systems
hasPart:
  - urn:ngm:class:mechanical-interface
  - urn:ngm:class:power-electronics
  - urn:ngm:class:motor-winding
  - urn:ngm:class:output-transmission
requires:
  - urn:ngm:class:control-signal
  - urn:ngm:class:electrical-power
  - urn:ngm:class:load-support
  - urn:ngm:class:thermal-dissipation
enables:
  - urn:ngm:class:motion-generation
  - urn:ngm:class:force-exertion
  - urn:ngm:class:precise-control
  - urn:ngm:class:dynamic-responsiveness
dependsOn:
  - urn:ngm:class:motor-driver
  - urn:ngm:class:power-supply
  - urn:ngm:class:mechanical-coupling
bridgesTo:
  - urn:ngm:class:ai-agent-system
---

# Electric Actuator

Electric actuator converts electrical energy into controlled mechanical motion through electromagnetic forces, providing the primary means of actuation in modern robots.
