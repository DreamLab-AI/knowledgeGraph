---
okf_version: "0.2"
type: Class
title: Apprenticeship Learning
resource: urn:ngm:class:apprenticeship-learning
domain: machine-learning
description: "Apprenticeship learning is the problem of learning to perform a task at expert level from demonstrations, without an explicitly specified reward function. Introduced by Abbeel and Ng (2004), it proceeds via inverse reinforcement learning: the learner infers a reward function under which the expert's behaviour is near-optimal — typically as a linear combination of state features whose expected valu"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:imitation-learning
dependsOn:
  - urn:ngm:class:reward-function
uses:
  - urn:ngm:class:inverse-reinforcement-learning
  - urn:ngm:class:reinforcement-learning
relatedTo:
  - urn:ngm:class:reinforcement-learning
---

# Apprenticeship Learning

Apprenticeship learning is the problem of learning to perform a task at expert level from demonstrations, without an explicitly specified reward function. Introduced by Abbeel and Ng (2004), it proceeds via inverse reinforcement learning: the learner infers a reward function under which the expert's behaviour is near-optimal — typically as a linear combination of state features whose expected values it seeks to match — and then optimises a policy against that inferred reward, yielding performance guarantees relative to the expert and better generalisation than directly mimicking actions.
