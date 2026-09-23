---
okf_version: "0.2"
type: Class
title: Linear Projection
resource: urn:ngm:class:linear-projection
domain: artificial-intelligence
description: A linear projection is a matrix multiplication that maps an input vector from one vector space into another, typically changing its dimensionality while preserving linear structure. In neural architectures it is implemented as a fully connected layer without a non-linear activation, learning a weight matrix (and optional bias) applied uniformly across positions. It is the mechanism by which transf
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:ai-technique
uses:
  - urn:ngm:class:linear-algebra
partOf:
  - urn:ngm:class:attention
---

# Linear Projection

A linear projection is a matrix multiplication that maps an input vector from one vector space into another, typically changing its dimensionality while preserving linear structure. In neural architectures it is implemented as a fully connected layer without a non-linear activation, learning a weight matrix (and optional bias) applied uniformly across positions. It is the mechanism by which transformer attention derives query, key and value vectors, and by which patch embedding maps flattened image patches into a model's embedding space.
