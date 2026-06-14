public:: true

# inertial measurement unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e8daa292ebe8ef4d8b77525cad80b735e0afd1fcdcee995d266088ff9becb4ce",
  "@type": "Page",
  "vc:slug": "inertial-measurement-unit",
  "title": "inertial measurement unit",
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
  "@id": "urn:ngm:class:inertial-measurement-unit",
  "@type": "Class",
  "label": "Inertial Measurement Unit",
  "definition": "An Inertial Measurement Unit (IMU) is an electronic device that integrates tri-axial accelerometers, tri-axial gyroscopes, and optionally tri-axial magnetometers to measure a rigid body's specific force, angular rate, and magnetic field, enabling computation of linear acceleration, orientation, and heading relative to an inertial reference frame. MEMS-based IMUs dominate consumer and robotics applications due to low cost, small form factor, and adequate noise performance, while tactical, navigation, and strategic grades using ring-laser or fibre-optic gyroscopes serve aerospace, defence, and surveying applications demanding higher accuracy and lower drift. The raw sensor data are fused through algorithms such as extended Kalman filters, complementary filters, or pre-integration on manifolds to produce robust pose and velocity estimates for autonomous systems. IMUs are foundational to visual-inertial odometry, SLAM pipelines, flight control, pedestrian dead reckoning, and augmented reality tracking.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-sensor",
      "label": "Robot Sensor"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:accelerometer", "label": "Accelerometer"},
      {"@id": "urn:ngm:class:gyroscope", "label": "Gyroscope"},
      {"@id": "urn:ngm:class:magnetometer", "label": "Magnetometer"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot-hardware", "label": "Robot Hardware"},
      {"@id": "urn:ngm:class:flight-control-system", "label": "Flight Control System"},
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:dead-reckoning", "label": "Dead Reckoning"},
      {"@id": "urn:ngm:class:attitude-estimation", "label": "Attitude Estimation"},
      {"@id": "urn:ngm:class:visual-inertial-odometry", "label": "Visual-Inertial Odometry"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:imu-calibration", "label": "IMU Calibration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:mems", "label": "MEMS"},
      {"@id": "urn:ngm:class:extended-kalman-filter", "label": "Extended Kalman Filter"},
      {"@id": "urn:ngm:class:complementary-filter", "label": "Complementary Filter"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"},
      {"@id": "urn:ngm:class:gnss", "label": "GNSS"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:allan-variance", "label": "Allan Variance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:optical-flow-sensor", "label": "Optical Flow Sensor"},
      {"@id": "urn:ngm:class:wheel-odometry", "label": "Wheel Odometry"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:augmented-reality-tracking", "label": "Augmented Reality Tracking"},
      {"@id": "urn:ngm:class:pedestrian-dead-reckoning", "label": "Pedestrian Dead Reckoning"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:imu", "label": "IMU"},
    {"@id": "urn:ngm:class:inertial-navigation-unit", "label": "Inertial Navigation Unit"}
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
  - An **Inertial Measurement Unit** (IMU) is an electronic device that integrates tri-axial [[Accelerometer]]s, tri-axial [[Gyroscope]]s, and optionally tri-axial [[Magnetometer]]s to measure a rigid body's specific force, angular rate, and orientation relative to an inertial reference frame. The raw measurements are processed by [[Sensor Fusion]] algorithms — most commonly variants of the [[Kalman Filter]] — to yield estimates of position, velocity, and attitude. IMUs span a wide performance hierarchy from low-cost [[MEMS]] consumer devices to precision [[Fibre Optic Gyroscope]] and [[Ring Laser Gyroscope]] units used in aerospace navigation, with grade determined by drift, noise density, and bias stability.

- ### Overview
  - An IMU does not itself compute absolute position; it integrates accelerations twice and angular rates once to propagate a dead-reckoned state from a known initial condition. This integration accumulates error (drift) over time, making IMU-only navigation insufficient for long-horizon tasks. Consequently, IMUs are almost always paired with complementary sensors — [[GNSS]], [[LiDAR]], cameras, or [[Wheel Odometry]] — whose lower-frequency, lower-drift measurements correct the high-frequency IMU propagation in a [[Sensor Fusion]] pipeline.
  - Why IMUs matter:
    - They deliver measurements at very high rates (100–4000 Hz), bridging gaps between slower exteroceptive sensors
    - They work in all environments regardless of lighting, GPS availability, or feature richness
    - They are self-contained (no external infrastructure needed)
    - MEMS integration has made them tiny, cheap, and power-efficient enough for integration into virtually every mobile computing platform

- ### Key Components
  - **Accelerometer** — measures [[Specific Force]] (true acceleration plus gravitational reaction) along each of three orthogonal axes. Capacitive MEMS accelerometers dominate consumer and robotics grades.
  - **Gyroscope** — measures [[Angular Velocity]] (angular rate) around three orthogonal axes. MEMS gyroscopes use the [[Coriolis Effect]] to convert rotation into a measurable signal; high-grade units use [[Ring Laser Gyroscope]] or [[Fibre Optic Gyroscope]] technology.
  - **Magnetometer** (optional 9-DoF IMU) — measures [[Magnetic Field]] vector, providing an absolute heading reference referenced to Earth's magnetic field. Susceptible to ferromagnetic disturbances; used with care in indoor environments.
  - **Temperature Sensor** — embedded in most modern IMUs to support [[Thermal Calibration]] of bias and scale-factor drift.
  - **Digital interface** — SPI or I²C for MEMS devices; discrete analogue or LVDS for high-grade units. Many modern IMUs include on-chip Digital Motion Processors (DMP) for lightweight on-chip fusion.

- ### IMU Grades and Performance Classes
  - **Consumer MEMS** — gyro bias instability ~1–10 °/hr, accelerometer noise ~100–400 μg/√Hz; cost <$5; found in smartphones, drones, VR/AR headsets, and wearables. Example devices: InvenSense ICM-42688-P, Bosch BMI088.
  - **Tactical grade** — gyro bias instability ~0.1–1 °/hr; suitable for guided munitions, UAV autopilots, and surveying instruments.
  - **Navigation grade** — gyro bias instability <0.01 °/hr; used in aircraft, submarines, and precision agriculture. Typically employs [[Ring Laser Gyroscope]] or [[Fibre Optic Gyroscope]].
  - **Strategic grade** — bias instability <0.001 °/hr; intercontinental ballistic missiles, nuclear submarines. Highest precision and cost.

- ### Sensor Fusion and State Estimation
  - Raw IMU data are processed by a fusion algorithm to produce a clean pose estimate:
    - [[Extended Kalman Filter]] (EKF) — the most widely used nonlinear estimator; linearises IMU dynamics around the current state estimate.
    - [[Complementary Filter]] — simple high-pass/low-pass split exploiting the complementary frequency content of gyro (good short-term) and accelerometer/magnetometer (good long-term) data.
    - [[Unscented Kalman Filter]] (UKF) — sigma-point propagation for improved accuracy in highly nonlinear dynamics.
    - [[Preintegration on Manifold]] — integrates IMU measurements between camera or LiDAR frames in a bias-correctable form, used in factor-graph SLAM back-ends (GTSAM, g2o).
  - The IMU provides the prediction step at high rate; exteroceptive measurements provide correction at lower rate.
  - Key noise processes characterised by [[Allan Variance]]:
    - **Angle random walk (ARW)** — white noise on angular rate
    - **Velocity random walk (VRW)** — white noise on acceleration
    - **Bias instability** — slow random-walk drift in bias
    - **Rate random walk** — low-frequency random walk in rate

- ### Calibration
  - **Intrinsic calibration** — estimates scale factors, cross-axis misalignment matrix, and constant bias for each axis. Typically performed using multi-position or turntable procedures.
  - **Thermal calibration** — models bias and scale factor as polynomial functions of temperature; stored in lookup tables on the device or host firmware.
  - **IMU-camera extrinsic calibration** — determines the rigid transform (rotation and translation) between IMU and camera frames. Standard tool: [[Kalibr]] (ETH Zürich). Requires exciting all six degrees of freedom during data collection.
  - **IMU-LiDAR extrinsic calibration** — similar to camera calibration but using planar features or target-free motion-based methods.
  - **Online calibration** — real-time in-situ estimation of bias and scale drifts within the EKF state, critical for long missions without recalibration stops.

- ### Applications and Use Cases
  - **Autonomous Mobile Robots** — provide the core inertial backbone for [[SLAM]] and [[Visual-Inertial Odometry]] pipelines (e.g., VINS-Mono, OKVIS, ORB-SLAM3-IMU).
  - **Unmanned Aerial Vehicles (UAVs / drones)** — attitude control, stabilisation, and navigation; flight controllers (PX4, ArduPilot) treat IMU as the primary sensor for inner-loop control.
  - **Augmented and Virtual Reality** — head-mounted displays (Meta Quest, Apple Vision Pro, HoloLens) rely on IMU for low-latency rotational tracking to minimise motion-to-photon latency; bridging to [[Spatial Computing]].
  - **Smartphones and Wearables** — step counting, gesture recognition, activity classification, screen orientation; also enables [[Pedestrian Dead Reckoning]] indoors.
  - **Autonomous Vehicles** — paired with [[GNSS]] and [[LiDAR]] in a tightly-coupled Kalman filter for resilient localisation during GNSS outages (tunnels, urban canyons).
  - **Aviation and Aerospace** — [[Inertial Navigation System]] (INS) using navigation-grade IMUs for backup and primary navigation of aircraft, missiles, and spacecraft.
  - **Marine and Subsea** — heading and attitude on vessels and ROVs where [[GNSS]] is unavailable.
  - **Human Motion Capture** — body-worn IMU suits (Xsens MVN) for animation, biomechanics, and clinical gait analysis.
  - **Structural Health Monitoring** — vibration sensing and modal analysis in bridges, buildings, and machinery.
  - **Geodesy and Surveying** — mobile mapping systems combining IMU with GNSS and LiDAR scanners for road and terrain mapping.

- ### Visual-Inertial Odometry (VIO)
  - VIO tightly couples camera measurements with IMU pre-integrations to recover metric-scale motion in a monocular system and provide robustness to feature tracking failures.
  - Key open-source frameworks: VINS-Mono, OKVIS, OpenVINS, MSCKF (Multi-State Constraint Kalman Filter).
  - IMU pre-integration on the SO(3) × R³ manifold allows efficient re-linearisation when bias estimates are updated without reprocessing raw measurements.
  - VIO is foundational to [[Augmented Reality Tracking]] on devices lacking dedicated depth sensors.

- ### Relationships
  - hasPart:: [[Accelerometer]]
  - hasPart:: [[Gyroscope]]
  - hasPart:: [[Magnetometer]]
  - partOf:: [[Robot Hardware]]
  - partOf:: [[Flight Control System]]
  - partOf:: [[Autonomous Vehicle]]
  - enables:: [[Sensor Fusion]]
  - enables:: [[Odometry]]
  - enables:: [[Dead Reckoning]]
  - enables:: [[Attitude Estimation]]
  - enables:: [[Visual-Inertial Odometry]]
  - requires:: [[Kalman Filter]]
  - requires:: [[IMU Calibration]]
  - uses:: [[MEMS]]
  - uses:: [[Extended Kalman Filter]]
  - uses:: [[Complementary Filter]]
  - relatedTo:: [[SLAM]]
  - relatedTo:: [[Pose Estimation]]
  - relatedTo:: [[GNSS]]
  - relatedTo:: [[LiDAR]]
  - relatedTo:: [[Allan Variance]]
  - contrastsWith:: [[Optical Flow Sensor]]
  - contrastsWith:: [[Wheel Odometry]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Augmented Reality Tracking]]
  - bridges-to:: [[Pedestrian Dead Reckoning]]

- ### Standards and Context
  - **IEEE Std 1559** — specification for inertial sensor performance testing and calibration.
  - **IEEE Std 292** — methods for specifying and testing gyroscopes.
  - **MIL-STD-810** — environmental testing standards applicable to tactical/navigation IMUs.
  - **RTCA DO-334** — minimum operational performance standards for airborne IMU systems.
  - Key manufacturers: Honeywell (navigation-grade), Northrop Grumman (strategic), Safran, Analog Devices (ADIS series), InvenSense (TDK), Bosch, STMicroelectronics.
  - Standardisation bodies: IEEE Aerospace and Electronic Systems Society (AESS), RTCA, NATO STANAG.
  - The emergence of MEMS has democratised inertial sensing; performance of consumer MEMS IMUs has improved ~10× per decade, blurring boundaries between consumer and tactical grades.
  - Integration with AI/ML: learned IMU calibration and zero-velocity update (ZUPT) detection using neural networks are active research areas as of 2025.

- ### Provenance
  - sources:: IEEE Std 1559; Woodman (2007) "An Introduction to Inertial Navigation" (Cambridge Technical Report); Forster et al. (2017) "On-Manifold Preintegration" (IEEE Trans. Robotics); Qin et al. (2018) VINS-Mono (IEEE Trans. Robotics)
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
