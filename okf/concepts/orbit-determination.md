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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T08:17:02Z"}
---

# Orbit Determination

Orbit determination estimates a spacecraft or other object's state from observations, a force model and a measurement model. It does not directly measure an entire orbit. The result is a best-fitting state at a stated epoch, often with estimated physical or instrument parameters and a covariance that represents uncertainty under the estimator's assumptions.[^1]
