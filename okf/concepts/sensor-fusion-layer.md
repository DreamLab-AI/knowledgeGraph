---
okf_version: "0.2"
type: Class
title: Sensor Fusion Layer
resource: urn:ngm:class:sensor-fusion-layer
domain: robotics
description: The Sensor Fusion Layer is the stratum that combines data from multiple sensors into a single, more reliable estimate of state. It sits above the Hardware sensing devices and below the Perception Layer that interprets the fused result. It contains alignment, filtering, and fusion algorithms together with uncertainty models.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:hardware-layer
enables:
  - urn:ngm:class:perception-layer
bridgesTo:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:bayesian-inference
---

# Sensor Fusion Layer

The Sensor Fusion Layer is the stratum that combines data from multiple sensors into a single, more reliable estimate of state. It sits above the Hardware sensing devices and below the Perception Layer that interprets the fused result. It contains alignment, filtering, and fusion algorithms together with uncertainty models.
