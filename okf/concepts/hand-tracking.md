---
okf_version: "0.2"
type: Class
title: Hand Tracking
resource: urn:ngm:class:hand-tracking
domain: artificial-intelligence
description: Hand Tracking is a real-time computational pipeline that continuously estimates the three-dimensional position, orientation, and articulation state of one or both human hands from sensor input, delivering a skeletal or parametric representation of all fingers and joints at interactive framerates ...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:ai-application
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:computer-vision
  - urn:ngm:class:human-computer-interaction
  - urn:ngm:class:spatial-computing-paradigm
hasPart:
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:hand-skeleton-model
  - urn:ngm:class:keypoint-detection
  - urn:ngm:class:palm-detector
  - urn:ngm:class:landmark-regressor
  - urn:ngm:class:temporal-filter
  - urn:ngm:class:kinematic-constraint-model
  - urn:ngm:class:confidence-estimator
requires:
  - urn:ngm:class:annotated-training-data
  - urn:ngm:class:camera-sensor
  - urn:ngm:class:depth-sensor
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:real-time-processing
  - urn:ngm:class:calibration-data
  - urn:ngm:class:annotated-training-data
enables:
  - urn:ngm:class:gesture-recognition
  - urn:ngm:class:teleoperation
  - urn:ngm:class:sign-language-recognition
  - urn:ngm:class:pinch-interaction
  - urn:ngm:class:air-typing
  - urn:ngm:class:touchless-hci
  - urn:ngm:class:xr-interaction
  - urn:ngm:class:surgical-training-simulation
  - urn:ngm:class:teleoperation
dependsOn:
  - urn:ngm:class:convolutional-neural-network
  - urn:ngm:class:graph-neural-network
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:skeletal-pose-estimation
  - urn:ngm:class:depth-estimation
implements:
  - urn:ngm:class:mediapipe-hands
  - urn:ngm:class:mano-model
  - urn:ngm:class:webxr-hand-input-api
  - urn:ngm:class:ultraleap-sdk
  - urn:ngm:class:meta-hand-tracking-sdk
  - urn:ngm:class:apple-visionos-hand-input
contrastsWith:
  - urn:ngm:class:controller-based-input
  - urn:ngm:class:data-glove
  - urn:ngm:class:marker-based-tracking
  - urn:ngm:class:eye-tracking
  - urn:ngm:class:body-tracking
uses:
  - urn:ngm:class:electromyography
  - urn:ngm:class:infrared-illuminator
  - urn:ngm:class:stereo-vision
  - urn:ngm:class:structured-light
  - urn:ngm:class:time-of-flight-sensor
  - urn:ngm:class:transformer-architecture
  - urn:ngm:class:infrared-illuminator
supports:
  - urn:ngm:class:accessibility
  - urn:ngm:class:apple-inc-technology-corporation-vision-pro
  - urn:ngm:class:extended-reality
  - urn:ngm:class:meta-quest
  - urn:ngm:class:robotic-surgery
  - urn:ngm:class:sign-language-recognition
  - urn:ngm:class:digital-twin
  - urn:ngm:class:accessibility
standardizedBy:
  - urn:ngm:class:w3c-webxr-hand-input-api
  - urn:ngm:class:openxr-hand-tracking-extension
  - urn:ngm:class:iso-9241-ergonomics-of-human-system-interaction
relatedTo:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:brain-computer-interfaces
  - urn:ngm:class:mixed-reality
  - urn:ngm:class:object-detection
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:virtual-reality
  - urn:ngm:class:leap-motion
  - urn:ngm:class:mediapipe
---

# Hand Tracking

Hand Tracking is a real-time computational pipeline that continuously estimates the three-dimensional position, orientation, and articulation state of one or both human hands from sensor input, delivering a skeletal or parametric representation of all fingers and joints at interactive framerates ...
