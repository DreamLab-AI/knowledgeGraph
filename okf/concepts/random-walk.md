---
okf_version: "0.2"
type: Class
title: Random Walk
resource: urn:ngm:class:random-walk
domain: machine-learning
description: A random walk is a stochastic process describing a path formed by a sequence of random steps, each step's direction and size drawn from a probability distribution independent of the path's prior history in the simplest (Markovian) case. It underlies graph embedding techniques such as node2vec and DeepWalk, which sample walks over a graph to learn vector representations of vertices, and is foundati
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:stochastic-process
partOf:
  - urn:ngm:class:stochastic-process
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Random Walk

A random walk is a stochastic process describing a path formed by a sequence of random steps, each step's direction and size drawn from a probability distribution independent of the path's prior history in the simplest (Markovian) case. It underlies graph embedding techniques such as node2vec and DeepWalk, which sample walks over a graph to learn vector representations of vertices, and is foundational to the theory of Markov chains. Its long-run behaviour — recurrence, transience, and diffusion rate — depends on the dimensionality and structure of the underlying space.
