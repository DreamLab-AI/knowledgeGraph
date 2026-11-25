---
okf_version: "0.2"
type: Class
title: HD Maps
resource: urn:ngm:class:hd-maps
domain: artificial-intelligence
description: HD maps (high-definition maps) are centimetre-accurate digital representations of road infrastructure — including lane geometry, traffic signs, signal positions and road markings — used by autonomous vehicles to localise themselves precisely and to anticipate road features beyond the range of onboard sensors. They are built from surveyed lidar and camera data and are typically fused with real-time
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:autonomous-driving
partOf:
  - urn:ngm:class:autonomous-driving
relatedTo:
  - urn:ngm:class:autonomous-driving-perception
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# HD Maps

HD maps (high-definition maps) are centimetre-accurate digital representations of road infrastructure — including lane geometry, traffic signs, signal positions and road markings — used by autonomous vehicles to localise themselves precisely and to anticipate road features beyond the range of onboard sensors. They are built from surveyed lidar and camera data and are typically fused with real-time perception output to cross-check and supplement what the vehicle currently observes. HD maps trade off high localisation accuracy against the cost and staleness risk of maintaining a pre-built map as road conditions change.
