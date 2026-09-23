---
okf_version: "0.2"
type: Class
title: Perception Layer
resource: urn:ngm:class:perception-layer
domain: spatial-computing
description: The Perception Layer is the stratum that converts raw sensor signals into structured observations of the environment. It sits above the Sensor Fusion and Hardware sensing strata and below decision-making layers, providing the interpreted percepts that agents and controllers act on. It contains detection, recognition, segmentation, and state-estimation components.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:sensor-fusion-layer
enables:
  - urn:ngm:class:control-layer
  - urn:ngm:class:agent-layer
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:state-estimation
---

# Perception Layer

The Perception Layer is the stratum that converts raw sensor signals into structured observations of the environment. It sits above the Sensor Fusion and Hardware sensing strata and below decision-making layers, providing the interpreted percepts that agents and controllers act on. It contains detection, recognition, segmentation, and state-estimation components.
