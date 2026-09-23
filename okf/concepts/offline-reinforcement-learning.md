---
okf_version: "0.2"
type: Class
title: Offline Reinforcement Learning
resource: urn:ngm:class:offline-reinforcement-learning
domain: machine-learning
description: Offline reinforcement learning trains a policy from a fixed dataset of previously collected experience without further interaction with the environment. It avoids online exploration, which makes it suitable where data collection is costly or unsafe.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-technique
requires:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:markov-decision-process
enables:
  - urn:ngm:class:learning-from-demonstration
bridgesTo:
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:reward-function
---

# Offline Reinforcement Learning

Offline reinforcement learning trains a policy from a fixed dataset of previously collected experience without further interaction with the environment. It avoids online exploration, which makes it suitable where data collection is costly or unsafe.
