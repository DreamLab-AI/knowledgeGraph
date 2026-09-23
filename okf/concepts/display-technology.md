---
okf_version: "0.2"
type: Class
title: Display Technology
resource: urn:ngm:class:display-technology
domain: spatial-computing
description: Display Technology encompasses the hardware substrates, optical systems, and electronic driving circuits used to present visual information to human observers across form factors ranging from flat panels and projection systems to head-mounted microdisplays and retinal projectors. Core substrate families include LCD with quantum dot backlights, OLED, microLED, and laser scanning systems, each offer
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:display-hardware
hasPart:
  - urn:ngm:class:microdisplay
  - urn:ngm:class:waveguide-optics
  - urn:ngm:class:display-driver-ic
requires:
  - urn:ngm:class:optical-calibration-target
  - urn:ngm:class:colour-management
  - urn:ngm:class:display-metrology
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:foveated-rendering
  - urn:ngm:class:spatial-computing
dependsOn:
  - urn:ngm:class:semiconductor-manufacturing
  - urn:ngm:class:photonics
contrastsWith:
  - urn:ngm:class:audio-technology
  - urn:ngm:class:haptic-feedback
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:neural-rendering
uses:
  - urn:ngm:class:photorealistic-rendering
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:light-field-display
supports:
  - urn:ngm:class:xr-device
  - urn:ngm:class:ar-display-device
  - urn:ngm:class:human-computer-interaction
standardizedBy:
  - urn:ngm:class:display-industry-standards
relatedTo:
  - urn:ngm:class:extended-reality
  - urn:ngm:class:retinal-display
---

# Display Technology

Display Technology encompasses the hardware substrates, optical systems, and electronic driving circuits used to present visual information to human observers across form factors ranging from flat panels and projection systems to head-mounted microdisplays and retinal projectors. Core substrate families include LCD with quantum dot backlights, OLED, microLED, and laser scanning systems, each offering distinct trade-offs in brightness, contrast ratio, colour gamut, refresh rate, and power consumption. For spatial computing and extended reality applications, display technology must additionally address field of view, vergence-accommodation conflict, waveguide efficiency, and eye-box uniformity. Advances in microdisplay resolution, diffractive waveguide engineering, and foveated rendering pipelines are critical enablers of lightweight, socially acceptable XR headsets and the broader convergence of physical and digital environments.
