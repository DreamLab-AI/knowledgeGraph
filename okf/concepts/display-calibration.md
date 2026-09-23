---
okf_version: "0.2"
type: Class
title: Display Calibration
resource: urn:ngm:class:display-calibration
domain: spatial-computing
description: "Display calibration is the process of measuring and adjusting a display device's photometric and colorimetric characteristics—luminance, white point, gamma or EOTF, and colour gamut—to conform to a defined target standard or ICC colour profile. It employs colorimetric measurement instruments (colorimeters, spectrophotometers) to sample the display output and generates correction data (LUTs or ICC "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:calibration
enables:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:quality-assurance
uses:
  - urn:ngm:class:calibration-equipment
  - urn:ngm:class:calibration-standards
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:display-metrology
relatedTo:
  - urn:ngm:class:display-technology
  - urn:ngm:class:display-hardware
  - urn:ngm:class:physically-based-rendering
---

# Display Calibration

Display calibration is the process of measuring and adjusting a display device's photometric and colorimetric characteristics—luminance, white point, gamma or EOTF, and colour gamut—to conform to a defined target standard or ICC colour profile. It employs colorimetric measurement instruments (colorimeters, spectrophotometers) to sample the display output and generates correction data (LUTs or ICC profiles) applied by the operating system or display hardware to compensate for manufacturing variation and age-related drift. Calibration is mandatory in colour-critical workflows including digital cinema (DCI-P3), broadcast (Rec. 709, Rec. 2020), medical imaging, and visual effects production.
