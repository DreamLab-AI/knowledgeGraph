---
okf_version: "0.2"
type: Class
title: Factor Graph
resource: urn:ngm:class:factor-graph
domain: robotics
description: A factor graph is a bipartite graphical model that factorises a global function into a product of local factors, connecting variable nodes to the factor nodes that constrain them. It makes the structure of an inference problem explicit and supports efficient message-passing algorithms. In robotics it is the dominant representation for state estimation problems such as SLAM and sensor fusion.
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
dependsOn:
  - urn:ngm:class:bayesian-inference
uses:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:pose-estimation
partOf:
  - urn:ngm:class:graphical-model
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:graphical-model
  - urn:ngm:class:sensor-fusion
---

# Factor Graph

A factor graph is a bipartite graphical model that factorises a global function into a product of local factors, connecting variable nodes to the factor nodes that constrain them. It makes the structure of an inference problem explicit and supports efficient message-passing algorithms. In robotics it is the dominant representation for state estimation problems such as SLAM and sensor fusion.
