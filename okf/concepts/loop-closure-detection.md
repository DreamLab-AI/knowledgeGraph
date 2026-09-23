---
okf_version: "0.2"
type: Class
title: Loop Closure Detection
resource: urn:ngm:class:loop-closure-detection
domain: robotics
description: Loop closure detection is the process by which a SLAM or mapping system recognises that it has returned to a previously visited location. By identifying these revisits, it adds constraints that correct accumulated odometry drift and produce globally consistent maps. It is a critical component of robust simultaneous localisation and mapping, typically implemented via appearance-based place recognit
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-perception
relatedTo:
  - urn:ngm:class:topological-map
  - urn:ngm:class:long-range-navigation
---

# Loop Closure Detection

Loop closure detection is the process by which a SLAM or mapping system recognises that it has returned to a previously visited location. By identifying these revisits, it adds constraints that correct accumulated odometry drift and produce globally consistent maps. It is a critical component of robust simultaneous localisation and mapping, typically implemented via appearance-based place recognition or geometric matching.
