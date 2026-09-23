---
okf_version: "0.2"
type: Class
title: Perception
resource: urn:ngm:class:perception
domain: artificial-intelligence
description: Perception is the computational process by which an intelligent system acquires, processes, and interprets sensory signals — such as visual, auditory, tactile, or LiDAR data — to construct an internal, structured representation of the external world. It forms the foundational input stage of the sense–plan–act loop that underpins autonomous agents and robotics, translating high-dimensional raw sens
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cognitive-architecture
  - urn:ngm:class:embodied-ai
hasPart:
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:speech-recognition
  - urn:ngm:class:depth-estimation
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:feature-extraction
enables:
  - urn:ngm:class:robotics
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:human-robot-interaction
dependsOn:
  - urn:ngm:class:training-data
  - urn:ngm:class:signal-processing
contrastsWith:
  - urn:ngm:class:reasoning
  - urn:ngm:class:planning
bridgesTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:point-cloud
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:simultaneous-localisation-and-mapping
---

# Perception

Perception is the computational process by which an intelligent system acquires, processes, and interprets sensory signals — such as visual, auditory, tactile, or LiDAR data — to construct an internal, structured representation of the external world. It forms the foundational input stage of the sense–plan–act loop that underpins autonomous agents and robotics, translating high-dimensional raw sensor streams into semantically meaningful features, objects, or scene graphs. Modern AI perception leverages deep neural architectures — including convolutional networks, vision transformers, and multimodal encoders — to achieve robust generalisation across varied environments. It is distinct from raw data acquisition (sensing) and from higher-order cognitive reasoning, occupying the middle layer that makes physical-world understanding tractable for downstream decision systems.
