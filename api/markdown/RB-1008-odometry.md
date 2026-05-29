public:: true

# RB-1008-odometry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rb-1008-odometry",
  "@type": "Page",
  "vc:slug": "rb-1008-odometry",
  "title": "RB-1008-odometry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rb-1008-odometry",
  "@type": "Class",
  "label": "RB-1008-odometry",
  "definition": "RB-1008-odometry refers to the odometric positioning subsystem of the RB-1008 wheeled mobile robot platform, encompassing the encoder-based wheel odometry algorithms, sensor fusion pipelines, and ROS navigation stack integration used to estimate the robot's pose (position and orientation) relative to a starting frame. The system computes incremental displacement from differential or omnidirectional wheel encoders, corrects for wheel slip and encoder quantisation errors, and fuses encoder data with inertial measurement unit (IMU) readings to produce a continuous odometric estimate used as the prior for simultaneous localisation and mapping (SLAM) and autonomous navigation. Accurate odometry is essential for maintaining coherent map frames and for the navigation stack's local cost-map updates between LIDAR scan matches.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:odometry", "label": "Odometry"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:wheeled-mobile-robot", "label": "Wheeled Mobile Robot"},
      {"@id": "urn:ngm:class:mobile-robot-platform", "label": "Mobile Robot Platform"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:ros-navigation-stack", "label": "ROS Navigation Stack"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:localization", "label": "Localization"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[RB-1008-odometry]] is the encoder-based pose estimation subsystem of the RB-1008 mobile robot, fusing differential wheel encoder data with [[Sensor Fusion|IMU measurements]] and publishing continuous odometric transforms that anchor the [[ROS Navigation Stack]] local planner and [[SLAM]] algorithms to a consistent reference frame.

- ### Relationships
  - [[RB-1008-odometry]] is a component [[partOf]] the [[Wheeled Mobile Robot]] architecture of the RB-1008 and its associated [[Mobile Robot Platform]] family. It feeds directly into the [[ROS Navigation Stack]], providing the wheel odometry transform (odom → base_link) consumed by localisation nodes. The subsystem is complemented by [[Visual Odometry]] for environments where wheel slip is significant, and both contribute to robust [[Localization]] and [[Autonomous Navigation]] behaviour. In complex environments, raw odometry serves as the dead-reckoning prior that [[SLAM]] algorithms correct against scan-matching evidence.

- ### Content
  - The RB-1008 is a wheeled mobile robot platform developed by Robotnik Automation, a Spanish manufacturer specialising in professional service robots. The RB-1008 series targets indoor logistics, security, and research applications, combining a compact differential drive base with a modular sensor tower that can accommodate LIDAR, RGB-D cameras, and manipulation arms. Odometry on this platform is derived from quadrature encoders mounted on the drive motor shafts, providing encoder tick counts from which wheel angular velocity and linear displacement are computed at kilohertz rates.

  - The odometry computation pipeline converts raw encoder ticks to wheel angular velocities using the known encoder resolution and gear ratio, applies the differential drive kinematic model to compute instantaneous linear and angular robot velocity, and integrates these velocities over time to produce cumulative pose estimates. On-board Kalman filtering or complementary filtering merges IMU angular rate data with encoder-derived estimates, reducing heading drift that accumulates from gyroscope bias and improving behaviour during wheel slip events. The resulting tf transform is broadcast to the ROS tf tree at 50–100 Hz.

  - Accurate odometry on the RB-1008 is significant because it forms the temporal glue between discrete LIDAR scans in scan-matching SLAM approaches such as Google Cartographer, Hector SLAM, or GMapping. If odometry is noisy or unreliable, loop-closure detection degrades and map consistency suffers. The RB-1008's design incorporates calibration procedures for determining the effective wheel baseline and radius—parameters that directly influence odometric accuracy—and supports runtime calibration using rosbag playback of straight-line and rotation test trajectories.

  - In 2024–2025 the RB-1008 and similar differential drive platforms have been updated to support ROS 2 Navigation2 (Nav2) stack integration, where the odometry topic follows the nav_msgs/Odometry message type with covariance matrices populated from encoder noise models. Research groups have used the RB-1008 as a testbed for learning-based odometry correction models that estimate wheel slip from current sensor data and dynamically adjust kinematic parameters, improving odometric accuracy on uneven indoor surfaces compared to fixed-parameter models.