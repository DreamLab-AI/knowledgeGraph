- ### Definition
  - Collision avoidance in robotics encompasses the algorithms and hardware that allow a robot to detect obstacles — including humans, other robots, fixtures, and unforeseen objects — and modify its motion so as to prevent physically harmful contact. Reactive approaches compute avoidance actions in real time from sensor readings; deliberate approaches embed free-space constraints into the trajectory optimisation during the planning phase. In human-robot collaborative environments collision avoidance is a critical safety function that complements and enables speed and separation monitoring.
  - Modern collision avoidance implementations often combine multiple sensing modalities (LiDAR point clouds, depth cameras, safety scanners) with probabilistic occupancy maps or signed-distance fields. The resulting avoidance guarantees depend heavily on sensor latency, map update rate, and the robot's maximum braking distance — all parameters that must be validated as part of the overall risk assessment.

- ### Semantic Classification
  - owl-class:: robotics:rb0052collisionavoidance
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: rb 0066 robot sensor, rb 0049 motion planning
  - Enables: rb 0103 collaborative operation
  - Depends on: rb 0051 trajectory planning
  - Related to: rb 0095 safety zone, rb 0092 protective stop, Obstacle Avoidance, rb 0105 speed and separation monitoring

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z