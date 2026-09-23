---
okf_version: "0.2"
type: Class
title: Broadcasting
resource: urn:ngm:class:broadcasting
domain: infrastructure
description: The one-to-many distribution of a signal or message from a single source to all receivers within reach, in contrast to unicast (one-to-one) and multicast (one-to-selected-group) delivery. In telecommunications it denotes terrestrial and satellite radio and television transmission over allocated spectrum, and by extension the broadcast primitives of computer networks, where a frame or packet is add
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:telecommunications
dependsOn:
  - urn:ngm:class:spectrum-allocation
uses:
  - urn:ngm:class:wireless-communication
relatedTo:
  - urn:ngm:class:satellite-communication
  - urn:ngm:class:numpy
---

# Broadcasting

The one-to-many distribution of a signal or message from a single source to all receivers within reach, in contrast to unicast (one-to-one) and multicast (one-to-selected-group) delivery. In telecommunications it denotes terrestrial and satellite radio and television transmission over allocated spectrum, and by extension the broadcast primitives of computer networks, where a frame or packet is addressed to every node on a segment. The same word names a distinct but analogous mechanism in array computing, where NumPy-style broadcasting stretches arrays of differing shapes to a common shape so that element-wise operations apply one value across many without copying data.
