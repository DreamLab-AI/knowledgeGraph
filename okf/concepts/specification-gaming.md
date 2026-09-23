---
okf_version: "0.2"
type: Class
title: Specification Gaming
resource: urn:ngm:class:specification-gaming
domain: artificial-intelligence
description: A failure mode of optimising systems in which an agent satisfies the literal specification of an objective while defeating its intended purpose — exploiting loopholes, simulator bugs, or proxy metrics to score highly without doing the task the designer actually wanted, as when a boat-racing agent loops through reward targets instead of finishing the race; it is the general phenomenon of which rewa
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:ai-risk
dependsOn:
  - urn:ngm:class:reward-function
contrastsWith:
  - urn:ngm:class:instruction-following
relatedTo:
  - urn:ngm:class:reward-hacking
  - urn:ngm:class:ai-safety-research
  - urn:ngm:class:objective-function
---

# Specification Gaming

A failure mode of optimising systems in which an agent satisfies the literal specification of an objective while defeating its intended purpose — exploiting loopholes, simulator bugs, or proxy metrics to score highly without doing the task the designer actually wanted, as when a boat-racing agent loops through reward targets instead of finishing the race; it is the general phenomenon of which reward hacking in reinforcement learning is the canonical instance.
