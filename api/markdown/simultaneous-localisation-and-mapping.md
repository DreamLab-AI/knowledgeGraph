- ### Definition
  - Simultaneous Localisation and Mapping (SLAM) is a computational technique by which a mobile robot or autonomous agent concurrently estimates its own pose and builds a consistent map of a previously unknown environment from sequential sensor observations, solving the circular dependency between localisation (which requires a map) and mapping (which requires a known pose). SLAM algorithms process observations from sensors including LiDAR, stereo cameras, IMUs, and depth cameras using probabilistic frameworks such as particle filters, extended Kalman filters, or pose-graph optimisation to maintain joint estimates of the robot state and environment map.

- ### Semantic Classification
  - owl-class:: simultaneous-localisation-and-mapping:Simultaneous Localisation and Mapping
  - owl-role:: Concept

- ### Relationships
  - uses [[Kalman Filter]]
  - uses [[Particle Filter]]
  - uses [[Lidar]]
  - enables [[Autonomous Navigation]]
  - enables [[Visual Odometry]]
  - relatedTo [[Localisation]]
  - relatedTo [[Odometry]]

- ### Content
  SLAM is a foundational capability for autonomous robots operating in unstructured or unmapped environments. The problem is formally defined as estimating the joint posterior distribution over the robot's trajectory and the map given all sensor observations and control inputs — a high-dimensional inference problem that requires computational approximation in practice.

  Classical SLAM algorithms divide into filtering-based and graph-based approaches. EKF-SLAM and FastSLAM use extended Kalman filters and particle filters respectively to maintain a running state estimate, but scale poorly to large environments. Pose-graph SLAM (as in GTSAM, g2o, and Ceres Solver) represents the problem as a factor graph over robot poses and landmark positions and applies non-linear optimisation at loop closure events, scaling to city-scale maps. LiDAR SLAM systems such as Cartographer and LIO-SAM produce precise 2D or 3D occupancy maps widely used in industrial robotics and autonomous vehicles. Visual SLAM (ORB-SLAM3, VINS-Mono) uses camera images, often fused with IMU data, for metric-scale reconstruction in GPS-denied environments.

  Loop closure — recognising a previously visited place and correcting accumulated drift — is the critical capability that distinguishes SLAM from dead-reckoning odometry. Place recognition is commonly achieved with bag-of-words image descriptors or deep learning-based retrieval. Semantic SLAM extends metric-geometric maps with object-level and semantic labels, enabling task-relevant navigation queries. Recent deep learning approaches such as Neural Radiance Field-based SLAM and foundation-model-enhanced loop closure are pushing the boundaries of robustness in challenging dynamic environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z