---
okf_version: "0.2"
type: Class
title: rb 0065 visual servoing
resource: urn:ngm:class:rb-0065-visual-servoing
domain: robotics
description: Visual servoing is a robot control technique that uses real-time visual feedback from a camera to regulate the motion of a robot toward a goal configuration. Image-based visual servoing (IBVS) minimises an image-feature error directly, while position-based visual servoing (PBVS) reconstructs 3-D pose from vision before computing Cartesian control signals. The approach is widely used in manipulatio
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:feedback-control
requires:
  - urn:ngm:class:rb-0047-feedback-control
  - urn:ngm:class:rb-0030-jacobian-matrix
uses:
  - urn:ngm:class:rb-0068-vision-system
  - urn:ngm:class:computer-vision
  - urn:ngm:class:feature-extraction
relatedTo:
  - urn:ngm:class:rb-0064-computed-torque-control
  - urn:ngm:class:object-detection
  - urn:ngm:class:pose-estimation
---

# rb 0065 visual servoing

Visual servoing is a robot control technique that uses real-time visual feedback from a camera to regulate the motion of a robot toward a goal configuration. Image-based visual servoing (IBVS) minimises an image-feature error directly, while position-based visual servoing (PBVS) reconstructs 3-D pose from vision before computing Cartesian control signals. The approach is widely used in manipulation, assembly, and tracking tasks where precise end-effector placement relative to a visually perceived target is required.
