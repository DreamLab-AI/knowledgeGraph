---
okf_version: "0.2"
type: Class
title: Machine Vision
resource: urn:ngm:class:machine-vision
domain: ai
description: Machine vision is the engineering discipline that applies digital imaging, optics, and automated image analysis to perform inspection, measurement, guidance, and identification tasks in industrial and manufacturing environments. It integrates hardware components — cameras, illumination, optics, and frame grabbers — with software pipelines that extract actionable decisions from image data, typicall
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:image-preprocessing
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:pattern-recognition
  - urn:ngm:class:image-acquisition
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:camera
  - urn:ngm:class:optical-systems
  - urn:ngm:class:illumination
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:defect-detection
  - urn:ngm:class:optical-character-recognition
  - urn:ngm:class:dimensional-measurement
  - urn:ngm:class:robot-guidance
bridgesTo:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:edge-detection
supports:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:quality-control
  - urn:ngm:class:robotics
  - urn:ngm:class:industrial-automation
standardizedBy:
  - urn:ngm:class:aia-standards
  - urn:ngm:class:genicam-standard
relatedTo:
  - urn:ngm:class:barcode-scanning
  - urn:ngm:class:3d-imaging
---

# Machine Vision

Machine vision is the engineering discipline that applies digital imaging, optics, and automated image analysis to perform inspection, measurement, guidance, and identification tasks in industrial and manufacturing environments. It integrates hardware components — cameras, illumination, optics, and frame grabbers — with software pipelines that extract actionable decisions from image data, typically operating in real time under strict cycle-time constraints. Distinguished from the broader research field of computer vision by its emphasis on reliability, determinism, and seamless integration with programmable logic controllers and industrial automation systems. Modern machine vision systems increasingly incorporate deep learning inference alongside classical morphological and blob-analysis algorithms to handle appearance variability that rule-based methods alone cannot address.
