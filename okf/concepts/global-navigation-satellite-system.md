---
okf_version: "0.2"
type: Class
title: Global Navigation Satellite System
resource: urn:ngm:class:global-navigation-satellite-system
domain: space-science-and-systems
description: A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced lo
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:navigation-system
  - urn:ngm:class:spacecraft-subsystem
  - urn:ngm:class:localisation
hasPart:
  - urn:ngm:class:gps
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:autonomous-navigation
contrastsWith:
  - urn:ngm:class:slam
bridgesTo:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor
partOf:
  - urn:ngm:class:localisation
relatedTo:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:positioning-navigation-and-timing
  - urn:ngm:class:gps
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:slam
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-01T20:45:00Z"}
---

# Global Navigation Satellite System

A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced localisation that anchors local sensor-based estimates to an absolute coordinate frame.
