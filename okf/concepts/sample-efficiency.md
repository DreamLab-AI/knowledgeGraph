---
okf_version: "0.2"
type: Class
title: Sample Efficiency
resource: urn:ngm:class:sample-efficiency
domain: machine-learning
description: Sample efficiency is a measure of how much task performance a learning algorithm achieves per unit of training data or environment interaction it consumes. In reinforcement learning it is particularly critical because real-world or simulated interactions can be expensive or slow to collect, making algorithms that learn from fewer trials more practical to deploy. Techniques such as curriculum learn
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:reinforcement-learning
---

# Sample Efficiency

Sample efficiency is a measure of how much task performance a learning algorithm achieves per unit of training data or environment interaction it consumes. In reinforcement learning it is particularly critical because real-world or simulated interactions can be expensive or slow to collect, making algorithms that learn from fewer trials more practical to deploy. Techniques such as curriculum learning, model-based planning, and off-policy replay are used specifically to improve sample efficiency.
