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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Odometry"
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
  "@id": "urn:ngm:class:odometry",
  "@type": "Class",
  "label": "Odometry",
  "definition": "The estimation of a mobile robot's position and orientation (pose) over time by integrating motion measurements from wheel encoders, IMUs, or visual sensors. It provides relative position estimates based on incremental motion and is subject to cumulative drift without correction.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:state-estimation",
    "label": "State Estimation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:wheel-odometry",
        "label": "Wheel Odometry"
      },
      {
        "@id": "urn:ngm:class:visual-odometry",
        "label": "Visual Odometry"
      },
      {
        "@id": "urn:ngm:class:inertial-odometry",
        "label": "Inertial Odometry"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mobile-robotics",
        "label": "Mobile Robotics"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:motion-sensors",
        "label": "Motion Sensors"
      },
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:kinematic-model",
        "label": "Kinematic Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:rb-1013-localization",
        "label": "RB-1013-localization"
      },
      {
        "@id": "urn:ngm:class:robot-pose",
        "label": "Robot Pose"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sensor-calibration",
        "label": "Sensor Calibration"
      },
      {
        "@id": "urn:ngm:class:dead-reckoning",
        "label": "Dead Reckoning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:imu",
        "label": "IMU"
      },
      {
        "@id": "urn:ngm:class:visual-sensors",
        "label": "Visual Sensors"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gps-positioning",
        "label": "GPS Positioning"
      },
      {
        "@id": "urn:ngm:class:absolute-positioning",
        "label": "Absolute Positioning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cumulative-error",
        "label": "Cumulative Error"
      },
      {
        "@id": "urn:ngm:class:drift",
        "label": "Drift"
      },
      {
        "@id": "urn:ngm:class:wheel-slip",
        "label": "Wheel Slip"
      },
      {
        "@id": "urn:ngm:class:particle-filter",
        "label": "Particle Filter"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:dead-reckoning",
      "label": "Dead Reckoning"
    },
    {
      "@id": "urn:ngm:class:ego-motion-estimation",
      "label": "Ego-Motion Estimation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
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
