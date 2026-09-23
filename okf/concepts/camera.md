---
okf_version: "0.2"
type: Class
title: Camera
resource: urn:ngm:class:camera
domain: robotics
description: An imaging sensor device that captures visual information in robotics and spatial-computing systems, enabling computer vision applications including object detection, SLAM, 3D reconstruction, visual servoing, and semantic scene understanding through various modalities (RGB, depth, thermal, event-based) and sensor technologies (CCD, CMOS, ToF, structured light).
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:sensor
  - urn:ngm:class:visualperception
hasPart:
  - urn:ngm:class:image-sensor
  - urn:ngm:class:lens
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:imagesensor
  - urn:ngm:class:processingunit
  - urn:ngm:class:camera-calibration
requires:
  - urn:ngm:class:optical-systems
enables:
  - urn:ngm:class:visual-servoing
  - urn:ngm:class:3-d-reconstruction
  - urn:ngm:class:object-detection
  - urn:ngm:class:semantic-segmentation
  - urn:ngm:class:slam
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:depth-estimation
  - urn:ngm:class:object-detection
  - urn:ngm:class:3dreconstruction
  - urn:ngm:class:semantic-segmentation
dependsOn:
  - urn:ngm:class:computer-vision
implements:
  - urn:ngm:class:visual-perception
contrastsWith:
  - urn:ngm:class:lidar
  - urn:ngm:class:radar
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:convolutional-neural-network
standardizedBy:
  - urn:ngm:class:ieee
  - urn:ngm:class:iso-iec
partOf:
  - urn:ngm:class:robot-perception
relatedTo:
  - urn:ngm:class:structure-from-motion
  - urn:ngm:class:neural-radiance-field
---

# Camera

An imaging sensor device that captures visual information in robotics and spatial-computing systems, enabling computer vision applications including object detection, SLAM, 3D reconstruction, visual servoing, and semantic scene understanding through various modalities (RGB, depth, thermal, event-based) and sensor technologies (CCD, CMOS, ToF, structured light).
