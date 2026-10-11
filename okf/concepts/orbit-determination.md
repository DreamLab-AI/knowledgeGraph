---
okf_version: "0.2"
type: Class
title: Orbit Determination
resource: urn:ngm:class:orbit-determination
domain: space-science-and-systems
description: Orbit determination estimates a spacecraft or other object's state from observations, a force model and a measurement model. It does not directly measure an entire orbit. The result is a best-fitting state at a stated epoch, often with estimated physical or instrument parameters and a covariance that represents uncertainty under the estimator's assumptions.[^1]
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:orbital-dynamics
bridgesTo:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:kalman-filter
relatedTo:
  - urn:ngm:class:orbital-dynamics
---

# Orbit Determination

Orbit determination estimates a spacecraft or other object's state from observations, a force model and a measurement model. It does not directly measure an entire orbit. The result is a best-fitting state at a stated epoch, often with estimated physical or instrument parameters and a covariance that represents uncertainty under the estimator's assumptions.[^1]
