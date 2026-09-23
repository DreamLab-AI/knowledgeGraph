---
okf_version: "0.2"
type: Class
title: Point Cloud Generation
resource: urn:ngm:class:point-cloud-generation
domain: spatial-computing
description: Point Cloud Generation is the process of producing a set of discrete three-dimensional coordinate samples (points), each representing a position on the surface or within the volume of a physical object or environment, typically augmented with attributes such as colour (RGB), intensity, or surface normals. Generation methods include active sensing (LiDAR, structured light, time-of-flight cameras) a
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:point-cloud
hasPart:
  - urn:ngm:class:point-cloud-registration
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:coordinate-system
enables:
  - urn:ngm:class:3-d-scanning
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:digital-twin
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:object-detection
dependsOn:
  - urn:ngm:class:calibration
contrastsWith:
  - urn:ngm:class:3-d-gaussian-splatting
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:lidar
  - urn:ngm:class:photogrammetry
  - urn:ngm:class:depth-sensing
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:stereo-vision
relatedTo:
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:geospatial-data
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:mesh-generation
---

# Point Cloud Generation

Point Cloud Generation is the process of producing a set of discrete three-dimensional coordinate samples (points), each representing a position on the surface or within the volume of a physical object or environment, typically augmented with attributes such as colour (RGB), intensity, or surface normals. Generation methods include active sensing (LiDAR, structured light, time-of-flight cameras) and passive photogrammetric reconstruction from overlapping images, producing the fundamental geometric representation used in autonomous navigation, digital twins, and 3D content creation.
