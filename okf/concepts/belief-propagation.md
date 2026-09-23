---
okf_version: "0.2"
type: Class
title: Belief Propagation
resource: urn:ngm:class:belief-propagation
domain: infrastructure
description: Belief propagation is a message-passing algorithm for performing inference on graphical models by iteratively exchanging local messages between nodes representing variables and the factors that relate them. On tree-structured graphs it computes exact marginal distributions; on graphs with cycles, loopy belief propagation provides an approximate inference scheme that often works well in practice. I
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:graphical-model
  - urn:ngm:class:probabilistic-inference
hasPart:
  - urn:ngm:class:message-passing
  - urn:ngm:class:graphical-model
enables:
  - urn:ngm:class:probabilistic-inference
  - urn:ngm:class:inference
  - urn:ngm:class:reasoning
contrastsWith:
  - urn:ngm:class:markov-chain-monte-carlo
uses:
  - urn:ngm:class:message-passing
  - urn:ngm:class:probability-theory
  - urn:ngm:class:markov-chain
supports:
  - urn:ngm:class:probabilistic-model
  - urn:ngm:class:statistical-inference
relatedTo:
  - urn:ngm:class:variational-inference
  - urn:ngm:class:probabilistic-reasoning
  - urn:ngm:class:error-correcting-code
---

# Belief Propagation

Belief propagation is a message-passing algorithm for performing inference on graphical models by iteratively exchanging local messages between nodes representing variables and the factors that relate them. On tree-structured graphs it computes exact marginal distributions; on graphs with cycles, loopy belief propagation provides an approximate inference scheme that often works well in practice. It is the basis of efficient decoding for modern error-correcting codes and of probabilistic reasoning over structured domains.
