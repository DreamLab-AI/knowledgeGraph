---
okf_version: "0.2"
type: Class
title: Dynamic Programming
resource: urn:ngm:class:dynamic-programming
domain: artificial-intelligence
description: Dynamic programming is an algorithmic technique for solving problems by breaking them into overlapping subproblems whose solutions are stored and reused rather than recomputed. It applies to problems exhibiting optimal substructure, combining subproblem solutions to construct an optimal whole. By memoising or tabulating intermediate results it converts exponential brute-force searches into polynom
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:programming-paradigm
  - urn:ngm:class:optimisation-algorithm
hasPart:
  - urn:ngm:class:memoization
  - urn:ngm:class:tabulation
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:state-space
  - urn:ngm:class:subproblem
  - urn:ngm:class:recurrence-relation
  - urn:ngm:class:optimal-substructure
  - urn:ngm:class:overlapping-subproblems
  - urn:ngm:class:value-function
requires:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:optimal-substructure
  - urn:ngm:class:overlapping-subproblems
  - urn:ngm:class:state-space-representation
  - urn:ngm:class:recursion
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:value-iteration
  - urn:ngm:class:policy-iteration
  - urn:ngm:class:sequence-alignment
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:approximate-dynamic-programming
  - urn:ngm:class:combinatorial-optimisation
dependsOn:
  - urn:ngm:class:recursion
  - urn:ngm:class:data-structure
  - urn:ngm:class:graph-theory
  - urn:ngm:class:directed-acyclic-graph
implements:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:principle-of-optimality
contrastsWith:
  - urn:ngm:class:algorithm
  - urn:ngm:class:greedy-algorithm
  - urn:ngm:class:divide-and-conquer
  - urn:ngm:class:exhaustive-search
  - urn:ngm:class:branch-and-bound
  - urn:ngm:class:a-star-algorithm
uses:
  - urn:ngm:class:algorithm
  - urn:ngm:class:hash-table
  - urn:ngm:class:array
  - urn:ngm:class:value-function
  - urn:ngm:class:directed-acyclic-graph
  - urn:ngm:class:priority-queue
supports:
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:hidden-markov-model
  - urn:ngm:class:stochastic-control
  - urn:ngm:class:operations-research
  - urn:ngm:class:bioinformatics
standardizedBy:
  - urn:ngm:class:richard-bellman
partOf:
  - urn:ngm:class:programming-paradigm
relatedTo:
  - urn:ngm:class:gradient-descent
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:markov-decision-process
  - urn:ngm:class:bellman-equation
  - urn:ngm:class:graph-algorithm
  - urn:ngm:class:combinatorial-optimisation
  - urn:ngm:class:approximate-dynamic-programming
  - urn:ngm:class:dynamical-systems-theory
---

# Dynamic Programming

Dynamic programming is an algorithmic technique for solving problems by breaking them into overlapping subproblems whose solutions are stored and reused rather than recomputed. It applies to problems exhibiting optimal substructure, combining subproblem solutions to construct an optimal whole. By memoising or tabulating intermediate results it converts exponential brute-force searches into polynomial-time algorithms.
