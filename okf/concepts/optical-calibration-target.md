---
okf_version: "0.2"
type: Class
title: Optical Calibration Target
resource: urn:ngm:class:optical-calibration-target
domain: spatial-computing
description: An optical calibration target is a precision artefact bearing known geometric, radiometric, or colourimetric reference patterns used to characterise, correct, and validate the response of imaging and optical systems. Such targets enable the measurement of lens distortion, modulation transfer function (MTF), chromatic aberration, colour reproduction accuracy, and spatial linearity across a wide ran
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:calibration-equipment
hasPart:
  - urn:ngm:class:fiducial-marker
  - urn:ngm:class:colour-reference-chart
  - urn:ngm:class:resolution-target
  - urn:ngm:class:grey-scale-step-wedge
requires:
  - urn:ngm:class:controlled-illumination
  - urn:ngm:class:metrological-traceability
enables:
  - urn:ngm:class:lens-distortion-correction
  - urn:ngm:class:colour-management
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:optical-system-accuracy
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:stereo-camera-calibration
dependsOn:
  - urn:ngm:class:photometric-standards
  - urn:ngm:class:substrate-material-stability
contrastsWith:
  - urn:ngm:class:radiometric-calibration-panel
bridgesTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:neural-radiance-field
uses:
  - urn:ngm:class:checkerboard-pattern
  - urn:ngm:class:visual-marker
  - urn:ngm:class:visual-marker
  - urn:ngm:class:sinusoidal-grating
supports:
  - urn:ngm:class:computer-vision-pipeline
  - urn:ngm:class:augmented-reality-tracking
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:machine-vision-inspection
standardizedBy:
  - urn:ngm:class:iso-12233
  - urn:ngm:class:iso-17321
  - urn:ngm:class:nist-measurement-standards
partOf:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:camera-calibration
relatedTo:
  - urn:ngm:class:transfer-function
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:transfer-function
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:icc-colour-profile
---

# Optical Calibration Target

An optical calibration target is a precision artefact bearing known geometric, radiometric, or colourimetric reference patterns used to characterise, correct, and validate the response of imaging and optical systems. Such targets enable the measurement of lens distortion, modulation transfer function (MTF), chromatic aberration, colour reproduction accuracy, and spatial linearity across a wide range of imaging modalities from visible-light cameras to multispectral and depth sensors. They are fundamental to the metrological traceability chain that links deployed camera systems to national and international measurement standards. In spatial computing and extended-reality applications, calibration targets additionally serve as fiducial references for camera-to-camera alignment, display-sensor registration, and world-space coordinate grounding.
