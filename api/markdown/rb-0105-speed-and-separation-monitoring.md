- ### Definition
  - ### Primary Definition
  Speed and Separation Monitoring (SSM) is a collaborative robot safety function that continuously adapts robot speed in inverse proportion to the measured proximity of any human operator in the shared workspace. As the operator moves closer to the robot, the robot slows; if the minimum protective separation distance is breached the robot stops. Once separation is restored to a safe threshold, the robot resumes operation automatically. SSM is one of the four collaborative operation modes defined by ISO/TS 15066 (alongside safety-rated monitored stop, hand guiding, and power/force limiting).

  SSM requires at minimum a certified area-scanning sensor — typically a safety-rated LiDAR or camera system — capable of resolving the operator's position within the robot's protective separation distance in real time. The protective separation distance itself is calculated from the sum of the robot's stopping distance, the operator's approach speed, and a sensor reaction-time margin. Higher resolution sensors and faster control loops allow smaller minimum separation distances and therefore greater productivity in human-robot collaborative cells.

- ### Semantic Classification
  - owl-class:: robotics:rb0105speedandseparationmonitoring
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: rb 0066 robot sensor, rb 0095 safety zone
  - Enables: rb 0103 collaborative operation
  - Depends on: rb 0093 speed limitation, rb 0069 lidar
  - Related to: rb 0092 protective stop, rb 0094 power and force limiting, rb 0089 risk assessment
  - Standardised by: rb 0087 safety standard

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z