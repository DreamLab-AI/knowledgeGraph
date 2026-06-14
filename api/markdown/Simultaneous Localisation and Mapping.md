public:: true

# simultaneous localisation and mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:97bbc22869dec7e1e0c5c1587f61a052d139a5d48086cb8f8a137332299c0085",
  "@type": "Page",
  "vc:slug": "simultaneous-localisation-and-mapping",
  "title": "simultaneous localisation and mapping",
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
  "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
  "@type": "Class",
  "label": "Simultaneous Localisation and Mapping",
  "definition": "Simultaneous Localisation and Mapping (SLAM) is a computational technique by which a mobile robot or autonomous agent concurrently estimates its own pose and constructs a consistent map of a previously unknown environment from sequential sensor observations, resolving the fundamental circular dependency between localisation (which requires a map) and mapping (which requires a known pose). SLAM algorithms process data from sensors such as LiDAR, stereo cameras, RGB-D cameras, and inertial measurement units using probabilistic and optimisation-based frameworks — including extended Kalman filters, particle filters, and pose-graph optimisation — to maintain joint estimates of agent state and environmental structure. The problem is formulated as Bayesian inference over a high-dimensional joint distribution of robot trajectory and landmark positions, typically approximated through factor graphs. SLAM is foundational to autonomous vehicles, mobile robotics, augmented reality, and any system that must navigate without prior maps or GPS.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:factor-graph", "label": "Factor Graph"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:autonomous-vehicles", "label": "Autonomous Vehicles"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:semantic-mapping", "label": "Semantic Mapping"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:loop-closure", "label": "Loop Closure"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:localisation", "label": "Localisation"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:occupancy-grid", "label": "Occupancy Grid"},
      {"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"},
      {"@id": "urn:ngm:class:place-recognition", "label": "Place Recognition"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:non-linear-optimisation", "label": "Non-Linear Optimisation"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:neural-radiance-field", "label": "Neural Radiance Field"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:dead-reckoning", "label": "Dead Reckoning"},
      {"@id": "urn:ngm:class:gps-navigation", "label": "GPS Navigation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:slam", "label": "SLAM"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Simultaneous Localisation and Mapping (SLAM) is a computational technique by which a mobile robot or autonomous agent concurrently estimates its own pose and constructs a consistent map of a previously unknown environment from sequential sensor observations. It solves the fundamental chicken-and-egg problem in robotics: accurate [[Localisation]] requires a map, while [[Mapping]] requires knowledge of where the agent is. SLAM algorithms leverage data from [[LiDAR]], [[Stereo Camera]], [[Inertial Measurement Unit]], and [[RGB-D Camera]] sensors, processed through [[Bayesian Inference]] frameworks, [[Kalman Filter]] variants, [[Particle Filter]] methods, or [[Factor Graph]]-based [[Non-Linear Optimisation]], to maintain joint probabilistic estimates of the robot trajectory and the environmental map.

- ### Overview
  - SLAM is one of the central unsolved challenges that was formally identified in robotics research in the late 1980s and has since been extended to encompass visual, semantic, and deep-learning-based paradigms.
  - The problem is formally stated as computing the joint posterior distribution P(x_{1:t}, m | z_{1:t}, u_{1:t}) over robot poses x, a map m, given sensor observations z and control inputs u — a high-dimensional inference problem intractable in the exact form.
  - Practical SLAM systems apply approximations: linear Gaussian assumptions for [[Kalman Filter]]-based methods, particle representations for [[Particle Filter]] approaches, or factor graph structures solved by iterative optimisation.
  - SLAM is foundational for any system operating in GPS-denied or uncharted environments, including underground mines, indoor buildings, outer space, the ocean floor, and disaster zones.
  - The field has matured from laboratory demonstrations to deployed systems in consumer electronics ([[Augmented Reality]] headsets, robot vacuum cleaners) and safety-critical platforms ([[Autonomous Vehicles]], surgical robots).
  - Contemporary SLAM increasingly integrates [[Deep Learning]] for feature extraction, [[Semantic Mapping]], and [[Loop Closure]] detection via learned embeddings, blurring the boundary between geometric and semantic understanding.

- ### Key Components
  - #### Sensor Modalities
    - [[LiDAR]] — provides precise 2D/3D range measurements; backbone of industrial SLAM (Cartographer, LIO-SAM, LOAM).
    - [[Stereo Camera]] — passive depth estimation using disparity between left and right images; lower cost than LiDAR.
    - [[RGB-D Camera]] — structured-light or time-of-flight depth alongside colour; widely used in indoor SLAM (ORB-SLAM3, ElasticFusion).
    - [[Inertial Measurement Unit]] — provides high-rate acceleration and angular velocity; tightly coupled with camera/LiDAR for robustness.
    - Wheel encoders and [[Odometry]] — dead-reckoning motion estimates used as motion model inputs.
  - #### Probabilistic Frameworks
    - [[Extended Kalman Filter]] (EKF-SLAM) — linearises non-linear motion/observation models; tractable only for sparse landmark maps.
    - [[Unscented Kalman Filter]] (UKF-SLAM) — sigma-point propagation for better non-linearity handling.
    - [[Particle Filter]] (FastSLAM) — represents the posterior with weighted particles; scales better to large feature sets via Rao-Blackwellisation.
    - [[Factor Graph]] / [[Pose Graph Optimisation]] — represents all poses and measurements as nodes and edges; solved with GTSAM, g2o, Ceres Solver; scales to city-scale environments.
  - #### Loop Closure
    - Loop closure is the act of recognising a previously visited location and applying a correction to remove accumulated drift — the key capability distinguishing SLAM from [[Dead Reckoning]].
    - Appearance-based methods use [[Bag of Words]] image descriptors (DBoW2, DBoW3) or learned embeddings (NetVLAD).
    - Geometry verification (RANSAC-based) follows candidate matches to reject false positives.
    - Without loop closure, errors grow unboundedly with distance; with it, global consistency is maintained.
  - #### Map Representations
    - [[Occupancy Grid]] — discretised 2D/3D grid with probabilistic cell occupancy; compact and widely used for path planning.
    - Landmark / feature map — sparse set of detected features (keypoints, planes, objects) with associated uncertainty.
    - [[Point Cloud]] — dense, unstructured 3D map produced directly by LiDAR sweeps.
    - Surfel / mesh map — continuous surface representations used in dense visual SLAM (KinectFusion, ElasticFusion).
    - [[Semantic Mapping]] — maps augmented with object class labels, enabling semantic navigation queries.
    - [[Neural Radiance Field]] (NeRF-SLAM) — implicit neural scene representations enabling photorealistic reconstruction during mapping.

- ### Algorithms and Systems
  - **LiDAR SLAM**: Cartographer (Google, 2D/3D, widely deployed), LOAM (Zhang & Singh), LIO-SAM (tightly-coupled LiDAR-IMU), LeGO-LOAM (lightweight for ground robots), KISS-ICP (fast ICP-based odometry).
  - **Visual SLAM**: ORB-SLAM3 (monocular/stereo/RGB-D/IMU, [[Factor Graph]]-based), VINS-Mono (monocular-inertial, [[Pose Graph Optimisation]]), DSO (direct sparse odometry), LSD-SLAM (large-scale direct).
  - **RGB-D SLAM**: KinectFusion (dense GPU tracking), ElasticFusion (surfel-based), BundleFusion (online reconstruction).
  - **Deep SLAM**: DROID-SLAM (differentiable recurrent), DeepFactor, iMAP, NICE-SLAM (neural implicit), SplaTAM ([[Gaussian Splatting]] representation).
  - **Backend optimisers**: GTSAM (Georgia Tech), g2o (general graph optimisation), Ceres Solver (Google), iSAM2 (incremental smoothing).
  - **Datasets & benchmarks**: TUM RGB-D, KITTI, EuRoC MAV, Newer College, MulRan, Hilti SLAM Challenge.

- ### Applications
  - **[[Autonomous Vehicles]]** — LiDAR and camera SLAM for real-time 3D mapping of urban environments; used alongside HD maps and GPS in autonomous driving stacks.
  - **Mobile robotics** — robot vacuum cleaners (Roomba, Roborock), warehouse AMRs (Amazon Robotics), legged robots (Boston Dynamics Spot), agricultural robots.
  - **[[Augmented Reality]]** — ARKit and ARCore on mobile devices use visual-inertial SLAM to anchor digital content to tracked physical surfaces in real time.
  - **Surgical and medical robots** — endoscopic SLAM for colonoscopy capsule navigation; tool tracking in minimally invasive surgery.
  - **Drone inspection** — aerial SLAM for infrastructure inspection in GPS-denied environments (tunnels, bridges, indoor facilities).
  - **Space exploration** — Mars rover localisation (Mars 2020 Perseverance), lunar surface navigation.
  - **Underwater robotics** — sonar-based SLAM for subsea pipeline inspection and ocean floor mapping.
  - **[[Digital Twin]] construction** — SLAM-based scanning to create accurate as-built models of buildings and industrial facilities.
  - **Search and rescue** — autonomous deployment into collapsed structures or disaster zones where prior maps do not exist.

- ### Challenges and Limitations
  - **Computational scalability** — maintaining the full joint posterior grows O(n²) with landmarks in filtering approaches; factor graph methods address this but require careful marginalisation.
  - **Dynamic environments** — standard SLAM assumes a static world; moving objects (people, vehicles) violate this and cause spurious measurements requiring outlier rejection or explicit tracking.
  - **Long-term autonomy** — maps become stale as environments change (furniture moved, construction); lifelong SLAM must update while retaining structural consistency.
  - **Perceptual aliasing** — visually similar but geometrically distinct places (corridors, open spaces) cause false loop closures.
  - **Sensor degradation** — LiDAR SLAM fails in featureless environments (open fields, tunnels with uniform walls); visual SLAM degrades in low light.
  - **Data association** — correctly matching current observations to prior landmarks across all timesteps remains an open problem, particularly in cluttered scenes.

- ### Relationships
  - uses:: [[Kalman Filter]]
  - uses:: [[Particle Filter]]
  - uses:: [[LiDAR]]
  - uses:: [[Factor Graph]]
  - uses:: [[Inertial Measurement Unit]]
  - uses:: [[Bayesian Inference]]
  - uses:: [[Point Cloud]]
  - enables:: [[Autonomous Navigation]]
  - enables:: [[Visual Odometry]]
  - enables:: [[Autonomous Vehicles]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Semantic Mapping]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Loop Closure]]
  - requires:: [[Pose Estimation]]
  - relatedTo:: [[Localisation]]
  - relatedTo:: [[Odometry]]
  - relatedTo:: [[Occupancy Grid]]
  - relatedTo:: [[Structure from Motion]]
  - relatedTo:: [[Place Recognition]]
  - dependsOn:: [[Non-Linear Optimisation]]
  - dependsOn:: [[Computer Vision]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Neural Radiance Field]]
  - contrastsWith:: [[Dead Reckoning]]
  - contrastsWith:: [[GPS Navigation]]

- ### Standards and Context
  - No single formal ISO or IEEE standard governs SLAM algorithms, though [[ISO 8373]] (robotics vocabulary) and [[IEC 63327]] (autonomous mobile robots) provide definitional context.
  - The [[Robot Operating System]] (ROS / ROS 2) provides the dominant middleware ecosystem for SLAM deployments; packages such as navigation2 (Nav2) and slam_toolbox are de facto standards in the open-source mobile robotics community.
  - SLAM algorithm evaluation is community-driven through benchmark competitions: the KITTI Vision Benchmark Suite (autonomous driving), TUM RGB-D Benchmark, EuRoC Micro Aerial Vehicle datasets, and the annual Hilti SLAM Challenge.
  - Academic venues: ICRA, IROS, CVPR, ECCV, ICCV, and RSS publish the majority of SLAM research; foundational work published in IJRR and IEEE TRO.
  - Commercial deployment contexts include [[SAE Level 4]] and [[SAE Level 5]] autonomous driving where SLAM-derived localisation must meet safety integrity requirements (ISO 26262 functional safety, SOTIF ISO 21448).

- ### Provenance
  - sources:: Thrun, Burgard & Fox "Probabilistic Robotics" (MIT Press); Cadena et al. "Past, Present, and Future of SLAM" IEEE TRO 2016; Placed et al. "A Survey on Active Simultaneous Localization and Mapping" IEEE TRO 2023
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
