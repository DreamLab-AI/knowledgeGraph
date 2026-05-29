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
  "definition": "An Inertial Measurement Unit (IMU) is an electronic device incorporating tri-axial accelerometers and gyroscopes — and optionally tri-axial magnetometers — that measures a rigid body's specific force, angular velocity, and magnetic field strength to compute estimates of linear acceleration, angular rate, and orientation relative to an inertial reference frame. IMUs are classified by grade (consumer MEMS, tactical, navigation, strategic) according to drift, noise, and bias stability specifications. In robotics and spatial computing, IMUs provide the high-frequency proprioceptive backbone for state estimation, sensor-fusion pipelines, and attitude control loops.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Robot Perception"
    },
    {
      "@id": "urn:ngm:class:robot-sensor",
      "label": "Robot Sensor"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot-hardware", "label": "Robot Hardware"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - An Inertial Measurement Unit (IMU) is an electronic device incorporating tri-axial accelerometers and gyroscopes — and optionally tri-axial magnetometers — that measures a rigid body's specific force, angular velocity, and magnetic field strength to compute estimates of linear acceleration, angular rate, and orientation relative to an inertial reference frame. IMUs are classified by grade (consumer MEMS, tactical, navigation, strategic) according to drift, noise, and bias stability specifications. In robotics and spatial computing, IMUs provide the high-frequency proprioceptive backbone for state estimation, sensor-fusion pipelines, and attitude control loops.

- ### Semantic Classification
  - owl-class:: inertial-measurement-unit:Inertial Measurement Unit
  - owl-role:: Concept

- ### Relationships
  - enables [[Sensor Fusion]]
  - enables [[Odometry]]
  - relatedTo [[SLAM]]
  - relatedTo [[Pose Estimation]]
  - partOf [[Robot Hardware]]

- ### Content
  - Modern IMUs are almost universally implemented as MEMS (micro-electromechanical systems) devices, in which microscale structures etched into silicon wafers deflect under acceleration or Coriolis forces to generate measurable capacitance changes. Consumer-grade MEMS IMUs (e.g., InvenSense ICM-42688, Bosch BMI088) offer noise densities in the microgravity and millidegree-per-second range at costs of a few dollars, enabling their ubiquitous deployment in smartphones, drones, VR headsets, and wearables. Higher-grade tactical and navigation IMUs use ring-laser gyroscopes or fibre-optic gyroscopes to achieve substantially lower drift for aerospace and defence applications.
  - In robotics state estimation, the IMU provides measurements at 400–4000 Hz that anchor the dead-reckoning portion of a SLAM or visual-inertial odometry (VIO) pipeline between slower camera frames (30–60 Hz) or LiDAR scans (10–20 Hz). Tight-coupling architectures (e.g., VINS-Mono, OKVIS, ORB-SLAM3 with IMU) fuse raw IMU pre-integrations directly into the factor graph optimisation, constraining position and orientation estimates between keyframes and enabling metric scale recovery in monocular systems.
  - Calibration is critical for IMU performance: intrinsic calibration estimates per-axis scale factors, cross-axis misalignment, and constant bias offsets; thermal calibration models bias and scale drift as functions of temperature. IMU-camera extrinsic calibration (the rigid transform between sensor frames) is typically performed offline using checkerboard patterns and tools such as Kalibr. Allan variance analysis of stationary IMU data characterises noise processes and is used to set the process noise parameters of Kalman filter-based estimators.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
