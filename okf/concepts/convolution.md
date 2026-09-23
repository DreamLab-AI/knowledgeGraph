---
okf_version: "0.2"
type: Class
title: Convolution
resource: urn:ngm:class:convolution
domain: machine-learning
description: Convolution is a mathematical operation that combines two functions by sliding one (the kernel or filter) over another (the input signal or image) and computing a weighted sum of overlapping values at each position, producing a third function that expresses how the shape of one modifies the other. In deep learning and signal processing it provides a translation-equivariant mechanism for local feat
maturity: established
quality: 0.92
is-a:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:mathematical-operation
hasPart:
  - urn:ngm:class:kernel
  - urn:ngm:class:feature-map
  - urn:ngm:class:receptive-field
  - urn:ngm:class:stride
  - urn:ngm:class:padding
requires:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:gpu-acceleration
  - urn:ngm:class:matrix-multiplication
enables:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:object-detection
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:audio-processing
  - urn:ngm:class:image-classification
dependsOn:
  - urn:ngm:class:linear-algebra
  - urn:ngm:class:fourier-analysis
implements:
  - urn:ngm:class:translation-equivariance
  - urn:ngm:class:weight-sharing
  - urn:ngm:class:local-connectivity
contrastsWith:
  - urn:ngm:class:self-attention
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:attention-mechanism
bridgesTo:
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:radar-signal-processing
uses:
  - urn:ngm:class:fast-fourier-transform
  - urn:ngm:class:matrix-multiplication
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
supports:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:natural-language-processing
  - urn:ngm:class:computer-vision
  - urn:ngm:class:signal-processing
standardizedBy:
  - urn:ngm:class:ieee-signal-processing-society
relatedTo:
  - urn:ngm:class:image-processing
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:neural-network
  - urn:ngm:class:pooling-layer
  - urn:ngm:class:activation-function
  - urn:ngm:class:transfer-learning
---

# Convolution

Convolution is a mathematical operation that combines two functions by sliding one (the kernel or filter) over another (the input signal or image) and computing a weighted sum of overlapping values at each position, producing a third function that expresses how the shape of one modifies the other. In deep learning and signal processing it provides a translation-equivariant mechanism for local feature extraction with shared parameter weights. The discrete 2D form underpins convolutional neural networks; the continuous form via the Convolution Theorem connects to Fourier analysis and frequency-domain filtering.
