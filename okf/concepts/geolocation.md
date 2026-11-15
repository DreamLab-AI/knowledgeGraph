---
okf_version: "0.2"
type: Class
title: Geolocation
resource: urn:ngm:class:geolocation
domain: earth-observation-and-geospatial-sensing
description: Geolocation assigns an Earth position to an observation. For satellite imagery, the calculation links a detector sample to a line of sight and then intersects that line with an Earth model. Platform position, attitude, acquisition time, instrument alignment and terrain can all affect the result. A product can therefore be geolocated before ground control has been applied, and the presence of coord
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:geodesy
relatedTo:
  - urn:ngm:class:earth-observation-processing
  - urn:ngm:class:geodesy
  - urn:ngm:class:localisation
generated: {"by":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T07:42:58Z"}
---

# Geolocation

Geolocation assigns an Earth position to an observation. For satellite imagery, the calculation links a detector sample to a line of sight and then intersects that line with an Earth model. Platform position, attitude, acquisition time, instrument alignment and terrain can all affect the result. A product can therefore be geolocated before ground control has been applied, and the presence of coordinates does not by itself establish positional accuracy.[^1][^2]
