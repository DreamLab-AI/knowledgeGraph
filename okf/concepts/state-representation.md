---
okf_version: "0.2"
type: Class
title: State Representation
resource: urn:ngm:class:state-representation
domain: artificial-intelligence
description: "State representation is the encoding scheme used to capture the relevant information about a system or environment at a given point, transforming raw observations into a form suitable for prediction, planning, or synchronisation. Choices range from hand-crafted low-dimensional feature vectors to learned latent embeddings produced by an encoder network, and the choice materially affects downstream "
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:state-space
partOf:
  - urn:ngm:class:state-space
---

# State Representation

State representation is the encoding scheme used to capture the relevant information about a system or environment at a given point, transforming raw observations into a form suitable for prediction, planning, or synchronisation. Choices range from hand-crafted low-dimensional feature vectors to learned latent embeddings produced by an encoder network, and the choice materially affects downstream sample efficiency and generalisation. It is a prerequisite for constructing a world model and for synchronising state across distributed or networked simulations.
