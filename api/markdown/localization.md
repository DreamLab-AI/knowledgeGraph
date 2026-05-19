- ### Definition
  - The process of determining a mobile robot's position and orientation (pose) within a known or unknown environment using sensor measurements and a map or environmental model. It answers the question "Where am I?"

- ### Semantic Classification
  - owl-class:: robotics:Localization
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Mobile Robotics]], [[Navigation]]

- ### Relationships
  - is-subclass-of:: [[State Estimation]]
  - requires:: [[Sensor System]]
  - enables:: [[Navigation]], [[RB-1016-path-planning]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[State Estimation]]
  - requires:: [[Sensor System]]
  - requires-or:: [[Map]], [[Environmental Model]]
  - estimates:: [[Robot Pose]]
  - uses:: [[Probabilistic Methods]]
  - characterized-by:: [[Uncertainty]], [[Recursive Estimation]]

  - #### Relationships
  - is-subclass-of:: [[State Estimation]]
  - uses:: [[RB-1008-odometry]], [[RB-1015-kalman-filter]], [[RB-1014-monte-carlo-localization]]
  - enables:: [[Navigation]], [[RB-1016-path-planning]]
  - skos:related:: [[SLAM]], [[Sensor Fusion]]
  - applied-in:: [[Autonomous Vehicles]], [[Mobile Robots]]

  - **Types of Localization**
  - **Position Tracking** (local localization)
    - Robot knows initial pose
    - Track pose over time
    - Less challenging
  - **Global Localization** (kidnapped robot problem)
    - Initial pose unknown
    - Must determine pose from scratch
    - More challenging

  - **Localization Approaches**
  - **Probabilistic Methods**
    - Kalman Filter (EKF, UKF)
    - Particle Filter (Monte Carlo Localization)
    - Histogram Filter
  - **Feature-Based Methods**
    - Landmark detection and matching
    - Visual feature tracking
  - **Model-Based Methods**
    - Scan matching
    - Template matching

  - **Sensor Types for Localization**
  - **Proprioceptive Sensors** (internal state)
    - Wheel encoders (odometry)
    - Inertial Measurement Units (IMU)
    - Gyroscopes and accelerometers
  - **Exteroceptive Sensors** (environment)
    - LIDAR/Laser Range Finders
    - Cameras (monocular, stereo, RGB-D)
    - Ultrasonic sensors
    - GPS (outdoor environments)
    - Beacons and fiducial markers

  - **Probabilistic Localization Framework**
  - **State**: Robot pose (x, y, θ)
  - **Belief**: Probability distribution over poses
  - **Motion Model**: Predicts pose change
  - **Sensor Model**: Likelihood of measurements
  - **Bayes Filter**: Updates belief recursively

  - **Challenges**
  - Sensor Noise and Uncertainty
  - Dynamic Environments (moving objects)
  - Perceptual Aliasing (similar-looking places)
  - Computational Complexity
  - Ambiguous Situations
  - Limited Sensing Range
  - GPS Denied Environments

  - **Localization Algorithms**
  - [[RB-1015-kalman-filter]] (EKF, UKF)
  - [[RB-1014-monte-carlo-localization]] (Particle Filter)
  - Grid-Based Markov Localization
  - Scan Matching (ICP - Iterative Closest Point)
  - Visual Odometry and SLAM
  - GPS-Based Localization

  - **Multi-Sensor Fusion**
  - Combines complementary sensors
  - Improves robustness and accuracy
  - Common combinations:
    - Odometry + LIDAR
    - IMU + Vision
    - GPS + Odometry + IMU

  - **Localization in Different Environments**
  - **Indoor**
    - No GPS
    - Structured environments
    - LIDAR, vision, beacons
  - **Outdoor**
    - GPS available
    - Unstructured, dynamic
    - GPS, LIDAR, vision fusion
  - **Underwater**
    - No GPS or LIDAR
    - Acoustic sensors, DVL
  - **Aerial**
    - GPS, IMU, vision
    - High dynamics

  - **Performance Metrics**
  - Localization Accuracy (pose error)
  - Precision (repeatability)
  - Convergence Time (to correct pose)
  - Computational Efficiency
  - Robustness to Failures
  - Coverage (successful localization area)

  - **Applications**
  - Autonomous vehicles (self-driving cars)
  - Warehouse robots
  - Service robots (vacuums, delivery)
  - Drones and UAVs
  - Agricultural robots
  - Underwater vehicles
  - Space rovers

  - **Advanced Topics**
  - SLAM (Simultaneous Localization and Mapping)
  - Multi-Robot Localization
  - Cooperative Localization
  - Lifelong Localization
  - Learning-Based Localization (Deep Learning)

  - **Quality Metrics**
  - authority-score:: 0.97
  - completeness:: 0.94
  - accuracy:: 0.96


  <!-- Merged from Localization.md: GPS Localization, Motion Planning, Odometry, Robotics Systems -->

- ### Provenance
  - sources:: [[Mobile Robotics]], [[Probabilistic Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z