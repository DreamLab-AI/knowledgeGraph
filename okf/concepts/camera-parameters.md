---
okf_version: "0.2"
type: Class
title: Camera Parameters
resource: urn:ngm:class:camera-parameters
domain: spatial-computing
description: The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction ...
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:sc-display-and-rendering
  - urn:ngm:class:imaging-parameters
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:calibration-target
  - urn:ngm:class:optimisation-algorithm
enables:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:object-measurement
  - urn:ngm:class:scene-localization
bridgesTo:
  - urn:ngm:class:computer-vision
---

# Camera Parameters

The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction ...
