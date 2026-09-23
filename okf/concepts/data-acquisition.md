---
okf_version: "0.2"
type: Class
title: Data Acquisition
resource: urn:ngm:class:data-acquisition
domain: robotics
description: Data acquisition is the process of gathering raw signals and measurements from sensors and the environment, then conditioning and recording them for downstream use in perception, learning, and control. In robotics it spans sampling sensor streams, time-synchronising heterogeneous sources, and logging structured datasets for training and analysis. High-quality acquisition is foundational because th
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-collection
requires:
  - urn:ngm:class:sensor
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:perception
  - urn:ngm:class:computer-vision
bridgesTo:
  - urn:ngm:class:teleoperation
uses:
  - urn:ngm:class:sensor
  - urn:ngm:class:lidar-sensor
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:imitation-learning
partOf:
  - urn:ngm:class:data-collection
relatedTo:
  - urn:ngm:class:data-collection
  - urn:ngm:class:sensor
  - urn:ngm:class:perception
---

# Data Acquisition

Data acquisition is the process of gathering raw signals and measurements from sensors and the environment, then conditioning and recording them for downstream use in perception, learning, and control. In robotics it spans sampling sensor streams, time-synchronising heterogeneous sources, and logging structured datasets for training and analysis. High-quality acquisition is foundational because the fidelity of perception and learned policies depends on the data captured.
