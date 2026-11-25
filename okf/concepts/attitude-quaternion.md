---
okf_version: "0.2"
type: Class
title: Attitude Quaternion
resource: urn:ngm:class:attitude-quaternion
domain: space-science-and-systems
description: An attitude quaternion is a four-component representation of a three-dimensional rotation. For spacecraft work it normally expresses the orientation of one declared reference frame relative to another at an epoch. The four components are constrained to unit norm, so they contain three independent degrees of freedom. A quaternion without its frames, rotation direction, component order and time cont
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
bridgesTo:
  - urn:ngm:class:quaternion-math
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
  - urn:ngm:class:rotation-matrix
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T09:01:01Z"}
---

# Attitude Quaternion

An attitude quaternion is a four-component representation of a three-dimensional rotation. For spacecraft work it normally expresses the orientation of one declared reference frame relative to another at an epoch. The four components are constrained to unit norm, so they contain three independent degrees of freedom. A quaternion without its frames, rotation direction, component order and time context is not a complete attitude state.[^1][^2]
