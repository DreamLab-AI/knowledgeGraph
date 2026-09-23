---
okf_version: "0.2"
type: Class
title: RB 1016 pathplanning
resource: urn:ngm:class:rb-1016-pathplanning
domain: robotics
description: RB 1016 Path Planning is an ontology term in the NarrativeGoldmine robotics hierarchy representing the superclass of algorithms that compute collision-free trajectories from a start configuration to a goal configuration in a robot's configuration space. It encompasses graph-search methods (A*, Dijkstra), sampling-based planners (RRT, PRM), and reactive local-planning strategies (DWA, potential fie
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-navigation-and-planning
hasPart:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:trajectory-planning
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:graph-search
  - urn:ngm:class:dijkstra-algorithm
requires:
  - urn:ngm:class:localisation
  - urn:ngm:class:slam
  - urn:ngm:class:obstacle-avoidance
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:ros
---

# RB 1016 pathplanning

RB 1016 Path Planning is an ontology term in the NarrativeGoldmine robotics hierarchy representing the superclass of algorithms that compute collision-free trajectories from a start configuration to a goal configuration in a robot's configuration space. It encompasses graph-search methods (A*, Dijkstra), sampling-based planners (RRT, PRM), and reactive local-planning strategies (DWA, potential fields), all of which underpin autonomous navigation in structured and unstructured environments.
