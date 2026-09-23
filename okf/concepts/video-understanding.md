---
okf_version: "0.2"
type: Class
title: Video Understanding
resource: urn:ngm:class:video-understanding
domain: artificial-intelligence
description: Video understanding is the field of artificial intelligence concerned with extracting semantic meaning from video, including recognising objects, actions, events, and their temporal relationships across frames. Unlike single-image analysis, it must model motion, temporal context, and long-range dependencies to interpret what is happening over time. Modern approaches combine spatial feature extract
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:object-detection
  - urn:ngm:class:action-recognition
  - urn:ngm:class:scene-understanding
enables:
  - urn:ngm:class:video-generation
dependsOn:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:feature-extraction
implements:
  - urn:ngm:class:optical-flow
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer
  - urn:ngm:class:attention-mechanism
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:artificial-intelligence
relatedTo:
  - urn:ngm:class:scene-understanding
---

# Video Understanding

Video understanding is the field of artificial intelligence concerned with extracting semantic meaning from video, including recognising objects, actions, events, and their temporal relationships across frames. Unlike single-image analysis, it must model motion, temporal context, and long-range dependencies to interpret what is happening over time. Modern approaches combine spatial feature extraction with temporal modelling using recurrent, 3D-convolutional, and transformer-based architectures, increasingly fused with language for captioning, retrieval, and question answering.
