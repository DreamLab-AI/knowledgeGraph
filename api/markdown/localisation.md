- ### Definition
  - Localisation in robotics and autonomous systems is the process by which a mobile agent estimates its position (x, y, z) and orientation (roll, pitch, yaw) within a reference frame—either a pre-built map or a simultaneously constructed one—using data from onboard sensors such as LiDAR, cameras, IMUs, and wheel encoders processed through probabilistic inference algorithms. Accurate localisation is a prerequisite for autonomous navigation, path planning, and manipulation tasks, as control decisions depend critically on knowing where the robot is relative to its goal and obstacles. The joint problem of localisation and map construction is addressed by Simultaneous Localisation and Mapping (SLAM) algorithms.

- ### Semantic Classification
  - owl-class:: localisation:Localisation
  - owl-role:: Concept

- ### Relationships
  - uses [[Lidar]]
  - uses [[Particle Filter]]
  - enables [[Autonomous Navigation]]
  - enables [[Simultaneous Localisation and Mapping]]
  - relatedTo [[Odometry]]
  - relatedTo [[Kalman Filter]]

- ### Content
  - Localisation approaches span a spectrum from purely proprioceptive dead-reckoning (integrating wheel odometry and IMU readings, which accumulates drift over time) to exteroceptive methods that match sensor observations against a known map (feature-based or scan-matching approaches). Global localisation—determining position without a prior pose estimate—is solved by Monte Carlo Localisation (particle filter) algorithms such as AMCL, which maintain a probabilistic distribution over possible poses and update it using Bayesian inference each time a sensor observation arrives.
  - Map-based localisation methods include scan matching (ICP, NDT), feature-based matching against landmarks extracted from LiDAR point clouds or camera images, and learned approaches using neural network-derived descriptors (NetVLAD, PointNetVLAD). GPS provides absolute pose in outdoor environments but is unreliable indoors and in urban canyons; UWB, Wi-Fi fingerprinting, and infrastructure-mounted beacons serve as indoor localisation alternatives. Multi-sensor fusion via Extended Kalman Filter (EKF) or Unscented Kalman Filter (UKF) combines complementary sensor modalities to improve accuracy and robustness.
  - SLAM algorithms solve localisation and mapping jointly, maintaining a consistent map while simultaneously estimating the robot's trajectory. Graph-based SLAM (e.g. g2o, GTSAM) formulates pose estimation as a factor graph optimisation problem, while filter-based SLAM (EKF-SLAM, FastSLAM) propagates a probabilistic state estimate online. SLAM is a core capability in autonomous vehicles, warehouse automation robots, and surgical robotics systems, where high-precision pose estimation in dynamically changing environments is essential.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z