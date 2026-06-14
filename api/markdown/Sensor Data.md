public:: true
alias:: SensorData

# sensor data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c167dada1a0093eb0972f2da8b47bfafdc65c15b1e6c79d547481a21a5902cd7",
  "@type": "Page",
  "vc:slug": "sensor-data",
  "title": "sensor data",
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
  "@id": "urn:ngm:class:sensor-data",
  "@type": "Class",
  "label": "Sensor Data",
  "definition": "Sensor data comprises the raw or pre-processed digital measurements produced by physical transducers—including cameras, LiDAR scanners, inertial measurement units (IMUs), ultrasonic rangers, and microphones—that encode observable properties of the environment such as geometry, colour, acceleration, and sound. In robotic, autonomous, and spatial computing systems, sensor data forms the primary input to perception pipelines responsible for state estimation, object detection, and scene understanding. Data quality characteristics—including frame rate, resolution, noise floor, and synchronisation latency—directly constrain the capabilities of downstream algorithms such as SLAM, sensor fusion, and learned perception models. Sensor data is collected, timestamped, and transmitted through data acquisition systems before being processed through calibration, fusion, and inference stages to produce actionable world representations.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:camera", "label": "Camera"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:depth-map", "label": "Depth Map"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-acquisition", "label": "Data Acquisition"},
      {"@id": "urn:ngm:class:sensor-calibration", "label": "Sensor Calibration"},
      {"@id": "urn:ngm:class:time-synchronisation", "label": "Time Synchronisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:ros", "label": "ROS"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:embedded-system", "label": "Embedded System"},
      {"@id": "urn:ngm:class:real-time-operating-system", "label": "Real-Time Operating System"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ros-message-types", "label": "ROS Message Types"},
      {"@id": "urn:ngm:class:ieee-1588", "label": "IEEE 1588 PTP"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:synthetic-data", "label": "Synthetic Data"},
      {"@id": "urn:ngm:class:annotated-dataset", "label": "Annotated Dataset"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:iot", "label": "Internet of Things"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:signal-processing", "label": "Signal Processing"},
      {"@id": "urn:ngm:class:data-compression", "label": "Data Compression"},
      {"@id": "urn:ngm:class:multimodal-perception", "label": "Multimodal Perception"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:transducer-output", "label": "Transducer Output"},
    {"@id": "urn:ngm:class:sensor-readings", "label": "Sensor Readings"}
  ],
  "quality": 0.74,
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Sensor data comprises the raw or pre-processed digital measurements produced by physical transducers—including cameras, [[LiDAR]] scanners, [[IMU|Inertial Measurement Units]], ultrasonic rangers, and microphones—that encode observable properties of the environment such as geometry, colour, acceleration, and sound. It forms the foundational input layer for [[Perception System|perception pipelines]] in robotic, autonomous, and [[Spatial Computing]] applications, where it drives processes such as [[SLAM|Simultaneous Localisation and Mapping]], [[Sensor Fusion]], [[Object Detection]], and [[State Estimation]]. The quality attributes of sensor data—including temporal resolution, spatial density, noise characteristics, and synchronisation accuracy—directly bound the performance of all downstream reasoning and control systems.

- ### Overview
  - Sensor data is generated continuously by physical measurement devices embedded in robots, vehicles, wearable systems, and infrastructure. Each physical phenomenon—light, distance, motion, temperature, pressure—is captured by a specialised transducer that converts it into a digital signal for downstream processing.
  - The concept spans the entire lifecycle from raw analogue measurement through analogue-to-digital conversion, timestamping, buffering, transmission, calibration, and format standardisation. In modern autonomous systems this lifecycle is managed by [[Data Acquisition]] hardware and [[Data Pipeline|processing pipelines]] that must operate in real time with strict latency and throughput guarantees.
  - Why sensor data matters:
    - It is the only grounding of software reasoning in physical reality — without accurate sensor data, no amount of algorithmic sophistication can produce correct environmental models.
    - The quality of sensor data sets a hard performance ceiling for [[Machine Learning]] models trained or deployed on it.
    - Multi-modal sensor fusion enables capabilities no single sensor modality can provide alone, making integration architecture a critical design concern.
    - [[Digital Twin]] systems depend on continuous, high-fidelity sensor data streams to maintain synchrony between the virtual model and the physical asset.

- ### Key Components
  - **Sensor Modalities**
    - [[Camera]] — provides dense 2D colour or greyscale imagery; high resolution but sensitive to lighting conditions and motion blur. Stereo camera pairs enable passive depth estimation.
    - [[LiDAR]] — emits laser pulses and measures time-of-flight to generate 3D [[Point Cloud|point clouds]]; range-accurate and lighting-independent but lower spatial density than cameras.
    - [[IMU]] — measures linear acceleration and angular velocity at high frequencies (100–1000 Hz); low latency but subject to integration drift over time.
    - Radar — measures range and radial velocity via Doppler effect; robust in rain, fog, and dust where cameras and LiDAR degrade.
    - Ultrasonic sensors — short-range proximity sensing via acoustic time-of-flight; low cost and computationally lightweight.
    - Microphones and acoustic arrays — capture audio and enable sound source localisation and acoustic event detection.
    - GPS/GNSS receivers — provide absolute geo-referenced position; degraded in urban canyons and denied environments.
    - Depth cameras (RGB-D) — active structured-light or time-of-flight devices that produce registered colour and [[Depth Map|depth images]] at camera frame rates.
  - **Data Quality Attributes**
    - Spatial resolution — the finest spatial detail resolvable; determined by sensor physics and aperture.
    - Temporal resolution / frame rate — determines how rapidly the environmental state can be tracked.
    - Noise floor — the minimum detectable signal above background noise; determines sensitivity.
    - Dynamic range — ratio of largest to smallest measurable quantity without saturation or quantisation error.
    - Synchronisation accuracy — how precisely data from multiple sensors is time-aligned; [[IEEE 1588 PTP|IEEE 1588 Precision Time Protocol]] (PTP) is the standard mechanism for sub-microsecond hardware synchronisation.
    - Latency — end-to-end delay from physical event to processed measurement availability.
  - **Pre-processing Stages**
    - [[Sensor Calibration]] — corrects intrinsic sensor distortions (e.g. lens distortion coefficients) and extrinsic geometric relationships between co-located sensors using calibration targets and optimisation procedures.
    - [[Time Synchronisation]] — aligns measurement timestamps across sensors with different clocks and update rates; hardware triggering or software interpolation is used depending on latency requirements.
    - Filtering and denoising — removes systematic noise artefacts (e.g. motion blur, LiDAR intensity return outliers) using temporal or spatial filters.
    - Format conversion — converts proprietary or binary sensor outputs to standardised interchange formats (e.g. ROS message types, MCAP, HDF5).
    - Compression — reduces bandwidth and storage requirements while preserving task-relevant information; critical for edge-to-cloud transmission.

- ### Mechanisms
  - **Data Acquisition**
    - [[Data Acquisition]] hardware (DAQ boards, sensor interface units) manages analogue-to-digital conversion, clocking, buffering, and DMA transfers to host memory. In safety-critical systems these operate under [[Real-Time Operating System|real-time operating systems]] to guarantee deterministic latency bounds.
  - **Sensor Fusion**
    - [[Sensor Fusion]] combines measurements from complementary modalities to produce estimates superior to any individual sensor. Classic approaches include:
      - Kalman filter and Extended Kalman Filter (EKF) for linear and nonlinear state estimation under Gaussian noise.
      - Unscented Kalman Filter (UKF) and Particle Filter for highly nonlinear systems.
      - Factor graph optimisation (as used in [[SLAM]] backends such as GTSAM and g2o) for batch or incremental smoothing.
    - LiDAR–camera fusion combines geometric precision with visual texture for robust [[Object Detection]] and classification.
    - IMU pre-integration between slower sensor frames provides continuous pose estimates and improves [[State Estimation]] accuracy.
  - **SLAM Pipelines**
    - [[SLAM]] systems consume sensor data streams—most commonly camera images, LiDAR point clouds, and IMU measurements—to simultaneously build a map of an unknown environment and localise within it. Examples include ORB-SLAM3 (visual-inertial), LIO-SAM (LiDAR-inertial), and RTAB-Map (RGB-D).
  - **Learned Perception**
    - [[Machine Learning]] models—particularly convolutional neural networks and transformer architectures—are trained on labelled sensor data to perform object detection, semantic segmentation, depth estimation, and optical flow. The training data distribution of sensor modality, noise characteristics, and environmental conditions critically determines generalisation performance.
  - **Edge Processing**
    - [[Edge Computing]] reduces transmission bandwidth and latency by processing sensor data close to the acquisition point. Onboard GPUs and NPUs (Neural Processing Units) run inference pipelines on raw sensor streams before transmitting only extracted features or detections to the cloud.

- ### Applications
  - **Autonomous Vehicles**
    - Camera, LiDAR, radar, and GPS data are fused in real time to support [[Autonomous Navigation|autonomous driving]] perception and planning stacks. Data logging at scale feeds simulation, validation, and model retraining workflows.
  - **Robotics and Manipulation**
    - Industrial robots use vision and force-torque sensor data for bin-picking, assembly verification, and human-robot collaboration. Mobile robots use SLAM-built maps for warehouse navigation and last-mile logistics.
  - **Augmented and Mixed Reality**
    - [[Augmented Reality]] headsets (e.g. HoloLens, Apple Vision Pro) rely on camera, IMU, and depth sensor data for inside-out tracking, plane detection, and occlusion rendering. Accurate, low-latency sensor data is essential for perceptual stability and user comfort.
  - **Digital Twins**
    - [[Digital Twin]] platforms ingest continuous sensor data streams from IoT devices and industrial machinery to maintain a synchronised virtual model of a physical asset. Predictive maintenance, process optimisation, and what-if simulation all depend on high-fidelity sensor data.
  - **Smart Infrastructure and IoT**
    - [[Internet of Things|IoT]] deployments instrument buildings, bridges, pipelines, and power grids with environmental and structural sensors; aggregated sensor data feeds anomaly detection, energy optimisation, and predictive failure models.
  - **Healthcare and Wearables**
    - Wearable IMUs, heart-rate sensors, and electromyography arrays generate biosignal sensor data used for gait analysis, activity recognition, rehabilitation monitoring, and fall detection.
  - **Spatial Computing and XR**
    - [[Spatial Computing]] platforms use multi-camera and depth sensor arrays for hand tracking, eye tracking, room-scale mapping, and persistent spatial anchors.

- ### Relationships
  - hasPart:: [[LiDAR]]
  - hasPart:: [[IMU]]
  - hasPart:: [[Camera]]
  - hasPart:: [[Point Cloud]]
  - hasPart:: [[Depth Map]]
  - enables:: [[Sensor Fusion]]
  - enables:: [[SLAM]]
  - enables:: [[Object Detection]]
  - enables:: [[State Estimation]]
  - enables:: [[Spatial Mapping]]
  - requires:: [[Data Acquisition]]
  - requires:: [[Sensor Calibration]]
  - requires:: [[Time Synchronisation]]
  - uses:: [[Perception System]]
  - uses:: [[ROS]]
  - uses:: [[Data Pipeline]]
  - dependsOn:: [[Embedded System]]
  - dependsOn:: [[Real-Time Operating System]]
  - supports:: [[Autonomous Navigation]]
  - supports:: [[Augmented Reality]]
  - supports:: [[Digital Twin]]
  - standardizedBy:: [[ROS Message Types]]
  - standardizedBy:: [[IEEE 1588 PTP]]
  - contrastsWith:: [[Synthetic Data]]
  - contrastsWith:: [[Annotated Dataset]]
  - bridgesTo:: [[Machine Learning]]
  - bridgesTo:: [[Edge Computing]]
  - bridgesTo:: [[Internet of Things]]
  - relatedTo:: [[Signal Processing]]
  - relatedTo:: [[Data Compression]]
  - relatedTo:: [[Multimodal Perception]]

- ### Standards & Context
  - **ROS Message Types** — the [[ROS]] ecosystem defines standardised message types for common sensor modalities: `sensor_msgs/Image`, `sensor_msgs/PointCloud2`, `sensor_msgs/Imu`, `sensor_msgs/NavSatFix`, `sensor_msgs/LaserScan`. These enable plug-and-play interoperability between sensor drivers and processing nodes.
  - **IEEE 1588 Precision Time Protocol** — the IEEE 1588 standard enables sub-microsecond clock synchronisation across networked devices, enabling hardware-level timestamping of multi-sensor data streams. Critical for high-speed sensor fusion in autonomous vehicles.
  - **MCAP** — an open-source container format for multi-channel time-series data optimised for robotics logging; supports arbitrary serialisation formats (ROS1, ROS2, Protobuf, JSON) with efficient indexed random access.
  - **HDF5** — the Hierarchical Data Format version 5 is widely used for storing large, heterogeneous scientific and sensor datasets with metadata; used in automotive (NuScenes, Waymo Open Dataset) and scientific instrumentation contexts.
  - **OMG DDS** — the Object Management Group Data Distribution Service provides a real-time publish–subscribe middleware standard (ISO/IEC 19505) widely adopted for high-performance sensor data distribution in autonomous systems; used as the transport layer in ROS 2.
  - **ISO 26262 and SOTIF** — functional safety standards governing the use of sensor data in automotive safety-critical systems; require systematic coverage of sensor failure modes, degraded-mode operation, and data quality monitoring.
  - **W3C SOSA/SSN Ontology** — the Sensor, Observation, Sample, and Actuator (SOSA) ontology and Semantic Sensor Network (SSN) ontology define semantic vocabulary for describing sensors, observations, and observed properties; enables interoperability across IoT and scientific data platforms.

- ### Provenance
  - sources:: ROS documentation; IEEE 1588-2019 standard; W3C SOSA/SSN ontology specification; autonomous driving dataset documentation (NuScenes, Waymo, KITTI)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
