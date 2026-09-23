---
okf_version: "0.2"
type: Class
title: OpenCV
resource: urn:ngm:class:open-cv
domain: machine-learning
description: OpenCV (Open Source Computer Vision Library) is a BSD-licensed open-source library providing over 2,500 optimised algorithms for real-time computer vision, image processing, and machine learning, originally developed by Intel and now maintained by the OpenCV Foundation. It supports C++, Python, Java, and JavaScript bindings and runs on Linux, Windows, macOS, iOS, and Android. The library encompass
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:computer-vision-system
requires:
  - urn:ngm:class:c-plus-plus
enables:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:object-detection-and-tracking
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:background-subtraction
  - urn:ngm:class:face-recognition
implements:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:scale-invariant-feature-transform
contrastsWith:
  - urn:ngm:class:python-pytorch-deep-learning-stack
  - urn:ngm:class:tensor-flow
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:onnx
  - urn:ngm:class:numpy
supports:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:perception-system
  - urn:ngm:class:ros
  - urn:ngm:class:embedded-vision
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:image-processing-software
  - urn:ngm:class:object-detection
  - urn:ngm:class:optical-flow
  - urn:ngm:class:stereo-vision
---

# OpenCV

OpenCV (Open Source Computer Vision Library) is a BSD-licensed open-source library providing over 2,500 optimised algorithms for real-time computer vision, image processing, and machine learning, originally developed by Intel and now maintained by the OpenCV Foundation. It supports C++, Python, Java, and JavaScript bindings and runs on Linux, Windows, macOS, iOS, and Android. The library encompasses classical algorithms for feature detection, camera calibration, stereo vision, optical flow, and object tracking, as well as deep learning inference through the DNN module, which supports models from TensorFlow, PyTorch, and ONNX. OpenCV is the de facto standard toolkit for robotics perception pipelines, augmented reality applications, and embedded vision systems.
