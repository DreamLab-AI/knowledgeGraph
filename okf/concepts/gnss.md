---
okf_version: "0.2"
type: Class
title: Gnss
resource: urn:ngm:class:gnss
domain: robotics
description: A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced lo
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:localisation
hasPart:
  - urn:ngm:class:gps
requires:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:sensor
contrastsWith:
  - urn:ngm:class:slam
bridgesTo:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor
supports:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:path-planning
partOf:
  - urn:ngm:class:localisation
relatedTo:
  - urn:ngm:class:gps
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:slam
---

# Gnss

A Global Navigation Satellite System (GNSS) is a constellation of satellites that broadcast timed signals enabling receivers to compute their absolute position, velocity and time anywhere on Earth. GPS, Galileo, GLONASS and BeiDou are the principal systems, with receivers trilaterating position from signal travel times across multiple satellites. In robotics, GNSS provides global geo-referenced localisation that anchors local sensor-based estimates to an absolute coordinate frame.
