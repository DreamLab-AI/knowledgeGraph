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
---

# Random Walk

A random walk is a stochastic process describing a path formed by a sequence of random steps, each step's direction and size drawn from a probability distribution independent of the path's prior history in the simplest (Markovian) case. It underlies graph embedding techniques such as node2vec and DeepWalk, which sample walks over a graph to learn vector representations of vertices, and is foundational to the theory of Markov chains. Its long-run behaviour — recurrence, transience, and diffusion rate — depends on the dimensionality and structure of the underlying space.
