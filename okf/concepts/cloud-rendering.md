---
okf_version: "0.2"
type: Class
title: Cloud Rendering
resource: urn:ngm:class:cloud-rendering
domain: spatial-computing
description: Cloud rendering is the practice of generating images or interactive 3D frames on remote, GPU-equipped servers and streaming the results to a client device, rather than rendering locally. It decouples visual fidelity from the client's hardware, enabling thin clients to display high-quality graphics by offloading computation to data centers. It powers cloud gaming, remote visualisation, and immersiv
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:remote-rendering
hasPart:
  - urn:ngm:class:thin-client
requires:
  - urn:ngm:class:data-centre
  - urn:ngm:class:edge-computing
enables:
  - urn:ngm:class:cloud-gaming
  - urn:ngm:class:volumetric-rendering
dependsOn:
  - urn:ngm:class:gpu
  - urn:ngm:class:latency
bridgesTo:
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:web-rtc
  - urn:ngm:class:gpu-rendering
supports:
  - urn:ngm:class:interactive-rendering
  - urn:ngm:class:metaverse
relatedTo:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:spatial-computing
---

# Cloud Rendering

Cloud rendering is the practice of generating images or interactive 3D frames on remote, GPU-equipped servers and streaming the results to a client device, rather than rendering locally. It decouples visual fidelity from the client's hardware, enabling thin clients to display high-quality graphics by offloading computation to data centers. It powers cloud gaming, remote visualisation, and immersive metaverse experiences, but depends on low-latency networking and efficient video streaming to remain responsive.
