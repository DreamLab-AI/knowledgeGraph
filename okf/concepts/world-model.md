---
okf_version: "0.2"
type: Class
title: World Model
resource: urn:ngm:class:world-model
domain: ai
description: A World Model is an internal representation maintained by an intelligent agent—biological or artificial—that encodes beliefs about the structure, dynamics, and state of its environment, enabling prediction, planning, and counterfactual reasoning without requiring direct sensory input for every decision. In model-based reinforcement learning, a learned world model allows an agent to simulate future
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:knowledge-representation
hasPart:
  - urn:ngm:class:neural-network-latent-space
  - urn:ngm:class:reward-model
requires:
  - urn:ngm:class:state-representation
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:planning-and-scheduling
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:model-based-control
  - urn:ngm:class:counterfactual-reasoning
implements:
  - urn:ngm:class:predictive-processing
  - urn:ngm:class:model-based-reinforcement-learning
contrastsWith:
  - urn:ngm:class:reinforcement-learning
bridgesTo:
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:deep-learning
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:vae
relatedTo:
  - urn:ngm:class:embodied-ai-simulation
  - urn:ngm:class:autonomous-agent
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:simulation
---

# World Model

A World Model is an internal representation maintained by an intelligent agent—biological or artificial—that encodes beliefs about the structure, dynamics, and state of its environment, enabling prediction, planning, and counterfactual reasoning without requiring direct sensory input for every decision. In model-based reinforcement learning, a learned world model allows an agent to simulate future trajectories in latent space, dramatically improving sample efficiency compared to model-free approaches. World models compress high-dimensional sensory observations into compact representations that capture causally relevant structure, supporting long-horizon planning and generalisation to novel situations. They are central to current research on embodied AI, autonomous driving, and general-purpose robot manipulation.
