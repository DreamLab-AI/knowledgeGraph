---
okf_version: "0.2"
type: Class
title: Optical Flow
resource: urn:ngm:class:optical-flow
domain: ai
description: Optical flow is the pattern of apparent motion of objects, surfaces, and edges in a visual scene between consecutive frames of video, caused by relative movement between the observer and the scene. It is computed as a dense or sparse 2D velocity field over the image plane and is used in computer vision for motion estimation, video interpolation, action recognition, and autonomous navigation. Class
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:ai-technique
enables:
  - urn:ngm:class:motion-capture-technology
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:differentiable-rendering
  - urn:ngm:class:action-recognition
  - urn:ngm:class:visual-odometry
contrastsWith:
  - urn:ngm:class:depth-estimation
bridgesTo:
  - urn:ngm:class:neural-radiance-field
  - urn:ngm:class:deep-generative-model
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:image-processing
  - urn:ngm:class:feature-matching
  - urn:ngm:class:constraint
partOf:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:video-understanding
relatedTo:
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:image-segmentation
  - urn:ngm:class:camera
  - urn:ngm:class:video-compression
---

# Optical Flow

Optical flow is the pattern of apparent motion of objects, surfaces, and edges in a visual scene between consecutive frames of video, caused by relative movement between the observer and the scene. It is computed as a dense or sparse 2D velocity field over the image plane and is used in computer vision for motion estimation, video interpolation, action recognition, and autonomous navigation. Classical algorithms (Horn-Schunck, Lucas-Kanade) and deep learning approaches (RAFT, FlowNet) constitute the main methodological lineages.
