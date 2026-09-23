---
okf_version: "0.2"
type: Class
title: Industrial Inspection
resource: urn:ngm:class:industrial-inspection
domain: robotics
description: Industrial inspection is the systematic examination of manufactured parts, assemblies, infrastructure, and production processes to verify conformance with quality specifications, detect defects, and identify safety or structural hazards before product deployment or during operational service. It encompasses both non-destructive testing methods (ultrasonic, eddy-current, X-ray, thermographic) and m
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:quality-assurance
requires:
  - urn:ngm:class:labelled-dataset
  - urn:ngm:class:image-processing
enables:
  - urn:ngm:class:predictive-maintenance
  - urn:ngm:class:manufacturing-automation
  - urn:ngm:class:smart-manufacturing
  - urn:ngm:class:defect-detection
  - urn:ngm:class:quality-control
dependsOn:
  - urn:ngm:class:industrial-io-t
  - urn:ngm:class:deep-learning
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:infrastructure
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:inspection-robot
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:machine-vision
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:digital-twin
relatedTo:
  - urn:ngm:class:precision-manufacturing
  - urn:ngm:class:runtime-inspection
  - urn:ngm:class:statistical-process-control
---

# Industrial Inspection

Industrial inspection is the systematic examination of manufactured parts, assemblies, infrastructure, and production processes to verify conformance with quality specifications, detect defects, and identify safety or structural hazards before product deployment or during operational service. It encompasses both non-destructive testing methods (ultrasonic, eddy-current, X-ray, thermographic) and machine vision approaches that use computer vision algorithms to automate defect classification at production speeds. AI-driven industrial inspection replaces or augments human visual inspectors with deep learning models trained on labelled defect images, enabling consistent sub-millimetre defect detection at scale.
