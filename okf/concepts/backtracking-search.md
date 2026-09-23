---
okf_version: "0.2"
type: Class
title: Backtracking Search
resource: urn:ngm:class:backtracking-search
domain: artificial-intelligence
description: A depth-first search strategy for combinatorial problems that incrementally extends a partial assignment one variable at a time, checks it against the problem's constraints, and on any violation abandons the current branch by undoing the most recent choice and trying an alternative. Because it prunes every extension of an inconsistent partial assignment, it explores a small fraction of the full as
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:search-algorithm
uses:
  - urn:ngm:class:constraint-propagation
partOf:
  - urn:ngm:class:constraint-solver
relatedTo:
  - urn:ngm:class:depth-first-search
  - urn:ngm:class:constraint-satisfaction
---

# Backtracking Search

A depth-first search strategy for combinatorial problems that incrementally extends a partial assignment one variable at a time, checks it against the problem's constraints, and on any violation abandons the current branch by undoing the most recent choice and trying an alternative. Because it prunes every extension of an inconsistent partial assignment, it explores a small fraction of the full assignment space, and with constraint propagation and intelligent variable ordering it forms the core complete algorithm of constraint solvers and SAT solvers.
