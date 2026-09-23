---
okf_version: "0.2"
type: Class
title: EMC Standard
resource: urn:ngm:class:emc-standard
domain: robotics
description: EMC standard ensures robots neither emit electromagnetic interference that disrupts other equipment nor experience susceptibility to external electromagnetic noise that degrades performance.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-safety-and-standards
  - urn:ngm:class:robot-standard
  - urn:ngm:class:electromagnetic-compatibility
hasPart:
  - urn:ngm:class:emissions-limit
  - urn:ngm:class:immunity-requirement
  - urn:ngm:class:test-procedure
  - urn:ngm:class:compliance-criteria
requires:
  - urn:ngm:class:shielding-design
  - urn:ngm:class:grounding-practice
  - urn:ngm:class:filter-implementation
  - urn:ngm:class:test-facility
enables:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:industrial-deployment
  - urn:ngm:class:electrical-safety
  - urn:ngm:class:reliable-operation
dependsOn:
  - urn:ngm:class:electromagnetic-theory
  - urn:ngm:class:measurement-equipment
implements:
  - urn:ngm:class:electromagnetic-compatibility
bridgesTo:
  - urn:ngm:class:ai-agent-system
---

# EMC Standard

EMC standard ensures robots neither emit electromagnetic interference that disrupts other equipment nor experience susceptibility to external electromagnetic noise that degrades performance.
