---
okf_version: "0.2"
type: Class
title: Rapidly Exploring Random Tree
resource: urn:ngm:class:rapidly-exploring-random-tree
domain: robotics
description: A Rapidly Exploring Random Tree (RRT) is a sampling-based motion-planning algorithm that incrementally builds a space-filling tree by drawing random samples from the configuration space and extending the tree toward each sample. It efficiently explores high-dimensional spaces while respecting kinematic and obstacle constraints, and its variants such as RRT* add asymptotic optimality. RRT is widely
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:sampling-based-planning
requires:
  - urn:ngm:class:collision-detection
enables:
  - urn:ngm:class:autonomous-navigation
implements:
  - urn:ngm:class:sampling-based-planning
  - urn:ngm:class:path-planning
contrastsWith:
  - urn:ngm:class:path-planning
bridgesTo:
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:configuration-space
  - urn:ngm:class:collision-detection
supports:
  - urn:ngm:class:motion-planning
partOf:
  - urn:ngm:class:sampling-based-planning
  - urn:ngm:class:motion-planning
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:ros
---

# Rapidly Exploring Random Tree

A Rapidly Exploring Random Tree (RRT) is a sampling-based motion-planning algorithm that incrementally builds a space-filling tree by drawing random samples from the configuration space and extending the tree toward each sample. It efficiently explores high-dimensional spaces while respecting kinematic and obstacle constraints, and its variants such as RRT* add asymptotic optimality. RRT is widely used for robot path planning where the free space is too large or complex for grid-based search.
