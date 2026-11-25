---
okf_version: "0.2"
type: Class
title: Ground Control Point
resource: urn:ngm:class:ground-control-point
domain: earth-observation-and-geospatial-sensing
description: "A ground control point (GCP) is a feature that can be identified in imagery or survey data and whose coordinates are known in the required output reference system. Its measured ground coordinates and corresponding image location constrain a geometric model. The uncertainty of both observations matters: an accurately surveyed point is poor control if the feature is ambiguous, has moved or cannot be"
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:geodesy
bridgesTo:
  - urn:ngm:class:positioning-navigation-and-timing
relatedTo:
  - urn:ngm:class:geodesy
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T07:42:58Z"}
---

# Ground Control Point

A ground control point (GCP) is a feature that can be identified in imagery or survey data and whose coordinates are known in the required output reference system. Its measured ground coordinates and corresponding image location constrain a geometric model. The uncertainty of both observations matters: an accurately surveyed point is poor control if the feature is ambiguous, has moved or cannot be marked consistently in the image.[^1]
