---
okf_version: "0.2"
type: Class
title: Relative Spacecraft Navigation
resource: urn:ngm:class:relative-spacecraft-navigation
domain: space-science-and-systems
description: Relative spacecraft navigation estimates the motion and orientation of one spacecraft with respect to another object. For rendezvous this normally means relative position and velocity; close approach and docking may also require relative attitude, angular rate and full six-degree-of-freedom pose. The estimate is expressed in a declared frame, such as target body axes or a local-vertical/local-hori
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-navigation
relatedTo:
  - urn:ngm:class:formation-flying
  - urn:ngm:class:spacecraft-navigation
  - urn:ngm:class:spacecraft-rendezvous
---

# Relative Spacecraft Navigation

Relative spacecraft navigation estimates the motion and orientation of one spacecraft with respect to another object. For rendezvous this normally means relative position and velocity; close approach and docking may also require relative attitude, angular rate and full six-degree-of-freedom pose. The estimate is expressed in a declared frame, such as target body axes or a local-vertical/local-horizontal orbital frame, at a stated epoch. A range, bearing or image feature is an input measurement, rather than the complete relative state.[^1][^3][^4]
