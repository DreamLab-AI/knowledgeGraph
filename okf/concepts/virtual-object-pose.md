---
okf_version: "0.2"
type: Class
title: Virtual Object Pose
resource: urn:ngm:class:virtual-object-pose
domain: spatial-computing
description: "The position, orientation, and scale of a 3D object within a virtual environment, represented as a combined transform: translation (X, Y, Z world coordinates), rotation (quaternion or Euler angles), and scale factors. Accurate pose determination underpins AR object anchoring, motion capture replay, physics simulation, and hand-object interaction in XR systems."
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-platform-and-environment
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:spatial-computing-paradigm
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:motion-capture
uses:
  - urn:ngm:class:computer-vision
partOf:
  - urn:ngm:class:physics-simulation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Virtual Object Pose

The position, orientation, and scale of a 3D object within a virtual environment, represented as a combined transform: translation (X, Y, Z world coordinates), rotation (quaternion or Euler angles), and scale factors. Accurate pose determination underpins AR object anchoring, motion capture replay, physics simulation, and hand-object interaction in XR systems.
