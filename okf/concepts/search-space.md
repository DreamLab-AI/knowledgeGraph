---
okf_version: "0.2"
type: Class
title: Search Space
resource: urn:ngm:class:search-space
domain: machine-learning
description: "A Search Space is the full set of candidate configurations, such as hyperparameter values, architectures, or solutions, that an optimisation or search algorithm is permitted to explore in pursuit of an objective. Its size and structure directly determine how tractable a search problem is: a poorly bounded or high-dimensional search space can make exhaustive search infeasible. Algorithms such as gr"
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:hyperparameter-optimisation
---

# Search Space

A Search Space is the full set of candidate configurations, such as hyperparameter values, architectures, or solutions, that an optimisation or search algorithm is permitted to explore in pursuit of an objective. Its size and structure directly determine how tractable a search problem is: a poorly bounded or high-dimensional search space can make exhaustive search infeasible. Algorithms such as grid search and random search differ chiefly in how they sample points from this space.
