public:: true

# Wheel Odometry

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:wheel-odometry",
  "@type": "Page",
  "title": "Wheel Odometry",
  "vc:slug": "wheel-odometry",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wheel-odometry",
  "@type": "Class",
  "label": "Wheel Odometry",
  "definition": "Wheel odometry is a method of estimating a mobile robot's change in position and orientation by counting wheel rotations measured with encoders and applying a kinematic motion model. As an instance of dead reckoning, it integrates incremental wheel displacement over time to track pose relative to a starting point. It is simple and low-cost but accumulates drift from wheel slip, uneven terrain and calibration error, so it is typically fused with other sensors.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:odometry",
      "label": "Odometry"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:visual-odometry",
        "label": "Visual Odometry"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dead-reckoning",
        "label": "Dead Reckoning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:localization",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:pose-estimation",
        "label": "Pose Estimation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:motion-model",
        "label": "Motion Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:odometry",
        "label": "Odometry"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
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
- Wheel odometry estimates a [[Mobile Robot]]'s pose change from [[Encoder]] readings of wheel rotation combined with a [[Kinematics]] motion model, a form of [[Dead Reckoning]].
- It feeds [[Localization]] and [[Navigation]] but accumulates drift over distance.
- ### Overview
- By measuring how far each wheel turns, the robot computes incremental translation and rotation, integrating these to track its position relative to a start point.
- The approach is cheap and self-contained, requiring no external infrastructure, but small per-step errors compound, especially under wheel slip or uneven terrain.
- In practice it is fused with inertial and exteroceptive sensors to bound drift, contrasting with vision-based [[Visual Odometry]].
- ### Key aspects
- Encoder-based measurement of wheel rotation.
- Kinematic model converting wheel motion to body pose change.
- Incremental integration producing relative pose estimates.
- Drift accumulation from slip, terrain and calibration error.
- Sensitivity to accurate wheel-radius and track-width calibration.
- ### Mechanisms
- Encoder ticks are converted to wheel displacement, combined through the drive kinematics into linear and angular velocity, and integrated to update the estimated pose.
- ### Applications
- Low-level motion tracking for [[Mobile Robot]] platforms.
- Prediction step in [[SLAM]] and [[Sensor Fusion]] estimators.
- Short-horizon [[Pose Estimation]] between absolute fixes.
- Differential-drive and wheeled-robot navigation.
- ### Relationships
- contrastsWith:: [[Visual Odometry]]
- hasPart:: [[Encoder]]
- uses:: [[Encoder]]
- uses:: [[Kinematics]]
- implements:: [[Dead Reckoning]]
- enables:: [[Localization]]
- enables:: [[Navigation]]
- enables:: [[Pose Estimation]]
- requires:: [[Calibration]]
- requires:: [[Motion Model]]
- supports:: [[SLAM]]
- supports:: [[Sensor Fusion]]
- dependsOn:: [[Mobile Robot]]
- relatedTo:: [[Odometry]]
- relatedTo:: [[Inertial Measurement Unit]]
- ### Provenance
- updated:: 2026-06-15
