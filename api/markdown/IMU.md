public:: true

# imu
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d7c6d2a2b81e3cca189128dc349302595b37a633d56b15a1b0b6360cfc905ba8",
  "@type": "Page",
  "vc:slug": "imu",
  "title": "imu",
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
  "@id": "urn:ngm:class:imu",
  "@type": "Class",
  "label": "IMU",
  "definition": "An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that integrates tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a rigid body's specific force, angular rate, and magnetic heading relative to an inertial reference frame without dependence on external infrastructure. MEMS-fabricated IMUs fuse their outputs through Kalman or complementary filter algorithms to yield real-time pose and orientation estimates at high sample rates, feeding inertial navigation, SLAM pipelines, and 6-DoF tracking systems. IMUs span performance grades from low-cost consumer MEMS units (bias instability >1°/hr) to navigation-grade fibre-optic and ring-laser gyro systems used in aerospace and submarine applications. They are integral to XR headsets, autonomous vehicles, UAVs, legged robots, wearables, and surgical instruments wherever low-latency, infrastructure-independent motion awareness is required.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensor",
      "label": "Sensor"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:accelerometer",
        "label": "Accelerometer"
      },
      {
        "@id": "urn:ngm:class:gyroscope",
        "label": "Gyroscope"
      },
      {
        "@id": "urn:ngm:class:magnetometer",
        "label": "Magnetometer"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:inertial-navigation-system",
        "label": "Inertial Navigation System"
      },
      {
        "@id": "urn:ngm:class:xr-headset",
        "label": "XR Headset"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:mems",
        "label": "MEMS"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:analog-to-digital-converter",
        "label": "Analogue-to-Digital Converter"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      },
      {
        "@id": "urn:ngm:class:dead-reckoning",
        "label": "Dead Reckoning"
      },
      {
        "@id": "urn:ngm:class:6dof-tracking",
        "label": "6-DoF Tracking"
      },
      {
        "@id": "urn:ngm:class:attitude-estimation",
        "label": "Attitude Estimation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:newton-euler-dynamics",
        "label": "Newton-Euler Dynamics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:quaternion-math",
        "label": "Quaternion"
      },
      {
        "@id": "urn:ngm:class:euler-angles",
        "label": "Euler Angles"
      },
      {
        "@id": "urn:ngm:class:complementary-filter",
        "label": "Complementary Filter"
      },
      {
        "@id": "urn:ngm:class:rotation-matrix",
        "label": "Rotation Matrix"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:visual-inertial-odometry",
        "label": "Visual-Inertial Odometry"
      },
      {
        "@id": "urn:ngm:class:hand-tracking",
        "label": "Hand Tracking"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gps",
        "label": "Gps"
      },
      {
        "@id": "urn:ngm:class:optical-tracking",
        "label": "Optical Tracking"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:real-time-operating-system",
        "label": "Real-Time Operating System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Human Motion Capture"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      },
      {
        "@id": "urn:ngm:class:gnss",
        "label": "GNSS"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:inertial-measurement-unit",
      "label": "Inertial Measurement Unit"
    }
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An **Inertial Measurement Unit (IMU)** is a self-contained electronic sensor module that combines tri-axial [[Accelerometer]], [[Gyroscope]], and optionally [[Magnetometer]] elements to measure a rigid body's specific force, angular rate, and magnetic heading without reliance on external signals such as [[GPS]] or visual markers. By integrating these measurements over time, an IMU enables [[Dead Reckoning]] and feeds [[Sensor Fusion]] pipelines — most commonly extended [[Kalman Filter]] or [[Complementary Filter]] implementations — to yield continuous, low-latency [[Pose Estimation]] and orientation tracking. IMUs are fabricated using [[MEMS]] processes that reduce the sensor package to millimetre scale, making them ubiquitous in [[XR Headset]], [[Autonomous Vehicle]], [[UAV]], [[Legged Robot]], and surgical-instrument applications where high-frequency, infrastructure-independent motion awareness is required. The fundamental physics encoded by an IMU are [[Newton-Euler Dynamics]] applied to a [[Strapdown Navigation]] architecture, with orientation commonly represented using [[Quaternion]] algebra to avoid gimbal lock.

- ### Overview
  - IMUs occupy a foundational role in any system that must know its own motion without external anchors. Unlike [[GPS]] (which requires line-of-sight to satellites) or [[Optical Tracking]] (which depends on cameras and scene features), an IMU operates entirely from onboard physics — measuring the forces and rotations that act on the device from one moment to the next.
  - The core challenge is **drift**: integrating noisy sensor readings accumulates error over time, causing the estimated position or heading to wander from ground truth. IMU systems address drift through several complementary strategies:
    - Complementary sensing — fusing IMU output with lower-drift modalities (cameras, [[LiDAR]], [[GNSS]], barometers) via [[Visual-Inertial Odometry]] or tightly-coupled GNSS/INS
    - Advanced filter algorithms — [[Kalman Filter]] variants (EKF, UKF, ESKF), [[Complementary Filter]], Mahony and Madgwick filters
    - Temperature compensation and factory calibration to suppress bias instability
    - Factor-graph optimisation used in tightly-coupled [[SLAM]] (GTSAM, iSAM2) for global consistency
  - The maturity of IMU technology reflects decades of convergence: military-grade inertial navigation using ring-laser gyros and fibre-optic gyros reached maturity in the 1970s–80s, while consumer [[MEMS]] fabrication that began in the 1990s drove costs from thousands of dollars to sub-$5. Today, MEMS IMUs deliver 1–8 kHz sample rates and noise densities adequate for [[Extended Reality]] and robotics.
  - Modern IMUs often contain an onboard [[Digital Motion Processor]] (DMP) that runs [[Sensor Fusion]] algorithms on-chip, reducing latency and offloading the host processor — particularly important in power-constrained wearable and edge devices.

- ### Key Components
  - **Accelerometer** — measures specific force (gravity plus linear acceleration) along three orthogonal axes. MEMS variants use suspended proof masses whose capacitively-detected deflection is proportional to acceleration. Output is expressed in m/s² or g.
    - see [[Accelerometer]], [[MEMS]]
  - **Gyroscope** — measures angular velocity (rad/s) around three body-frame axes. MEMS gyros exploit the Coriolis effect on vibrating structures (tuning-fork, wine-glass, disc resonators). Bias instability (°/hr) and angle random walk (°/√hr) are the dominant error metrics.
    - see [[Gyroscope]], [[Angular Velocity]]
  - **Magnetometer** (optional, making a 9-axis IMU) — measures the local magnetic field vector to provide an absolute heading reference, correcting long-term gyroscope yaw drift. Susceptible to hard-iron and soft-iron magnetic disturbances from nearby electronics.
    - see [[Magnetometer]], [[Magnetic Field]]
  - **Signal Conditioning and ADC** — analogue sensor outputs pass through amplifiers and [[Analogue-to-Digital Converter]] stages (typically 16-bit resolution) before reaching a digital host interface (SPI, I²C, or UART).
  - **Digital Motion Processor (DMP)** — an embedded processor found in higher-end IMUs (e.g. InvenSense ICM-42688-P, Bosch BMI270) that executes on-chip [[Sensor Fusion]], step counting, or gesture detection, offloading the host MCU and reducing power consumption.
    - see [[Digital Motion Processor]]
  - **Calibration Store** — factory-written coefficients (scale factor, cross-axis sensitivity, bias, temperature model) stored in OTP ROM and applied at power-on to correct systematic errors.
  - **[[Rotation Matrix]] / [[Quaternion]] Engine** — the mathematical substrate for transforming accelerometer and gyroscope readings from the sensor body frame to the world frame, typically implemented using [[Quaternion]] arithmetic to avoid the singularities of [[Euler Angles]].

- ### IMU Grades and Performance
  - IMU performance is classified primarily by gyroscope bias instability (°/hr) and angle random walk (°/√hr), characterised using [[Allan Variance]] (AVAR) per IEEE Std 952:
    - **Consumer / MEMS** — bias instability >1°/hr; adequate for [[XR Headset]], smartphones, wearables, and consumer drones. Examples: Bosch BMI088, TDK ICM-42688-P, STMicro LSM6DSV.
    - **Industrial / Tactical** — bias instability 0.01–1°/hr; used in [[Autonomous Vehicle]] (GNSS/INS fusion), survey-grade mapping, and precision agriculture. Examples: VectorNav VN-200, Xsens MTi-600, STIM300.
    - **Navigation-grade** — bias instability <0.01°/hr; fibre-optic or ring-laser gyros for long-duration aerospace and submarine navigation. Highly expensive, not MEMS, and significantly larger.
  - Key figures of merit: **Allan Variance** (characterises noise processes over integration time), angle random walk (ARW), velocity random walk (VRW), bias instability (°/hr), scale factor error (ppm), and in-run bias repeatability.
  - **In-run calibration** — techniques such as in-field calibration using gravity and magnetic field references, or zero-velocity updates (ZUPTs) during pedestrian navigation, can partially compensate for bias drift in lower-grade units.

- ### Sensor Fusion Algorithms
  - Raw IMU data is never used directly for long-duration pose estimation — fusion algorithms are essential to bound drift:
    - **Extended Kalman Filter (EKF)** — linearises the nonlinear state-space model around the current estimate using first-order Taylor expansion; the industry standard for [[Visual-Inertial Odometry]] and GNSS/INS integration. See [[Kalman Filter]].
    - **Error-State Kalman Filter (ESKF)** — operates on perturbations (error states) around a nominal trajectory propagated from IMU; numerically superior for rotation and widely used in VIO systems (MSCKF, VINS-Mono, OpenVINS).
    - **Unscented Kalman Filter (UKF)** — propagates a set of deterministically-chosen sigma points through nonlinear functions; better accuracy than EKF for highly nonlinear systems at higher computational cost.
    - **Complementary Filter** / Mahony / Madgwick — simple frequency-domain complementary filters that trust the gyroscope at high frequencies and the accelerometer/magnetometer at low frequencies; widely used in embedded [[UAV]] flight controllers (ArduPilot, PX4) due to low CPU cost.
    - **Factor Graph Optimisation** — used in tightly-coupled [[SLAM]] backends (GTSAM, iSAM2, g2o); handles IMU pre-integration, loop closures, and re-localisation in a unified batch or incremental smoother.
    - **IMU Preintegration** — a technique that compactly summarises IMU measurements between camera/lidar frames as a single preintegrated factor, enabling efficient joint optimisation in [[Visual-Inertial Odometry]] and [[SLAM]].
  - see [[Kalman Filter]], [[SLAM]], [[Sensor Fusion]], [[Visual-Inertial Odometry]], [[Attitude Estimation]]

- ### Applications
  - #### Extended Reality (XR)
    - [[XR Headset]] devices (Meta Quest, Apple Vision Pro, Microsoft HoloLens) run IMU sampling at 1000 Hz, feeding a tightly-coupled [[Visual-Inertial Odometry]] (VIO) pipeline alongside camera-based [[SLAM]] for inside-out [[6-DoF Tracking]].
    - Low-latency IMU readout (photon-to-photon latency <20 ms) is critical to prevent [[Motion Sickness]] — the IMU's high-frequency pose update bridges inter-frame gaps in the camera pipeline.
    - XR controllers and wrist-worn trackers use IMUs for [[Hand Tracking]] and gesture recognition; see [[Spatial Interaction]] and [[Extended Reality]].
  - #### Robotics and Autonomous Vehicles
    - [[Legged Robot]] platforms (Boston Dynamics Spot, ANYmal) use the IMU as the primary proprioceptive sensor for balance control and terrain adaptation, fused with joint encoders and [[LiDAR]]-based [[SLAM]]. See [[Robot Proprioception]].
    - [[Autonomous Vehicle]] inertial navigation systems tightly couple IMU with wheel odometry and [[GNSS]] to bridge GPS outages in tunnels and urban canyons; the fused output feeds the localisation module.
    - Underwater autonomous vehicles (AUVs) rely almost entirely on IMU plus [[Dead Reckoning]] since [[GPS]] and RF signals do not penetrate water.
    - Industrial manipulators use IMU-based [[Attitude Estimation]] for end-effector orientation control when joint encoders alone are insufficient.
  - #### UAV and Drone Stabilisation
    - Flight controllers (PX4, ArduPilot, Betaflight) use 3-axis IMU running at 1–8 kHz for inner-loop attitude stabilisation and outer-loop [[Dead Reckoning]] in [[GPS]]-denied environments.
    - [[Flight Controller]] designs typically integrate three redundant IMUs with majority-vote or chi-squared fault detection to exclude failed sensors during flight.
  - #### Medical and Wearable Sensing
    - Surgical robots use high-grade IMUs to track instrument tip orientation and suppress tremor during minimally-invasive procedures.
    - Wearable [[Gait Analysis]] systems capture lower-limb kinematics for rehabilitation, prosthetics tuning, and sports biomechanics.
    - Fall detection algorithms in elderly care use IMU-derived jerk thresholds; continuous activity recognition exploits spectral features of accelerometer and gyroscope data.
    - [[Human Motion Capture]] for animation and film VFX employs dense IMU arrays (e.g. Xsens MVN suit) as an infrastructure-free alternative to optical marker systems.
  - #### Aerospace and Navigation
    - Strapdown [[Inertial Navigation System]] uses IMU as the primary input for computing position, velocity, and attitude of aircraft, missiles, and spacecraft in GPS-denied or GPS-jammed environments.
    - Launch vehicles use ring-laser gyro IMUs for ascent trajectory guidance; the [[Strapdown Navigation]] algorithm integrates specific force and angular rate in real time to propagate the navigation state.

- ### Calibration and Error Characterisation
  - **Deterministic errors** — bias offset, scale-factor error, cross-axis sensitivity, and temperature-induced drift are corrected using factory calibration coefficients stored in the IMU's OTP ROM or by the host.
  - **Stochastic errors** — characterised by the Allan Variance (AVAR) curve, which reveals noise processes (angle/velocity random walk, bias instability, rate ramp) as a function of averaging interval.
  - **Temperature compensation** — IMU bias and scale factor vary significantly with temperature; most industrial units include an on-chip thermometer and a polynomial compensation model.
  - **In-field calibration** — six-position tumble calibration (aligning each axis to gravity in turn) and magnetic calibration (ellipsoid fitting to magnetometer data) are performed at manufacture and optionally repeated in the field.
  - **Zero-velocity updates (ZUPTs)** — when a pedestrian or vehicle is stationary, the IMU output is used to estimate and correct accumulated bias, a key technique in personal navigation.

- ### Relationships
  - hasPart:: [[Accelerometer]]
  - hasPart:: [[Gyroscope]]
  - hasPart:: [[Magnetometer]]
  - hasPart:: [[Digital Motion Processor]]
  - partOf:: [[Inertial Navigation System]]
  - partOf:: [[XR Headset]]
  - partOf:: [[Flight Controller]]
  - requires:: [[MEMS]]
  - requires:: [[Kalman Filter]]
  - requires:: [[Analogue-to-Digital Converter]]
  - enables:: [[Sensor Fusion]]
  - enables:: [[Motion Tracking]]
  - enables:: [[Dead Reckoning]]
  - enables:: [[6-DoF Tracking]]
  - enables:: [[Attitude Estimation]]
  - implements:: [[Strapdown Navigation]]
  - implements:: [[Newton-Euler Dynamics]]
  - uses:: [[Quaternion]]
  - uses:: [[Euler Angles]]
  - uses:: [[Complementary Filter]]
  - uses:: [[Rotation Matrix]]
  - supports:: [[SLAM]]
  - supports:: [[Pose Estimation]]
  - supports:: [[Visual-Inertial Odometry]]
  - supports:: [[Hand Tracking]]
  - supports:: [[Gait Analysis]]
  - standardizedBy:: [[IEEE 1559]]
  - standardizedBy:: [[IEEE 952]]
  - contrastsWith:: [[GPS]]
  - contrastsWith:: [[Optical Tracking]]
  - dependsOn:: [[Real-Time Operating System]]
  - bridges-to:: [[Robot Proprioception]]
  - bridges-to:: [[Autonomous Vehicle]]
  - bridges-to:: [[Human Motion Capture]]
  - relatedTo:: [[LiDAR]]
  - relatedTo:: [[Motion Sickness]]
  - relatedTo:: [[Extended Reality]]
  - relatedTo:: [[GNSS]]

- ### Standards and Context
  - **IEEE 1559** — standard for performance characterisation of strapdown IMUs, defining test procedures for bias instability, scale-factor error, and random walk.
  - **IEEE Std 952** — defines the [[Allan Variance]] (AVAR) method for characterising IMU noise floor and bias instability from long static datasets; the canonical tool for comparing IMU grades.
  - **MIL-STD-1760 / DO-160** — environmental qualification standards relevant to aerospace IMU certification covering vibration, shock, temperature, and electromagnetic interference.
  - **ISO 26262** — functional safety standard applied to automotive-grade IMU integration in [[Autonomous Vehicle]] systems, requiring redundancy and diagnostic coverage.
  - **SEMI standards** — govern wafer-level MEMS fabrication processes used in consumer and industrial IMU production.
  - **ROS sensor_msgs/Imu** — de facto robotics interface message defining the data structure for IMU output (orientation quaternion, angular velocity, linear acceleration, covariance matrices); part of the Robot Operating System ecosystem feeding [[SLAM]] and [[Sensor Fusion]] pipelines.
  - Key standards bodies: IEEE Aerospace and Electronic Systems Society (AESS), RTCA (aviation), SAE International (automotive).

- ### Provenance
  - sources:: IEEE 1559, IEEE Std 952, ROS sensor_msgs, PX4/ArduPilot documentation, Meta Quest developer documentation, Xsens MTi technical reference
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
