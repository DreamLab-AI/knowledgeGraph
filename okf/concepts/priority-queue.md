---
okf_version: "0.2"
type: Class
title: Priority Queue
resource: urn:ngm:class:priority-queue
domain: artificial-intelligence
description: A priority queue is an abstract data type in which each element has an associated priority and elements are served in order of priority rather than insertion order. It supports insertion of elements and extraction of the highest- (or lowest-) priority element, and is most commonly implemented with a binary heap. Priority queues underpin many graph and scheduling algorithms where the next item to p
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:data-structure
requires:
  - urn:ngm:class:data-structure
enables:
  - urn:ngm:class:dijkstra-algorithm
  - urn:ngm:class:pathfinding
  - urn:ngm:class:priority-scheduling
  - urn:ngm:class:heuristic-search
  - urn:ngm:class:discrete-event-simulation
contrastsWith:
  - urn:ngm:class:dynamic-programming
uses:
  - urn:ngm:class:graph-search
  - urn:ngm:class:dynamic-programming
supports:
  - urn:ngm:class:optimisation-algorithm
  - urn:ngm:class:event-driven-architecture
  - urn:ngm:class:task-scheduling
relatedTo:
  - urn:ngm:class:data-structure
  - urn:ngm:class:graph-search
---

# Priority Queue

A priority queue is an abstract data type in which each element has an associated priority and elements are served in order of priority rather than insertion order. It supports insertion of elements and extraction of the highest- (or lowest-) priority element, and is most commonly implemented with a binary heap. Priority queues underpin many graph and scheduling algorithms where the next item to process is the most urgent one.
