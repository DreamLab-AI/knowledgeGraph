---
okf_version: "0.2"
type: Class
title: Environmental Mapping
resource: urn:ngm:class:environmental-mapping
domain: robotics
description: Environmental mapping is the computational process of constructing spatial representations of a physical environment from sensor data, enabling autonomous agents or robots to understand, navigate, and interact with their surroundings. It encompasses techniques that transform raw sensory inputs—such as lidar point clouds, camera imagery, and depth data—into structured geometric or semantic maps use
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:mapping
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
uses:
  - urn:ngm:class:point-cloud
  - urn:ngm:class:slam
relatedTo:
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:localisation
---

# Environmental Mapping

Environmental mapping is the computational process of constructing spatial representations of a physical environment from sensor data, enabling autonomous agents or robots to understand, navigate, and interact with their surroundings. It encompasses techniques that transform raw sensory inputs—such as lidar point clouds, camera imagery, and depth data—into structured geometric or semantic maps used for path planning and obstacle avoidance.
