---
okf_version: "0.2"
type: Class
title: Local Search
resource: urn:ngm:class:local-search
domain: artificial-intelligence
description: A family of optimisation and constraint-solving methods that iteratively improve a single complete candidate solution by moving to neighbouring solutions under a defined move operator, using strategies such as hill climbing, min-conflicts, tabu lists and randomised restarts to navigate the search landscape; memory-light and anytime by nature, local search scales to problem instances far beyond the
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:heuristic-methods
partOf:
  - urn:ngm:class:combinatorial-optimisation
relatedTo:
  - urn:ngm:class:constraint-satisfaction
  - urn:ngm:class:simulated-annealing
---

# Local Search

A family of optimisation and constraint-solving methods that iteratively improve a single complete candidate solution by moving to neighbouring solutions under a defined move operator, using strategies such as hill climbing, min-conflicts, tabu lists and randomised restarts to navigate the search landscape; memory-light and anytime by nature, local search scales to problem instances far beyond the reach of systematic tree search, at the cost of completeness guarantees.
