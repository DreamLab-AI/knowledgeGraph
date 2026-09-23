---
okf_version: "0.2"
type: Class
title: TELE-157-predictive-tracking
resource: urn:ngm:class:tele-157-predictive-tracking
domain: metaverse
description: Predictive tracking is the estimation of a user's future head or body pose from recent motion so that rendering can be aligned to where the user will be, reducing perceived latency.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:telepresence
requires:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor-fusion
enables:
  - urn:ngm:class:low-latency
bridgesTo:
  - urn:ngm:class:inertial-measurement-unit
---

# TELE-157-predictive-tracking

Predictive tracking is the estimation of a user's future head or body pose from recent motion so that rendering can be aligned to where the user will be, reducing perceived latency.
