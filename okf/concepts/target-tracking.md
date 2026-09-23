---
okf_version: "0.2"
type: Class
title: Target Tracking
resource: urn:ngm:class:target-tracking
domain: ai
description: Target tracking is a computational and signal-processing discipline concerned with estimating the state — typically position, velocity, and orientation — of one or more moving objects over time from sequences of noisy sensor observations. It encompasses algorithms such as Kalman filters, particle filters, and multi-hypothesis trackers, applied across radar, sonar, computer vision, and LiDAR modali
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:object-detection-and-tracking
enables:
  - urn:ngm:class:human-pose-slam-capture-system
  - urn:ngm:class:anomaly-detection
uses:
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:spatial-tracking-system
relatedTo:
  - urn:ngm:class:object-detection
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:computer-vision
  - urn:ngm:class:motion-tracking
---

# Target Tracking

Target tracking is a computational and signal-processing discipline concerned with estimating the state — typically position, velocity, and orientation — of one or more moving objects over time from sequences of noisy sensor observations. It encompasses algorithms such as Kalman filters, particle filters, and multi-hypothesis trackers, applied across radar, sonar, computer vision, and LiDAR modalities. Applications span aerospace surveillance, autonomous vehicle perception, robotic manipulation, sports analytics, and augmented reality. Modern deep-learning-based trackers jointly perform detection and tracking, achieving robust performance in complex, cluttered environments.
