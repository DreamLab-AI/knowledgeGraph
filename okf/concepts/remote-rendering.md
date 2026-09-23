---
okf_version: "0.2"
type: Class
title: Remote Rendering
resource: urn:ngm:class:remote-rendering
domain: infrastructure
description: Remote Rendering offloads GPU-intensive 3D scene computation to a server or cloud node, streaming compressed video frames to a thin client such as an XR headset or mobile device. This approach decouples visual fidelity from device hardware constraints, enabling photorealistic graphics on low-power endpoints while centralising GPU resources. Latency and bandwidth are critical quality-of-service par
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:infra-computing-and-cloud
requires:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:latency
enables:
  - urn:ngm:class:photorealistic-rendering
uses:
  - urn:ngm:class:cdn
  - urn:ngm:class:cloud-infrastructure
---

# Remote Rendering

Remote Rendering offloads GPU-intensive 3D scene computation to a server or cloud node, streaming compressed video frames to a thin client such as an XR headset or mobile device. This approach decouples visual fidelity from device hardware constraints, enabling photorealistic graphics on low-power endpoints while centralising GPU resources. Latency and bandwidth are critical quality-of-service parameters; edge computing deployments minimise round-trip delay to support interactive frame rates.
