---
okf_version: "0.2"
type: Class
title: VisualServoing
resource: urn:ngm:class:visual-servoing
domain: robotics
description: Visual servoing is a robot control paradigm in which camera-derived visual measurements are used as feedback signals within a closed-loop control system to guide the motion of a robotic manipulator or mobile platform towards a goal configuration defined in visual terms. Rather than relying on pre-computed geometric trajectories, visual servoing continuously computes control signals from current im
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:robot-control
enables:
  - urn:ngm:class:manipulation
  - urn:ngm:class:motion-control
  - urn:ngm:class:path-planning
uses:
  - urn:ngm:class:camera
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:end-effector
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:feedback-control
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# VisualServoing

Visual servoing is a robot control paradigm in which camera-derived visual measurements are used as feedback signals within a closed-loop control system to guide the motion of a robotic manipulator or mobile platform towards a goal configuration defined in visual terms. Rather than relying on pre-computed geometric trajectories, visual servoing continuously computes control signals from current image features or image-space error signals, making it inherently adaptive to object pose uncertainty and disturbances. The two primary architectures are image-based visual servoing (IBVS), which minimises error in image feature space, and position-based visual servoing (PBVS), which reconstructs 3D pose and minimises Cartesian error. Visual servoing enables tasks such as precise grasping, assembly alignment, and autonomous navigation without requiring exact geometric calibration.
