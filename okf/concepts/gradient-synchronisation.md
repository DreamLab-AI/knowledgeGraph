---
okf_version: "0.2"
type: Class
title: Gradient Synchronisation
resource: urn:ngm:class:gradient-synchronisation
domain: machine-learning
description: Gradient Synchronisation is the process of aggregating and distributing gradient updates across multiple workers or devices during distributed training of a neural network, ensuring all replicas converge on a consistent set of model parameters. It typically uses all-reduce or parameter-server communication patterns, and is a major bottleneck in large-scale training due to network bandwidth constra
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:distributed-training
---

# Gradient Synchronisation

Gradient Synchronisation is the process of aggregating and distributing gradient updates across multiple workers or devices during distributed training of a neural network, ensuring all replicas converge on a consistent set of model parameters. It typically uses all-reduce or parameter-server communication patterns, and is a major bottleneck in large-scale training due to network bandwidth constraints. Techniques such as gradient compression and asynchronous updates trade off consistency for throughput.
