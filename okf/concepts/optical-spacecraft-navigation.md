---
okf_version: "0.2"
type: Class
title: Optical Spacecraft Navigation
resource: urn:ngm:class:optical-spacecraft-navigation
domain: space-science-and-systems
description: Optical spacecraft navigation uses images or active optical measurements to observe the direction, apparent shape or range of celestial bodies, surface features or another spacecraft. The sensor supplies measurements such as pixel coordinates, line-of-sight angles, a lidar time of flight or an image-feature displacement. It does not supply a complete spacecraft position merely by taking a picture.
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-navigation
bridgesTo:
  - urn:ngm:class:computer-vision
relatedTo:
  - urn:ngm:class:astrometry
  - urn:ngm:class:spacecraft-navigation
generated: {"by":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T09:03:18Z"}
---

# Optical Spacecraft Navigation

Optical spacecraft navigation uses images or active optical measurements to observe the direction, apparent shape or range of celestial bodies, surface features or another spacecraft. The sensor supplies measurements such as pixel coordinates, line-of-sight angles, a lidar time of flight or an image-feature displacement. It does not supply a complete spacecraft position merely by taking a picture. Camera calibration, attitude, target geometry, a time tag and a navigation estimator are needed to convert the observation into a state estimate.[^1][^4][^5]
