- ### Definition
  - A depth camera captures per-pixel distance data and produces RGB-D imagery or point clouds used for 3D scene understanding in robotics. The three dominant technologies are structured light (projects a known infrared pattern and measures its deformation), time-of-flight (measures photon round-trip time), and stereo triangulation (computes disparity between two offset cameras). Depth cameras are central to indoor navigation, manipulation, and human-presence detection in collaborative robot cells.

- ### Semantic Classification
  - owl-class:: robotics:rb0077depthcamera
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Depth cameras feed point clouds to SLAM pipelines for simultaneous localisation and mapping, and serve as the primary sensing modality for real-time obstacle avoidance. They complement LiDAR (RB-0069) at close range and are closely related to stereo cameras and vision systems (RB-0068). Visual odometry algorithms typically consume the depth stream alongside the RGB image to estimate robot ego-motion without wheel encoders.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z