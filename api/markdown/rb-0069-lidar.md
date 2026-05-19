- ### Definition
  - A remote sensing technology that measures distances by emitting laser pulses and calculating time-of-flight to generate precise three-dimensional point clouds of the surrounding environment, enabling robots and autonomous vehicles to perceive and navigate physical space with centimetre-level accuracy.

- ### Semantic Classification
  - owl-class:: robotics:LiDAR
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - related-to:: [[Point Cloud]], [[SLAM]], [[Autonomous Navigation]], [[Sensor Fusion]]
  - enables:: [[Simultaneous Localisation and Mapping]], [[Obstacle Detection]], [[3D Mapping]]
  - complements:: [[Camera Sensor]], [[Radar]], [[IMU]]
  - used-in:: [[Autonomous Vehicle]], [[Mobile Robot]], [[Drone Navigation]]

- ### Content

  ## Definition

  LiDAR (Light Detection And Ranging) is an active remote sensing technology that emits laser pulses and measures the time elapsed before reflected light returns to the sensor (time-of-flight). By sweeping laser beams across a scene, LiDAR generates dense three-dimensional point clouds representing the geometry of the surrounding environment with centimetre-level accuracy and at high update rates.

  ## Operating Principles

  ### Time-of-Flight Measurement

  Distance is calculated from the round-trip travel time of each laser pulse:

  `d = (c × t) / 2`

  where `d` is distance, `c` is the speed of light (approximately 3 × 10^8 m/s), and `t` is the measured round-trip time. Modern pulsed LiDAR units achieve timing resolution in the picosecond range, enabling sub-centimetre range precision.

  ### Scanning Mechanisms

  - **Mechanical rotating**: Motor-driven mirror or spinning sensor head sweeps laser beams through 360° azimuth. Produces dense, uniform point clouds at 10-20 Hz. Common in early autonomous vehicle deployments (Velodyne HDL-64E).
  - **MEMS-based**: Micro-electromechanical mirrors deflect the laser beam electronically. Compact, lower power, no rotating parts — suited to automotive production integration.
  - **Solid-state (OPA/Flash)**: Optical phased arrays or flash illumination capture scenes without moving parts. Higher reliability and lower cost target; point cloud density currently lower than rotating designs.
  - **Frequency-modulated continuous-wave (FMCW)**: Encodes range and radial velocity simultaneously in a single measurement; immune to interference from other LiDAR units, enabling simultaneous velocity mapping.

  ### Point Cloud Generation

  Each returned pulse produces a 3D point `(x, y, z)` computed from range and beam angle. A single scan frame from a 64-beam rotating LiDAR generates approximately 1.3 million points per second, resulting in dense geometric representations updated at sensor frame rate (typically 10-20 Hz).

  ## Relationship to SLAM

  [[Simultaneous Localisation and Mapping]] (SLAM) is the core algorithmic challenge solved using LiDAR data in robotics. LiDAR-SLAM systems:

  1. **Scan matching**: Align successive point cloud frames (ICP — Iterative Closest Point, NDT — Normal Distributions Transform) to estimate sensor motion
  2. **Map construction**: Accumulate aligned scans into a consistent global map (occupancy grid, voxel map, or surfel map)
  3. **Loop closure**: Detect revisited locations and correct accumulated drift by adding constraints to the pose graph
  4. **Real-time operation**: Modern systems (LOAM, LeGO-LOAM, LIO-SAM, KISS-ICP) achieve 10+ Hz on embedded hardware

  LiDAR provides metric-scale depth measurements unaffected by lighting conditions, making it more reliable for SLAM than camera-only approaches in diverse environments.

  ## Relationship to Autonomous Navigation

  [[Autonomous Navigation]] systems use LiDAR as the primary perception sensor for:

  - **Static obstacle detection**: Buildings, walls, furniture, parked vehicles
  - **Dynamic obstacle detection and tracking**: Pedestrians, cyclists, moving vehicles
  - **Free-space estimation**: Navigable ground surface extraction
  - **Localisation**: Matching live scans against a pre-built map for centimetre-accurate positioning
  - **Path planning**: Supplying geometric occupancy information to motion planners (RRT*, A*, Hybrid A*)

  LiDAR is integrated in the sensor stacks of autonomous vehicles (Waymo, Cruise, Mobileye), delivery robots, and industrial mobile platforms.

  ## Sensor Fusion

  LiDAR is typically fused with complementary sensors to compensate for individual limitations:

  | Sensor | Strength | Limitation |
  |--------|----------|------------|
  | LiDAR | Precise 3D geometry, lighting-invariant | No texture/colour, costly, sparse at range |
  | Camera | Rich texture, semantic cues, low cost | No direct depth, affected by lighting |
  | Radar | All-weather, velocity measurement | Low resolution, no vertical resolution |
  | IMU | High-rate motion estimation | Drift accumulates without correction |

  LiDAR-IMU fusion (LIO: LiDAR-Inertial Odometry) is the dominant approach for high-accuracy mobile robot localisation, correcting LiDAR motion distortion during scanning using IMU pre-integration.

  ## Key Algorithms and Systems

  - **LOAM** (Zhang & Singh, 2014): Separates feature extraction and matching into edge and planar points; foundational algorithm for many LiDAR SLAM systems
  - **LeGO-LOAM**: Lightweight and ground-optimised LOAM variant for ground vehicles
  - **LIO-SAM** (Shan et al., 2020): Tightly-coupled LiDAR-IMU system with GPS integration and loop closure
  - **KISS-ICP** (Vizzo et al., 2023): Minimal, robust point-to-point ICP pipeline achieving state-of-the-art performance across datasets
  - **Direct LiDAR-Inertial Odometry (DLIO)** (Chen et al., IEEE ICRA 2023): Novel coarse-to-fine approach with continuous-time trajectory estimation for precise motion correction

  ## Performance Specifications (Representative)

  | Parameter | Typical Range |
  |-----------|--------------|
  | Range | 10–300 m |
  | Range accuracy | ±1–3 cm |
  | Angular resolution | 0.1°–0.4° |
  | Channels (beams) | 16–128 |
  | Frame rate | 10–20 Hz |
  | Field of view (vertical) | 20°–360° |
  | Points per second | 300K–4.6M |

  ## Applications in Robotics

  ### Mobile Robotics
  - Indoor navigation and mapping for service robots and logistics platforms
  - Warehouse automation with autonomous forklifts and transport robots
  - Search and rescue robots operating in GPS-denied environments

  ### Autonomous Vehicles
  - Environment perception for SAE Level 3–5 automated driving
  - High-definition map creation for prior-map-based localisation
  - Dynamic object detection and trajectory prediction

  ### Aerial Robotics
  - Drone obstacle avoidance in cluttered environments
  - Aerial mapping and terrain modelling
  - Infrastructure inspection (bridges, powerlines, wind turbines)

  ### Agricultural Robotics
  - Crop row navigation for autonomous farm machinery
  - Yield estimation from 3D plant structure models
  - Precision spraying with terrain-following flight control

  ## Standards and Compliance

  - **ISO 8373:2021**: Robotics vocabulary — defines sensor and perception terminology
  - **SAE J3016**: Levels of driving automation — defines sensor requirements per automation level
  - **IEC 60825-1**: Laser safety classification — governs LiDAR laser class and safe operation
  - **IEEE 2866-2023**: Standard for LiDAR performance evaluation for autonomous vehicles

  ## Challenges and Future Directions

  - **Cost reduction**: Solid-state and FMCW designs targeting sub-$100 production cost for automotive integration
  - **Adverse weather**: Performance degradation in heavy rain, fog, and snow due to backscatter; ongoing research in signal processing and sensor fusion mitigation
  - **Semantic understanding**: Integration of deep learning for object classification directly on point clouds (PointNet++, VoxelNet, CenterPoint)
  - **Neural implicit representations**: NeRF-based and Gaussian splatting representations trained from LiDAR data enabling novel-view synthesis and compact map storage

  ## References

  1. Zhang, J., & Singh, S. (2014). LOAM: Lidar Odometry and Mapping in Real-time. *Robotics: Science and Systems*.
  2. Shan, T., et al. (2020). LIO-SAM: Tightly-coupled Lidar Inertial Odometry via Smoothing and Mapping. *IROS 2020*.
  3. Vizzo, I., et al. (2023). KISS-ICP: In Defense of Point-to-Point ICP — Simple, Accurate, and Robust Registration If Done the Right Way. *IEEE RA-L*.
  4. Chen, K., et al. (2023). Direct LiDAR-Inertial Odometry. *IEEE ICRA 2023*.
  5. ISO 8373:2021. Robotics — Vocabulary.

- ### Provenance
  - sources:: [[ISO 8373:2021]], [[ICRA 2023]], [[Robotics Ontology Working Group]]
  - migration-date:: 2026-04-26T00:00:00Z