---
okf_version: "0.2"
type: Class
title: ADE20K
resource: urn:ngm:class:ade20-k
domain: ai
description: ADE20K is a large-scale image segmentation dataset containing over 27,000 images annotated with 150 semantic categories covering both indoor and outdoor scenes, released by MIT CSAIL in 2017. It provides pixel-level semantic, instance, and part-level annotations enabling training and benchmarking of scene parsing and semantic segmentation models. ADE20K serves as the foundational benchmark for the
maturity: mature
quality: 0.9
is-a:
  - urn:ngm:class:benchmarks
  - urn:ngm:class:benchmark-dataset
hasPart:
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:panoptic-segmentation
  - urn:ngm:class:data-annotation
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:evaluation-metric
requires:
  - urn:ngm:class:data-curation
  - urn:ngm:class:human-in-the-loop
  - urn:ngm:class:crowdsourcing
  - urn:ngm:class:sun-database
  - urn:ngm:class:places-dataset
enables:
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:panoptic-segmentation
  - urn:ngm:class:instance-segmentation
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:dense-prediction
  - urn:ngm:class:open-vocabulary-segmentation
  - urn:ngm:class:visual-grounding
  - urn:ngm:class:weakly-supervised-learning
  - urn:ngm:class:semi-supervised-learning
  - urn:ngm:class:zero-shot-learning
  - urn:ngm:class:image-segmentation
dependsOn:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:image-processing
implements:
  - urn:ngm:class:object-recognition
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-processing
contrastsWith:
  - urn:ngm:class:coco-dataset
uses:
  - urn:ngm:class:data-annotation
  - urn:ngm:class:computer-vision
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:crowdsourcing
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:transfer-learning
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:vision-transformers
  - urn:ngm:class:attention-mechanism
  - urn:ngm:class:foundation-model
  - urn:ngm:class:neural-network
standardizedBy:
  - urn:ngm:class:mit-csail
relatedTo:
  - urn:ngm:class:coco-dataset
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:foundation-model
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:image-classification
  - urn:ngm:class:image-captioning
  - urn:ngm:class:scene-graph
  - urn:ngm:class:multimodal-ai-architecture-ai
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:robotics-perception
  - urn:ngm:class:augmented-reality
---

# ADE20K

ADE20K is a large-scale image segmentation dataset containing over 27,000 images annotated with 150 semantic categories covering both indoor and outdoor scenes, released by MIT CSAIL in 2017. It provides pixel-level semantic, instance, and part-level annotations enabling training and benchmarking of scene parsing and semantic segmentation models. ADE20K serves as the foundational benchmark for the ImageNet Scene Parsing Challenge and has driven significant advances in dense prediction architectures, with state-of-the-art models achieving 62.8 mIoU by 2022 (BEiT-3).
