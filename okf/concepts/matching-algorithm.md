---
okf_version: "0.2"
type: Class
title: Matching Algorithm
resource: urn:ngm:class:matching-algorithm
domain: data
description: "A matching algorithm is a computational procedure that identifies correspondences between two sets of entities — such as records, participants or resources — according to a similarity or compatibility criterion, ranging from exact-key joins to probabilistic and graph-based matching. In master data management it links duplicate or related records referring to the same real-world entity across data "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:algorithm
partOf:
  - urn:ngm:class:algorithm
relatedTo:
  - urn:ngm:class:master-data-management
  - urn:ngm:class:barter-system
---

# Matching Algorithm

A matching algorithm is a computational procedure that identifies correspondences between two sets of entities — such as records, participants or resources — according to a similarity or compatibility criterion, ranging from exact-key joins to probabilistic and graph-based matching. In master data management it links duplicate or related records referring to the same real-world entity across data sources; in resource-allocation contexts, such as barter or exchange systems, it pairs supply with demand to satisfy mutual constraints. Matching algorithms vary widely in complexity, from simple rule-based comparisons to optimisation-based approaches such as the stable-marriage and bipartite-matching algorithms.
