---
okf_version: "0.2"
type: Class
title: Convolutional Neural Network
resource: urn:ngm:class:convolutional-neural-network
domain: machine-learning
description: "A Convolutional Neural Network (CNN) is a feed-forward deep learning architecture that applies learned convolutional filters across spatial dimensions of input data, enabling hierarchical feature extraction from images and other grid-structured inputs. Weight sharing and local receptive fields make CNNs highly parameter-efficient for visual recognition tasks including image classification, object "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:ai-model-architecture
hasPart:
  - urn:ngm:class:convolutional-layer
  - urn:ngm:class:pooling-layer
  - urn:ngm:class:activation-function
requires:
  - urn:ngm:class:training-data
  - urn:ngm:class:gpu-computing
enables:
  - urn:ngm:class:image-classification
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:feature-extraction
dependsOn:
  - urn:ngm:class:weight-sharing
  - urn:ngm:class:gradient-descent
implements:
  - urn:ngm:class:feedforward-neural-network
contrastsWith:
  - urn:ngm:class:recurrent-neural-network
  - urn:ngm:class:transformer-architecture
bridgesTo:
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:backpropagation
  - urn:ngm:class:stochastic-gradient-descent
  - urn:ngm:class:batch-normalisation
  - urn:ngm:class:transfer-learning
  - urn:ngm:class:training-data
supports:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:medical-image-analysis
partOf:
  - urn:ngm:class:deep-learning
relatedTo:
  - urn:ngm:class:adversarial-robustness
---

# Convolutional Neural Network

A Convolutional Neural Network (CNN) is a feed-forward deep learning architecture that applies learned convolutional filters across spatial dimensions of input data, enabling hierarchical feature extraction from images and other grid-structured inputs. Weight sharing and local receptive fields make CNNs highly parameter-efficient for visual recognition tasks including image classification, object detection, and semantic segmentation.
