public:: true

# Six Degrees Of Freedom
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:six-degrees-of-freedom",
  "@type": "Page",
  "title": "Six Degrees Of Freedom",
  "vc:slug": "six-degrees-of-freedom",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:six-degrees-of-freedom",
  "@type": "Class",
  "label": "Six Degrees Of Freedom",
  "definition": "Six degrees of freedom (6DoF) describes the full set of ways a rigid body can move in three-dimensional space: translation along three perpendicular axes and rotation about each of them. In spatial computing it characterises tracking systems that capture both an object's position and its orientation. Supporting 6DoF is essential for convincing virtual and augmented reality, robotics and motion-tracked interaction.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:tracking-system",
      "label": "Tracking System"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:tracking-system",
        "label": "Tracking System"
      },
      {
        "@id": "urn:ngm:class:spatial-tracking",
        "label": "Spatial Tracking"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:immersion",
        "label": "Immersion"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      },
      {
        "@id": "urn:ngm:class:locomotion",
        "label": "Locomotion"
      },
      {
        "@id": "urn:ngm:class:head-mounted-display",
        "label": "Head-Mounted Display"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      },
      {
        "@id": "urn:ngm:class:tracking-system",
        "label": "Tracking System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:spatial-tracking",
        "label": "Spatial Tracking"
      },
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Six Degrees Of Freedom]] is captured by a [[Tracking System]] using [[Pose Estimation]] and an [[Inertial Measurement Unit]] to enable [[Virtual Reality]] and [[Augmented Reality]].
- ### Overview
  - 6DoF covers three translational axes (forward/back, left/right, up/down) and three rotational axes (pitch, yaw, roll).
  - It contrasts with 3DoF, which tracks orientation only and cannot register positional movement.
  - Full 6DoF tracking lets users physically move through and around virtual content for stronger presence.
- ### Key aspects
  - Simultaneous position and orientation estimation in a fixed reference frame.
  - Sensor fusion of inertial, optical and depth data to reduce drift.
  - Low-latency, high-rate updates to avoid motion sickness in immersive use.
  - Calibration and re-localisation to maintain a stable world anchor.
- ### Applications
  - Room-scale virtual reality with natural walking and reaching.
  - Augmented reality anchoring of content to the physical world.
  - Robotic and drone pose tracking for navigation.
  - Motion-captured interaction and embodied avatars.
- ### Relationships
  - partOf:: [[Tracking System]]
  - partOf:: [[Spatial Tracking]]
  - requires:: [[Pose Estimation]]
  - requires:: [[Inertial Measurement Unit]]
  - requires:: [[Sensor Fusion]]
  - uses:: [[Inertial Measurement Unit]]
  - uses:: [[Sensor Fusion]]
  - uses:: [[SLAM]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Immersion]]
  - supports:: [[Motion Tracking]]
  - supports:: [[Locomotion]]
  - supports:: [[Head-Mounted Display]]
  - dependsOn:: [[Pose Estimation]]
  - dependsOn:: [[Tracking System]]
  - bridgesTo:: [[Spatial Computing]]
  - bridgesTo:: [[Robotics]]
  - relatedTo:: [[Spatial Tracking]]
  - relatedTo:: [[Motion Tracking]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
