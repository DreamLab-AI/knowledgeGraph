---
okf_version: "0.2"
type: Class
title: Sensor Model
resource: urn:ngm:class:sensor-model
domain: robotics
description: A sensor model, also called an observation or measurement model, is a probabilistic description of how a robot's sensor readings relate to the underlying state of the world, expressing the likelihood of an observation given a hypothesised state. It captures sensor characteristics such as noise, resolution, range limits, and failure modes, allowing a robot to weight evidence appropriately when fusi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:probabilistic-robotics
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:observation-model
requires:
  - urn:ngm:class:lidar
  - urn:ngm:class:camera
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:slam
contrastsWith:
  - urn:ngm:class:motion-model
uses:
  - urn:ngm:class:observation-model
supports:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:monte-carlo-localization
partOf:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:sensor-fusion
relatedTo:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:mapping
  - urn:ngm:class:sensor-fusion
---

# Sensor Model

A sensor model, also called an observation or measurement model, is a probabilistic description of how a robot's sensor readings relate to the underlying state of the world, expressing the likelihood of an observation given a hypothesised state. It captures sensor characteristics such as noise, resolution, range limits, and failure modes, allowing a robot to weight evidence appropriately when fusing measurements. Sensor models are central to Bayesian state estimation, where they form the update step that corrects predictions using incoming data.
