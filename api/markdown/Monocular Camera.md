public:: true

# Monocular Camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c26380c8cef880a1505e8bda7a4b220cf3a3ee2f48c203247cf537b329e12b2",
  "@type": "Page",
  "vc:slug": "monocular-camera",
  "title": "Monocular Camera",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0160"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Monocular Camera"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:monocular-camera",
  "@type": "Class",
  "label": "Monocular Camera",
  "definition": "A Monocular Camera is a single-lens imaging sensor that captures 2D intensity or colour frames from a single viewpoint, serving as a primary perceptual modality in robotics, autonomous vehicles, and computer vision systems. Unlike stereo or depth cameras, it lacks intrinsic depth measurement capability, requiring computational techniques such as structure-from-motion, visual odometry, or learned depth estimation to recover 3D scene geometry.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:camera",
      "label": "Camera"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:camera-parameters", "label": "Camera Parameters"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:scene-understanding", "label": "Scene Understanding"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:stereo-camera", "label": "Stereo Camera"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"},
      {"@id": "urn:ngm:class:structure-from-motion", "label": "Structure-from-Motion"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:monocular-camera:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8c26380c8cef880a1505e8bda7a4b220cf3a3ee2f48c203247cf537b329e12b2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:owl:class:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  A Monocular Camera is a single-lens imaging sensor that captures 2D intensity or colour frames from a single viewpoint, serving as a primary perceptual modality in robotics, autonomous vehicles, and computer vision systems. Unlike stereo or depth cameras, it lacks intrinsic depth measurement capability, requiring computational techniques such as structure-from-motion, visual odometry, or learned depth estimation to recover 3D scene geometry.

- ### Semantic Classification
  - owl-class:: robotics:MonocularCamera
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Camera]]
  - requires:: [[Camera Calibration]], [[Camera Parameters]]
  - enables:: [[Visual Odometry]], [[Object Detection]], [[Scene Understanding]]
  - uses:: [[Feature Extraction]], [[Convolutional Neural Network]]
  - contrastsWith:: [[Stereo Camera]], [[Lidar]]
  - relatedTo:: [[Depth Estimation]], [[Structure-from-Motion]], [[Simultaneous Localisation and Mapping]], [[Sensor Fusion]], [[Autonomous Vehicle]]

- ### Content
  A monocular camera is the simplest and most widely deployed imaging sensor in robotics, consisting of a single lens focusing light onto a 2D image plane populated by a CCD or CMOS photodetector array. Its fundamental limitation is the loss of depth information during the projection from 3D world coordinates to 2D image coordinates: the projection is not injective, meaning infinitely many 3D points map to the same 2D pixel. This depth ambiguity distinguishes monocular cameras from stereo cameras, structured-light sensors, and LiDAR systems that provide direct range measurements.

  Recovering depth from monocular imagery relies on geometric or learned approaches. Geometric methods exploit image sequences: visual odometry tracks distinctive feature points across consecutive frames and uses triangulation to estimate 3D positions given known camera motion. Structure-from-motion generalises this to unordered image collections, reconstructing sparse 3D point clouds and camera poses simultaneously. Simultaneous Localisation and Mapping (SLAM) extends these techniques to real-time operation, enabling a robot to build a map and localise itself concurrently using only monocular video.

  Learned depth estimation trains convolutional neural networks on paired monocular-stereo or monocular-LiDAR datasets to predict per-pixel depth maps from single frames. While these methods can produce dense depth estimates, they are sensitive to domain shift and may fail on novel scene types. Sensor fusion addresses this by combining monocular camera outputs with complementary sensors such as inertial measurement units (IMUs), LiDAR scanners, or radar, providing redundancy and improving robustness in degraded visibility conditions.

  Practical considerations include lens selection (focal length, field of view, aperture), rolling versus global shutter characteristics, and intrinsic calibration of the camera model (principal point, focal length, distortion coefficients). Accurate calibration is prerequisite for all geometric 3D reconstruction algorithms. Monocular cameras are favoured for their low cost, small form factor, and rich colour information, making them ubiquitous in autonomous vehicles, drone navigation, augmented reality, and mobile robotics platforms.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
