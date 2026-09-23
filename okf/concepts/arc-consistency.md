---
okf_version: "0.2"
type: Class
title: Arc Consistency
resource: urn:ngm:class:arc-consistency
domain: artificial-intelligence
description: A local consistency property of binary constraint networks in which, for every value in one variable's domain, each constraint linking it to another variable admits at least one compatible supporting value in that variable's domain. Enforcing it — classically with the AC-3 algorithm — deletes unsupported values until a fixed point, providing the most widely used level of constraint propagation and
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:constraint-propagation
partOf:
  - urn:ngm:class:constraint-satisfaction
relatedTo:
  - urn:ngm:class:backtracking-search
  - urn:ngm:class:constraint
---

# Arc Consistency

A local consistency property of binary constraint networks in which, for every value in one variable's domain, each constraint linking it to another variable admits at least one compatible supporting value in that variable's domain. Enforcing it — classically with the AC-3 algorithm — deletes unsupported values until a fixed point, providing the most widely used level of constraint propagation and the pruning backbone of practical constraint solvers.
