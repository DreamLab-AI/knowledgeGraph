---
okf_version: "0.2"
type: Class
title: Attitude Determination
resource: urn:ngm:class:attitude-determination
domain: space-science-and-systems
description: "Attitude determination estimates a spacecraft's orientation relative to a stated reference frame. Sensors measure star directions, the Sun vector, a magnetic-field vector or angular rate. An estimator combines those measurements with reference models and rotational dynamics to produce an attitude estimate, often with angular rate, sensor bias and covariance. The estimate is therefore an inference "
maturity: draft
quality: 0
bridgesTo:
  - urn:ngm:class:state-estimation
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
---

# Attitude Determination

Attitude determination estimates a spacecraft's orientation relative to a stated reference frame. Sensors measure star directions, the Sun vector, a magnetic-field vector or angular rate. An estimator combines those measurements with reference models and rotational dynamics to produce an attitude estimate, often with angular rate, sensor bias and covariance. The estimate is therefore an inference from observations rather than a direct sensor reading.[^1][^3]
