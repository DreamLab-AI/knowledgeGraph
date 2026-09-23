---
okf_version: "0.2"
type: Class
title: Search Space Definition
resource: urn:ngm:class:search-space-definition
domain: machine-learning
description: Search space definition is the process of specifying the set of candidate configurations, such as model architectures, hyperparameters, or feature transformations, that an automated search or optimisation algorithm is permitted to explore. A well-formed search space bounds each parameter's type and range and captures dependencies between parameters, directly shaping the efficiency and quality of t
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:auto-ml
---

# Search Space Definition

Search space definition is the process of specifying the set of candidate configurations, such as model architectures, hyperparameters, or feature transformations, that an automated search or optimisation algorithm is permitted to explore. A well-formed search space bounds each parameter's type and range and captures dependencies between parameters, directly shaping the efficiency and quality of the resulting search. It is a foundational step in AutoML and neural architecture search, where a poorly defined space can make the optimisation problem intractable or exclude high-performing solutions.
