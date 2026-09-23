---
okf_version: "0.2"
type: Class
title: Image Processing
resource: urn:ngm:class:image-processing
domain: ai
description: Image Processing is the computational manipulation of digital images using mathematical operations—including spatial filtering, morphological transforms, frequency-domain analysis, and learned convolutional operations—to enhance visual quality, extract structured information, or transform image representations for downstream tasks. It encompasses both classical signal processing techniques (Fourie
maturity: established
quality: 0.78
is-a:
  - urn:ngm:class:signal-processing
hasPart:
  - urn:ngm:class:morphological-operations
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:image-filtering
  - urn:ngm:class:histogram-equalisation
  - urn:ngm:class:image-segmentation
requires:
  - urn:ngm:class:digital-signal-processing
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:fourier-transform
enables:
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-classification
  - urn:ngm:class:medical-imaging
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:augmented-reality
contrastsWith:
  - urn:ngm:class:video-processing
  - urn:ngm:class:point-cloud-processing
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:deep-learning
  - urn:ngm:class:vision-transformer
  - urn:ngm:class:diffusion-model
standardizedBy:
  - urn:ngm:class:iso-iec-jtc1-sc29
  - urn:ngm:class:ieee-signal-processing-society
  - urn:ngm:class:iso-iec-jtc1-sc29
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:machine-learning-discipline-pipeline
relatedTo:
  - urn:ngm:class:open-cv
  - urn:ngm:class:image-compression
  - urn:ngm:class:colour-science
---

# Image Processing

Image Processing is the computational manipulation of digital images using mathematical operations—including spatial filtering, morphological transforms, frequency-domain analysis, and learned convolutional operations—to enhance visual quality, extract structured information, or transform image representations for downstream tasks. It encompasses both classical signal processing techniques (Fourier and wavelet transforms, histogram equalisation, edge detection via Sobel or Canny operators, morphological erosion and dilation) and modern deep-learning approaches implemented through convolutional neural networks, vision transformers, and diffusion models. Image processing forms the foundational preprocessing and analysis layer for computer vision pipelines, medical imaging workflows, remote sensing, autonomous navigation, and industrial quality inspection, operating on discrete pixel grids to produce processed images or structured semantic outputs. The field bridges raw sensor data acquisition and higher-level scene understanding, with applications spanning from embedded real-time systems to large-scale cloud inference infrastructure.
