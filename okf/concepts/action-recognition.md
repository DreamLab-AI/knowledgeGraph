---
okf_version: "0.2"
type: Class
title: Action Recognition
resource: urn:ngm:class:action-recognition
domain: ai
description: Action Recognition is a computer-vision task that classifies the activity being performed by one or more agents from video or motion-sequence data. Models ingest spatiotemporal features, often built on detected body keypoints or 3D convolutions and transformers, to label actions such as walking, waving, or falling. It underpins applications in surveillance, sports analytics, human-robot interactio
maturity: established
quality: 0.88
is-a:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:video-understanding
  - urn:ngm:class:computer-vision-task
hasPart:
  - urn:ngm:class:temporal-action-detection
  - urn:ngm:class:optical-flow
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:spatiotemporal-feature-extractor
  - urn:ngm:class:skeleton-graph
  - urn:ngm:class:temporal-sampler
  - urn:ngm:class:benchmark-dataset
requires:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:benchmark-dataset
  - urn:ngm:class:deep-learning
  - urn:ngm:class:neural-network
  - urn:ngm:class:video-data
  - urn:ngm:class:temporal-modelling
  - urn:ngm:class:motion-tracking
enables:
  - urn:ngm:class:sports-analytics
  - urn:ngm:class:surveillance
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:wearable-ai
  - urn:ngm:class:fall-detection
  - urn:ngm:class:gesture-interface
  - urn:ngm:class:activity-data
  - urn:ngm:class:autonomous-vehicle
dependsOn:
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:foundation-model
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:deep-learning-framework
implements:
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:lstm
contrastsWith:
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:image-classification
  - urn:ngm:class:object-detection
uses:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:self-supervised-learning
  - urn:ngm:class:optical-flow
  - urn:ngm:class:lstm
  - urn:ngm:class:motion-capture
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:foundation-model
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:human-capture-and-recognition
  - urn:ngm:class:activity-data
  - urn:ngm:class:wearable-computing
  - urn:ngm:class:robotics
  - urn:ngm:class:human-robot-interaction
standardizedBy:
  - urn:ngm:class:iso-iec-22989-2022
  - urn:ngm:class:eu-ai-act-regulatory-instrument
relatedTo:
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:motion-capture
  - urn:ngm:class:multimodal-ai
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:wearable-computing
  - urn:ngm:class:action-space
  - urn:ngm:class:computer-vision-video-analysis
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:human-capture-and-recognition
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:sports-analytics
---

# Action Recognition

Action Recognition is a computer-vision task that classifies the activity being performed by one or more agents from video or motion-sequence data. Models ingest spatiotemporal features, often built on detected body keypoints or 3D convolutions and transformers, to label actions such as walking, waving, or falling. It underpins applications in surveillance, sports analytics, human-robot interaction, and assistive monitoring.
