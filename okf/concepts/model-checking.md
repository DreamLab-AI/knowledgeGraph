---
okf_version: "0.2"
type: Class
title: Model Checking
resource: urn:ngm:class:model-checking
domain: artificial-intelligence
description: Model checking is an automated formal-verification technique that exhaustively explores the reachable states of a finite-state model of a system to determine whether it satisfies a specification, typically expressed in temporal logic. When the property fails, the model checker returns a concrete counterexample trace, making it valuable for debugging concurrent and reactive systems. Its main challe
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:formal-verification
hasPart:
  - urn:ngm:class:state-space
  - urn:ngm:class:temporal-logic
requires:
  - urn:ngm:class:temporal-logic
  - urn:ngm:class:state-space
enables:
  - urn:ngm:class:formal-verification
dependsOn:
  - urn:ngm:class:formal-methods
implements:
  - urn:ngm:class:formal-verification
contrastsWith:
  - urn:ngm:class:concurrency
uses:
  - urn:ngm:class:temporal-logic
  - urn:ngm:class:logic
supports:
  - urn:ngm:class:concurrency
partOf:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:formal-methods
relatedTo:
  - urn:ngm:class:formal-methods
  - urn:ngm:class:logic
---

# Model Checking

Model checking is an automated formal-verification technique that exhaustively explores the reachable states of a finite-state model of a system to determine whether it satisfies a specification, typically expressed in temporal logic. When the property fails, the model checker returns a concrete counterexample trace, making it valuable for debugging concurrent and reactive systems. Its main challenge is the state-space explosion problem, addressed by symbolic and abstraction techniques.
