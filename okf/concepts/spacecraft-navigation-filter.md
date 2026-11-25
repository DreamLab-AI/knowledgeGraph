---
okf_version: "0.2"
type: Class
title: Spacecraft Navigation Filter
resource: urn:ngm:class:spacecraft-navigation-filter
domain: space-science-and-systems
description: A spacecraft navigation filter estimates a state by combining a propagated model with measurements and explicit uncertainty assumptions. The state can contain position and velocity, attitude and angular rate, clock terms, sensor biases, force-model parameters or a target-relative pose. The associated covariance describes uncertainty within the estimator's model. It is not measured truth and can be
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
bridgesTo:
  - urn:ngm:class:extended-kalman-filter
relatedTo:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:spacecraft-navigation
  - urn:ngm:class:state-estimation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T09:03:18Z"}
---

# Spacecraft Navigation Filter

A spacecraft navigation filter estimates a state by combining a propagated model with measurements and explicit uncertainty assumptions. The state can contain position and velocity, attitude and angular rate, clock terms, sensor biases, force-model parameters or a target-relative pose. The associated covariance describes uncertainty within the estimator's model. It is not measured truth and can be badly overconfident when the dynamics, sensor errors or linearisation assumptions are wrong.[^1][^4]
