- ### Definition
  - Agricultural robotics is the application of autonomous and semi-autonomous robotic systems to farming operations including soil preparation, precision planting, selective harvesting, crop health monitoring, and livestock management. Agricultural robots leverage computer vision, GPS positioning, and machine learning to operate in unstructured outdoor environments, adapting to variable terrain, crop geometry, and weather conditions. The field addresses labour shortages, resource efficiency, and the precision-agriculture imperative to reduce agrochemical inputs while maintaining or improving yields.

- ### Semantic Classification
  - owl-class:: agricultural-robotics:Agricultural Robotics
  - owl-role:: Concept

- ### Relationships
  - uses [[Computer Vision]]
  - uses [[Gps]]
  - requires [[Autonomous Navigation]]
  - requires [[Object Detection]]
  - relatedTo [[Autonomous Robot]]

- ### Content
  - Agricultural robots must solve a distinctive set of engineering challenges compared with industrial robots: the operating environment is unstructured and dynamic (wind, rain, changing light, growing crops); objects of interest (fruit, weeds, animals) vary enormously in size, colour, and pose; and energy sources are constrained on remote fields. Ground-based robots typically use differential drive or tracked chassis for field navigation, relying on RTK-GPS for centimetre-level positioning and LiDAR or stereo cameras for local obstacle avoidance.
  - Harvesting robots represent the most commercially demanding application: selective strawberry and tomato pickers use deep-learning vision systems to detect ripe fruit by colour and geometry, multi-axis manipulator arms to reach the fruit, and compliant end-effectors to grasp without bruising. Vision-guided weeding robots apply micro-doses of herbicide or mechanical cutting precisely to individual weed plants, reducing herbicide use relative to blanket spraying.
  - Aerial drones complement ground robots for large-scale monitoring tasks: multispectral and thermal imaging UAVs assess crop health, detect irrigation stress, and identify pest damage across large areas. Data from drone surveys feeds precision-agriculture decision-support systems that generate variable-rate application maps. Research frontiers include autonomous swarms for coordinated planting and harvesting, soft manipulators for delicate fruit handling, and integration with satellite imagery for field-scale analytics.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z