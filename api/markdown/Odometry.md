schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Odometry
legacy_uri:: urn:visionclaw:concept:robotics:odometry
public:: true

# Odometry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592",
  "@type": "Page",
  "vc:slug": "odometry",
  "title": "Odometry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cumulative-error",
      "vc:label": "Cumulative Error"
    },
    {
      "@id": "urn:visionflow:linked:drift",
      "vc:label": "Drift"
    },
    {
      "@id": "urn:visionflow:linked:imu",
      "vc:label": "IMU"
    },
    {
      "@id": "urn:visionflow:linked:measurement-errors",
      "vc:label": "Measurement Errors"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robotics",
      "vc:label": "Mobile Robotics"
    },
    {
      "@id": "urn:visionflow:linked:motion-sensors",
      "vc:label": "Motion Sensors"
    },
    {
      "@id": "urn:visionflow:linked:rb-1015-kalman-filter",
      "vc:label": "RB-1015-kalman-filter"
    },
    {
      "@id": "urn:visionflow:linked:relative-positioning",
      "vc:label": "Relative Positioning"
    },
    {
      "@id": "urn:visionflow:linked:robot-pose",
      "vc:label": "Robot Pose"
    },
    {
      "@id": "urn:visionflow:linked:visual-sensors",
      "vc:label": "Visual Sensors"
    },
    {
      "@id": "urn:visionflow:linked:wheel-slip",
      "vc:label": "Wheel Slip"
    },
    {
      "@id": "urn:visionflow:owl:class:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:encoder",
      "vc:label": "Encoder"
    },
    {
      "@id": "urn:visionflow:owl:class:navigation",
      "vc:label": "Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    },
    {
      "@id": "urn:visionflow:owl:class:state-estimation",
      "vc:label": "State Estimation"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.94"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-9262d7b4fffd"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-24T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Odometry"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1008"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Odometry"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:robotics:odometry"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:odometry"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:odometry",
  "@type": "OntologyClass",
  "label": "Odometry",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:state-estimation",
      "vc:label": "State Estimation"
    }
  ],
  "vc:sourceDomain": "robotics",
  "vc:status": "complete",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "The estimation of a mobile robot's position and orientation (pose) over time by integrating motion measurements from wheel encoders, IMUs, or visual sensors. It provides relative position estimates based on incremental motion.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.94",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:motion-sensors",
      "vc:label": "Motion Sensors"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:owl:class:navigation",
      "vc:label": "Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:rb-1013-localization",
      "vc:label": "RB-1013-localization"
    }
  ],
  "vc:uses": [
    {
      "@id": "urn:visionflow:linked:imu",
      "vc:label": "IMU"
    },
    {
      "@id": "urn:visionflow:linked:visual-sensors",
      "vc:label": "Visual Sensors"
    },
    {
      "@id": "urn:visionflow:owl:class:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:encoder",
      "vc:label": "Encoder"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:odometry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cumulative Error]]",
      "resolved": "urn:visionflow:linked:cumulative-error",
      "kind": "StubLink"
    },
    {
      "raw": "[[Drift]]",
      "resolved": "urn:visionflow:linked:drift",
      "kind": "StubLink"
    },
    {
      "raw": "[[IMU]]",
      "resolved": "urn:visionflow:linked:imu",
      "kind": "StubLink"
    },
    {
      "raw": "[[Measurement Errors]]",
      "resolved": "urn:visionflow:linked:measurement-errors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robotics]]",
      "resolved": "urn:visionflow:linked:mobile-robotics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Motion Sensors]]",
      "resolved": "urn:visionflow:linked:motion-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1015-kalman-filter]]",
      "resolved": "urn:visionflow:linked:rb-1015-kalman-filter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relative Positioning]]",
      "resolved": "urn:visionflow:linked:relative-positioning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot Pose]]",
      "resolved": "urn:visionflow:linked:robot-pose",
      "kind": "StubLink"
    },
    {
      "raw": "[[Visual Sensors]]",
      "resolved": "urn:visionflow:linked:visual-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wheel Slip]]",
      "resolved": "urn:visionflow:linked:wheel-slip",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:owl:class:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Encoder]]",
      "resolved": "urn:visionflow:owl:class:encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Navigation]]",
      "resolved": "urn:visionflow:owl:class:navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RB-1013-localization]]",
      "resolved": "urn:visionflow:owl:class:rb-1013-localization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[State Estimation]]",
      "resolved": "urn:visionflow:owl:class:state-estimation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f5d40044dcbc11c9869c0b7cde93510877db91c199503310882bbbfd44ce5592@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The estimation of a mobile robot's position and orientation (pose) over time by integrating motion measurements from wheel encoders, IMUs, or visual sensors. It provides relative position estimates based on incremental motion.

- ### Semantic Classification
  - owl-class:: robotics:Odometry
  - owl-role:: Method
  - belongs-to-domain:: [[Robotics]], [[Mobile Robotics]], [[Navigation]]

- ### Relationships
  - is-subclass-of:: [[State Estimation]]
  - requires:: [[Motion Sensors]]
  - enables:: [[RB-1013-localization]], [[Navigation]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[State Estimation]]
  - requires:: [[Motion Sensors]]
  - estimates:: [[Robot Pose]]
  - accumulates:: [[Measurement Errors]]
  - uses:: [[Encoder]], [[IMU]], [[Visual Sensors]]
  - characterizedBy:: [[Drift]], [[Relative Positioning]]

  - #### Relationships
  - is-subclass-of:: [[State Estimation]]
  - uses:: [[Encoder]], [[IMU]], [[Camera]]
  - enables:: [[RB-1013-localization]], [[Navigation]]
  - combined-with:: [[RB-1015-kalman-filter]], [[SLAM]]
  - suffers-from:: [[Cumulative Error]], [[Wheel Slip]]
  - improved-by:: [[Sensor Fusion]]

  - **Types of Odometry**
  - Wheel Odometry (encoder-based)
  - Visual Odometry (camera-based)
  - Inertial Odometry (IMU-based)
  - Laser Odometry (LIDAR-based)
  - Multi-Modal Odometry (sensor fusion)

  - **Wheel Odometry**
  - Differential Drive Model
  - Ackermann Steering Model
  - Mecanum Wheel Model
  - Encoder Resolution
  - Wheel Radius Calibration

  - **Visual Odometry**
  - Feature Extraction and Tracking
  - Stereo Vision
  - Monocular Vision (with scale estimation)
  - Optical Flow
  - SLAM Integration

  - **Error Sources**
  - Wheel Slip (on smooth or uneven surfaces)
  - Wheel Diameter Variations
  - Unequal Wheel Diameters
  - Encoder Resolution Limitations
  - Mechanical Play
  - Floor Irregularities
  - Systematic Calibration Errors

  - **Error Characteristics**
  - Cumulative (unbounded growth over time)
  - Proportional to distance traveled
  - Rotational errors compound more quickly
  - Non-Gaussian in practice

  - **Odometry Models**
  - Kinematic Model (ideal motion)
  - Error Model (uncertainty propagation)
  - Probabilistic Model (covariance estimation)

  - **Calibration Methods**
  - UMBmark (University of Michigan Benchmark)
  - Square Path Method
  - Straight Line Method
  - Systematic Error Correction
  - Least Squares Parameter Estimation

  - **Applications**
  - Mobile robot navigation
  - Autonomous vehicles
  - Warehouse robots
  - Agricultural robots
  - Service robots
  - Planetary rovers

  - **Integration with Other Methods**
  - Kalman Filter Fusion
  - Particle Filter Localization
  - SLAM (Simultaneous Localization and Mapping)
  - GPS Correction
  - Landmark-Based Correction

  - **Advantages**
  - Continuous position estimates
  - Low computational cost
  - High update rate
  - Works in GPS-denied environments

  - **Limitations**
  - Unbounded error accumulation
  - No absolute positioning
  - Susceptible to wheel slip
  - Requires periodic correction

  - **Quality Metrics**
  - authority-score:: 0.94
  - completeness:: 0.91
  - accuracy:: 0.93

- ### Provenance
  - sources:: [[Mobile Robotics]], [[Navigation]]
  - migration-date:: 2026-04-26T00:00:00Z
