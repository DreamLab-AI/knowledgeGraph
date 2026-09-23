---
okf_version: "0.2"
type: Class
title: Optimal Transport
resource: urn:ngm:class:optimal-transport
domain: machine-learning
description: Optimal Transport is the mathematical theory of moving one probability distribution to another while minimising a total cost defined by a ground metric. Its solution induces the Wasserstein distance, a geometrically meaningful divergence between distributions that, unlike many alternatives, behaves well even when supports do not overlap. In machine learning it grounds generative model training, do
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:probability-theory
requires:
  - urn:ngm:class:probability-distribution
enables:
  - urn:ngm:class:generative-model
  - urn:ngm:class:domain-adaptation
implements:
  - urn:ngm:class:loss-function
bridgesTo:
  - urn:ngm:class:domain-adaptation
uses:
  - urn:ngm:class:probability-distribution
  - urn:ngm:class:gradient-descent
supports:
  - urn:ngm:class:generative-adversarial-network
  - urn:ngm:class:normalising-flow
  - urn:ngm:class:normalising-flow
partOf:
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:vae
  - urn:ngm:class:diffusion-model
  - urn:ngm:class:neural-network
---

# Optimal Transport

Optimal Transport is the mathematical theory of moving one probability distribution to another while minimising a total cost defined by a ground metric. Its solution induces the Wasserstein distance, a geometrically meaningful divergence between distributions that, unlike many alternatives, behaves well even when supports do not overlap. In machine learning it grounds generative model training, domain adaptation, and distribution matching, including flow-based formulations.
