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
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
---

# Attitude Quaternion

An attitude quaternion is a four-component representation of a three-dimensional rotation. For spacecraft work it normally expresses the orientation of one declared reference frame relative to another at an epoch. The four components are constrained to unit norm, so they contain three independent degrees of freedom. A quaternion without its frames, rotation direction, component order and time context is not a complete attitude state.[^1][^2]
