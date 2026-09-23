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
---

# Sparse Matrix

A sparse matrix is a matrix in which the overwhelming majority of entries are zero, allowing specialised storage formats and algorithms that operate only on the non-zero elements. By storing and computing with structure rather than dense arrays, sparse representations dramatically reduce memory and arithmetic for large-scale linear algebra. They are foundational to optimisation problems such as bundle adjustment, graph algorithms and finite-element simulation where connectivity is local.
