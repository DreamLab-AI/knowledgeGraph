public:: true
alias:: Localization

# localisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2709daa33c3a13581cd149ecf89229599e2c4c585e53dd067b6ec2493162fb1f",
  "@type": "Page",
  "vc:slug": "localisation",
  "title": "localisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:localisation",
  "@type": "Class",
  "label": "Localisation",
  "definition": "Localisation is the computational process by which a mobile agent—robot, autonomous vehicle, or mixed-reality device—estimates its six-degree-of-freedom pose (position and orientation) within a reference coordinate frame, using sensor observations fused through probabilistic inference algorithms. It encompasses both map-based approaches (matching live sensor data against a prior map) and map-free approaches (dead-reckoning and visual odometry), as well as the joint Simultaneous Localisation and Mapping (SLAM) problem in which the map and pose are estimated concurrently. Accurate localisation is a prerequisite for autonomous navigation, path planning, and real-time spatial anchoring in both physical and virtual environments. The field draws on Bayesian filtering, factor graph optimisation, deep metric learning, and multi-sensor fusion across domains ranging from warehouse automation and self-driving vehicles to extended-reality (XR) headsets.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    },
    {
      "@id": "urn:ngm:class:state-estimation",
      "label": "State Estimation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      },
      {
        "@id": "urn:ngm:class:occupancy-grid",
        "label": "Occupancy Grid"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-localization",
        "label": "Monte Carlo Localisation"
      },
      {
        "@id": "urn:ngm:class:bayes-filter",
        "label": "Bayes Filter"
      },
      {
        "@id": "urn:ngm:class:motion-model",
        "label": "Motion Model"
      },
      {
        "@id": "urn:ngm:class:sensor-model",
        "label": "Sensor Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:spatial-anchoring",
        "label": "Spatial Anchoring"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:probabilistic-inference",
        "label": "Probabilistic Inference"
      },
      {
        "@id": "urn:ngm:class:coordinate-frame",
        "label": "Coordinate Frame"
      },
      {
        "@id": "urn:ngm:class:sensor-system",
        "label": "Sensor System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:odometry",
        "label": "Odometry"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      },
      {
        "@id": "urn:ngm:class:loop-closure-detection",
        "label": "Loop Closure Detection"
      },
      {
        "@id": "urn:ngm:class:probabilistic-robotics",
        "label": "Probabilistic Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:dead-reckoning",
        "label": "Dead Reckoning"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Global Navigation Satellite System"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:robot-pose",
        "label": "Robot Pose"
      },
      {
        "@id": "urn:ngm:class:uncertainty",
        "label": "Uncertainty"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:indoor-positioning-system",
        "label": "Indoor Positioning System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:global-localisation",
        "label": "Global Localisation"
      },
      {
        "@id": "urn:ngm:class:position-control",
        "label": "Position Tracking"
      },
      {
        "@id": "urn:ngm:class:mapping",
        "label": "Mapping"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicles"
      },
      {
        "@id": "urn:ngm:class:mobile-robotics",
        "label": "Mobile Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:robot-localisation",
      "label": "Robot Localisation"
    },
    {
      "@id": "urn:ngm:class:self-localisation",
      "label": "Self-Localisation"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "qualityScore": 0.74
}
```

- ### Definition
  - Localisation is the computational process by which a mobile agent—whether a [[Robot]], [[Autonomous Vehicle]], or [[Extended Reality]] headset—estimates its six-degree-of-freedom pose (position and orientation) within a reference [[Coordinate Frame]], using sensor observations processed through [[Probabilistic Inference]] algorithms. It is the foundational capability that underpins [[Autonomous Navigation]], [[Path Planning]], and real-time [[Spatial Anchoring]] in both physical and virtual environments. The joint problem of estimating pose while simultaneously constructing a consistent world model is captured by [[Simultaneous Localisation and Mapping]] (SLAM), making localisation inseparable from the mapping problem in unknown environments.

- ### Overview
  - Localisation answers a deceptively simple question: "Where am I?" For a mobile agent operating in an unstructured or partially known environment, answering it reliably is non-trivial. The agent must fuse noisy, incomplete, and sometimes conflicting data from multiple sensors—[[LiDAR]], [[Camera]], [[Inertial Measurement Unit]], [[Wheel Encoders]], [[Ultra-Wideband]] beacons—and reconcile that data against either a pre-built [[Map]] or an incrementally built one.
  - The problem is framed probabilistically: the agent maintains a belief distribution over its possible poses and updates it using [[Bayesian Inference]] each time a new sensor observation arrives. The choice of representation for this belief—Gaussian (parametric), particle-based (non-parametric), or factor graph (sparse)—determines the algorithm family and its computational cost.
  - Localisation is "established" as a mature research area but continues to advance rapidly in deep-learning-assisted descriptor generation, uncertainty-aware fusion, and large-scale lifelong mapping with dynamic objects.

- ### Key Components and Mechanisms
  - **Sensor Modalities**
    - [[LiDAR]]: provides dense 3-D [[Point Cloud]] measurements; dominant in outdoor and industrial robotics for its range and precision.
    - [[Camera]] (monocular, stereo, RGB-D): enables [[Visual Odometry]] and descriptor-based place recognition; lower cost than LiDAR.
    - [[Inertial Measurement Unit]] (IMU): measures linear acceleration and angular rate; essential for high-rate motion estimation but suffers from integration drift.
    - [[Wheel Encoders]] / [[Odometry]]: proprioceptive dead-reckoning; fast but accumulates error over distance.
    - [[Global Navigation Satellite System]] (GNSS/GPS): provides absolute outdoor position; blocked indoors and in urban canyons.
    - [[Ultra-Wideband]] (UWB), [[Wi-Fi Fingerprinting]], BLE beacons: infrastructure-assisted [[Indoor Positioning System]] alternatives.
  - **Probabilistic Filters**
    - [[Kalman Filter]] (KF): optimal linear-Gaussian estimator; basis for [[Extended Kalman Filter]] (EKF) and [[Unscented Kalman Filter]] (UKF) non-linear variants.
    - [[Particle Filter]] (Monte Carlo Localisation, MCL): non-parametric; handles multi-modal distributions; used in AMCL (Adaptive MCL) on ROS.
    - [[Histogram Filter]]: discretises state space into a grid (occupancy grid localisation).
  - **Scan Matching and Map Matching**
    - Iterative Closest Point (ICP): aligns successive [[Point Cloud]] scans to estimate relative motion.
    - Normal Distributions Transform (NDT): represents the environment as a set of normal distributions over voxels; faster than ICP for large scans.
    - [[Map Matching]]: aligns sensor observations against a pre-built 2-D or 3-D reference [[Map]].
  - **Deep Learning Descriptors**
    - NetVLAD, PointNetVLAD, SuperPoint/SuperGlue: neural network-derived place descriptors enabling robust [[Loop Closure Detection]] and cross-condition re-localisation.
    - LocNet, DNN-based end-to-end pose regression (PoseNet): direct mapping from image to 6-DoF pose.
  - **Factor Graph Optimisation**
    - Pose graph formulation: poses are nodes, sensor constraints are edges; optimised with g2o, GTSAM, iSAM2.
    - Enables globally consistent trajectory estimation over long runs; central to graph-based [[SLAM]].
  - **Coordinate Frames and Transforms**
    - REP-105 (ROS) defines standard frames: map → odom → base_link → sensor_link.
    - [[Coordinate Frame]] management via tf2 is essential in multi-sensor, multi-robot systems.

- ### Applications and Use Cases
  - **Autonomous Vehicles**: real-time localisation against HD maps (HERE, TomTom) using LiDAR + GNSS + HD-map-matching at centimetre accuracy. [[Self-Driving Car]] pipelines integrate GNSS RTK, LiDAR scan matching, and deep learned descriptors for lane-level precision.
  - **Warehouse and Logistics Robots**: AMR (Autonomous Mobile Robot) fleets use [[SLAM]] and [[Occupancy Grid]] localisation to navigate dynamic warehouse environments without fixed infrastructure.
  - **Surgical Robotics**: sub-millimetre localisation of instruments relative to pre-operative CT/MRI-derived maps enables [[Robotic Surgery]] with spatial precision.
  - **Unmanned Aerial Vehicles (UAVs/Drones)**: visual-inertial odometry (VIO) fusing [[Camera]] and [[Inertial Measurement Unit]] for GPS-denied environments.
  - **Extended Reality (XR/AR/VR)**: [[Spatial Anchoring]] and world tracking in headsets (HoloLens, Apple Vision Pro, Meta Quest) use inside-out SLAM to render virtual content co-registered with the physical world.
  - **Indoor Navigation**: hospital, airport, and large-venue wayfinding using [[Ultra-Wideband]] or Wi-Fi fingerprinting combined with dead-reckoning on smartphones.
  - **Agricultural Robotics**: field robots use GNSS RTK + visual odometry in crop rows where satellite signal is partially obstructed.
  - **Search and Rescue**: SLAM-equipped robots map and localise in GPS-denied collapsed structures or underground environments.
  - **Digital Twin Synchronisation**: real-time robot pose fed to a [[Digital Twin]] model for live simulation mirroring and predictive maintenance.

- ### Types of Localisation
  - **Position Tracking** (local localisation): the robot knows its initial pose and tracks it over time; the less challenging variant.
  - **Global Localisation** (the "kidnapped robot" problem): the initial pose is unknown and must be determined from scratch; significantly harder, typically requiring multi-modal belief representations such as the [[Particle Filter]].

- ### Localisation in Different Environments
  - **Indoor**: no GNSS; structured environments; LiDAR, vision, and beacon-based sensing dominate.
  - **Outdoor**: GNSS available but environments are unstructured and dynamic; fusion of GNSS, LiDAR, and vision.
  - **Underwater**: neither GNSS nor LiDAR is usable; acoustic sensors and Doppler velocity logs (DVL) provide ranging and odometry.
  - **Aerial**: GNSS, IMU, and vision fused under high dynamics for drones and UAVs.
  - **Space**: planetary rovers rely on visual odometry and landmark matching in the absence of satellite positioning.

- ### Challenges
  - Sensor noise and [[Uncertainty]]; dynamic environments with moving objects; perceptual aliasing (similar-looking places); computational complexity; ambiguous situations; limited sensing range; GNSS-denied environments.

- ### Performance Metrics
  - Localisation accuracy (pose error); precision (repeatability); convergence time to the correct pose; computational efficiency; robustness to failures; coverage (area over which localisation succeeds).

- ### Relationships
  - is-subclass-of:: [[State Estimation]]
  - uses:: [[LiDAR]]
  - uses:: [[Particle Filter]]
  - uses:: [[Kalman Filter]]
  - uses:: [[Inertial Measurement Unit]]
  - uses:: [[Point Cloud]]
  - uses:: [[Occupancy Grid]]
  - uses:: [[Monte Carlo Localisation]]
  - uses:: [[Bayes Filter]]
  - uses:: [[Motion Model]]
  - uses:: [[Sensor Model]]
  - enables:: [[Autonomous Navigation]]
  - enables:: [[Simultaneous Localisation and Mapping]]
  - enables:: [[Path Planning]]
  - enables:: [[Spatial Anchoring]]
  - enables:: [[Augmented Reality]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Probabilistic Inference]]
  - requires:: [[Coordinate Frame]]
  - requires:: [[Sensor System]]
  - dependsOn:: [[Odometry]]
  - dependsOn:: [[Feature Extraction]]
  - dependsOn:: [[Loop Closure Detection]]
  - dependsOn:: [[Probabilistic Robotics]]
  - relatedTo:: [[SLAM]]
  - relatedTo:: [[Dead Reckoning]]
  - relatedTo:: [[Global Navigation Satellite System]]
  - relatedTo:: [[Pose Estimation]]
  - relatedTo:: [[Map Matching]]
  - relatedTo:: [[Robot Pose]]
  - relatedTo:: [[Uncertainty]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Indoor Positioning System]]
  - contrastsWith:: [[Global Localisation]]
  - contrastsWith:: [[Position Tracking]]
  - contrastsWith:: [[Mapping]]
  - supports:: [[Autonomous Vehicles]]
  - supports:: [[Mobile Robotics]]

- ### Standards and Context
  - **ROS / ROS 2**: de facto middleware for robotics localisation; REP-105 defines canonical coordinate frame conventions; the `nav_stack` (Navigation Stack) bundles AMCL, costmap2d, move_base for 2-D mobile robot localisation.
  - **IEEE 1873-2015**: IEEE Standard for Robot Map Data Representation for Navigation; specifies exchange formats for occupancy grids and metric maps.
  - **OpenCV**: open-source library providing camera calibration, feature detection, and optical flow primitives essential for visual localisation pipelines.
  - **Open3D / PCL (Point Cloud Library)**: standard libraries for processing [[Point Cloud]] data used in LiDAR-based localisation.
  - **OSRM / OpenStreetMap**: vector map data used as a localisation reference for road-level and pedestrian navigation.
  - **ISO 3691-4**: safety requirements for driverless industrial trucks; indirectly mandates reliable localisation for autonomous operation.
  - **IEEEE 802.15.4z (UWB)**: radio standard underpinning high-precision [[Ultra-Wideband]] ranging used in [[Indoor Positioning System]].

- ### Current Landscape (2026)
  - Visual foundation models have become the dominant lever for robust localisation: Voedisch and Scaramuzza's "LiDAR Registration with Visual Foundation Models" (RSS 2025) used DINOv2 surround-view descriptors to lift 6-DoF registration recall by +24.8 and +17.3 points on the NCLT and Oxford Radar RobotCar datasets, and feed-forward 3D models (DUSt3R, MASt3R, VGGT) now bootstrap dense SLAM front-ends directly from RGB.
  - End-to-end learned dense SLAM matured through 2025-2026: FoundationSLAM (AAAI 2026 Oral) couples optical flow with foundation depth priors to run monocular dense tracking and mapping in real time at 18 FPS, while DINO-VO and ZeroVO push zero-shot, cross-camera visual odometry.
  - NVIDIA consolidated a GPU-accelerated localisation stack in Isaac ROS: cuVSLAM (visual-inertial SLAM, ROS 2 Jazzy support landed October 2025), cuVGL for global re-localisation in prebuilt maps, FoundationStereo depth, and nvblox reconstruction; the January 2026 GR00T N1.6 humanoid release makes this vision-centric SLAM its core localisation layer, and PyCuVSLAM (2025) opened the library to Python users.
  - 3D Gaussian Splatting overtook NeRF as the mapping substrate for photorealistic SLAM, with SplaTAM, MonoGS, DROID-Splat (ICCV 2025 workshop) and Gaussian-LIC2 (LiDAR-inertial-camera) as reference systems; a dedicated SLAM&Render benchmark (2025) and an October 2025 survey on collaborative multi-robot 3DGS SLAM signal the field's consolidation.
  - Localisation is shifting from purely geometric to "AI-native" semantic SLAM: 2026 Chinese patents (Hefei Keda) integrate Vision-Language-Action models into the SLAM back-end for keyframe selection, dynamic-object filtering and loop closure, building hierarchical situational maps that support natural-language navigation goals.
  - Radio positioning standards advanced sharply: 3GPP Release 18 added carrier-phase measurement and PRS/SRS bandwidth aggregation (up to 400 MHz) for centimetric accuracy, and Release 19's Sidelink Positioning Protocol was published as ETSI TS 138 355 V19.0.0 in October 2025, defining SL-TDOA/TOA/AoA/RTT device-to-device ranging plus seven positioning service levels, including millisecond-latency tiers explicitly for AMR cooperation and collision avoidance, with AI/ML for NLOS mitigation.
  - Open frontiers as of 2026 remain robustness in degenerate, GNSS-denied and low-texture settings (planetary, subterranean, factory), long-term cross-session re-localisation against maps that are months or years old, and dynamic-scene consistency — motivating multimodal loop-closure pipelines such as MPRF (under review for ICRA 2026) that fuse DINOv2/SALAD visual retrieval with LiDAR geometric verification.

- ### References
  - 1. Voedisch, Cioffi, Cannici, Burgard & Scaramuzza / UZH Robotics and Perception Group (2025). LiDAR Registration with Visual Foundation Models (RSS 2025). https://rpg.ifi.uzh.ch/research_vo.html
  - 2. Wu, Li, Tosi, Poggi, Zheng & Bai (2026). FoundationSLAM: Unleashing the Power of Depth Foundation Models for End-to-End Dense Visual SLAM (AAAI 2026 Oral). https://arxiv.org/abs/2512.25008v2
  - 3. NVIDIA Developer (2026). Building Generalist Humanoid Capabilities with NVIDIA Isaac GR00T N1.6 — cuVSLAM, cuVGL, FoundationStereo and nvblox localisation stack. https://developer.nvidia.com/blog/building-generalist-humanoid-capabilities-with-nvidia-isaac-gr00t-n1-6-using-a-sim-to-real-workflow/
  - 4. arXiv (2025). A Survey on Collaborative SLAM with 3D Gaussian Splatting. https://arxiv.org/html/2510.23988v1
  - 5. ETSI / 3GPP (2025). Sidelink Positioning Protocol (SLPP), ETSI TS 138 355 V19.0.0 Release 19. https://www.etsi.org/deliver/etsi_ts/138300_138399/138355/19.00.00_60/ts_138355v190000p.pdf
  - 6. Ericsson (2026). Recommended positioning technologies for 5G — 3GPP Release 16-19 positioning evolution. https://www.ericsson.com/en/reports-and-papers/white-papers/5g-positioning

- ### Provenance
  - sources:: IEEE 1873-2015; Thrun, Burgard & Fox "Probabilistic Robotics" (MIT Press); Cadena et al. "Past, Present, and Future of SLAM" (IEEE TRO 2016); ROS REP-105
  - updated:: 2026-06-13
