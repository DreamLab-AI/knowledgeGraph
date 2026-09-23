---
okf_version: "0.2"
type: Class
title: RTAB-Map
resource: urn:ngm:class:rtab-map
domain: robotics
description: "RTAB-Map (Real-Time Appearance-Based Mapping) is an open-source library for RGB-D, stereo, and lidar graph-based SLAM with a memory-management scheme that bounds computation for large-scale, long-term operation. Its core is an appearance-based loop-closure detector that recognises previously visited places to correct accumulated drift. It is widely used on ground robots to build consistent metric "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:ground-robot
  - urn:ngm:class:topological-map
---

# RTAB-Map

RTAB-Map (Real-Time Appearance-Based Mapping) is an open-source library for RGB-D, stereo, and lidar graph-based SLAM with a memory-management scheme that bounds computation for large-scale, long-term operation. Its core is an appearance-based loop-closure detector that recognises previously visited places to correct accumulated drift. It is widely used on ground robots to build consistent metric and topological maps.
