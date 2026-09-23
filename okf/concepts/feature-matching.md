---
okf_version: "0.2"
type: Class
title: Feature Matching
resource: urn:ngm:class:feature-matching
domain: ai
description: Feature Matching is a computer vision technique that identifies and associates corresponding salient regions—keypoints and their descriptors—across two or more images or point clouds, enabling geometric relationships such as homographies, fundamental matrices, or rigid-body transformations to be estimated. Classical detectors such as SIFT, SURF, and ORB extract rotation- and scale-invariant descri
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:computer-vision
requires:
  - urn:ngm:class:image-preprocessing
  - urn:ngm:class:ransac
enables:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:slam
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:localisation
  - urn:ngm:class:pose-estimation
implements:
  - urn:ngm:class:epipolar-geometry
contrastsWith:
  - urn:ngm:class:optical-flow
bridgesTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:robotics-perception
uses:
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:stereo-camera
  - urn:ngm:class:deep-learning
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:feature-extraction
  - urn:ngm:class:nearest-neighbor-search
relatedTo:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:computer-vision-system
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:lidar
  - urn:ngm:class:object-recognition
  - urn:ngm:class:image-retrieval
---

# Feature Matching

Feature Matching is a computer vision technique that identifies and associates corresponding salient regions—keypoints and their descriptors—across two or more images or point clouds, enabling geometric relationships such as homographies, fundamental matrices, or rigid-body transformations to be estimated. Classical detectors such as SIFT, SURF, and ORB extract rotation- and scale-invariant descriptors; modern deep learning approaches learn matched embeddings end-to-end from training data. Feature matching is a foundational step in Structure-from-Motion, visual odometry, SLAM, and image-based localisation pipelines. The accuracy and efficiency of matching directly determine downstream reconstruction quality and real-time performance in robotics and augmented reality applications.
