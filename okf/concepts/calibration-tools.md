---
okf_version: "0.2"
type: Class
title: Calibration Tools
resource: urn:ngm:class:calibration-tools
domain: spatial-computing
description: Software and hardware utilities used to align, tune, and verify the accuracy of XR sensors, displays, and tracking systems. Calibration establishes ground-truth references for IMUs, cameras, optical tracking arrays, and display geometry, ensuring that virtual content is correctly registered to the physical world and that tracking data is within acceptable error tolerances.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-display-and-rendering
requires:
  - urn:ngm:class:rendering-pipeline
enables:
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:augmented-reality
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:photogrammetry
supports:
  - urn:ngm:class:optical-tracking
  - urn:ngm:class:environmental-verification
  - urn:ngm:class:xr-runtime-environment
---

# Calibration Tools

Software and hardware utilities used to align, tune, and verify the accuracy of XR sensors, displays, and tracking systems. Calibration establishes ground-truth references for IMUs, cameras, optical tracking arrays, and display geometry, ensuring that virtual content is correctly registered to the physical world and that tracking data is within acceptable error tolerances.
