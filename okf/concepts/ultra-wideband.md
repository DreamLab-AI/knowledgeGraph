---
okf_version: "0.2"
type: Class
title: Ultra Wideband
resource: urn:ngm:class:ultra-wideband
domain: infrastructure
description: Ultra Wideband (UWB) is a short-range radio technology that transmits data using pulses spread across a very wide frequency spectrum (typically 3.1–10.6 GHz, bandwidth exceeding 500 MHz), enabling precise time-of-flight ranging and centimetre-accurate indoor positioning. Unlike narrowband technologies, UWB's broad spectrum allocation provides high resistance to multipath interference and coexisten
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:wireless-communication
hasPart:
  - urn:ngm:class:fourier-transform
  - urn:ngm:class:euclidean-distance
requires:
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:security
  - urn:ngm:class:access-control
dependsOn:
  - urn:ngm:class:data-management
bridgesTo:
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:numerical-methods
  - urn:ngm:class:statistical-analysis
supports:
  - urn:ngm:class:distributed-collaboration
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:infrastructure
---

# Ultra Wideband

Ultra Wideband (UWB) is a short-range radio technology that transmits data using pulses spread across a very wide frequency spectrum (typically 3.1–10.6 GHz, bandwidth exceeding 500 MHz), enabling precise time-of-flight ranging and centimetre-accurate indoor positioning. Unlike narrowband technologies, UWB's broad spectrum allocation provides high resistance to multipath interference and coexistence with other radio systems. It is standardised under IEEE 802.15.4z and used in applications from secure device pairing to spatial-computing anchor systems.
