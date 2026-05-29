public:: true

# Tracking System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tracking-system",
  "@type": "Page",
  "vc:slug": "tracking-system",
  "title": "Tracking System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tracking-system",
  "@type": "Class",
  "label": "Tracking System",
  "definition": "A Tracking System is a hardware and software assembly that continuously determines the position, orientation, and motion of one or more objects or agents within a defined reference frame, using sensing technologies such as optical cameras, inertial measurement units, electromagnetic emitters, ultrasound, GPS, or LiDAR. Tracking systems are foundational components of augmented and virtual reality, robotics, surgical navigation, sports analytics, logistics, and autonomous vehicles, where precise real-time knowledge of spatial state is essential for interaction, control, or safety.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:spatial-tracking-system", "label": "Spatial Tracking System"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:surgical-navigation", "label": "Surgical Navigation"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Tracking System is the integrated sensing and computation infrastructure that maintains continuous real-time knowledge of the position and orientation of objects or agents within a spatial reference frame, combining [[Sensor Fusion]] of [[IMU]], [[Computer Vision]], [[Lidar]], and other modalities with algorithms such as [[SLAM]] to achieve robust six-degree-of-freedom state estimation.

- ### Relationships
  - Tracking systems rely on diverse sensing modalities combined through [[Sensor Fusion]]: [[IMU]] provides high-frequency rotational and translational acceleration data, [[Computer Vision]] extracts feature correspondences or optical flow from cameras, and [[Lidar]] delivers dense depth measurements. [[SLAM]] (Simultaneous Localisation and Mapping) algorithms fuse these inputs to build a map of the environment while simultaneously estimating the tracker's pose within it. [[Pose Estimation]] algorithms convert raw measurements into six-DoF position and orientation estimates. [[Spatial Mapping]] accumulates tracking results into persistent 3D representations of environments. Tracking systems are foundational enablers for [[Augmented Reality]] (which requires real-time device pose to anchor virtual content to the physical world), [[Surgical Navigation]] (which tracks instruments relative to patient anatomy), and [[Autonomous Navigation]] in mobile robots and vehicles.

- ### Content
  - Mechanical tracking systems using rigid linkages and potentiometers were first used in flight simulators in the 1960s, but the field transformed with the development of optical tracking in the 1980s. Polhemus and Ascension developed electromagnetic tracking for head-mounted displays and medical applications. NDI (Northern Digital Inc.) commercialised passive and active optical tracking using infrared cameras and reflective or LED-equipped markers, which became the standard for surgical navigation through the 1990s and 2000s. Inertial tracking, using MEMS gyroscopes and accelerometers, emerged as a complementary technology offering freedom of movement at lower cost.

  - Modern tracking systems for XR and robotics employ "inside-out" tracking, in which cameras mounted on the tracked device observe the environment and compute the device's pose relative to detected features or purpose-placed fiducial markers. This contrasts with "outside-in" tracking, where external sensors observe the tracked object. Inside-out approaches, used in standalone VR headsets (Meta Quest, PlayStation VR2) and AR glasses, rely on visual-inertial odometry (VIO) that tightly couples camera and IMU measurements to estimate pose at camera frame rates. SLAM algorithms extend VIO to simultaneously build a map of observed environment features, enabling persistent spatial anchoring.

  - The accuracy requirements of tracking systems vary dramatically by application: XR requires sub-centimetre positional accuracy at 60-90 Hz to prevent motion sickness; surgical navigation requires sub-2mm error with high reliability in the presence of electromagnetic interference from surgical equipment; sports analytics requires millimetre tracking of balls and sub-centimetre tracking of players at broadcast scale; autonomous vehicles require decimetric GNSS+IMU accuracy supplemented by LiDAR-based localisation against pre-built HD maps in centimetre resolution.

  - From 2023 through 2025, the convergence of neural network-based visual tracking, event cameras, and neural radiance fields (NeRF) is transforming tracking system design. Deep learning-based keypoint detection and descriptor matching significantly improves robustness in challenging lighting and textureless environments. Neural implicit scene representations enable photorealistic real-time re-localisation. Ultra-wideband (UWB) radio tracking is gaining adoption in indoor environments where GPS is unavailable, providing 10-30cm accuracy for asset tracking in warehouses, hospitals, and sports venues. The integration of tracking into commodity hardware — smartphones, smartwatches, earbuds — is expanding tracking application domains to consumer health, industrial safety, and location-based services at population scale.