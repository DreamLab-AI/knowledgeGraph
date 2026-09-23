---
okf_version: "0.2"
type: Class
title: Formal Verification
resource: urn:ngm:class:formal-verification
domain: artificial-intelligence
description: Formal verification is the application of mathematical proof techniques — including model checking, theorem proving, abstract interpretation, and satisfiability-modulo-theories (SMT) solving — to rigorously establish that a hardware or software system satisfies a specified set of correctness, safety, or security properties under all possible inputs and execution paths. Unlike testing, which can on
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:model-checking
  - urn:ngm:class:theorem-proving
  - urn:ngm:class:smt-solving
  - urn:ngm:class:abstract-interpretation
requires:
  - urn:ngm:class:formal-specification
  - urn:ngm:class:temporal-logic
enables:
  - urn:ngm:class:ai-safety
  - urn:ngm:class:certified-robustness
  - urn:ngm:class:transparency
dependsOn:
  - urn:ngm:class:formal-methods
  - urn:ngm:class:mathematical-logic
implements:
  - urn:ngm:class:type-theory
  - urn:ngm:class:hoare-logic
contrastsWith:
  - urn:ngm:class:software-testing
  - urn:ngm:class:runtime-monitoring
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:neural-network-verification
uses:
  - urn:ngm:class:satisfiability-solver
  - urn:ngm:class:proof-assistant
supports:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:ai-risk-management
  - urn:ngm:class:hardware-design
  - urn:ngm:class:cryptographic-protocol
relatedTo:
  - urn:ngm:class:audit-trail
  - urn:ngm:class:interpretability
  - urn:ngm:class:static-analysis
---

# Formal Verification

Formal verification is the application of mathematical proof techniques — including model checking, theorem proving, abstract interpretation, and satisfiability-modulo-theories (SMT) solving — to rigorously establish that a hardware or software system satisfies a specified set of correctness, safety, or security properties under all possible inputs and execution paths. Unlike testing, which can only expose defects in sampled executions, formal verification provides exhaustive, machine-checkable guarantees by reasoning over the entire state space or by constructing logical proofs relative to a formal specification. The discipline encompasses hardware circuit verification, operating-system kernel correctness proofs, smart-contract auditing, neural-network robustness certification, and protocol security analysis, and is increasingly mandated in safety-critical and regulated industries where defects carry life-critical or large financial consequences.
