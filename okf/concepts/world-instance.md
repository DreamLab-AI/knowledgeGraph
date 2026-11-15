---
okf_version: "0.2"
type: Class
title: World Instance
resource: urn:ngm:class:world-instance
domain: spatial-computing
description: A runtime instantiation of a virtual world template that maintains isolated state, physics simulation, and user interactions for a bounded set of concurrent participants. World instances enable scalable multi-user virtual environments through dynamic spawning, load balancing, and state checkpointing, as seen in MMO dungeons, battle royale matches, and social VR rooms.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:sc-platform-and-environment
requires:
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:scene-graph
enables:
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:digital-twin
partOf:
  - urn:ngm:class:virtual-world
  - urn:ngm:class:metaverse
generated: {"by":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# World Instance

A runtime instantiation of a virtual world template that maintains isolated state, physics simulation, and user interactions for a bounded set of concurrent participants. World instances enable scalable multi-user virtual environments through dynamic spawning, load balancing, and state checkpointing, as seen in MMO dungeons, battle royale matches, and social VR rooms.
