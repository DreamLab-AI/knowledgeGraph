---
okf_version: "0.2"
type: Class
title: Sat Solving
resource: urn:ngm:class:sat-solving
domain: ai
description: SAT solving is the algorithmic process of determining whether a propositional logic formula, typically in conjunctive normal form, has a satisfying truth assignment — the Boolean satisfiability problem. Although SAT is the canonical NP-complete problem, modern conflict-driven clause-learning solvers routinely decide instances with millions of variables and clauses, making SAT a practical engine fo
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:automated-reasoning
hasPart:
  - urn:ngm:class:constraint-solver
  - urn:ngm:class:constraint-satisfaction-problem
requires:
  - urn:ngm:class:optimisation-algorithm
enables:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:model-checking
  - urn:ngm:class:automated-planning
implements:
  - urn:ngm:class:automated-reasoning
uses:
  - urn:ngm:class:propositional-logic
  - urn:ngm:class:logic
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:search-algorithm
supports:
  - urn:ngm:class:theorem-proving
  - urn:ngm:class:verification
partOf:
  - urn:ngm:class:automated-reasoning
relatedTo:
  - urn:ngm:class:planning
  - urn:ngm:class:electronic-design-automation
---

# Sat Solving

SAT solving is the algorithmic process of determining whether a propositional logic formula, typically in conjunctive normal form, has a satisfying truth assignment — the Boolean satisfiability problem. Although SAT is the canonical NP-complete problem, modern conflict-driven clause-learning solvers routinely decide instances with millions of variables and clauses, making SAT a practical engine for many computational tasks. SAT solving uses systematic search with unit propagation, clause learning, and intelligent backtracking. It underpins formal verification, automated planning, and constraint solving, and is closely related to satisfiability-modulo-theories reasoning.
