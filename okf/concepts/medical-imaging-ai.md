---
okf_version: "0.2"
type: Class
title: Medical Imaging AI
resource: urn:ngm:class:medical-imaging-ai
domain: artificial-intelligence
description: "Medical Imaging AI encompasses artificial intelligence systems designed to analyse, interpret, and enhance medical images including radiological scans, pathology slides, and other diagnostic imaging modalities. These systems employ deep learning architectures, particularly convolutional neural networks, to perform lesion detection, disease classification, anatomical segmentation, and quantitative "
maturity: emerging
quality: 0.68
is-a:
  - urn:ngm:class:medical-ai
hasPart:
  - urn:ngm:class:radiology-ai
  - urn:ngm:class:pathology-ai
  - urn:ngm:class:computer-aided-diagnosis
  - urn:ngm:class:image-segmentation
requires:
  - urn:ngm:class:dicom
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:clinical-decision-support
  - urn:ngm:class:automated-lesion-detection
  - urn:ngm:class:treatment-planning
contrastsWith:
  - urn:ngm:class:traditional-radiological-review
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer
  - urn:ngm:class:transfer-learning
standardizedBy:
  - urn:ngm:class:hl7-fhir
  - urn:ngm:class:fda-510k
partOf:
  - urn:ngm:class:medical-ai
  - urn:ngm:class:healthcare-ai
relatedTo:
  - urn:ngm:class:explainable-ai
  - urn:ngm:class:data-augmentation
---

# Medical Imaging AI

Medical Imaging AI encompasses artificial intelligence systems designed to analyse, interpret, and enhance medical images including radiological scans, pathology slides, and other diagnostic imaging modalities. These systems employ deep learning architectures, particularly convolutional neural networks, to perform lesion detection, disease classification, anatomical segmentation, and quantitative image analysis whilst meeting clinical validation standards and regulatory requirements.
