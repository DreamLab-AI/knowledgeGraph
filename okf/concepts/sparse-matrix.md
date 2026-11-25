---
okf_version: "0.2"
type: Class
title: Sparse Matrix
resource: urn:ngm:class:sparse-matrix
domain: spatial-computing
description: A sparse matrix is a matrix in which the overwhelming majority of entries are zero, allowing specialised storage formats and algorithms that operate only on the non-zero elements. By storing and computing with structure rather than dense arrays, sparse representations dramatically reduce memory and arithmetic for large-scale linear algebra. They are foundational to optimisation problems such as bu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:linear-algebra
hasPart:
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:graph-representation
implements:
  - urn:ngm:class:data-structure
bridgesTo:
  - urn:ngm:class:adjacency-matrix
uses:
  - urn:ngm:class:linear-algebra
supports:
  - urn:ngm:class:bundle-adjustment
  - urn:ngm:class:optimisation
partOf:
  - urn:ngm:class:linear-algebra
relatedTo:
  - urn:ngm:class:adjacency-matrix
  - urn:ngm:class:graph-representation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Sparse Matrix

A sparse matrix is a matrix in which the overwhelming majority of entries are zero, allowing specialised storage formats and algorithms that operate only on the non-zero elements. By storing and computing with structure rather than dense arrays, sparse representations dramatically reduce memory and arithmetic for large-scale linear algebra. They are foundational to optimisation problems such as bundle adjustment, graph algorithms and finite-element simulation where connectivity is local.
