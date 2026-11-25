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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Camera Parameters

The intrinsic and extrinsic mathematical values that define a camera's optical characteristics and spatial positioning, comprising focal length, optical center, distortion coefficients (intrinsic) and rotation/translation relative to world coordinates (extrinsic), essential for 3D reconstruction ...
