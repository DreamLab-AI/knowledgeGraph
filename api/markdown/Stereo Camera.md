public:: true

# Stereo Camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6",
  "@type": "Page",
  "vc:slug": "stereo-camera",
  "title": "Stereo Camera",
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
      "vc:value": "RB-0161"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stereo Camera"
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
  "@id": "urn:ngm:class:stereo-camera",
  "@type": "Class",
  "label": "Stereo Camera",
  "definition": "A dual-lens imaging system that captures two horizontally offset images of a scene to compute disparity maps and recover metric 3D depth information. Stereo cameras are widely used in robotic navigation, obstacle avoidance, and spatial mapping because they provide passive depth sensing without emitting light.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:image-sensor", "label": "Image Sensor"},
      {"@id": "urn:ngm:class:lens", "label": "Lens"},
      {"@id": "urn:ngm:class:baseline", "label": "Baseline"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot-perception-system", "label": "Robot Perception System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:camera-calibration", "label": "Camera Calibration"},
      {"@id": "urn:ngm:class:stereo-rectification", "label": "Stereo Rectification"},
      {"@id": "urn:ngm:class:image-synchronisation", "label": "Image Synchronisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:spatial-mapping", "label": "Spatial Mapping"},
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:disparity-map", "label": "Disparity Map"},
      {"@id": "urn:ngm:class:epipolar-geometry", "label": "Epipolar Geometry"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:stereo-vision", "label": "Stereo Vision"},
      {"@id": "urn:ngm:class:triangulation", "label": "Triangulation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:camera-parameters", "label": "Camera Parameters"},
      {"@id": "urn:ngm:class:stereo-matching-algorithm", "label": "Stereo Matching Algorithm"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:lidar", "label": "LiDAR"},
      {"@id": "urn:ngm:class:time-of-flight-camera", "label": "Time-of-Flight Camera"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"},
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:monocular-camera", "label": "Monocular Camera"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:binocular-camera", "label": "Binocular Camera"},
    {"@id": "urn:ngm:class:stereo-vision-camera", "label": "Stereo Vision Camera"}
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:stereo-camera:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3ceaeba0f7a314e8291db8e3d8d8328bc2e1db8fb52a461c77652da3bcdf6af6"
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
  - Stereo camera uses two lenses to capture images for 3D depth estimation.

- ### Semantic Classification
  - owl-class:: robotics:StereoCamera
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Camera]]

- ### Content
  Stereo Camera — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
