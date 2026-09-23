---
okf_version: "0.2"
type: Class
title: Temporal Logic
resource: urn:ngm:class:temporal-logic
domain: artificial-intelligence
description: Temporal logic is a formal system of logic that extends classical propositional or predicate logic with operators for reasoning about propositions whose truth changes over time. Operators such as 'eventually', 'always', 'next' and 'until' allow the specification of orderings and timing of events without explicit reference to clock values. It is the standard language for stating correctness propert
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:logic
hasPart:
  - urn:ngm:class:state-space
requires:
  - urn:ngm:class:logic
enables:
  - urn:ngm:class:model-checking
  - urn:ngm:class:formal-verification
dependsOn:
  - urn:ngm:class:logic
implements:
  - urn:ngm:class:formal-methods
contrastsWith:
  - urn:ngm:class:state-space
uses:
  - urn:ngm:class:logic
  - urn:ngm:class:state-space
supports:
  - urn:ngm:class:model-checking
  - urn:ngm:class:concurrency
partOf:
  - urn:ngm:class:logic
  - urn:ngm:class:formal-methods
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:formal-methods
---

# Temporal Logic

Temporal logic is a formal system of logic that extends classical propositional or predicate logic with operators for reasoning about propositions whose truth changes over time. Operators such as 'eventually', 'always', 'next' and 'until' allow the specification of orderings and timing of events without explicit reference to clock values. It is the standard language for stating correctness properties of reactive and concurrent systems in formal verification.
