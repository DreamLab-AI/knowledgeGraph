- ### Definition
  - A robot sensor is any transducer or measurement device that provides a robot system with information about its own internal state or the state of the external environment. Proprioceptive sensors (encoders, IMUs, force/torque sensors) measure the robot's own configuration and dynamics; exteroceptive sensors (vision systems, LiDAR, radar, proximity sensors, depth cameras) measure the surrounding environment. Together they feed the perception pipeline that underpins safe autonomous behaviour, closed-loop control, and human-robot interaction.
  - The performance of a robot sensor — characterised by accuracy, resolution, range, update rate, and environmental robustness — directly constrains what safety and control functions can be implemented. Safety-rated sensors must meet additional requirements around fault detection, dual-channel redundancy, and certified response times, as mandated when used within protective safety functions such as speed and separation monitoring.

- ### Semantic Classification
  - owl-class:: robotics:rb0066robotsensor
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - has-part:: rb 0067 force torque sensor, rb 0068 vision system, rb 0069 lidar, rb 0072 encoder, rb 0073 imu
  - enables:: rb 0052 collision avoidance, rb 0105 speed and separation monitoring
  - relatedTo:: Sensor Fusion

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z