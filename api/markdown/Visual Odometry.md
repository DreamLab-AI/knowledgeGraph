public:: true

# visual odometry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:02b7a9405d000f53524ef388fab0c7a4d010acc13519f30fed6a8de8fbebd708",
  "@type": "Page",
  "vc:slug": "visual-odometry",
  "title": "visual odometry",
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
  "@id": "urn:ngm:class:visual-odometry",
  "@type": "Class",
  "label": "Visual Odometry",
  "definition": "Visual odometry (VO) is a technique for incrementally estimating the pose (position and orientation) of a camera-equipped agent by detecting and tracking salient features across consecutive image frames and computing the relative camera motion between them. It provides ego-motion estimation without relying on GPS, wheel encoders, or external beacons, making it applicable in GPS-denied environments such as indoor spaces, underground tunnels, and planetary surfaces. Visual odometry is typically combined with inertial measurement data (visual-inertial odometry, VIO) or loop-closure detection to bound drift and form complete SLAM systems.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Visual odometry (VO) is a technique for incrementally estimating the pose (position and orientation) of a camera-equipped agent by detecting and tracking salient features across consecutive image frames and computing the relative camera motion between them. It provides ego-motion estimation without relying on GPS, wheel encoders, or external beacons, making it applicable in GPS-denied environments such as indoor spaces, underground tunnels, and planetary surfaces. Visual odometry is typically combined with inertial measurement data (visual-inertial odometry, VIO) or loop-closure detection to bound drift and form complete SLAM systems.

- ### Semantic Classification
  - owl-class:: visual-odometry:Visual Odometry
  - owl-role:: Concept

- ### Relationships
  - uses [[Computer Vision]]
  - uses [[Feature Extraction]]
  - relatedTo [[Simultaneous Localisation and Mapping]]
  - relatedTo [[Inertial Measurement Unit]]
  - enables [[Autonomous Navigation]]
  - enables [[Pose Estimation]]

- ### Content
  - Visual odometry pipelines operate by first detecting robust keypoints in each image frame — classical descriptors such as ORB, SIFT, and SURF are common choices, alongside learned descriptors from convolutional networks. Matched keypoints between successive frames are used to estimate the essential or fundamental matrix via RANSAC-based algorithms, from which the relative rotation and translation of the camera are recovered. Scale ambiguity is a fundamental limitation of monocular VO; stereo and depth camera configurations resolve this by providing metric depth from disparity or structured light.
  - Visual-inertial odometry (VIO) fuses camera-derived motion estimates with IMU measurements using a tightly coupled or loosely coupled Kalman filter or factor graph optimisation (as in GTSAM or g2o). IMU data provides high-frequency, low-latency motion estimates that bridge frames and constrain the drift that accumulates in pure VO; the camera corrects IMU bias over time. VIO systems such as VINS-Mono and Kimera operate on embedded processors and have enabled localisation on autonomous drones and AR headsets.
  - Loop closure — recognising previously visited locations and adding constraints to the pose graph — is necessary to prevent unbounded drift over long trajectories. Bag-of-words visual place recognition (e.g., DBoW2) and more recent deep embedding methods are used to detect revisited places and trigger graph optimisation. Visual odometry is a key subsystem in AR/VR headset tracking, autonomous vehicles, surgical robots, and planetary rovers.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
