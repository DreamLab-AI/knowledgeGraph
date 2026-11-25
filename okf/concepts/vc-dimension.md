---
okf_version: "0.2"
type: Class
title: VC Dimension
resource: urn:ngm:class:vc-dimension
domain: machine-learning
description: "The Vapnik-Chervonenkis (VC) dimension is a measure of the capacity of a hypothesis class, defined as the size of the largest set of points that the class can shatter — classify correctly under every possible binary labelling. Introduced by Vapnik and Chervonenkis in 1971, it yields distribution-free generalisation bounds in statistical learning theory: a finite VC dimension guarantees that empiri"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:model-complexity
partOf:
  - urn:ngm:class:statistical-learning-theory
relatedTo:
  - urn:ngm:class:bias-variance-tradeoff
  - urn:ngm:class:overfitting
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# VC Dimension

The Vapnik-Chervonenkis (VC) dimension is a measure of the capacity of a hypothesis class, defined as the size of the largest set of points that the class can shatter — classify correctly under every possible binary labelling. Introduced by Vapnik and Chervonenkis in 1971, it yields distribution-free generalisation bounds in statistical learning theory: a finite VC dimension guarantees that empirical risk converges uniformly to true risk as sample size grows, linking model complexity to the amount of data needed to learn reliably.
