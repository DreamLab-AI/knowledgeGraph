---
okf_version: "0.2"
type: Class
title: Satisfiability
resource: urn:ngm:class:satisfiability
domain: artificial-intelligence
description: Satisfiability is the problem of determining whether there exists an assignment of values to variables that makes a logical formula true, most prominently the Boolean satisfiability problem (SAT). SAT is the canonical NP-complete problem, and modern SAT solvers can decide formulas with millions of variables despite this worst-case hardness. Satisfiability provides a unifying computational substrat
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:logic
requires:
  - urn:ngm:class:knowledge-representation
enables:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:planning
implements:
  - urn:ngm:class:reasoning
contrastsWith:
  - urn:ngm:class:optimisation
bridgesTo:
  - urn:ngm:class:constraint-satisfaction
uses:
  - urn:ngm:class:search-algorithm
  - urn:ngm:class:graph-search
supports:
  - urn:ngm:class:theorem-proving
  - urn:ngm:class:reasoning
partOf:
  - urn:ngm:class:logic
relatedTo:
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:logic
---

# Satisfiability

Satisfiability is the problem of determining whether there exists an assignment of values to variables that makes a logical formula true, most prominently the Boolean satisfiability problem (SAT). SAT is the canonical NP-complete problem, and modern SAT solvers can decide formulas with millions of variables despite this worst-case hardness. Satisfiability provides a unifying computational substrate for verification, planning, scheduling and many forms of automated reasoning.
