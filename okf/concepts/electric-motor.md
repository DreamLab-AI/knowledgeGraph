---
okf_version: "0.2"
type: Class
title: Electric Motor
resource: urn:ngm:class:electric-motor
domain: robotics
description: Electric motor converts electrical energy into rotational mechanical power through electromagnetic forces, forming the most widespread actuation technology in modern robotics.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:electric-actuator
  - urn:ngm:class:rotating-machinery
hasPart:
  - urn:ngm:class:stator
  - urn:ngm:class:rotor
  - urn:ngm:class:bearings
  - urn:ngm:class:shaft
  - urn:ngm:class:power-terminals
requires:
  - urn:ngm:class:power-supply
  - urn:ngm:class:mechanical-load
  - urn:ngm:class:motor-driver
  - urn:ngm:class:power-supply
  - urn:ngm:class:motor-driver
  - urn:ngm:class:heat-dissipation
enables:
  - urn:ngm:class:joint-actuation
  - urn:ngm:class:torque-generation
  - urn:ngm:class:rotational-motion
  - urn:ngm:class:speed-control
dependsOn:
  - urn:ngm:class:electromagnetic-theory
  - urn:ngm:class:power-electronics
bridgesTo:
  - urn:ngm:class:ai-agent-system
relatedTo:
  - urn:ngm:class:reaction-wheel
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Electric Motor

Electric motor converts electrical energy into rotational mechanical power through electromagnetic forces, forming the most widespread actuation technology in modern robotics.
