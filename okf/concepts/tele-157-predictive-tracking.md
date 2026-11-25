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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# TELE-157-predictive-tracking

Predictive tracking is the estimation of a user's future head or body pose from recent motion so that rendering can be aligned to where the user will be, reducing perceived latency.
