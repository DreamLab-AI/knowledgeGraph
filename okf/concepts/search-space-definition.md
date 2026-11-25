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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Search Space Definition

Search space definition is the process of specifying the set of candidate configurations, such as model architectures, hyperparameters, or feature transformations, that an automated search or optimisation algorithm is permitted to explore. A well-formed search space bounds each parameter's type and range and captures dependencies between parameters, directly shaping the efficiency and quality of the resulting search. It is a foundational step in AutoML and neural architecture search, where a poorly defined space can make the optimisation problem intractable or exclude high-performing solutions.
