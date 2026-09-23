---
okf_version: "0.2"
type: Class
title: Medical Image Analysis
resource: urn:ngm:class:medical-image-analysis
domain: machine-learning
description: Medical Image Analysis is the application of computer-vision and machine-learning methods to interpret images produced by medical imaging modalities such as radiography, computed tomography, magnetic resonance imaging, ultrasound and pathology slides. It encompasses tasks including segmentation of anatomy and lesions, detection and classification of abnormalities, registration across images, and q
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:computer-vision
hasPart:
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:image-classification
requires:
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:annotated-data
enables:
  - urn:ngm:class:computer-aided-diagnosis
  - urn:ngm:class:diagnostic-imaging
dependsOn:
  - urn:ngm:class:transfer-learning
bridgesTo:
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:precision-medicine
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
supports:
  - urn:ngm:class:radiology
  - urn:ngm:class:treatment-planning
relatedTo:
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-registration
---

# Medical Image Analysis

Medical Image Analysis is the application of computer-vision and machine-learning methods to interpret images produced by medical imaging modalities such as radiography, computed tomography, magnetic resonance imaging, ultrasound and pathology slides. It encompasses tasks including segmentation of anatomy and lesions, detection and classification of abnormalities, registration across images, and quantitative measurement. Modern systems rely heavily on deep convolutional and transformer-based models trained on annotated clinical data. It supports radiologists and clinicians in diagnosis, treatment planning and monitoring.
