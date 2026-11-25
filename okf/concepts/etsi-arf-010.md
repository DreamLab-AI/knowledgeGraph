---
okf_version: "0.2"
type: Class
title: ETSI ARF 010
resource: urn:ngm:class:etsi-arf-010
domain: spatial-computing
description: ETSI ARF 010 is a technical deliverable produced by the ETSI Industry Specification Group on Augmented Reality Framework (ISG ARF), defining architectural principles, terminology, and interoperability requirements for augmented reality systems and services. It establishes a common reference architecture that allows AR components—such as tracking engines, scene anchors, and rendering pipelines—to i
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:technical-standard
hasPart:
  - urn:ngm:class:reference-architecture
  - urn:ngm:class:spatial-anchor
  - urn:ngm:class:world-model
  - urn:ngm:class:reference-architecture
requires:
  - urn:ngm:class:coordinate-system
  - urn:ngm:class:universal-scene-description
  - urn:ngm:class:universal-scene-description
enables:
  - urn:ngm:class:ar-interoperability
  - urn:ngm:class:shared-ar-experiences
  - urn:ngm:class:multi-device-ar
  - urn:ngm:class:shared-ar-experiences
implements:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:spatial-computing
contrastsWith:
  - urn:ngm:class:open-xr
  - urn:ngm:class:arcore
bridgesTo:
  - urn:ngm:class:web-of-things
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:spatial-tracking
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:physical-virtual-registration
  - urn:ngm:class:tracking
  - urn:ngm:class:physical-virtual-registration
standardizedBy:
  - urn:ngm:class:etsi-isg-arf
partOf:
  - urn:ngm:class:etsi-arf
  - urn:ngm:class:etsi
relatedTo:
  - urn:ngm:class:etsi-arf-011
  - urn:ngm:class:iso-iec-18092
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:extended-reality
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ETSI ARF 010

ETSI ARF 010 is a technical deliverable produced by the ETSI Industry Specification Group on Augmented Reality Framework (ISG ARF), defining architectural principles, terminology, and interoperability requirements for augmented reality systems and services. It establishes a common reference architecture that allows AR components—such as tracking engines, scene anchors, and rendering pipelines—to interoperate across heterogeneous platforms and devices. The specification addresses how spatial anchors, coordinate systems, and world models are managed and shared, enabling consistent AR experiences in multi-vendor and multi-device deployments. ETSI ARF 010 serves as a foundational normative document within the ARF series, complemented by companion deliverables covering use cases, protocols, and conformance.
