---
okf_version: "0.2"
type: Class
title: Integer Programming
resource: urn:ngm:class:integer-programming
domain: artificial-intelligence
description: Integer programming is a class of mathematical optimisation in which some or all decision variables are constrained to take integer values, while the objective and constraints are typically linear. The integrality requirement makes these problems NP-hard in general, yet it lets them model discrete decisions such as selection, assignment, and sequencing exactly. Solvers combine the linear-programmi
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:combinatorial-optimisation
requires:
  - urn:ngm:class:algorithm
enables:
  - urn:ngm:class:operations-research
dependsOn:
  - urn:ngm:class:linear-programming
implements:
  - urn:ngm:class:linear-programming
contrastsWith:
  - urn:ngm:class:convex-optimisation
uses:
  - urn:ngm:class:linear-programming
  - urn:ngm:class:constraint-satisfaction
supports:
  - urn:ngm:class:operations-research
partOf:
  - urn:ngm:class:combinatorial-optimisation
relatedTo:
  - urn:ngm:class:convex-optimisation
  - urn:ngm:class:operations-research
  - urn:ngm:class:algorithm
---

# Integer Programming

Integer programming is a class of mathematical optimisation in which some or all decision variables are constrained to take integer values, while the objective and constraints are typically linear. The integrality requirement makes these problems NP-hard in general, yet it lets them model discrete decisions such as selection, assignment, and sequencing exactly. Solvers combine the linear-programming relaxation with branch-and-bound and cutting-plane techniques to find provably optimal solutions.
